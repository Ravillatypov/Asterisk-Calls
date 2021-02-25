"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ResponseAtsInfo model module.
 * @module model/ResponseAtsInfo
 * @version 1.0.0
 */
var ResponseAtsInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResponseAtsInfo</code>.
   * @alias module:model/ResponseAtsInfo
   * @param companyName {String} 
   * @param companyLogo {String} 
   * @param externalNumbers {Array.<String>} 
   * @param groupNumbers {Array.<String>} 
   */
  function ResponseAtsInfo(companyName, companyLogo, externalNumbers, groupNumbers) {
    _classCallCheck(this, ResponseAtsInfo);

    ResponseAtsInfo.initialize(this, companyName, companyLogo, externalNumbers, groupNumbers);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResponseAtsInfo, null, [{
    key: "initialize",
    value: function initialize(obj, companyName, companyLogo, externalNumbers, groupNumbers) {
      obj['company_name'] = companyName;
      obj['company_logo'] = companyLogo;
      obj['external_numbers'] = externalNumbers;
      obj['group_numbers'] = groupNumbers;
    }
    /**
     * Constructs a <code>ResponseAtsInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseAtsInfo} obj Optional instance to populate.
     * @return {module:model/ResponseAtsInfo} The populated <code>ResponseAtsInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResponseAtsInfo();

        if (data.hasOwnProperty('company_name')) {
          obj['company_name'] = _ApiClient["default"].convertToType(data['company_name'], 'String');
        }

        if (data.hasOwnProperty('company_logo')) {
          obj['company_logo'] = _ApiClient["default"].convertToType(data['company_logo'], 'String');
        }

        if (data.hasOwnProperty('external_numbers')) {
          obj['external_numbers'] = _ApiClient["default"].convertToType(data['external_numbers'], ['String']);
        }

        if (data.hasOwnProperty('group_numbers')) {
          obj['group_numbers'] = _ApiClient["default"].convertToType(data['group_numbers'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ResponseAtsInfo;
}();
/**
 * @member {String} company_name
 */


ResponseAtsInfo.prototype['company_name'] = undefined;
/**
 * @member {String} company_logo
 */

ResponseAtsInfo.prototype['company_logo'] = undefined;
/**
 * @member {Array.<String>} external_numbers
 */

ResponseAtsInfo.prototype['external_numbers'] = undefined;
/**
 * @member {Array.<String>} group_numbers
 */

ResponseAtsInfo.prototype['group_numbers'] = undefined;
var _default = ResponseAtsInfo;
exports["default"] = _default;