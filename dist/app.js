/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_VueTable_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_VueTable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__component_VueTable_vue__);


Vue.component('vue-table', __WEBPACK_IMPORTED_MODULE_0__component_VueTable_vue___default.a);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var Component = __webpack_require__(3)(
  /* script */
  __webpack_require__(4),
  /* template */
  __webpack_require__(8),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/home/vagrant/Code/vue-table/src/component/VueTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] VueTable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dac11f8a", Component.options)
  } else {
    hotAPI.reload("data-v-dac11f8a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
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

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__module_Process__ = __webpack_require__(5);
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
	props: __webpack_require__(6),

	data: function data() {
		return {
			list: this.vueTable,
			downloads: [],
			uploads: [],
			actionIcons: {
				show: 'folder-open-o',
				edit: 'pencil',
				destroy: 'delete',
				restore: 'reload'
			},
			actionLabels: {
				show: 'View',
				edit: 'Edit',
				destroy: 'Delete',
				restore: 'Restore'
			}
		};
	},


	computed: __webpack_require__(7),

	mounted: function mounted() {
		var self = this;

		if (this.url) {
			axios(this.url).then(function (response) {
				Object.assign(self.list, response.data);
			});
		}

		if (this.target) {
			axios.post(this.pagingUrl, { target: this.target }).then(function (response) {
				Object.assign(self.list, response.data);
			});
		}
	},


	methods: {
		isCurrentPage: function isCurrentPage(page) {
			return Number(page) === this.list.current_page;
		},
		reload: function reload() {
			this.loadPage(this.list.ajax.url);
		},
		loadPage: function loadPage(url) {
			var self = this;

			axios.post(self.pagingUrl, Object.assign({}, self.list.ajax, { url: url })).then(function (response) {
				Object.assign(self.list, response.data);
			});
		},
		download: function download() {
			var self = this;

			$.post('/api/vue-table/download', Object.assign({}, self.list.ajax), function (data) {
				self.list = Object.assign(self.list, data);

				var export_id = data.export_id;

				self.downloads.push(__WEBPACK_IMPORTED_MODULE_0__module_Process__["a" /* TableDownload */].create(export_id, data.download));

				window.Echo.channel('download-progress-' + export_id).listen('.OrckidLab.VueTable.Events.VueTableDownloading', function (event) {
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

			var url = self.uploadUrl;

			var uploadCallback = function uploadCallback(response) {
				var data = response.data;

				var file_name = data.file_name;

				if (!self.findUpload(file_name).first) {
					self.uploads.push(__WEBPACK_IMPORTED_MODULE_0__module_Process__["b" /* TableUpload */].create(file_name));
				}

				self.findUpload(file_name).first.status(data.progress).uploaded(data.rows.uploaded).failed(data.rows.failed);

				if (data.is_last) {
					self.reload();
					return false;
				}

				axios.post(url, response.data).then(uploadCallback);
			};

			axios.post(url, formData).then(uploadCallback).catch(function (error) {
				if (error.response) {
					// The request was made and the server responded with a status code
					// that falls out of the range of 2xx
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
					alert(error.response.data.header);
				} else if (error.request) {
					// The request was made but no response was received
					// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
					// http.ClientRequest in node.js
					console.log(error.request);
				} else {
					// Something happened in setting up the request that triggered an Error
					console.log('Error', error.message);
				}
				console.log(error.config);
			});
		},
		destroy: function destroy() {
			axios.post(this.destroyUrl, this.list.ajax).then(function () {
				this.reload();
			}.bind(this));
		},
		mapActionIcon: function mapActionIcon(name) {
			return ['fa', 'fa-' + this.actionIcons[name]];
		},
		mapActionLabel: function mapActionLabel(name) {
			return this.actionLabels[name];
		},
		rowAction: function rowAction(action) {
			this.$emit(action.type, action);
		}
	}
});

/***/ }),
/* 5 */
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

		if (this === Process) {
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

		_this2.rows = {
			uploaded: [],
			failed: []
		};
		return _this2;
	}

	_createClass(TableUpload, [{
		key: "uploaded",
		value: function uploaded(row) {
			this.rows.uploaded = this.rows.uploaded.concat(row);

			return this;
		}
	}, {
		key: "failed",
		value: function failed(row) {
			this.rows.failed = this.rows.failed.concat(row);

			return this;
		}
	}, {
		key: "totalUploaded",
		get: function get() {
			return this.rows.uploaded.length;
		}
	}, {
		key: "totalFailed",
		get: function get() {
			return this.rows.failed.length;
		}
	}, {
		key: "uploads",
		get: function get() {
			return this.rows.uploaded;
		}
	}, {
		key: "errors",
		get: function get() {
			return this.rows.failed;
		}
	}]);

	return TableUpload;
}(Process);



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
	vueTable: {
		type: Object,
		default: function _default() {
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
				data: [],
				supports: {
					download: false,
					upload: false,
					destroy: false
				},
				actions: {
					show: false,
					edit: false,
					delete: false,
					restore: false
				}
			};
		}
	},
	url: {
		type: String
	},
	target: {
		type: String
	},
	pagingUrl: {
		type: String,
		default: '/api/vue-table/page'
	},
	downloadUrl: {
		type: String,
		default: '/api/vue-table/download'
	},
	uploadUrl: {
		type: String,
		default: '/api/vue-table/upload'
	},
	destroyUrl: {
		type: String,
		default: '/api/vue-table/destroy'
	}
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

