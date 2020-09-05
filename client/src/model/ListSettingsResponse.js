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
    define(['ApiClient', 'model/SettingValue'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SettingValue'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConfigurationApiClient) {
      root.CloudmersiveConfigurationApiClient = {};
    }
    root.CloudmersiveConfigurationApiClient.ListSettingsResponse = factory(root.CloudmersiveConfigurationApiClient.ApiClient, root.CloudmersiveConfigurationApiClient.SettingValue);
  }
}(this, function(ApiClient, SettingValue) {
  'use strict';




  /**
   * The ListSettingsResponse model module.
   * @module model/ListSettingsResponse
   * @version 2.4.3
   */

  /**
   * Constructs a new <code>ListSettingsResponse</code>.
   * Result of enumerating settings
   * @alias module:model/ListSettingsResponse
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ListSettingsResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListSettingsResponse} obj Optional instance to populate.
   * @return {module:model/ListSettingsResponse} The populated <code>ListSettingsResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('Settings')) {
        obj['Settings'] = ApiClient.convertToType(data['Settings'], [SettingValue]);
      }
    }
    return obj;
  }

  /**
   * Settings in the bucket
   * @member {Array.<module:model/SettingValue>} Settings
   */
  exports.prototype['Settings'] = undefined;



  return exports;
}));


