# CloudmersiveConfigurationApiClient.OrchestratorApi

All URIs are relative to *https://api.cloudmersive.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**orchestratorHttpSimple**](OrchestratorApi.md#orchestratorHttpSimple) | **POST** /config/orchestrator/http/simple | Orchestrate multiple HTTP API calls with a single API call in the order specified.  Call other Cloudmersive APIs or third party APIs.  For Cloudmersive APIs, the API Key will automatically propogate to the child calls without needing to be set explicitly.  Name each task and reference the output of a previous task in the inputs to a given task.


<a name="orchestratorHttpSimple"></a>
# **orchestratorHttpSimple**
> HttpOrchestrationResponse orchestratorHttpSimple(request)

Orchestrate multiple HTTP API calls with a single API call in the order specified.  Call other Cloudmersive APIs or third party APIs.  For Cloudmersive APIs, the API Key will automatically propogate to the child calls without needing to be set explicitly.  Name each task and reference the output of a previous task in the inputs to a given task.

### Example
```javascript
var CloudmersiveConfigurationApiClient = require('cloudmersive-configuration-api-client');
var defaultClient = CloudmersiveConfigurationApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix = 'Token';

var apiInstance = new CloudmersiveConfigurationApiClient.OrchestratorApi();

var request = new CloudmersiveConfigurationApiClient.HttpOrchestrationRequest(); // HttpOrchestrationRequest | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.orchestratorHttpSimple(request, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **request** | [**HttpOrchestrationRequest**](HttpOrchestrationRequest.md)|  | 

### Return type

[**HttpOrchestrationResponse**](HttpOrchestrationResponse.md)

### Authorization

[Apikey](../README.md#Apikey)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

