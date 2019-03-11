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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./resources/gutenberg/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/gutenberg/blocks.js":
/*!***************************************!*\
  !*** ./resources/gutenberg/blocks.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_hero_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/hero/index.js */ "./resources/gutenberg/blocks/hero/index.js");
/**
 * Gutenberg Blocks
 *
 * All blocks related JavaScript files should be imported here.
 * You can create a new block folder in this dir and include code
 * for that block here as well.
 *
 * All blocks should be included here since this is the file that
 * Webpack is compiling as the input file.
 */

/**
 * Unregister WP
 */
//wp.blocks.unregisterBlockType( 'cores' );


/***/ }),

/***/ "./resources/gutenberg/blocks/hero/component/edit.js":
/*!***********************************************************!*\
  !*** ./resources/gutenberg/blocks/hero/component/edit.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inspector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspector.js */ "./resources/gutenberg/blocks/hero/component/inspector.js");
/* harmony import */ var _components_danzerpress_section_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/danzerpress-section.js */ "./resources/gutenberg/components/danzerpress-section.js");
/* harmony import */ var _components_danzerpress_content_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/danzerpress-content.js */ "./resources/gutenberg/components/danzerpress-content.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Component = wp.element.Component;

var Edit =
/*#__PURE__*/
function (_Component) {
  _inherits(Edit, _Component);

  function Edit() {
    _classCallCheck(this, Edit);

    return _possibleConstructorReturn(this, _getPrototypeOf(Edit).apply(this, arguments));
  }

  _createClass(Edit, [{
    key: "toRGB",
    value: function toRGB(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isSelected = _this$props.isSelected,
          className = _this$props.className,
          setAttributes = _this$props.setAttributes;
      var _this$props$attribute = this.props.attributes,
          section_title = _this$props$attribute.section_title,
          section_description = _this$props$attribute.section_description,
          hero_layout = _this$props$attribute.hero_layout,
          background_type = _this$props$attribute.background_type,
          media = _this$props$attribute.media,
          image_side = _this$props$attribute.image_side,
          section_image = _this$props$attribute.section_image,
          section = _this$props$attribute.section,
          background_color = _this$props$attribute.background_color,
          background_gradient_a = _this$props$attribute.background_gradient_a,
          font_color = _this$props$attribute.font_color,
          font_style = _this$props$attribute.font_style,
          h_font_size = _this$props$attribute.h_font_size,
          d_font_size = _this$props$attribute.d_font_size,
          section_padding = _this$props$attribute.section_padding;
      return [wp.element.createElement(_inspector_js__WEBPACK_IMPORTED_MODULE_0__["default"], this.props), wp.element.createElement(_components_danzerpress_section_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
        className: "admin-hero-section",
        props: this.props,
        style: _defineProperty({
          'background': background_color,
          padding: section_padding
        }, "background", 'transparent')
      }, wp.element.createElement("div", {
        className: "danzerpress-col-1 danzerpress-align-center danzerpress-hero-normal"
      }, wp.element.createElement("div", {
        className: "danzerpress-section-content {{layout.text_align}}"
      }, wp.element.createElement(_components_danzerpress_content_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
        props: this.props,
        attributes: this.props.attributes
      }))))];
    }
  }]);

  return Edit;
}(Component);

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./resources/gutenberg/blocks/hero/component/inspector.js":
/*!****************************************************************!*\
  !*** ./resources/gutenberg/blocks/hero/component/inspector.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
 * WordPress dependencies
 */
var Component = wp.element.Component;
var __ = wp.i18n.__;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    SelectControl = _wp$components.SelectControl,
    PanelBody = _wp$components.PanelBody,
    Button = _wp$components.Button,
    IconButton = _wp$components.IconButton,
    Toolbar = _wp$components.Toolbar;

var _ref = wp.editor.InspectorControls ? wp.editor : wp.blocks,
    InspectorControls = _ref.InspectorControls,
    RichText = _ref.RichText,
    MediaUpload = _ref.MediaUpload,
    BlockControls = _ref.BlockControls;

var PanelColorSettings = wp.editor.PanelColorSettings;
var hero_layouts = [{
  value: 'full-width',
  label: __('Full Width')
}, {
  value: 'side-image',
  label: __('Side Image')
}, {
  value: 'code-image',
  label: __('Code Side')
}, {
  value: 'half-and-half',
  label: __('Half and Half')
}];
var background_types = [{
  value: 'color',
  label: 'Color'
}, {
  value: 'image',
  label: 'Image'
}, {
  value: 'default',
  label: 'default'
}];
var image_sides = [{
  value: 'left',
  label: 'Left'
}, {
  value: 'right',
  label: 'Right'
}];
/**
 * Inspector controls
 */

