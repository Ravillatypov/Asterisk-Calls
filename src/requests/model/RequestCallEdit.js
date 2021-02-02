"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RequestTag = _interopRequireDefault(require("./RequestTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RequestCallEdit model module.
 * @module model/RequestCallEdit
 * @version 1.0.0
 */
var RequestCallEdit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RequestCallEdit</code>.
   * @alias module:model/RequestCallEdit
   * @param id {String} 
   */
  function RequestCallEdit(id) {
    _classCallCheck(this, RequestCallEdit);

    RequestCallEdit.initialize(this, id);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestCallEdit, null, [{
    key: "initialize",
    value: function initialize(obj, id) {
      obj['id'] = id;
    }
    /**
     * Constructs a <code>RequestCallEdit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestCallEdit} obj Optional instance to populate.
     * @return {module:model/RequestCallEdit} The populated <code>RequestCallEdit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestCallEdit();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], [_RequestTag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return RequestCallEdit;
}();
/**
 * @member {String} id
 */


RequestCallEdit.prototype['id'] = undefined;
/**
 * @member {String} comment
 */

RequestCallEdit.prototype['comment'] = undefined;
/**
 * @member {Array.<module:model/RequestTag>} tags
 */

RequestCallEdit.prototype['tags'] = undefined;
var _default = RequestCallEdit;
exports["default"] = _default;