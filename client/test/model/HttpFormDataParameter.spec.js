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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CloudmersiveConfigurationApiClient);
  }
}(this, function(expect, CloudmersiveConfigurationApiClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CloudmersiveConfigurationApiClient.HttpFormDataParameter();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('HttpFormDataParameter', function() {
    it('should create an instance of HttpFormDataParameter', function() {
      // uncomment below and update the code to test HttpFormDataParameter
      //var instance = new CloudmersiveConfigurationApiClient.HttpFormDataParameter();
      //expect(instance).to.be.a(CloudmersiveConfigurationApiClient.HttpFormDataParameter);
    });

    it('should have the property parameterName (base name: "ParameterName")', function() {
      // uncomment below and update the code to test the property parameterName
      //var instance = new CloudmersiveConfigurationApiClient.HttpFormDataParameter();
      //expect(instance).to.be();
    });

    it('should have the property parameterTextValue (base name: "ParameterTextValue")', function() {
      // uncomment below and update the code to test the property parameterTextValue
      //var instance = new CloudmersiveConfigurationApiClient.HttpFormDataParameter();
      //expect(instance).to.be();
    });

    it('should have the property parameterFileContents (base name: "ParameterFileContents")', function() {
      // uncomment below and update the code to test the property parameterFileContents
      //var instance = new CloudmersiveConfigurationApiClient.HttpFormDataParameter();
      //expect(instance).to.be();
    });

    it('should have the property useOutputFromPreviousTask (base name: "UseOutputFromPreviousTask")', function() {
      // uncomment below and update the code to test the property useOutputFromPreviousTask
      //var instance = new CloudmersiveConfigurationApiClient.HttpFormDataParameter();
      //expect(instance).to.be();
    });

  });

}));
