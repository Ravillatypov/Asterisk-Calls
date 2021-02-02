"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RequestUpdateUser = _interopRequireDefault(require("../model/RequestUpdateUser"));

var _RequestUser = _interopRequireDefault(require("../model/RequestUser"));

var _ResponseError = _interopRequireDefault(require("../model/ResponseError"));

var _ResponseSuccess = _interopRequireDefault(require("../model/ResponseSuccess"));

var _ResponseUser = _interopRequireDefault(require("../model/ResponseUser"));

var _ResponseUsers = _interopRequireDefault(require("../model/ResponseUsers"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Users service.
* @module api/UsersApi
* @version 1.0.0
*/
var UsersApi = /*#__PURE__*/function () {
  /**
  * Constructs a new UsersApi. 
  * @alias module:api/UsersApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function UsersApi(apiClient) {
    _classCallCheck(this, UsersApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the apiV1UsersGet operation.
   * @callback module:api/UsersApi~apiV1UsersGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ResponseUsers} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get list of users
   * @param {module:api/UsersApi~apiV1UsersGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ResponseUsers}
   */


  _createClass(UsersApi, [{
    key: "apiV1UsersGet",
    value: function apiV1UsersGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResponseUsers["default"];
      return this.apiClient.callApi('/api/v1/users/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the apiV1UsersInfoGet operation.
     * @callback module:api/UsersApi~apiV1UsersInfoGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseUser} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get user info
     * @param {module:api/UsersApi~apiV1UsersInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseUser}
     */

  }, {
    key: "apiV1UsersInfoGet",
    value: function apiV1UsersInfoGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResponseUser["default"];
      return this.apiClient.callApi('/api/v1/users/info/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the apiV1UsersInfoPost operation.
     * @callback module:api/UsersApi~apiV1UsersInfoPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseSuccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user info
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestUpdateUser} opts.requestUpdateUser 
     * @param {module:api/UsersApi~apiV1UsersInfoPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseSuccess}
     */

  }, {
    key: "apiV1UsersInfoPost",
    value: function apiV1UsersInfoPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['requestUpdateUser'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ResponseSuccess["default"];
      return this.apiClient.callApi('/api/v1/users/info/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the apiV1UsersPost operation.
     * @callback module:api/UsersApi~apiV1UsersPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseSuccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user as admin
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestUser} opts.requestUser 
     * @param {module:api/UsersApi~apiV1UsersPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseSuccess}
     */

  }, {
    key: "apiV1UsersPost",
    value: function apiV1UsersPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['requestUser'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ResponseSuccess["default"];
      return this.apiClient.callApi('/api/v1/users/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return UsersApi;
}();

exports["default"] = UsersApi;