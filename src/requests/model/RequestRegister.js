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
 * The RequestRegister model module.
 * @module model/RequestRegister
 * @version 1.0.0
 */
var RequestRegister = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RequestRegister</code>.
   * @alias module:model/RequestRegister
   * @param username {String} 
   * @param password {String} 
   * @param firstName {String} 
   * @param lastName {String} 
   */
  function RequestRegister(username, password, firstName, lastName) {
    _classCallCheck(this, RequestRegister);

    RequestRegister.initialize(this, username, password, firstName, lastName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestRegister, null, [{
    key: "initialize",
    value: function initialize(obj, username, password, firstName, lastName) {
      obj['username'] = username;
      obj['password'] = password;
      obj['first_name'] = firstName;
      obj['last_name'] = lastName;
    }
    /**
     * Constructs a <code>RequestRegister</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestRegister} obj Optional instance to populate.
     * @return {module:model/RequestRegister} The populated <code>RequestRegister</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestRegister();

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RequestRegister;
}();
/**
 * @member {String} username
 */


RequestRegister.prototype['username'] = undefined;
/**
 * @member {String} password
 */

RequestRegister.prototype['password'] = undefined;
/**
 * @member {String} first_name
 */

RequestRegister.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */

RequestRegister.prototype['last_name'] = undefined;
var _default = RequestRegister;
exports["default"] = _default;