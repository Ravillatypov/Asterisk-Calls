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
 * The RequestRefreshToken model module.
 * @module model/RequestRefreshToken
 * @version 1.0.0
 */
var RequestRefreshToken = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RequestRefreshToken</code>.
   * @alias module:model/RequestRefreshToken
   * @param refreshToken {String} 
   */
  function RequestRefreshToken(refreshToken) {
    _classCallCheck(this, RequestRefreshToken);

    RequestRefreshToken.initialize(this, refreshToken);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RequestRefreshToken, null, [{
    key: "initialize",
    value: function initialize(obj, refreshToken) {
      obj['refresh_token'] = refreshToken;
    }
    /**
     * Constructs a <code>RequestRefreshToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RequestRefreshToken} obj Optional instance to populate.
     * @return {module:model/RequestRefreshToken} The populated <code>RequestRefreshToken</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RequestRefreshToken();

        if (data.hasOwnProperty('refresh_token')) {
          obj['refresh_token'] = _ApiClient["default"].convertToType(data['refresh_token'], 'String');
        }
      }

      return obj;
    }
  }]);

  return RequestRefreshToken;
}();
/**
 * @member {String} refresh_token
 */


RequestRefreshToken.prototype['refresh_token'] = undefined;
var _default = RequestRefreshToken;
exports["default"] = _default;