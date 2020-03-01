# CloudmersiveConfigurationApiClient.SettingsApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**settingsCreateSetting**](SettingsApi.md#settingsCreateSetting) | **POST** /config/settings/create | Create a setting in the specified bucket
[**settingsListSettings**](SettingsApi.md#settingsListSettings) | **POST** /config/settings/list | Enumerate the settings in a bucket
[**settingsUpdateSetting**](SettingsApi.md#settingsUpdateSetting) | **POST** /config/settings/update | Update a setting


<a name="settingsCreateSetting"></a>
# **settingsCreateSetting**
> CreateSettingResponse settingsCreateSetting(request)

Create a setting in the specified bucket

### Example
```javascript
var CloudmersiveConfigurationApiClient = require('cloudmersive-configuration-api-client');
var defaultClient = CloudmersiveConfigurationApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConfigurationApiClient.SettingsApi();

var request = new CloudmersiveConfigurationApiClient.CreateSettingRequest(); // CreateSettingRequest | Request to perform the operation on


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.settingsCreateSetting(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**CreateSettingRequest**](CreateSettingRequest.md)| Request to perform the operation on | 

### Return type

[**CreateSettingResponse**](CreateSettingResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="settingsListSettings"></a>
# **settingsListSettings**
> ListSettingsResponse settingsListSettings(request)

Enumerate the settings in a bucket

### Example
```javascript
var CloudmersiveConfigurationApiClient = require('cloudmersive-configuration-api-client');
var defaultClient = CloudmersiveConfigurationApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConfigurationApiClient.SettingsApi();

var request = new CloudmersiveConfigurationApiClient.ListSettingsRequest(); // ListSettingsRequest | Request to perform the operation on


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.settingsListSettings(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**ListSettingsRequest**](ListSettingsRequest.md)| Request to perform the operation on | 

### Return type

[**ListSettingsResponse**](ListSettingsResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

<a name="settingsUpdateSetting"></a>
# **settingsUpdateSetting**
> UpdateSettingResponse settingsUpdateSetting(request)

Update a setting

### Example
```javascript
var CloudmersiveConfigurationApiClient = require('cloudmersive-configuration-api-client');
var defaultClient = CloudmersiveConfigurationApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConfigurationApiClient.SettingsApi();

var request = new CloudmersiveConfigurationApiClient.UpdateSettingRequest(); // UpdateSettingRequest | Request to perform the operation on


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.settingsUpdateSetting(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**UpdateSettingRequest**](UpdateSettingRequest.md)| Request to perform the operation on | 

### Return type

[**UpdateSettingResponse**](UpdateSettingResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

