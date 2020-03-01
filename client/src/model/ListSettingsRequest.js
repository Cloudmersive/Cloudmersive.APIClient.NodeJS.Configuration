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
    root.CloudmersiveConfigurationApiClient.ListSettingsRequest = factory(root.CloudmersiveConfigurationApiClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ListSettingsRequest model module.
   * @module model/ListSettingsRequest
   * @version 2.4.2
   */

  /**
   * Constructs a new <code>ListSettingsRequest</code>.
   * Request to enumerate settings
   * @alias module:model/ListSettingsRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ListSettingsRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ListSettingsRequest} obj Optional instance to populate.
   * @return {module:model/ListSettingsRequest} The populated <code>ListSettingsRequest</code> instance.
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
    }
    return obj;
  }

  /**
   * BucketID of the bucket to enumerate the settings of; you can create a bucket by navigating to account.cloudmersive.com, clicking on Settings &gt; API Configuration &gt; Create Bucket
   * @member {String} BucketID
   */
  exports.prototype['BucketID'] = undefined;
  /**
   * SecretKey of the bucket enumerate the settings of; you can create a bucket by navigating to account.cloudmersive.com, clicking on Settings &gt; API Configuration &gt; Create Bucket
   * @member {String} BucketSecretKey
   */
  exports.prototype['BucketSecretKey'] = undefined;



  return exports;
}));