var Inspector =
/*#__PURE__*/
function (_Component) {
  _inherits(Inspector, _Component);

  function Inspector(props) {
    _classCallCheck(this, Inspector);

    return _possibleConstructorReturn(this, _getPrototypeOf(Inspector).apply(this, arguments));
  }

  _createClass(Inspector, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          isSelected = _this$props.isSelected,
          className = _this$props.className,
          setAttributes = _this$props.setAttributes;
      var _this$props$attribute = this.props.attributes,
          section_title = _this$props$attribute.section_title,
          section_description = _this$props$attribute.section_description,
          hero_layout = _this$props$attribute.hero_layout,
          background_type = _this$props$attribute.background_type,
          media = _this$props$attribute.media,
          image_side = _this$props$attribute.image_side,
          section_image = _this$props$attribute.section_image,
          section = _this$props$attribute.section,
          background_color = _this$props$attribute.background_color,
          background_gradient_a = _this$props$attribute.background_gradient_a,
          font_color = _this$props$attribute.font_color,
          font_style = _this$props$attribute.font_style,
          h_font_size = _this$props$attribute.h_font_size,
          d_font_size = _this$props$attribute.d_font_size,
          section_padding = _this$props$attribute.section_padding; //console.log(background_type)

      if (background_type !== 'image') {
        setAttributes({
          media: '',
          section_image: ''
        });
      }

      if (section_image) {
        var sectionUrl = function sectionUrl(open) {
          return wp.element.createElement("div", null, wp.element.createElement("img", {
            className: "section-url",
            src: section_image,
            onClick: open
          }), wp.element.createElement("a", {
            href: "",
            onClick: function onClick(e) {
              e.preventDefault();
              setAttributes({
                media: '',
                section_image: ''
              });
            }
          }, "Remove Image"));
        };
      }

      return wp.element.createElement(BlockControls, {
        key: 'controls'
      }, console.log(media), console.log(background_type), media && background_type == 'image' && wp.element.createElement(Toolbar, null, wp.element.createElement(MediaUpload, {
        onSelect: function onSelect(media) {
          return setAttributes({
            media: media
          });
        },
        type: "image",
        value: media.url,
        render: function render(_ref2) {
          var open = _ref2.open;
          return wp.element.createElement(IconButton, {
            className: "components-toolbar__control",
            label: __('Edit image'),
            icon: "edit",
            onClick: open
          });
        }
      }))), wp.element.createElement(InspectorControls, {
        key: 'inspector'
      }, wp.element.createElement(PanelBody, {
        title: __('General Settings')
      }, wp.element.createElement(RangeControl, {
        label: "Section Padding",
        value: section_padding,
        onChange: function onChange(new_section_padding) {
          return setAttributes({
            section_padding: new_section_padding
          });
        },
        min: 22,
        max: 140
      }), wp.element.createElement(SelectControl, {
        label: __('Layout'),
        value: hero_layout,
        options: hero_layouts,
        onChange: function onChange(newLayout) {
          setAttributes({
            hero_layout: newLayout
          });
        }
      }), wp.element.createElement(SelectControl, {
        label: __('Background Type'),
        value: background_type,
        options: background_types,
        onChange: function onChange(newType) {
          setAttributes({
            background_type: newType
          });
        }
      })), hero_layout != 1 ? wp.element.createElement(PanelBody, null, wp.element.createElement(SelectControl, {
        label: __('Content Side'),
        value: image_side,
        options: image_sides,
        onChange: function onChange(newSide) {
          setAttributes({
            image_side: newSide
          });
        }
      })) : '', background_type == 'image' && wp.element.createElement(PanelBody, null, wp.element.createElement(MediaUpload, {
        onSelect: function onSelect(newMedia) {
          return setAttributes({
            media: newMedia,
            section_image: newMedia.url
          });
        },
        type: 'image',
        value: media,
        render: function render(_ref3) {
          var open = _ref3.open;
          return wp.element.createElement("div", null, !section_image && wp.element.createElement(Button, {
            className: "components-button editor-post-featured-image__toggle",
            onClick: open
          }, "Upload Image"), section_image && sectionUrl(open));
        }
      })), wp.element.createElement(PanelColorSettings, {
        title: __('Color Settings'),
        initialOpen: false,
        colorSettings: [{
          label: __('Background Color'),
          value: background_color,
          onChange: function onChange(value) {
            setAttributes({
              background_color: value
            });
          }
        }, {
          label: __('Font Color'),
          value: font_color,
          onChange: function onChange(value) {
            setAttributes({
              font_color: value
            });
          }
        }]
      }), wp.element.createElement(PanelBody, {
        title: __('Font Settings')
      }, wp.element.createElement(RangeControl, {
        label: "Header Font Size",
        value: h_font_size,
        onChange: function onChange(new_font_size) {
          return setAttributes({
            h_font_size: new_font_size
          });
        },
        min: 22,
        max: 80
      }), wp.element.createElement(RangeControl, {
        label: "Description Font Size",
        value: d_font_size,
        onChange: function onChange(new_font_size) {
          return setAttributes({
            d_font_size: new_font_size
          });
        },
        min: 8,
        max: 40
      })));
    }
  }]);

  return Inspector;
}(Component);

;
/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./resources/gutenberg/blocks/hero/editor.scss":
/*!*****************************************************!*\
  !*** ./resources/gutenberg/blocks/hero/editor.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/gutenberg/blocks/hero/index.js":
/*!**************************************************!*\
  !*** ./resources/gutenberg/blocks/hero/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editor.scss */ "./resources/gutenberg/blocks/hero/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _component_edit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./component/edit.js */ "./resources/gutenberg/blocks/hero/component/edit.js");


var __ = wp.i18n.__; // Required components

var registerBlockType = wp.blocks.registerBlockType;
registerBlockType('dp/hero-section', // Name of the block with a required name space
{
  title: __('Danzerpress Hero Section'),
  // Title, displayed in the editor
  icon: wp.element.createElement("img", {
    src: "https://dev.danzerpress.com/wp-content/uploads/2019/02/danzerpressofficial.png"
  }),
  // Icon, from WP icons
  category: 'danzerpress',
  // Block category, where the block will be added in the editor
  supports: {
    align: true
  },
  edit: _component_edit_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: function save(props) {
    return null; // See PHP side. This block is rendered on PHP.
  }
});

/***/ }),

