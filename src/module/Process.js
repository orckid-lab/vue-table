class Process{
	constructor(){
		if (new.target === Process) {
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
	}
}

export {
	TableDownload,
	TableUpload
}