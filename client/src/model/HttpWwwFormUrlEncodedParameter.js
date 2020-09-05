/**
 * configapi
 * Config API lets you easily manage configuration at scale.
 *
 * OpenAPI spec version: v1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TaskOutputReference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaskOutputReference'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConfigurationApiClient) {
      root.CloudmersiveConfigurationApiClient = {};
    }
    root.CloudmersiveConfigurationApiClient.HttpWwwFormUrlEncodedParameter = factory(root.CloudmersiveConfigurationApiClient.ApiClient, root.CloudmersiveConfigurationApiClient.TaskOutputReference);
  }
}(this, function(ApiClient, TaskOutputReference) {
  'use strict';




  /**
   * The HttpWwwFormUrlEncodedParameter model module.
   * @module model/HttpWwwFormUrlEncodedParameter
   * @version 2.4.3
   */

  /**
   * Constructs a new <code>HttpWwwFormUrlEncodedParameter</code>.
   * Defines an x-www-form-urlencoded parameter
   * @alias module:model/HttpWwwFormUrlEncodedParameter
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>HttpWwwFormUrlEncodedParameter</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/HttpWwwFormUrlEncodedParameter} obj Optional instance to populate.
   * @return {module:model/HttpWwwFormUrlEncodedParameter} The populated <code>HttpWwwFormUrlEncodedParameter</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('KeyName')) {
        obj['KeyName'] = ApiClient.convertToType(data['KeyName'], 'String');
      }
      if (data.hasOwnProperty('KeyValue')) {
        obj['KeyValue'] = ApiClient.convertToType(data['KeyValue'], 'String');
      }
      if (data.hasOwnProperty('UseOutputFromPreviousTask')) {
        obj['UseOutputFromPreviousTask'] = TaskOutputReference.constructFromObject(data['UseOutputFromPreviousTask']);
      }
    }
    return obj;
  }

  /**
   * Key name of the parameter
   * @member {String} KeyName
   */
  exports.prototype['KeyName'] = undefined;
  /**
   * Key value of the paramer (must be of type text); if set, do not use UseOutputFromPreviousTask
   * @member {String} KeyValue
   */
  exports.prototype['KeyValue'] = undefined;
  /**
   * Optional; use the output from a previous task as the input to this parameter.  Set to null (default) to ignore.
   * @member {module:model/TaskOutputReference} UseOutputFromPreviousTask
   */
  exports.prototype['UseOutputFromPreviousTask'] = undefined;



  return exports;
}));


