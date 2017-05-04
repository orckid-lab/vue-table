module.exports = {
	hasResults(){
		return this.list.hasResults;
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
	}
};