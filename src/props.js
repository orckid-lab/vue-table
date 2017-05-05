module.exports = {
	vueTable: {
		type: Object,
		default(){
			return {
				hasResult: false,
				total: 0,
				labels: [],
				current_page: 0,
				from: 0,
				hasPagination: false,
				showing: 0,
				title: '',
			}
		}
	},
	url: {
		type: String,
	}
};