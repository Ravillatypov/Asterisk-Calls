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
 * The ResponseRefreshAccessToken model module.
 * @module model/ResponseRefreshAccessToken
 * @version 1.0.0
 */
var ResponseRefreshAccessToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResponseRefreshAccessToken</code>.
   * @alias module:model/ResponseRefreshAccessToken
   * @param refreshToken {String} 
   * @param accessToken {String} 
   */
  function ResponseRefreshAccessToken(refreshToken, accessToken) {
    _classCallCheck(this, ResponseRefreshAccessToken);

    ResponseRefreshAccessToken.initialize(this, refreshToken, accessToken);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResponseRefreshAccessToken, null, [{
    key: "initialize",
    value: function initialize(obj, refreshToken, accessToken) {
      obj['refresh_token'] = refreshToken;
      obj['access_token'] = accessToken;
    }
    /**
     * Constructs a <code>ResponseRefreshAccessToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResponseRefreshAccessToken} obj Optional instance to populate.
     * @return {module:model/ResponseRefreshAccessToken} The populated <code>ResponseRefreshAccessToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResponseRefreshAccessToken();

        if (data.hasOwnProperty('refresh_token')) {
          obj['refresh_token'] = _ApiClient["default"].convertToType(data['refresh_token'], 'String');
        }

        if (data.hasOwnProperty('access_token')) {
          obj['access_token'] = _ApiClient["default"].convertToType(data['access_token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ResponseRefreshAccessToken;
}();
/**
 * @member {String} refresh_token
 */


ResponseRefreshAccessToken.prototype['refresh_token'] = undefined;
/**
 * @member {String} access_token
 */

ResponseRefreshAccessToken.prototype['access_token'] = undefined;
var _default = ResponseRefreshAccessToken;
exports["default"] = _default;