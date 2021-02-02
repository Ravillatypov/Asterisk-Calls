"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RequestAuth = _interopRequireDefault(require("../model/RequestAuth"));

var _RequestRefreshToken = _interopRequireDefault(require("../model/RequestRefreshToken"));

var _RequestRegister = _interopRequireDefault(require("../model/RequestRegister"));

var _RequestRevokeToken = _interopRequireDefault(require("../model/RequestRevokeToken"));

var _ResponseError = _interopRequireDefault(require("../model/ResponseError"));

var _ResponseRefreshAccessToken = _interopRequireDefault(require("../model/ResponseRefreshAccessToken"));

var _ResponseSuccess = _interopRequireDefault(require("../model/ResponseSuccess"));

var _ResponseUserWithTokens = _interopRequireDefault(require("../model/ResponseUserWithTokens"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Auth service.
* @module api/AuthApi
* @version 1.0.0
*/
var AuthApi = /*#__PURE__*/function () {
  /**
  * Constructs a new AuthApi. 
  * @alias module:api/AuthApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function AuthApi(apiClient) {
    _classCallCheck(this, AuthApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the apiV1UsersLoginPost operation.
   * @callback module:api/AuthApi~apiV1UsersLoginPostCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ResponseRefreshAccessToken} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * User login
   * @param {Object} opts Optional parameters
   * @param {module:model/RequestAuth} opts.requestAuth 
   * @param {module:api/AuthApi~apiV1UsersLoginPostCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ResponseRefreshAccessToken}
   */


  _createClass(AuthApi, [{
    key: "apiV1UsersLoginPost",
    value: function apiV1UsersLoginPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['requestAuth'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ResponseRefreshAccessToken["default"];
      return this.apiClient.callApi('/api/v1/users/login/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the apiV1UsersLoginTokenPost operation.
     * @callback module:api/AuthApi~apiV1UsersLoginTokenPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseRefreshAccessToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * User login
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestAuth} opts.requestAuth 
     * @param {module:api/AuthApi~apiV1UsersLoginTokenPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseRefreshAccessToken}
     */

  }, {
    key: "apiV1UsersLoginTokenPost",
    value: function apiV1UsersLoginTokenPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['requestAuth'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ResponseRefreshAccessToken["default"];
      return this.apiClient.callApi('/api/v1/users/login/token/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the apiV1UsersRefreshTokenPost operation.
     * @callback module:api/AuthApi~apiV1UsersRefreshTokenPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseRefreshAccessToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Refresh access token
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestRefreshToken} opts.requestRefreshToken 
     * @param {module:api/AuthApi~apiV1UsersRefreshTokenPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseRefreshAccessToken}
     */

  }, {
    key: "apiV1UsersRefreshTokenPost",
    value: function apiV1UsersRefreshTokenPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['requestRefreshToken'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ResponseRefreshAccessToken["default"];
      return this.apiClient.callApi('/api/v1/users/refresh_token/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the apiV1UsersRegisterPost operation.
     * @callback module:api/AuthApi~apiV1UsersRegisterPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseUserWithTokens} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Register
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestRegister} opts.requestRegister 
     * @param {module:api/AuthApi~apiV1UsersRegisterPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseUserWithTokens}
     */

  }, {
    key: "apiV1UsersRegisterPost",
    value: function apiV1UsersRegisterPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['requestRegister'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ResponseUserWithTokens["default"];
      return this.apiClient.callApi('/api/v1/users/register/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the apiV1UsersRevokeTokenPost operation.
     * @callback module:api/AuthApi~apiV1UsersRevokeTokenPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseSuccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Revoke refresh token
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestRevokeToken} opts.requestRevokeToken 
     * @param {module:api/AuthApi~apiV1UsersRevokeTokenPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseSuccess}
     */

  }, {
    key: "apiV1UsersRevokeTokenPost",
    value: function apiV1UsersRevokeTokenPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['requestRevokeToken'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ResponseSuccess["default"];
      return this.apiClient.callApi('/api/v1/users/revoke_token/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return AuthApi;
}();

exports["default"] = AuthApi;