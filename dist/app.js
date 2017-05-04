/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueTable_vue__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueTable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VueTable_vue__);


Vue.component('vue-table', __WEBPACK_IMPORTED_MODULE_0__VueTable_vue___default.a);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_Process__ = __webpack_require__(3);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

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



var TableProcess = function () {
	function TableProcess() {
		_classCallCheck(this, TableProcess);

		this.attributes = {
			downloads: [],
			uploads: []
		};
	}

	_createClass(TableProcess, [{
		key: 'downloads',
		get: function get() {
			return this.attributes.downloads;
		}
	}, {
		key: 'uploads',
		get: function get() {
			return this.attributes.uploads;
		}
	}]);

	return TableProcess;
}();

/* harmony default export */ __webpack_exports__["default"] = ({
	props: __webpack_require__(4),

	data: function data() {
		return {
			list: this.vueTable,
			downloads: [],
			uploads: []
		};
	},


	computed: __webpack_require__(2),

	mounted: function mounted() {},


	methods: {
		isCurrentPage: function isCurrentPage(page) {
			return Number(page) === this.list.current_page;
		},
		reload: function reload() {
			this.loadPage(this.list.ajax.url);
		},
		loadPage: function loadPage(url) {
			var self = this;

			$.post('/api/vue-table/page', Object.assign({}, self.list.ajax, { url: url }), function (data) {
				self.list = Object.assign(self.list, data);

				//UrlQuery.initiate().add(self.list.attribute, data.current_page).updateUrl();
			}, 'json');
		},
		download: function download() {
			var self = this;

			$.post('/api/vue-table/download', Object.assign({}, self.list.ajax), function (data) {
				self.list = Object.assign(self.list, data);

				var export_id = data.export_id;

				self.downloads.push(__WEBPACK_IMPORTED_MODULE_0__module_Process__["a" /* TableDownload */].create(export_id, data.download));

				window.Echo.channel('download-progress-' + export_id).listen('\\OrckidLab\\VueTable\\Events\\VueTableDownloading', function (event) {
					console.log(event);
					self.findDownload(export_id).first.status(event.progress);
				});
			}, 'json');
		},
		findDownload: function findDownload(id) {
			return this.findProcess(id, 'downloads');
		},
		findUpload: function findUpload(id) {
			return this.findProcess(id, 'uploads');
		},
		findProcess: function findProcess(id, process_type) {
			var index = null;

			var first = this[process_type].filter(function (download, loopIndex) {
				if (download.id === id) {
					index = loopIndex;
					return true;
				}
			})[0];

			return {
				index: index,
				first: first
			};
		},
		deleteDownload: function deleteDownload(id) {
			return this.deleteProcess(id, 'downloads');
		},
		deleteUpload: function deleteUpload(id) {
			return this.deleteProcess(id, 'uploads');
		},
		deleteProcess: function deleteProcess(id, process_type) {
			this[process_type].splice(this.findProcess(id, process_type).index, 1);
		},
		upload: function upload(event) {
			var self = this;

			var $form = event.target;

			var formData = new FormData($form);

			formData.append('target', self.list.ajax.target);

			axios.post('/api/vue-table/upload', formData).then(function (response) {
				var data = response.data;
				console.log(data);

				self.list = Object.assign(self.list, data);

				var import_id = data.import_id;

				self.uploads.push(__WEBPACK_IMPORTED_MODULE_0__module_Process__["b" /* TableUpload */].create(import_id));

				window.Echo.channel('upload-progress-' + import_id).listen('\\OrckidLab\\VueTable\\Events\\VueTableUploading', function (event) {
					console.log(event);
					self.findUpload(import_id).first.status(event.progress);

					if (self.findUpload(import_id).first.completed) {
						self.reload();
					}
				});
			});
		}
	}
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = {
	hasResults: function hasResults() {
		return this.list.hasResults;
	},
	labels: function labels() {
		return this.list.labels;
	},
	columns: function columns() {
		return this.list.columns;
	},
	rows: function rows() {
		return this.list.rows;
	},
	hasPages: function hasPages() {
		return this.list.hasPagination;
	},
	hasMorePages: function hasMorePages() {
		return this.list.current_page !== this.list.last_page;
	},
	onFirstPage: function onFirstPage() {
		return this.list.current_page === 1;
	},
	previousUrl: function previousUrl() {
		return this.list.prev_page_url;
	},
	nextUrl: function nextUrl() {
		return this.list.next_page_url;
	},
	pagination: function pagination() {
		return this.list.pagination;
	},
	showing: function showing() {
		return this.list.showing;
	},
	total: function total() {
		return this.list.total;
	},
	title: function title() {
		return this.list.title;
	}
};

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDownload; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TableUpload; });
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Process = function () {
	function Process() {
		_classCallCheck(this, Process);

		if (new.target === Process) {
			throw new TypeError("Cannot construct Abstract instances directly");
		}
	}

	_createClass(Process, [{
		key: "status",
		value: function status(progress) {
			this.progress = progress;

			return this;
		}
	}, {
		key: "completed",
		get: function get() {
			return this.progress === 100;
		}
	}], [{
		key: "create",
		value: function create() {
			for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
				args[_key] = arguments[_key];
			}

			return new (Function.prototype.bind.apply(this, [null].concat(args)))();
		}
	}]);

	return Process;
}();

