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
 * The RequestGetCalls model module.
 * @module model/RequestGetCalls
 * @version 1.0.0
 */
var RequestGetCalls = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RequestGetCalls</code>.
   * @alias module:model/RequestGetCalls
   */
  function RequestGetCalls() {
    _classCallCheck(this, RequestGetCalls);

    RequestGetCalls.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestGetCalls, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RequestGetCalls</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestGetCalls} obj Optional instance to populate.
     * @return {module:model/RequestGetCalls} The populated <code>RequestGetCalls</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestGetCalls();

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('need_recall')) {
          obj['need_recall'] = _ApiClient["default"].convertToType(data['need_recall'], 'Boolean');
        }

        if (data.hasOwnProperty('started_from')) {
          obj['started_from'] = _ApiClient["default"].convertToType(data['started_from'], 'Date');
        }

        if (data.hasOwnProperty('started_to')) {
          obj['started_to'] = _ApiClient["default"].convertToType(data['started_to'], 'Date');
        }

        if (data.hasOwnProperty('call_type')) {
          obj['call_type'] = _ApiClient["default"].convertToType(data['call_type'], 'String');
        }

        if (data.hasOwnProperty('limit')) {
          obj['limit'] = _ApiClient["default"].convertToType(data['limit'], 'Number');
        }

        if (data.hasOwnProperty('offset')) {
          obj['offset'] = _ApiClient["default"].convertToType(data['offset'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RequestGetCalls;
}();
/**
 * An enumeration.
 * @member {module:model/RequestGetCalls.StateEnum} state
 */


RequestGetCalls.prototype['state'] = undefined;
/**
 * @member {Boolean} need_recall
 */

RequestGetCalls.prototype['need_recall'] = undefined;
/**
 * @member {Date} started_from
 */

RequestGetCalls.prototype['started_from'] = undefined;
/**
 * @member {Date} started_to
 */

RequestGetCalls.prototype['started_to'] = undefined;
/**
 * An enumeration.
 * @member {module:model/RequestGetCalls.CallTypeEnum} call_type
 */

RequestGetCalls.prototype['call_type'] = undefined;
/**
 * @member {Number} limit
 * @default 1000
 */

RequestGetCalls.prototype['limit'] = 1000;
/**
 * @member {Number} offset
 * @default 0
 */

RequestGetCalls.prototype['offset'] = 0;
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

RequestGetCalls['StateEnum'] = {
  /**
   * value: "NEW"
   * @const
   */
  "NEW": "NEW",

  /**
   * value: "END"
   * @const
   */
  "END": "END",

  /**
   * value: "CONNECTED"
   * @const
   */
  "CONNECTED": "CONNECTED",

  /**
   * value: "NOT_CONNECTED"
   * @const
   */
  "NOT_CONNECTED": "NOT_CONNECTED",

  /**
   * value: "MISSED"
   * @const
   */
  "MISSED": "MISSED"
};
/**
 * Allowed values for the <code>call_type</code> property.
 * @enum {String}
 * @readonly
 */

RequestGetCalls['CallTypeEnum'] = {
  /**
   * value: "INCOMING"
   * @const
   */
  "INCOMING": "INCOMING",

  /**
   * value: "OUTBOUND"
   * @const
   */
  "OUTBOUND": "OUTBOUND",

  /**
   * value: "INTERNAL"
   * @const
   */
  "INTERNAL": "INTERNAL",

  /**
   * value: "UNKNOWN"
   * @const
   */
  "UNKNOWN": "UNKNOWN"
};
var _default = RequestGetCalls;
exports["default"] = _default;