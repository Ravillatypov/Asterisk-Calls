"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResponseError = _interopRequireDefault(require("../model/ResponseError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* CallRecord service.
* @module api/CallRecordApi
* @version 1.0.0
*/
var CallRecordApi = /*#__PURE__*/function () {
  /**
  * Constructs a new CallRecordApi. 
  * @alias module:api/CallRecordApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function CallRecordApi(apiClient) {
    _classCallCheck(this, CallRecordApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the apiV1RecordGet operation.
   * @callback module:api/CallRecordApi~apiV1RecordGetCallback
   * @param {String} error Error message, if any.
   * @param {String} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get call record file as mp3
   * @param {module:api/CallRecordApi~apiV1RecordGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link String}
   */


  _createClass(CallRecordApi, [{
    key: "apiV1RecordGet",
    value: function apiV1RecordGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = ['jwt'];
      var contentTypes = [];
      var accepts = ['application/octet-stream', 'application/json'];
      var returnType = 'String';
      return this.apiClient.callApi('/api/v1/record/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return CallRecordApi;
}();

exports["default"] = CallRecordApi;