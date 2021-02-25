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
 * The RequestUpdateUser model module.
 * @module model/RequestUpdateUser
 * @version 1.0.0
 */
var RequestUpdateUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RequestUpdateUser</code>.
   * @alias module:model/RequestUpdateUser
   * @param firstName {String} 
   * @param lastName {String} 
   */
  function RequestUpdateUser(firstName, lastName) {
    _classCallCheck(this, RequestUpdateUser);

    RequestUpdateUser.initialize(this, firstName, lastName);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestUpdateUser, null, [{
    key: "initialize",
    value: function initialize(obj, firstName, lastName) {
      obj['first_name'] = firstName;
      obj['last_name'] = lastName;
    }
    /**
     * Constructs a <code>RequestUpdateUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestUpdateUser} obj Optional instance to populate.
     * @return {module:model/RequestUpdateUser} The populated <code>RequestUpdateUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestUpdateUser();

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RequestUpdateUser;
}();
/**
 * @member {String} first_name
 */


RequestUpdateUser.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */

RequestUpdateUser.prototype['last_name'] = undefined;
/**
 * @member {String} password
 */

RequestUpdateUser.prototype['password'] = undefined;
var _default = RequestUpdateUser;
exports["default"] = _default;