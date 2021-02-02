"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _RequestTag = _interopRequireDefault(require("../model/RequestTag"));

var _ResponseError = _interopRequireDefault(require("../model/ResponseError"));

var _ResponseTag = _interopRequireDefault(require("../model/ResponseTag"));

var _ResponseTags = _interopRequireDefault(require("../model/ResponseTags"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Tags service.
* @module api/TagsApi
* @version 1.0.0
*/
var TagsApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TagsApi. 
  * @alias module:api/TagsApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TagsApi(apiClient) {
    _classCallCheck(this, TagsApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the apiV1TagsGet operation.
   * @callback module:api/TagsApi~apiV1TagsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ResponseTags} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get tag
   * @param {module:api/TagsApi~apiV1TagsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ResponseTags}
   */


  _createClass(TagsApi, [{
    key: "apiV1TagsGet",
    value: function apiV1TagsGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResponseTags["default"];
      return this.apiClient.callApi('/api/v1/tags/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the apiV1TagsPost operation.
     * @callback module:api/TagsApi~apiV1TagsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseTag} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create tag
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestTag} opts.requestTag 
     * @param {module:api/TagsApi~apiV1TagsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseTag}
     */

  }, {
    key: "apiV1TagsPost",
    value: function apiV1TagsPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['requestTag'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ResponseTag["default"];
      return this.apiClient.callApi('/api/v1/tags/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TagsApi;
}();

exports["default"] = TagsApi;