"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResponseError = _interopRequireDefault(require("../model/ResponseError"));

var _ResponsePermissions = _interopRequireDefault(require("../model/ResponsePermissions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Permissions service.
* @module api/PermissionsApi
* @version 1.0.0
*/
var PermissionsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PermissionsApi. 
  * @alias module:api/PermissionsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PermissionsApi(apiClient) {
    _classCallCheck(this, PermissionsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the apiV1PermissionsGet operation.
   * @callback module:api/PermissionsApi~apiV1PermissionsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ResponsePermissions} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get permissions
   * @param {module:api/PermissionsApi~apiV1PermissionsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ResponsePermissions}
   */


  _createClass(PermissionsApi, [{
    key: "apiV1PermissionsGet",
    value: function apiV1PermissionsGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResponsePermissions["default"];
      return this.apiClient.callApi('/api/v1/permissions/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PermissionsApi;
}();

exports["default"] = PermissionsApi;