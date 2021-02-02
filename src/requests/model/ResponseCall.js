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
 * The ResponseCall model module.
 * @module model/ResponseCall
 * @version 1.0.0
 */
var ResponseCall = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResponseCall</code>.
   * @alias module:model/ResponseCall
   * @param id {String} 
   * @param startedAt {Date} 
   * @param callType {module:model/ResponseCall.CallTypeEnum} 
   * @param state {module:model/ResponseCall.StateEnum} 
   * @param isRecord {Boolean} 
   * @param fromPin {String} 
   * @param fromNumber {String} 
   * @param requestPin {String} 
   * @param requestNumber {String} 
   */
  function ResponseCall(id, startedAt, callType, state, isRecord, fromPin, fromNumber, requestPin, requestNumber) {
    _classCallCheck(this, ResponseCall);

    ResponseCall.initialize(this, id, startedAt, callType, state, isRecord, fromPin, fromNumber, requestPin, requestNumber);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResponseCall, null, [{
    key: "initialize",
    value: function initialize(obj, id, startedAt, callType, state, isRecord, fromPin, fromNumber, requestPin, requestNumber) {
      obj['id'] = id;
      obj['started_at'] = startedAt;
      obj['call_type'] = callType;
      obj['state'] = state;
      obj['is_record'] = isRecord;
      obj['from_pin'] = fromPin;
      obj['from_number'] = fromNumber;
      obj['request_pin'] = requestPin;
      obj['request_number'] = requestNumber;
    }
    /**
     * Constructs a <code>ResponseCall</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseCall} obj Optional instance to populate.
     * @return {module:model/ResponseCall} The populated <code>ResponseCall</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResponseCall();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('started_at')) {
          obj['started_at'] = _ApiClient["default"].convertToType(data['started_at'], 'Date');
        }

        if (data.hasOwnProperty('voice_started_at')) {
          obj['voice_started_at'] = _ApiClient["default"].convertToType(data['voice_started_at'], 'Date');
        }

        if (data.hasOwnProperty('finished_at')) {
          obj['finished_at'] = _ApiClient["default"].convertToType(data['finished_at'], 'Date');
        }

        if (data.hasOwnProperty('call_type')) {
          obj['call_type'] = _ApiClient["default"].convertToType(data['call_type'], 'String');
        }

        if (data.hasOwnProperty('state')) {
          obj['state'] = _ApiClient["default"].convertToType(data['state'], 'String');
        }

        if (data.hasOwnProperty('is_record')) {
          obj['is_record'] = _ApiClient["default"].convertToType(data['is_record'], 'Boolean');
        }

        if (data.hasOwnProperty('from_pin')) {
          obj['from_pin'] = _ApiClient["default"].convertToType(data['from_pin'], 'String');
        }

        if (data.hasOwnProperty('from_number')) {
          obj['from_number'] = _ApiClient["default"].convertToType(data['from_number'], 'String');
        }

        if (data.hasOwnProperty('request_pin')) {
          obj['request_pin'] = _ApiClient["default"].convertToType(data['request_pin'], 'String');
        }

        if (data.hasOwnProperty('request_number')) {
          obj['request_number'] = _ApiClient["default"].convertToType(data['request_number'], 'String');
        }

        if (data.hasOwnProperty('account_id')) {
          obj['account_id'] = _ApiClient["default"].convertToType(data['account_id'], 'String');
        }

        if (data.hasOwnProperty('waiting_time')) {
          obj['waiting_time'] = _ApiClient["default"].convertToType(data['waiting_time'], 'String');
        }

        if (data.hasOwnProperty('duration')) {
          obj['duration'] = _ApiClient["default"].convertToType(data['duration'], 'Number');
        }

        if (data.hasOwnProperty('comment')) {
          obj['comment'] = _ApiClient["default"].convertToType(data['comment'], 'String');
        }

        if (data.hasOwnProperty('tags')) {
          obj['tags'] = _ApiClient["default"].convertToType(data['tags'], [_ResponseTag["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ResponseCall;
}();
/**
 * @member {String} id
 */


ResponseCall.prototype['id'] = undefined;
/**
 * @member {Date} started_at
 */

ResponseCall.prototype['started_at'] = undefined;
/**
 * @member {Date} voice_started_at
 */

ResponseCall.prototype['voice_started_at'] = undefined;
/**
 * @member {Date} finished_at
 */

ResponseCall.prototype['finished_at'] = undefined;
/**
 * @member {module:model/ResponseCall.CallTypeEnum} call_type
 */

ResponseCall.prototype['call_type'] = undefined;
/**
 * @member {module:model/ResponseCall.StateEnum} state
 */

ResponseCall.prototype['state'] = undefined;
/**
 * @member {Boolean} is_record
 */

ResponseCall.prototype['is_record'] = undefined;
/**
 * @member {String} from_pin
 */

ResponseCall.prototype['from_pin'] = undefined;
/**
 * @member {String} from_number
 */

ResponseCall.prototype['from_number'] = undefined;
/**
 * @member {String} request_pin
 */

ResponseCall.prototype['request_pin'] = undefined;
/**
 * @member {String} request_number
 */

ResponseCall.prototype['request_number'] = undefined;
/**
 * @member {String} account_id
 */

ResponseCall.prototype['account_id'] = undefined;
/**
 * @member {String} waiting_time
 */

ResponseCall.prototype['waiting_time'] = undefined;
/**
 * @member {Number} duration
 */

ResponseCall.prototype['duration'] = undefined;
/**
 * @member {String} comment
 */

ResponseCall.prototype['comment'] = undefined;
/**
 * @member {Array.<module:model/ResponseTag>} tags
 */

ResponseCall.prototype['tags'] = undefined;
/**
 * Allowed values for the <code>call_type</code> property.
 * @enum {String}
 * @readonly
 */

ResponseCall['CallTypeEnum'] = {
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
/**
 * Allowed values for the <code>state</code> property.
 * @enum {String}
 * @readonly
 */

ResponseCall['StateEnum'] = {
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
var _default = ResponseCall;
exports["default"] = _default;