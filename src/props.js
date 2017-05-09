module.exports = {
	vueTable: {
		type: Object,
		default(){
			return {
				hasResult: false,
				hasPagination: false,
				columns: [],
				labels: [],
				rows: [],
				pagination: [],
				showing: 0,
				title: "",
				ajax: {
					target: "",
					url: ""
				},
				total: 0,
				per_page: 0,
				current_page: 0,
				last_page: 0,
				next_page_url: "",
				prev_page_url: "",
				from: 0,
				to: 0,
				data: []
			}
		}
	},
	url: {
		type: String,
	},
	pagingUrl: {
		type: String,
		default: '/api/vue-table/page',
	},
	importUrl: {
		type: String,
		default: '/api/vue-table/upload',
	},
	destroyUrl: {
		type: String,
		default: '/api/vue-table/destroy',
	}
};