/***/ "./resources/gutenberg/components/danzerpress-content.js":
/*!***************************************************************!*\
  !*** ./resources/gutenberg/components/danzerpress-content.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DanzerPressContent; });
var _ref = wp.editor.InspectorControls ? wp.editor : wp.blocks,
    RichText = _ref.RichText;

function DanzerPressContent(_ref2) {
  var props = _ref2.props,
      attributes = _ref2.attributes;
  return [wp.element.createElement(RichText, {
    style: {
      color: attributes.font_color,
      fontSize: attributes.h_font_size + 'px'
    },
    tagName: 'h2',
    className: "".concat(props.className, " danzerpress-title"),
    onChange: function onChange(content) {
      props.setAttributes({
        section_title: content
      });
    },
    value: attributes.section_title,
    placeholder: "Section Title",
    keepPlaceholderOnFocus: true
  }), wp.element.createElement(RichText, {
    tagName: 'p',
    style: {
      color: attributes.font_color,
      fontSize: attributes.d_font_size + 'px'
    },
    className: "".concat(attributes.className, " danzerpress-section-description"),
    onChange: function onChange(content) {
      props.setAttributes({
        section_description: content
      });
    },
    value: attributes.section_description,
    placeholder: "Second Description",
    keepPlaceholderOnFocus: true
  })];
}
;

/***/ }),

