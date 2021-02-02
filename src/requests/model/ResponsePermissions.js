"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResponsePermission = _interopRequireDefault(require("./ResponsePermission"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ResponsePermissions model module.
 * @module model/ResponsePermissions
 * @version 1.0.0
 */
var ResponsePermissions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResponsePermissions</code>.
   * @alias module:model/ResponsePermissions
   * @param result {Array.<module:model/ResponsePermission>} 
   */
  function ResponsePermissions(result) {
    _classCallCheck(this, ResponsePermissions);

    ResponsePermissions.initialize(this, result);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResponsePermissions, null, [{
    key: "initialize",
    value: function initialize(obj, result) {
      obj['result'] = result;
    }
    /**
     * Constructs a <code>ResponsePermissions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponsePermissions} obj Optional instance to populate.
     * @return {module:model/ResponsePermissions} The populated <code>ResponsePermissions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResponsePermissions();

        if (data.hasOwnProperty('result')) {
          obj['result'] = _ApiClient["default"].convertToType(data['result'], [_ResponsePermission["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ResponsePermissions;
}();
/**
 * @member {Array.<module:model/ResponsePermission>} result
 */


ResponsePermissions.prototype['result'] = undefined;
var _default = ResponsePermissions;
exports["default"] = _default;