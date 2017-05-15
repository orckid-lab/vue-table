module.exports = {
	hasResult(){
		return this.list.hasResult;
	},

	labels(){
		return this.list.labels
	},

	columns(){
		return this.list.columns;
	},

	rows(){
		return this.list.rows;
	},

	hasPages(){
		return this.list.hasPagination;
	},

	hasMorePages(){
		return this.list.current_page !== this.list.last_page;
	},

	onFirstPage(){
		return this.list.current_page === 1;
	},

	previousUrl(){
		return this.list.prev_page_url;
	},

	nextUrl(){
		return this.list.next_page_url;
	},

	pagination(){
		return this.list.pagination;
	},

	showing(){
		return this.list.showing;
	},

	total(){
		return this.list.total;
	},

	title(){
		return this.list.title;
	},

	supportsUpload(){
		return this.list.supports.upload;
	},

	supportsDownload(){
		return this.list.supports.download;
	},

	supportsDestroy(){
		return this.list.supports.destroy;
	}
};