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
 * The ResponseUser model module.
 * @module model/ResponseUser
 * @version 1.0.0
 */
var ResponseUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResponseUser</code>.
   * @alias module:model/ResponseUser
   * @param id {Number} 
   * @param firstName {String} 
   * @param lastName {String} 
   * @param permissions {Array.<Number>} 
   * @param username {String} 
   * @param isActive {Boolean} 
   */
  function ResponseUser(id, firstName, lastName, permissions, username, isActive) {
    _classCallCheck(this, ResponseUser);

    ResponseUser.initialize(this, id, firstName, lastName, permissions, username, isActive);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResponseUser, null, [{
    key: "initialize",
    value: function initialize(obj, id, firstName, lastName, permissions, username, isActive) {
      obj['id'] = id;
      obj['first_name'] = firstName;
      obj['last_name'] = lastName;
      obj['permissions'] = permissions;
      obj['username'] = username;
      obj['is_active'] = isActive;
    }
    /**
     * Constructs a <code>ResponseUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseUser} obj Optional instance to populate.
     * @return {module:model/ResponseUser} The populated <code>ResponseUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResponseUser();

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

  return ResponseUser;
}();
/**
 * @member {Number} id
 */


ResponseUser.prototype['id'] = undefined;
/**
 * @member {String} first_name
 */

ResponseUser.prototype['first_name'] = undefined;
/**
 * @member {String} last_name
 */

ResponseUser.prototype['last_name'] = undefined;
/**
 * @member {Array.<Number>} permissions
 */

ResponseUser.prototype['permissions'] = undefined;
/**
 * @member {String} username
 */

ResponseUser.prototype['username'] = undefined;
/**
 * @member {Boolean} is_active
 */

ResponseUser.prototype['is_active'] = undefined;
var _default = ResponseUser;
exports["default"] = _default;