var computed = {
	hasResult: function hasResult() {
		return this.list.hasResult;
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
	},
	supportsUpload: function supportsUpload() {
		return this.list.supports.upload;
	},
	supportsDownload: function supportsDownload() {
		return this.list.supports.download;
	},
	supportsDestroy: function supportsDestroy() {
		return this.list.supports.destroy;
	},
	showEnabled: function showEnabled() {
		return this.list.actions.show;
	},
	editEnabled: function editEnabled() {
		return this.list.actions.edit;
	},
	deleteEnabled: function deleteEnabled() {
		return this.list.actions.delete;
	},
	restoreEnabled: function restoreEnabled() {
		return this.list.actions.restore;
	}
};

module.exports = computed;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('h3', {
    domProps: {
      "innerHTML": _vm._s(_vm.title)
    }
  }), _vm._v(" "), (_vm.supportsDestroy) ? _c('button', {
    attrs: {
      "type": "button"
    },
    on: {
      "click": function($event) {
        $event.preventDefault();
        _vm.destroy($event)
      }
    }
  }, [_vm._v("Delete all")]) : _vm._e(), _vm._v(" "), (_vm.hasResult) ? _c('table', {
    staticClass: "table"
  }, [_c('thead', [_c('tr', _vm._l((_vm.labels), function(column) {
    return _c('th', [_c('abbr', {
      attrs: {
        "title": column
      }
    }, [_vm._v(_vm._s(column))])])
  }))]), _vm._v(" "), _c('tbody', _vm._l((_vm.rows), function(row) {
    return _c('tr', [_vm._l((row), function(value, $index) {
      return [(typeof(value) === 'object' && 'actions' in value) ? _c('td', [_vm._l((value.actions), function(action) {
        return [(action.anchor) ? _c('a', {
          staticClass: "row-action",
          class: action.type,
          attrs: {
            "href": action.url,
            "target": action.target ? action.target : false
          }
        }, [_vm._t(action.type, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(action.label) + "\n\t\t\t\t\t\t\t")], {
          action: action,
          row: value
        })], 2) : _vm._e(), _vm._v(" "), (action.button) ? _c('button', {
          staticClass: "row-action",
          class: action.type,
          attrs: {
            "type": "button"
          },
          on: {
            "click": function($event) {
              _vm.rowAction(action)
            }
          }
        }, [_vm._t(action.type, [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(action.label) + "\n\t\t\t\t\t\t\t")], {
          action: action,
          row: value
        })], 2) : _vm._e(), _vm._v(" "), (!action.anchor && !action.button) ? _vm._t(action.type, [_vm._v("\n\t\t\t\t\t\t\t" + _vm._s(action.label) + "\n\t\t\t\t\t\t")], {
          action: action,
          row: value
        }) : _vm._e()]
      })], 2) : _c('td', {
        domProps: {
          "innerHTML": _vm._s(value)
        }
      })]
    })], 2)
  }))]) : _c('p', [_vm._v("No results found.")]), _vm._v(" "), (_vm.hasPages) ? _c('ul', {
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
  }, [_vm._v("»")])])], 2) : _vm._e(), _vm._v(" "), (_vm.supportsUpload) ? _c('div', [_c('form', {
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
    }), _vm._v(_vm._s(upload.progress) + "\n\t\t\t\t")]), _vm._v(" "), _c('span', [_vm._v("Total uploaded: " + _vm._s(upload.totalUploaded))]), _vm._v(" "), _c('span', [_vm._v("Total failed records: " + _vm._s(upload.totalFailed))]), _vm._v(" "), _c('div', [_c('ul', _vm._l((upload.errors), function(error) {
      return _c('li', [_vm._v("\n\t\t\t\t\t\t\tThe row " + _vm._s(error.index) + " failed to upload.\n\t\t\t\t\t\t\t"), _vm._l((error.errors), function(log) {
        return _c('p', [_vm._v("\n\t\t\t\t\t\t\t\t" + _vm._s(log) + "\n\t\t\t\t\t\t\t")])
      })], 2)
    }))])])
  }))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-dac11f8a", module.exports)
  }
}

/***/ })
/******/ ]);