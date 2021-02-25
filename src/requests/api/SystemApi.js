"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ResponseAtsInfo = _interopRequireDefault(require("../model/ResponseAtsInfo"));

var _ResponseError = _interopRequireDefault(require("../model/ResponseError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* System service.
* @module api/SystemApi
* @version 1.0.0
*/
var SystemApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SystemApi. 
  * @alias module:api/SystemApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SystemApi(apiClient) {
    _classCallCheck(this, SystemApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the apiV1AtsInfoGet operation.
   * @callback module:api/SystemApi~apiV1AtsInfoGetCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ResponseAtsInfo} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get ats info
   * @param {module:api/SystemApi~apiV1AtsInfoGetCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ResponseAtsInfo}
   */


  _createClass(SystemApi, [{
    key: "apiV1AtsInfoGet",
    value: function apiV1AtsInfoGet(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ResponseAtsInfo["default"];
      return this.apiClient.callApi('/api/v1/ats/info/', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SystemApi;
}();

exports["default"] = SystemApi;