/***/ "./resources/gutenberg/components/danzerpress-section.js":
/*!***************************************************************!*\
  !*** ./resources/gutenberg/components/danzerpress-section.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DanzerPressSection; });
function DanzerPressSection(props) {
  var media = props.props.attributes.media ? props.props.attributes.media.url : '';
  return wp.element.createElement("section", {
    className: 'danzerpress-section ' + props.className,
    style: props.style
  }, wp.element.createElement("div", {
    className: "danzerpress-wrap"
  }, media && wp.element.createElement("img", {
    className: "danzerpress-parallax",
    src: media
  }), props.children));
}
;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2d1dGVuYmVyZy9ibG9ja3MuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2d1dGVuYmVyZy9ibG9ja3MvaGVyby9jb21wb25lbnQvZWRpdC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvZ3V0ZW5iZXJnL2Jsb2Nrcy9oZXJvL2NvbXBvbmVudC9pbnNwZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2d1dGVuYmVyZy9ibG9ja3MvaGVyby9lZGl0b3Iuc2Nzcz9iZTZlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9ndXRlbmJlcmcvYmxvY2tzL2hlcm8vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2d1dGVuYmVyZy9jb21wb25lbnRzL2RhbnplcnByZXNzLWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2d1dGVuYmVyZy9jb21wb25lbnRzL2RhbnplcnByZXNzLXNlY3Rpb24uanMiXSwibmFtZXMiOlsiQ29tcG9uZW50Iiwid3AiLCJlbGVtZW50IiwiRWRpdCIsImhleCIsInJlc3VsdCIsImV4ZWMiLCJyIiwicGFyc2VJbnQiLCJnIiwiYiIsInByb3BzIiwiaXNTZWxlY3RlZCIsImNsYXNzTmFtZSIsInNldEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwic2VjdGlvbl90aXRsZSIsInNlY3Rpb25fZGVzY3JpcHRpb24iLCJoZXJvX2xheW91dCIsImJhY2tncm91bmRfdHlwZSIsIm1lZGlhIiwiaW1hZ2Vfc2lkZSIsInNlY3Rpb25faW1hZ2UiLCJzZWN0aW9uIiwiYmFja2dyb3VuZF9jb2xvciIsImJhY2tncm91bmRfZ3JhZGllbnRfYSIsImZvbnRfY29sb3IiLCJmb250X3N0eWxlIiwiaF9mb250X3NpemUiLCJkX2ZvbnRfc2l6ZSIsInNlY3Rpb25fcGFkZGluZyIsInBhZGRpbmciLCJfXyIsImkxOG4iLCJjb21wb25lbnRzIiwiUmFuZ2VDb250cm9sIiwiU2VsZWN0Q29udHJvbCIsIlBhbmVsQm9keSIsIkJ1dHRvbiIsIkljb25CdXR0b24iLCJUb29sYmFyIiwiZWRpdG9yIiwiSW5zcGVjdG9yQ29udHJvbHMiLCJibG9ja3MiLCJSaWNoVGV4dCIsIk1lZGlhVXBsb2FkIiwiQmxvY2tDb250cm9scyIsIlBhbmVsQ29sb3JTZXR0aW5ncyIsImhlcm9fbGF5b3V0cyIsInZhbHVlIiwibGFiZWwiLCJiYWNrZ3JvdW5kX3R5cGVzIiwiaW1hZ2Vfc2lkZXMiLCJJbnNwZWN0b3IiLCJhcmd1bWVudHMiLCJzZWN0aW9uVXJsIiwib3BlbiIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJ1cmwiLCJuZXdfc2VjdGlvbl9wYWRkaW5nIiwibmV3TGF5b3V0IiwibmV3VHlwZSIsIm5ld1NpZGUiLCJuZXdNZWRpYSIsIm9uQ2hhbmdlIiwibmV3X2ZvbnRfc2l6ZSIsInJlZ2lzdGVyQmxvY2tUeXBlIiwidGl0bGUiLCJpY29uIiwiY2F0ZWdvcnkiLCJzdXBwb3J0cyIsImFsaWduIiwiZWRpdCIsInNhdmUiLCJEYW56ZXJQcmVzc0NvbnRlbnQiLCJjb2xvciIsImZvbnRTaXplIiwiY29udGVudCIsIkRhbnplclByZXNzU2VjdGlvbiIsInN0eWxlIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QXRCLE9BQXBCO0FBQW9ELEtBUDlFO0FBUUMsU0FBSyxFQUFFakUsVUFBVSxDQUFDRSxtQkFSbkI7QUFTQyxlQUFXLEVBQUMsb0JBVGI7QUFVQywwQkFBc0I7QUFWdkIsSUFiTSxDQUFQO0FBMEJBO0FBQUEsQzs7Ozs7Ozs7Ozs7O0FDaENEO0FBQUE7QUFBZSxTQUFTZ0Usa0JBQVQsQ0FBNkJ0RSxLQUE3QixFQUNmO0FBQ0ksTUFBTVMsS0FBSyxHQUFJVCxLQUFLLENBQUNBLEtBQU4sQ0FBWUksVUFBWixDQUF1QkssS0FBeEIsR0FBaUNULEtBQUssQ0FBQ0EsS0FBTixDQUFZSSxVQUFaLENBQXVCSyxLQUF2QixDQUE2QnlDLEdBQTlELEdBQW9FLEVBQWxGO0FBQ0EsU0FDSTtBQUFTLGFBQVMsRUFBRyx5QkFBeUJsRCxLQUFLLENBQUNFLFNBQXBEO0FBQWdFLFNBQUssRUFBRUYsS0FBSyxDQUFDdUU7QUFBN0UsS0FDSTtBQUFLLGFBQVMsRUFBQztBQUFmLEtBQ0s5RCxLQUFLLElBQ0Y7QUFBSyxhQUFTLEVBQUMsc0JBQWY7QUFBc0MsT0FBRyxFQUFFQTtBQUEzQyxJQUZSLEVBSU1ULEtBQUssQ0FBQ3dFLFFBSlosQ0FESixDQURKO0FBVUg7QUFBQSxDIiwiZmlsZSI6ImJsb2Nrcy5idWlsZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcmVzb3VyY2VzL2d1dGVuYmVyZy9ibG9ja3MuanNcIik7XG4iLCIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbi8qKlxuICogVW5yZWdpc3RlciBXUFxuICovXG4vL3dwLmJsb2Nrcy51bnJlZ2lzdGVyQmxvY2tUeXBlKCAnY29yZXMnICk7XG5pbXBvcnQgJy4vYmxvY2tzL2hlcm8vaW5kZXguanMnOyIsImltcG9ydCBJbnNwZWN0b3IgZnJvbSAnLi9pbnNwZWN0b3IuanMnO1xuaW1wb3J0IERhbnplclByZXNzU2VjdGlvbiBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2RhbnplcnByZXNzLXNlY3Rpb24uanMnO1xuaW1wb3J0IERhbnplclByZXNzQ29udGVudCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2RhbnplcnByZXNzLWNvbnRlbnQuanMnO1xuXG5jb25zdCB7IENvbXBvbmVudCB9ID0gd3AuZWxlbWVudFxuXG5jbGFzcyBFZGl0IGV4dGVuZHMgQ29tcG9uZW50XG57XG4gICAgdG9SR0IoaGV4KSB7XG4gICAgICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCA/IHtcbiAgICAgICAgICAgIHI6IHBhcnNlSW50KHJlc3VsdFsxXSwgMTYpLFxuICAgICAgICAgICAgZzogcGFyc2VJbnQocmVzdWx0WzJdLCAxNiksXG4gICAgICAgICAgICBiOiBwYXJzZUludChyZXN1bHRbM10sIDE2KVxuICAgICAgICB9IDogbnVsbDtcbiAgICB9ICBcblxuXHRyZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IHsgaXNTZWxlY3RlZCwgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHNlY3Rpb25fdGl0bGUsIHNlY3Rpb25fZGVzY3JpcHRpb24sIGhlcm9fbGF5b3V0LCBiYWNrZ3JvdW5kX3R5cGUsIG1lZGlhLCBpbWFnZV9zaWRlLCBzZWN0aW9uX2ltYWdlLCBzZWN0aW9uLCBiYWNrZ3JvdW5kX2NvbG9yLCBiYWNrZ3JvdW5kX2dyYWRpZW50X2EsIGZvbnRfY29sb3IsIGZvbnRfc3R5bGUsIGhfZm9udF9zaXplLCBkX2ZvbnRfc2l6ZSwgc2VjdGlvbl9wYWRkaW5nIH0gPSB0aGlzLnByb3BzLmF0dHJpYnV0ZXM7XG4gXG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgPEluc3BlY3RvciBcbiAgICAgICAgICAgICAgICAgICAgey4uLnRoaXMucHJvcHN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICAoXG4gICAgICAgICAgICAgICAgPERhbnplclByZXNzU2VjdGlvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJhZG1pbi1oZXJvLXNlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICBwcm9wcz17dGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kJzogYmFja2dyb3VuZF9jb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IHNlY3Rpb25fcGFkZGluZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFuemVycHJlc3MtY29sLTEgZGFuemVycHJlc3MtYWxpZ24tY2VudGVyIGRhbnplcnByZXNzLWhlcm8tbm9ybWFsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogeyUgaW5jbHVkZSAnZHAtc2VjdGlvbnMvc2VjdGlvbi1wYXJ0cy9zZWN0aW9uX2ljb24udHdpZycgJX0gKi99XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhbnplcnByZXNzLXNlY3Rpb24tY29udGVudCB7e2xheW91dC50ZXh0X2FsaWdufX1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RGFuemVyUHJlc3NDb250ZW50IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcz17dGhpcy5wcm9wc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlcz17dGhpcy5wcm9wcy5hdHRyaWJ1dGVzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0RhbnplclByZXNzQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPERhbnplclByZXNzQnV0dG9uPjwvRGFuemVyUHJlc3NCdXR0b24+ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7JSBpbmNsdWRlICdkcC1zZWN0aW9ucy9zZWN0aW9uLXBhcnRzL2NvbnRlbnQtYnV0dG9ucy50d2lnJyAlfSAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L0RhbnplclByZXNzU2VjdGlvbj5cbiAgICAgICAgICAgIClcbiAgICAgICAgXVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRWRpdDsiLCIvKipcbiAqIFdvcmRQcmVzcyBkZXBlbmRlbmNpZXNcbiAqL1xuY29uc3QgeyBDb21wb25lbnQgfSA9IHdwLmVsZW1lbnRcblxuY29uc3QgeyBfXyB9ID0gd3AuaTE4blxuXG5jb25zdCB7XG5cdFJhbmdlQ29udHJvbCxcblx0U2VsZWN0Q29udHJvbCxcblx0UGFuZWxCb2R5LFxuXHRCdXR0b24sXG5cdEljb25CdXR0b24sXG5cdFRvb2xiYXJcbn0gPSB3cC5jb21wb25lbnRzXG5cbmNvbnN0IHtcblx0SW5zcGVjdG9yQ29udHJvbHMsXG5cdFJpY2hUZXh0LFxuXHRNZWRpYVVwbG9hZCxcblx0QmxvY2tDb250cm9sc1xufSA9IHdwLmVkaXRvci5JbnNwZWN0b3JDb250cm9scyA/IHdwLmVkaXRvciA6IHdwLmJsb2Nrc1xuXG5jb25zdCB7XG5cdFBhbmVsQ29sb3JTZXR0aW5ncyxcbn0gPSB3cC5lZGl0b3JcblxuY29uc3QgaGVyb19sYXlvdXRzID0gW1xuXHR7IHZhbHVlOiAnZnVsbC13aWR0aCcsIGxhYmVsOiBfXyggJ0Z1bGwgV2lkdGgnICkgfSxcblx0eyB2YWx1ZTogJ3NpZGUtaW1hZ2UnLCBsYWJlbDogX18oICdTaWRlIEltYWdlJyApIH0sXG5cdHsgdmFsdWU6ICdjb2RlLWltYWdlJywgbGFiZWw6IF9fKCAnQ29kZSBTaWRlJyApIH0sXG5cdHsgdmFsdWU6ICdoYWxmLWFuZC1oYWxmJywgbGFiZWw6IF9fKCAnSGFsZiBhbmQgSGFsZicgKSB9XG5dO1xuXG5jb25zdCBiYWNrZ3JvdW5kX3R5cGVzID0gW1xuXHR7dmFsdWU6ICdjb2xvcicsIGxhYmVsOiAnQ29sb3InfSxcblx0e3ZhbHVlOiAnaW1hZ2UnLCBsYWJlbDogJ0ltYWdlJ30sXG5cdHt2YWx1ZTogJ2RlZmF1bHQnLCBsYWJlbDogJ2RlZmF1bHQnfVxuXTtcblxuY29uc3QgaW1hZ2Vfc2lkZXMgPSBbXG5cdHt2YWx1ZTogJ2xlZnQnLCBsYWJlbDogJ0xlZnQnfSxcblx0e3ZhbHVlOiAncmlnaHQnLCBsYWJlbDogJ1JpZ2h0J31cbl07XG5cbi8qKlxuICogSW5zcGVjdG9yIGNvbnRyb2xzXG4gKi9cbmNsYXNzIEluc3BlY3RvciBleHRlbmRzIENvbXBvbmVudFxue1xuXHRjb25zdHJ1Y3RvciggcHJvcHMgKSB7XG5cdFx0c3VwZXIoIC4uLmFyZ3VtZW50cyApO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdGNvbnN0IHsgaXNTZWxlY3RlZCwgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgICBjb25zdCB7IHNlY3Rpb25fdGl0bGUsIHNlY3Rpb25fZGVzY3JpcHRpb24sIGhlcm9fbGF5b3V0LCBiYWNrZ3JvdW5kX3R5cGUsIG1lZGlhLCBpbWFnZV9zaWRlLCBzZWN0aW9uX2ltYWdlLCBzZWN0aW9uLCBiYWNrZ3JvdW5kX2NvbG9yLCBiYWNrZ3JvdW5kX2dyYWRpZW50X2EsIGZvbnRfY29sb3IsIGZvbnRfc3R5bGUsIGhfZm9udF9zaXplLCBkX2ZvbnRfc2l6ZSwgc2VjdGlvbl9wYWRkaW5nIH0gPSB0aGlzLnByb3BzLmF0dHJpYnV0ZXM7XG5cblx0XHQvL2NvbnNvbGUubG9nKGJhY2tncm91bmRfdHlwZSlcblx0XHRpZiAoYmFja2dyb3VuZF90eXBlICE9PSAnaW1hZ2UnKSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IG1lZGlhOiAnJywgc2VjdGlvbl9pbWFnZTogJycgfSApXG5cdFx0fVxuXG4gICAgICAgIGlmIChzZWN0aW9uX2ltYWdlKSB7XG4gICAgICAgICAgICB2YXIgc2VjdGlvblVybCA9IChvcGVuKSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJzZWN0aW9uLXVybFwiIHNyYz17c2VjdGlvbl9pbWFnZX0gb25DbGljaz17b3Blbn0vPiBcbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIG9uQ2xpY2s9eyhlKSA9PiB7ZS5wcmV2ZW50RGVmYXVsdCgpOyBzZXRBdHRyaWJ1dGVzKCB7IG1lZGlhOiAnJywgc2VjdGlvbl9pbWFnZTogJycgfSApfX0+UmVtb3ZlIEltYWdlPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIFxuXHRcdHJldHVybiAoXG5cdFx0XHQ8QmxvY2tDb250cm9scyBrZXk9J2NvbnRyb2xzJz5cblx0XHRcdFx0e2NvbnNvbGUubG9nKG1lZGlhKX1cblx0XHRcdFx0e2NvbnNvbGUubG9nKGJhY2tncm91bmRfdHlwZSl9XG5cdFx0XHRcdHsgbWVkaWEgJiYgYmFja2dyb3VuZF90eXBlID09ICdpbWFnZScgJiYgKFxuXHRcdFx0XHRcdDxUb29sYmFyPlxuXHRcdFx0XHRcdFx0PE1lZGlhVXBsb2FkXG5cdFx0XHRcdFx0XHRcdG9uU2VsZWN0PXsgKCBtZWRpYSApID0+IHNldEF0dHJpYnV0ZXMoIHsgbWVkaWE6IG1lZGlhIH0gKSB9XG5cdFx0XHRcdFx0XHRcdHR5cGU9XCJpbWFnZVwiXG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgbWVkaWEudXJsIH1cblx0XHRcdFx0XHRcdFx0cmVuZGVyPXsgKCB7IG9wZW4gfSApID0+IChcblx0XHRcdFx0XHRcdFx0XHQ8SWNvbkJ1dHRvblxuXHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy10b29sYmFyX19jb250cm9sXCJcblx0XHRcdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdFZGl0IGltYWdlJyApIH1cblx0XHRcdFx0XHRcdFx0XHRcdGljb249XCJlZGl0XCJcblx0XHRcdFx0XHRcdFx0XHRcdG9uQ2xpY2s9eyBvcGVuIH1cblx0XHRcdFx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdFx0XHQpIH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9Ub29sYmFyPlxuXHRcdFx0XHQpfVxuXHRcdFx0PC9CbG9ja0NvbnRyb2xzPlxuXHRcdCksXG5cdFx0KFxuXHRcdFx0PEluc3BlY3RvckNvbnRyb2xzIGtleT17ICdpbnNwZWN0b3InIH0+XG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9eyBfXyggJ0dlbmVyYWwgU2V0dGluZ3MnICkgfT5cblx0XHRcdFx0XHQ8UmFuZ2VDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD1cIlNlY3Rpb24gUGFkZGluZ1wiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IHNlY3Rpb25fcGFkZGluZyB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3X3NlY3Rpb25fcGFkZGluZyApID0+IHNldEF0dHJpYnV0ZXMoIHsgc2VjdGlvbl9wYWRkaW5nOiBuZXdfc2VjdGlvbl9wYWRkaW5nIH0gKSB9XG5cdFx0XHRcdFx0XHRtaW49eyAyMiB9XG5cdFx0XHRcdFx0XHRtYXg9eyAxNDAgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFNlbGVjdENvbnRyb2xcblx0XHRcdFx0XHRcdFx0bGFiZWw9eyBfXyggJ0xheW91dCcgKSB9XG5cdFx0XHRcdFx0XHRcdHZhbHVlPXsgaGVyb19sYXlvdXQgfVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgaGVyb19sYXlvdXRzIH1cblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U9eyAoIG5ld0xheW91dCApID0+IHsgc2V0QXR0cmlidXRlcyggeyBoZXJvX2xheW91dDogbmV3TGF5b3V0IH0gKSB9IH1cblx0XHRcdFx0XHQvPlxuXHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRsYWJlbD17IF9fKCAnQmFja2dyb3VuZCBUeXBlJyApIH1cblx0XHRcdFx0XHRcdHZhbHVlPXsgYmFja2dyb3VuZF90eXBlIH1cblx0XHRcdFx0XHRcdG9wdGlvbnM9eyBiYWNrZ3JvdW5kX3R5cGVzIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdUeXBlICkgPT4geyBcblx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBiYWNrZ3JvdW5kX3R5cGU6IG5ld1R5cGUgfSApIFxuXHRcdFx0XHRcdFx0fSB9XG5cdFx0XHRcdFx0Lz5cblx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdHsoaGVyb19sYXlvdXQgIT0gMSkgPyAoXG5cdFx0XHRcdFx0PFBhbmVsQm9keT5cblx0XHRcdFx0XHRcdDxTZWxlY3RDb250cm9sXG5cdFx0XHRcdFx0XHRcdGxhYmVsPXsgX18oICdDb250ZW50IFNpZGUnICkgfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17IGltYWdlX3NpZGUgfVxuXHRcdFx0XHRcdFx0XHRvcHRpb25zPXsgaW1hZ2Vfc2lkZXMgfVxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3U2lkZSApID0+IHsgc2V0QXR0cmlidXRlcyggeyBpbWFnZV9zaWRlOiBuZXdTaWRlIH0gKSB9IH1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdCkgOiAnJ31cblx0XHRcdFx0XG5cdFx0XHRcdHsgYmFja2dyb3VuZF90eXBlID09ICdpbWFnZScgJiYgKFxuXHRcdFx0XHRcdDxQYW5lbEJvZHk+XG5cdFx0XHRcdFx0XHQ8TWVkaWFVcGxvYWRcblx0XHRcdFx0XHRcdFx0b25TZWxlY3Q9eyAoIG5ld01lZGlhICkgPT4gc2V0QXR0cmlidXRlcyggeyBtZWRpYTogbmV3TWVkaWEsIHNlY3Rpb25faW1hZ2U6IG5ld01lZGlhLnVybCB9ICkgfVxuXHRcdFx0XHRcdFx0XHR0eXBlPXsnaW1hZ2UnfVxuXHRcdFx0XHRcdFx0XHR2YWx1ZT17bWVkaWF9XG5cdFx0XHRcdFx0XHRcdHJlbmRlcj17ICgge29wZW59ICkgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0XHRcdFx0XHR7IXNlY3Rpb25faW1hZ2UgJiYgKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8QnV0dG9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3NOYW1lPVwiY29tcG9uZW50cy1idXR0b24gZWRpdG9yLXBvc3QtZmVhdHVyZWQtaW1hZ2VfX3RvZ2dsZVwiXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b25DbGljaz17IG9wZW4gfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0VXBsb2FkIEltYWdlXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvQnV0dG9uPlxuXHRcdFx0XHRcdFx0XHRcdFx0KX1cblxuXHRcdFx0XHRcdFx0XHRcdFx0e3NlY3Rpb25faW1hZ2UgJiYgc2VjdGlvblVybChvcGVuKX1cblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0XHRcdFx0KX1cblx0XHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PC9QYW5lbEJvZHk+XG5cdFx0XHRcdCl9XG5cblx0XHRcdFx0PFBhbmVsQ29sb3JTZXR0aW5nc1xuXHRcdFx0XHRcdHRpdGxlPXsgX18oICdDb2xvciBTZXR0aW5ncycgKSB9XG5cdFx0XHRcdFx0aW5pdGlhbE9wZW49eyBmYWxzZSB9XG5cdFx0XHRcdFx0Y29sb3JTZXR0aW5ncz17W1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogX18oICdCYWNrZ3JvdW5kIENvbG9yJyApLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogYmFja2dyb3VuZF9jb2xvcixcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6ICggdmFsdWUgKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0QXR0cmlidXRlcyggeyBiYWNrZ3JvdW5kX2NvbG9yOiB2YWx1ZSB9IClcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBfXyggJ0ZvbnQgQ29sb3InICksXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBmb250X2NvbG9yLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogKCB2YWx1ZSApID0+IHtcblx0XHRcdFx0XHRcdFx0XHRzZXRBdHRyaWJ1dGVzKCB7IGZvbnRfY29sb3I6IHZhbHVlIH0gKVxuXHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRdfVxuXHRcdFx0XHQvPlxuXG5cdFx0XHRcdDxQYW5lbEJvZHkgdGl0bGU9e19fKCdGb250IFNldHRpbmdzJyl9PlxuXHRcdFx0XHRcdDxSYW5nZUNvbnRyb2xcblx0XHRcdFx0XHRcdGxhYmVsPVwiSGVhZGVyIEZvbnQgU2l6ZVwiXG5cdFx0XHRcdFx0XHR2YWx1ZT17IGhfZm9udF9zaXplIH1cblx0XHRcdFx0XHRcdG9uQ2hhbmdlPXsgKCBuZXdfZm9udF9zaXplICkgPT4gc2V0QXR0cmlidXRlcyggeyBoX2ZvbnRfc2l6ZTogbmV3X2ZvbnRfc2l6ZSB9ICkgfVxuXHRcdFx0XHRcdFx0bWluPXsgMjIgfVxuXHRcdFx0XHRcdFx0bWF4PXsgODAgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdFx0PFJhbmdlQ29udHJvbFxuXHRcdFx0XHRcdFx0bGFiZWw9XCJEZXNjcmlwdGlvbiBGb250IFNpemVcIlxuXHRcdFx0XHRcdFx0dmFsdWU9eyBkX2ZvbnRfc2l6ZSB9XG5cdFx0XHRcdFx0XHRvbkNoYW5nZT17ICggbmV3X2ZvbnRfc2l6ZSApID0+IHNldEF0dHJpYnV0ZXMoIHsgZF9mb250X3NpemU6IG5ld19mb250X3NpemUgfSApIH1cblx0XHRcdFx0XHRcdG1pbj17IDggfVxuXHRcdFx0XHRcdFx0bWF4PXsgNDAgfVxuXHRcdFx0XHRcdC8+XG5cdFx0XHRcdDwvUGFuZWxCb2R5PlxuXHRcdFx0PC9JbnNwZWN0b3JDb250cm9scz5cblx0XHQpO1xuXHR9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbnNwZWN0b3I7IiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0IEVkaXQgZnJvbSAnLi9jb21wb25lbnQvZWRpdC5qcyc7XG5cbmNvbnN0IHsgX18gfSA9IHdwLmkxOG5cblxuLy8gUmVxdWlyZWQgY29tcG9uZW50c1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKFxuICAgICdkcC9oZXJvLXNlY3Rpb24nLCAvLyBOYW1lIG9mIHRoZSBibG9jayB3aXRoIGEgcmVxdWlyZWQgbmFtZSBzcGFjZVxuICAgIHtcblx0ICAgIHRpdGxlOiBfXygnRGFuemVycHJlc3MgSGVybyBTZWN0aW9uJyksIC8vIFRpdGxlLCBkaXNwbGF5ZWQgaW4gdGhlIGVkaXRvclxuXHQgICAgaWNvbjogKDxpbWcgc3JjPVwiaHR0cHM6Ly9kZXYuZGFuemVycHJlc3MuY29tL3dwLWNvbnRlbnQvdXBsb2Fkcy8yMDE5LzAyL2RhbnplcnByZXNzb2ZmaWNpYWwucG5nXCIvPiksIC8vIEljb24sIGZyb20gV1AgaWNvbnNcbiAgICAgICAgY2F0ZWdvcnk6ICdkYW56ZXJwcmVzcycsIC8vIEJsb2NrIGNhdGVnb3J5LCB3aGVyZSB0aGUgYmxvY2sgd2lsbCBiZSBhZGRlZCBpbiB0aGUgZWRpdG9yXG4gICAgICAgIHN1cHBvcnRzOiB7XG4gICAgICAgICAgICBhbGlnbjogdHJ1ZVxuICAgICAgICB9LFxuICAgIFxuICAgICAgICBlZGl0OiBFZGl0LFxuIFxuICAgICAgICBzYXZlICggcHJvcHMgKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbCAvLyBTZWUgUEhQIHNpZGUuIFRoaXMgYmxvY2sgaXMgcmVuZGVyZWQgb24gUEhQLlxuICAgICAgICB9LFxuICAgIH0gXG4pOyIsImNvbnN0IHtcblx0UmljaFRleHRcbn0gPSB3cC5lZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMgPyB3cC5lZGl0b3IgOiB3cC5ibG9ja3NcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFuemVyUHJlc3NDb250ZW50KHsgcHJvcHMsIGF0dHJpYnV0ZXMgfSlcbntcblx0cmV0dXJuIFtcblx0XHQ8UmljaFRleHRcblx0XHRcdHN0eWxlPXt7XG5cdFx0XHRcdGNvbG9yOiBhdHRyaWJ1dGVzLmZvbnRfY29sb3IsXG5cdFx0XHRcdGZvbnRTaXplOiBhdHRyaWJ1dGVzLmhfZm9udF9zaXplICsgJ3B4J1xuXHRcdFx0fX1cblx0XHRcdHRhZ05hbWU9eydoMid9XG5cdFx0XHRjbGFzc05hbWU9e2Ake3Byb3BzLmNsYXNzTmFtZX0gZGFuemVycHJlc3MtdGl0bGVgfVxuXHRcdFx0b25DaGFuZ2U9eyhjb250ZW50KSA9PiB7IHByb3BzLnNldEF0dHJpYnV0ZXMoe3NlY3Rpb25fdGl0bGU6IGNvbnRlbnR9KX0gfVxuXHRcdFx0dmFsdWU9e2F0dHJpYnV0ZXMuc2VjdGlvbl90aXRsZX1cblx0XHRcdHBsYWNlaG9sZGVyPVwiU2VjdGlvbiBUaXRsZVwiXG5cdFx0XHRrZWVwUGxhY2Vob2xkZXJPbkZvY3VzXG5cdFx0Lz4sXG5cdFx0PFJpY2hUZXh0XG4gICAgICAgICAgICB0YWdOYW1lPXsncCd9XG5cdFx0XHRzdHlsZT17e1xuXHRcdFx0XHRjb2xvcjogYXR0cmlidXRlcy5mb250X2NvbG9yLFxuXHRcdFx0XHRmb250U2l6ZTogYXR0cmlidXRlcy5kX2ZvbnRfc2l6ZSArICdweCdcblx0XHRcdH19XG5cdFx0XHRjbGFzc05hbWU9e2Ake2F0dHJpYnV0ZXMuY2xhc3NOYW1lfSBkYW56ZXJwcmVzcy1zZWN0aW9uLWRlc2NyaXB0aW9uYH0gXG5cdFx0XHRvbkNoYW5nZT17KGNvbnRlbnQpID0+IHsgcHJvcHMuc2V0QXR0cmlidXRlcyh7c2VjdGlvbl9kZXNjcmlwdGlvbjogY29udGVudH0pfSB9IFxuXHRcdFx0dmFsdWU9e2F0dHJpYnV0ZXMuc2VjdGlvbl9kZXNjcmlwdGlvbn1cblx0XHRcdHBsYWNlaG9sZGVyPVwiU2Vjb25kIERlc2NyaXB0aW9uXCJcblx0XHRcdGtlZXBQbGFjZWhvbGRlck9uRm9jdXNcblx0XHQvPiBcblx0XTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRGFuemVyUHJlc3NTZWN0aW9uKCBwcm9wcyApXG57XG4gICAgY29uc3QgbWVkaWEgPSAocHJvcHMucHJvcHMuYXR0cmlidXRlcy5tZWRpYSkgPyBwcm9wcy5wcm9wcy5hdHRyaWJ1dGVzLm1lZGlhLnVybCA6ICcnO1xuICAgIHJldHVybiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17ICdkYW56ZXJwcmVzcy1zZWN0aW9uICcgKyBwcm9wcy5jbGFzc05hbWUgfSBzdHlsZT17cHJvcHMuc3R5bGV9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkYW56ZXJwcmVzcy13cmFwXCI+XG4gICAgICAgICAgICAgICAge21lZGlhICYmIChcbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJkYW56ZXJwcmVzcy1wYXJhbGxheFwiIHNyYz17bWVkaWF9Lz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIHsgcHJvcHMuY2hpbGRyZW4gfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICApO1xufTsiXSwic291cmNlUm9vdCI6IiJ9