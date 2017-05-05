<template>
	<div>
		<h2 v-html="title"></h2><button @click.prevent="reload">Reload</button>

		<table class="table" v-if="hasResults">
			<thead>
			<tr>
				<th v-for="column in labels"><abbr :title="column">{{ column }}</abbr></th>
			</tr>
			</thead>
			<tfoot>
			<tr>
				<th v-for="column in labels"><abbr :title="column">{{ column }}</abbr></th>
			</tr>
			</tfoot>
			<tbody>
			<tr v-for="row in rows">
				<td v-for="column in row">{{ column }}</td>
			</tr>
			</tbody>
		</table>

		<p v-else>No results found.</p>

		<ul class="pagination" v-if="hasPages">
			<li class="page-item disabled" v-if="onFirstPage"><span class="page-link">&laquo;</span></li>

			<li class="page-item" v-else>
				<a class="page-link" :href="previousUrl" rel="prev" @click.prevent="loadPage(previousUrl)">&laquo;</a>
			</li>

			<li v-for="element in pagination" class="page-item disabled" v-if="typeof element == 'string'">
				<span class="page-link">{{ element }}</span>
			</li>

			<li v-else class="page-item" v-for="(url, page) in element" :class="{ active: isCurrentPage(page) }">
				<span class="page-link" v-if="isCurrentPage(page)">{{ page }}</span>
				<a v-else class="page-link" :href="url" @click.prevent="loadPage(url)">{{ page }}</a>
			</li>

			<li class="page-item" v-if="hasMorePages">
				<a class="page-link" :href="nextUrl" rel="next" @click.prevent="loadPage(nextUrl)">&raquo;</a>
			</li>

			<li class="page-item disabled" v-else><span class="page-link">&raquo;</span></li>
		</ul>

		<!--<div>
			<button type="button" @click="download">Export</button>

			<ul>
				<li v-for="download in downloads">
					<a v-if="download.completed" :href="download.path" :download="download.id">Download</a>

					<span>
						<progress max="100" :value="download.progress"></progress>{{ download.progress }}
					</span>

					<button type="button" @click="deleteDownload(download.id)" v-if="download.completed">Remove</button>
				</li>
			</ul>
		</div>-->

		<div>
			<form @submit.prevent="upload">
				<input type="file" name="import"/>

				<button type="submit">Import</button>
			</form>

			<ul>
				<li v-for="upload in uploads">
					<span>
						<progress max="100" :value="upload.progress"></progress>{{ upload.progress }}
					</span>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	/*class UrlQuery {
		constructor() {
			this.url = window.location.href;
		}

		static initiate() {
			return new this;
		}

		hasAttributes() {
			return this.url.includes('?');
		}

		hasAttribute(key) {
			return this.url.indexOf(`${key}=`) !== -1;
		}

		add(key, value) {
			if (this.hasAttribute(key)) {
				return this.update(key, value);
			}

			let newAttribute = `${key}=${value}`;

			if (this.hasAttributes()) {
				this.url += `&${newAttribute}`;

				return this;
			}

			this.url += `?${newAttribute}`;

			return this;
		}

		update(key, value) {
			let pattern = `${key}=(.[^&]*)&?`;

			console.log(pattern);

			this.url = this.url.replace(new RegExp(pattern), function (string, match, offset, s) {
				console.log(string, match, offset, s);
				return string.replace(new RegExp(`${key}=${match}`), `${key}=${value}`);
			});

			return this;
		}

		remove(key, value) {

			return this;
		}

		updateUrl() {
			history.pushState(null, null, this.url);

			return this;
		}
	}*/

	import {TableDownload, TableUpload} from './module/Process';

	class TableProcess{
		constructor(){
			this.attributes = {
				downloads: [],
				uploads: [],
			}
		}

		get downloads(){
			return this.attributes.downloads;
		}

		get uploads(){
			return this.attributes.uploads
		}
	}

	export default {
		props: require('./props'),

		data(){
			return {
				list: this.vueTable,
				downloads: [],
				uploads: [],
			}
		},

		computed: require('./computed'),

		mounted(){
			let self = this;

			if(this.url){
				axios(this.url).then(function(response){
					Object.assign(self.list, response.data);
				})
			}
		},

		methods: {
			isCurrentPage(page){
				return Number(page) === this.list.current_page;
			},

			reload(){
				this.loadPage(this.list.ajax.url);
			},

			loadPage(url){
				let self = this;

				$.post('/api/vue-table/page', Object.assign({}, self.list.ajax, {url: url}), function (data) {
					self.list = Object.assign(self.list, data);

					//UrlQuery.initiate().add(self.list.attribute, data.current_page).updateUrl();
				}, 'json');
			},

			download(){
				let self = this;

				$.post('/api/vue-table/download', Object.assign({}, self.list.ajax), function (data) {
					self.list = Object.assign(self.list, data);

					let export_id = data.export_id;

					self.downloads.push(TableDownload.create(export_id, data.download));

					window.Echo.channel('download-progress-' + export_id)
						.listen('.OrckidLab.VueTable.Events.VueTableDownloading', function(event){
							console.log(event);
							self.findDownload(export_id).first.status(event.progress);
						});
				}, 'json');
			},

			findDownload(id){
				return this.findProcess(id, 'downloads');
			},

			findUpload(id){
				return this.findProcess(id, 'uploads');
			},

			findProcess(id, process_type){
				let index = null;

				let first = this[process_type].filter(function(download, loopIndex){
					if(download.id === id) {
						index = loopIndex;
						return true;
					}
				})[0];

				return {
					index,
					first
				}
			},

			deleteDownload(id){
				return this.deleteProcess(id, 'downloads')
			},

			deleteUpload(id){
				return this.deleteProcess(id, 'uploads')
			},

			deleteProcess(id, process_type){
				this[process_type].splice(this.findProcess(id, process_type).index, 1);
			},

			upload(event){
				let self = this;

				let $form = event.target;

				let formData = new FormData($form);

				formData.append('target', self.list.ajax.target);

				axios.post('/api/vue-table/upload', formData).then(function(response){
					let data = response.data;

					let import_id = data.import_id;

					self.uploads.push(TableUpload.create(import_id));

					window.Echo.channel('upload-progress-' + import_id)
						.listen('.OrckidLab.VueTable.Events.Uploading', function(event){
							self.findUpload(import_id).first.status(event.progress);

							if(self.findUpload(import_id).first.completed){
								self.reload();
							}
						});
				});
			}
		}
	}
</script>