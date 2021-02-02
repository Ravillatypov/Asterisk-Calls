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
 * The RequestCallback model module.
 * @module model/RequestCallback
 * @version 1.0.0
 */
var RequestCallback = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RequestCallback</code>.
   * @alias module:model/RequestCallback
   * @param fromPin {String} 
   * @param requestNumber {String} 
   */
  function RequestCallback(fromPin, requestNumber) {
    _classCallCheck(this, RequestCallback);

    RequestCallback.initialize(this, fromPin, requestNumber);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestCallback, null, [{
    key: "initialize",
    value: function initialize(obj, fromPin, requestNumber) {
      obj['from_pin'] = fromPin;
      obj['request_number'] = requestNumber;
    }
    /**
     * Constructs a <code>RequestCallback</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestCallback} obj Optional instance to populate.
     * @return {module:model/RequestCallback} The populated <code>RequestCallback</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestCallback();

        if (data.hasOwnProperty('from_pin')) {
          obj['from_pin'] = _ApiClient["default"].convertToType(data['from_pin'], 'String');
        }

        if (data.hasOwnProperty('request_number')) {
          obj['request_number'] = _ApiClient["default"].convertToType(data['request_number'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RequestCallback;
}();
/**
 * @member {String} from_pin
 */


RequestCallback.prototype['from_pin'] = undefined;
/**
 * @member {String} request_number
 */

RequestCallback.prototype['request_number'] = undefined;
var _default = RequestCallback;
exports["default"] = _default;