var TableDownload = function (_Process) {
	_inherits(TableDownload, _Process);

	function TableDownload(id, path) {
		_classCallCheck(this, TableDownload);

		var _this = _possibleConstructorReturn(this, (TableDownload.__proto__ || Object.getPrototypeOf(TableDownload)).call(this));

		_this.id = id;

		_this.path = path;

		_this.progress = 0;
		return _this;
	}

	return TableDownload;
}(Process);

var TableUpload = function (_Process2) {
	_inherits(TableUpload, _Process2);

	function TableUpload(id) {
		_classCallCheck(this, TableUpload);

		var _this2 = _possibleConstructorReturn(this, (TableUpload.__proto__ || Object.getPrototypeOf(TableUpload)).call(this));

		_this2.id = id;

		_this2.progress = 0;
		return _this2;
	}

	return TableUpload;
}(Process);



/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = {
	vueTable: {
		required: true
	}
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(1),
  /* template */
  __webpack_require__(7),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "C:\\Projects\\vue-table\\src\\VueTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VueTable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9c1de0ae", Component.options)
  } else {
    hotAPI.reload("data-v-9c1de0ae", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h2', {
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }), _c('button', {
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.reload($event)
      }
    }
  }, [_vm._v("Reload")]), _vm._v(" "), (_vm.hasResults) ? _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', _vm._l((_vm.labels), function(column) {
    return _c('th', [_c('abbr', {
      attrs: {
        "title": column
      }
    }, [_vm._v(_vm._s(column))])])
  }))]), _vm._v(" "), _c('tfoot', [_c('tr', _vm._l((_vm.labels), function(column) {
    return _c('th', [_c('abbr', {
      attrs: {
        "title": column
      }
    }, [_vm._v(_vm._s(column))])])
  }))]), _vm._v(" "), _c('tbody', _vm._l((_vm.rows), function(row) {
    return _c('tr', _vm._l((row), function(column) {
      return _c('td', [_vm._v(_vm._s(column))])
    }))
  }))], 1) : _c('p', [_vm._v("No results found.")]), _vm._v(" "), (_vm.hasPages) ? _c('ul', {
    staticClass: "pagination"
  }, [(_vm.onFirstPage) ? _c('li', {
    staticClass: "page-item disabled"
  }, [_c('span', {
    staticClass: "page-link"
  }, [_vm._v("«")])]) : _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": _vm.previousUrl,
      "rel": "prev"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.loadPage(_vm.previousUrl)
      }
    }
  }, [_vm._v("«")])]), _vm._v(" "), _vm._l((_vm.pagination), function(element) {
    return (typeof element == 'string') ? _c('li', {
      staticClass: "page-item disabled"
    }, [_c('span', {
      staticClass: "page-link"
    }, [_vm._v(_vm._s(element))])]) : _vm._l((element), function(url, page) {
      return _c('li', {
        staticClass: "page-item",
        class: {
          active: _vm.isCurrentPage(page)
        }
      }, [(_vm.isCurrentPage(page)) ? _c('span', {
        staticClass: "page-link"
      }, [_vm._v(_vm._s(page))]) : _c('a', {
        staticClass: "page-link",
        attrs: {
          "href": url
        },
        on: {
          "click": function($event) {
            $event.preventDefault();
            _vm.loadPage(url)
          }
        }
      }, [_vm._v(_vm._s(page))])])
    })
  }), _vm._v(" "), (_vm.hasMorePages) ? _c('li', {
    staticClass: "page-item"
  }, [_c('a', {
    staticClass: "page-link",
    attrs: {
      "href": _vm.nextUrl,
      "rel": "next"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.loadPage(_vm.nextUrl)
      }
    }
  }, [_vm._v("»")])]) : _c('li', {
    staticClass: "page-item disabled"
  }, [_c('span', {
    staticClass: "page-link"
  }, [_vm._v("»")])])], 2) : _vm._e(), _vm._v(" "), _c('div', [_c('form', {
    on: {
      "submit": function($event) {
        $event.preventDefault();
        _vm.upload($event)
      }
    }
  }, [_c('input', {
    attrs: {
      "type": "file",
      "name": "import"
    }
  }), _vm._v(" "), _c('button', {
    attrs: {
      "type": "submit"
    }
  }, [_vm._v("Import")])]), _vm._v(" "), _c('ul', _vm._l((_vm.uploads), function(upload) {
    return _c('li', [_c('span', [_c('progress', {
      attrs: {
        "max": "100",
        "value": upload.progress
      }
    }), _vm._v(_vm._s(upload.progress) + "\n\t\t\t\t")])])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-9c1de0ae", module.exports)
  }
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0);


/***/ })
/******/ ]);