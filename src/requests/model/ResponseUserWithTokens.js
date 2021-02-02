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
 * The ResponseUserWithTokens model module.
 * @module model/ResponseUserWithTokens
 * @version 1.0.0
 */
var ResponseUserWithTokens = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResponseUserWithTokens</code>.
   * @alias module:model/ResponseUserWithTokens
   * @param refreshToken {String} 
   * @param accessToken {String} 
   * @param id {Number} 
   * @param firstName {String} 
   * @param lastName {String} 
   * @param permissions {Array.<Number>} 
   * @param username {String} 
   * @param isActive {Boolean} 
   */
  function ResponseUserWithTokens(refreshToken, accessToken, id, firstName, lastName, permissions, username, isActive) {
    _classCallCheck(this, ResponseUserWithTokens);

    ResponseUserWithTokens.initialize(this, refreshToken, accessToken, id, firstName, lastName, permissions, username, isActive);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResponseUserWithTokens, null, [{
    key: "initialize",
    value: function initialize(obj, refreshToken, accessToken, id, firstName, lastName, permissions, username, isActive) {
      obj['refresh_token'] = refreshToken;
      obj['access_token'] = accessToken;
      obj['id'] = id;
      obj['first_name'] = firstName;
      obj['last_name'] = lastName;
      obj['permissions'] = permissions;
      obj['username'] = username;
      obj['is_active'] = isActive;
    }
    /**
     * Constructs a <code>ResponseUserWithTokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseUserWithTokens} obj Optional instance to populate.
     * @return {module:model/ResponseUserWithTokens} The populated <code>ResponseUserWithTokens</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResponseUserWithTokens();

        if (data.hasOwnProperty('refresh_token')) {
          obj['refresh_token'] = _ApiClient["default"].convertToType(data['refresh_token'], 'String');
        }

        if (data.hasOwnProperty('access_token')) {
          obj['access_token'] = _ApiClient["default"].convertToType(data['access_token'], 'String');
        }

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('first_name')) {
          obj['first_name'] = _ApiClient["default"].convertToType(data['first_name'], 'String');
        }

        if (data.hasOwnProperty('last_name')) {
          obj['last_name'] = _ApiClient["default"].convertToType(data['last_name'], 'String');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], ['Number']);
        }

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('is_active')) {
          obj['is_active'] = _ApiClient["default"].convertToType(data['is_active'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return ResponseUserWithTokens;
}();
/**
 * @member {String} refresh_token
 */


ResponseUserWithTokens.prototype['refresh_token'] = undefined;
/**
 * @member {String} access_token
 */

ResponseUserWithTokens.prototype['access_token'] = undefined;
/**
 * @member {Number} id
 */

ResponseUserWithTokens.prototype['id'] = undefined;
/**
 * @member {String} first_name
 */

ResponseUserWithTokens.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */

ResponseUserWithTokens.prototype['last_name'] = undefined;
/**
 * @member {Array.<Number>} permissions
 */

ResponseUserWithTokens.prototype['permissions'] = undefined;
/**
 * @member {String} username
 */

ResponseUserWithTokens.prototype['username'] = undefined;
/**
 * @member {Boolean} is_active
 */

ResponseUserWithTokens.prototype['is_active'] = undefined;
var _default = ResponseUserWithTokens;
exports["default"] = _default;