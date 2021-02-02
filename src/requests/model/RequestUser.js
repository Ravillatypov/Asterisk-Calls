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
 * The RequestUser model module.
 * @module model/RequestUser
 * @version 1.0.0
 */
var RequestUser = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RequestUser</code>.
   * @alias module:model/RequestUser
   * @param id {Number} 
   * @param isActive {Boolean} 
   * @param permissions {Array.<Number>} 
   */
  function RequestUser(id, isActive, permissions) {
    _classCallCheck(this, RequestUser);

    RequestUser.initialize(this, id, isActive, permissions);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestUser, null, [{
    key: "initialize",
    value: function initialize(obj, id, isActive, permissions) {
      obj['id'] = id;
      obj['is_active'] = isActive;
      obj['permissions'] = permissions;
    }
    /**
     * Constructs a <code>RequestUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestUser} obj Optional instance to populate.
     * @return {module:model/RequestUser} The populated <code>RequestUser</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestUser();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('is_active')) {
          obj['is_active'] = _ApiClient["default"].convertToType(data['is_active'], 'Boolean');
        }

        if (data.hasOwnProperty('permissions')) {
          obj['permissions'] = _ApiClient["default"].convertToType(data['permissions'], ['Number']);
        }
      }

      return obj;
    }
  }]);

  return RequestUser;
}();
/**
 * @member {Number} id
 */


RequestUser.prototype['id'] = undefined;
/**
 * @member {Boolean} is_active
 */

RequestUser.prototype['is_active'] = undefined;
/**
 * @member {Array.<Number>} permissions
 */

RequestUser.prototype['permissions'] = undefined;
var _default = RequestUser;
exports["default"] = _default;