"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse200"));

var _RequestCallEdit = _interopRequireDefault(require("../model/RequestCallEdit"));

var _RequestCallback = _interopRequireDefault(require("../model/RequestCallback"));

var _ResponseCallsList = _interopRequireDefault(require("../model/ResponseCallsList"));

var _ResponseError = _interopRequireDefault(require("../model/ResponseError"));

var _ResponseSuccess = _interopRequireDefault(require("../model/ResponseSuccess"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Call service.
* @module api/CallApi
* @version 1.0.0
*/
var CallApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CallApi.
  * @alias module:api/CallApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CallApi(apiClient) {
    _classCallCheck(this, CallApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the apiV1CallsGet operation.
   * @callback module:api/CallApi~apiV1CallsGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ResponseCallsList} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get list of calls
   * @param {Object} opts Optional parameters
   * @param {module:model/String} opts.state
   * @param {Boolean} opts.needRecall
   * @param {Date} opts.startedFrom
   * @param {Date} opts.startedTo
   * @param {module:model/String} opts.callType
   * @param {Number} opts.limit  (default to 1000)
   * @param {Number} opts.offset  (default to 0)
   * @param {module:api/CallApi~apiV1CallsGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ResponseCallsList}
   */


  _createClass(CallApi, [{
    key: "apiV1CallsGet",
    value: function apiV1CallsGet(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'state': opts['state'],
        'need_recall': opts['needRecall'],
        'started_from': opts['startedFrom'],
        'started_to': opts['startedTo'],
        'call_type': opts['callType'],
        'limit': opts['limit'],
        'number': opts['number'],
        'offset': opts['offset']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResponseCallsList["default"];
      return this.apiClient.callApi('/api/v1/calls/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the apiV1CallsPost operation.
     * @callback module:api/CallApi~apiV1CallsPostCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse200} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Callback
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestCallback} opts.requestCallback
     * @param {module:api/CallApi~apiV1CallsPostCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse200}
     */

  }, {
    key: "apiV1CallsPost",
    value: function apiV1CallsPost(opts, callback) {
      opts = opts || {};
      var postBody = opts['requestCallback'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _InlineResponse["default"];
      return this.apiClient.callApi('/api/v1/calls/', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the apiV1CallsPut operation.
     * @callback module:api/CallApi~apiV1CallsPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResponseSuccess} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update call info
     * @param {Object} opts Optional parameters
     * @param {module:model/RequestCallEdit} opts.requestCallEdit
     * @param {module:api/CallApi~apiV1CallsPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ResponseSuccess}
     */

  }, {
    key: "apiV1CallsPut",
    value: function apiV1CallsPut(opts, callback) {
      opts = opts || {};
      var postBody = opts['requestCallEdit'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ResponseSuccess["default"];
      return this.apiClient.callApi('/api/v1/calls/', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CallApi;
}();

exports["default"] = CallApi;
