"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResponseTag = _interopRequireDefault(require("./ResponseTag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ResponseTags model module.
 * @module model/ResponseTags
 * @version 1.0.0
 */
var ResponseTags = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResponseTags</code>.
   * @alias module:model/ResponseTags
   * @param result {Array.<module:model/ResponseTag>} 
   */
  function ResponseTags(result) {
    _classCallCheck(this, ResponseTags);

    ResponseTags.initialize(this, result);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResponseTags, null, [{
    key: "initialize",
    value: function initialize(obj, result) {
      obj['result'] = result;
    }
    /**
     * Constructs a <code>ResponseTags</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseTags} obj Optional instance to populate.
     * @return {module:model/ResponseTags} The populated <code>ResponseTags</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResponseTags();

        if (data.hasOwnProperty('result')) {
          obj['result'] = _ApiClient["default"].convertToType(data['result'], [_ResponseTag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ResponseTags;
}();
/**
 * @member {Array.<module:model/ResponseTag>} result
 */


ResponseTags.prototype['result'] = undefined;
var _default = ResponseTags;
exports["default"] = _default;