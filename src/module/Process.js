class Process{
	constructor(){
		if (this === Process) {
			throw new TypeError("Cannot construct Abstract instances directly");
		}
	}

	get completed(){
		return this.progress === 100;
	}

	static create(...args){
		return new this(...args);
	}

	status(progress){
		this.progress = progress;

		return this;
	}
}

class TableDownload extends Process{
	constructor(id, path){
		super();

		this.id = id;

		this.path = path;

		this.progress = 0;
	}
}

class TableUpload extends Process{
	constructor(id){
		super();

		this.id = id;

		this.progress = 0;

		this.rows = {
			uploaded: [],
			failed: [],
		}
	}

	get totalUploaded(){
		return this.rows.uploaded.length;
	}

	get totalFailed(){
		return this.rows.failed.length;
	}

	get uploads(){
		return this.rows.uploaded;
	}

	get errors(){
		return this.rows.failed;
	}

	uploaded(row){
		this.rows.uploaded = this.rows.uploaded.concat(row);

		return this;
	}

	failed(row){
		this.rows.failed = this.rows.failed.concat(row);

		return this;
	}
}

export {
	TableDownload,
	TableUpload
}