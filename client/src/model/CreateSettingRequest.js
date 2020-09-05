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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.CloudmersiveConfigurationApiClient) {
      root.CloudmersiveConfigurationApiClient = {};
    }
    root.CloudmersiveConfigurationApiClient.CreateSettingRequest = factory(root.CloudmersiveConfigurationApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateSettingRequest model module.
   * @module model/CreateSettingRequest
   * @version 2.4.3
   */

  /**
   * Constructs a new <code>CreateSettingRequest</code>.
   * Request to create a setting
   * @alias module:model/CreateSettingRequest
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>CreateSettingRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateSettingRequest} obj Optional instance to populate.
   * @return {module:model/CreateSettingRequest} The populated <code>CreateSettingRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('BucketID')) {
        obj['BucketID'] = ApiClient.convertToType(data['BucketID'], 'String');
      }
      if (data.hasOwnProperty('BucketSecretKey')) {
        obj['BucketSecretKey'] = ApiClient.convertToType(data['BucketSecretKey'], 'String');
      }
      if (data.hasOwnProperty('SettingName')) {
        obj['SettingName'] = ApiClient.convertToType(data['SettingName'], 'String');
      }
      if (data.hasOwnProperty('SettingType')) {
        obj['SettingType'] = ApiClient.convertToType(data['SettingType'], 'String');
      }
      if (data.hasOwnProperty('SettingValue')) {
        obj['SettingValue'] = ApiClient.convertToType(data['SettingValue'], Object);
      }
      if (data.hasOwnProperty('SettingDescription')) {
        obj['SettingDescription'] = ApiClient.convertToType(data['SettingDescription'], 'String');
      }
      if (data.hasOwnProperty('SettingTags')) {
        obj['SettingTags'] = ApiClient.convertToType(data['SettingTags'], 'String');
      }
    }
    return obj;
  }

  /**
   * BucketID of the bucket to place the setting in; you can create a bucket by navigating to account.cloudmersive.com, clicking on Settings &gt; API Configuration &gt; Create Bucket
   * @member {String} BucketID
   */
  exports.prototype['BucketID'] = undefined;
  /**
   * SecretKey of the bucket to place the setting in; you can create a bucket by navigating to account.cloudmersive.com, clicking on Settings &gt; API Configuration &gt; Create Bucket
   * @member {String} BucketSecretKey
   */
  exports.prototype['BucketSecretKey'] = undefined;
  /**
   * Name of the setting to create
   * @member {String} SettingName
   */
  exports.prototype['SettingName'] = undefined;
  /**
   * Type of setting to create; possible values are STRING, JSON
   * @member {String} SettingType
   */
  exports.prototype['SettingType'] = undefined;
  /**
   * Initial value of the setting
   * @member {Object} SettingValue
   */
  exports.prototype['SettingValue'] = undefined;
  /**
   * Description of the setting
   * @member {String} SettingDescription
   */
  exports.prototype['SettingDescription'] = undefined;
  /**
   * Tags to apply to the setting
   * @member {String} SettingTags
   */
  exports.prototype['SettingTags'] = undefined;



  return exports;
}));


