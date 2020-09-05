# cloudmersive-configuration-api-client

CloudmersiveConfigurationApiClient - JavaScript client for cloudmersive-configuration-api-client
Config API lets you easily manage configuration at scale.
[Cloudmersive Configuration API](https://www.cloudmersive.com/convert-api) provides advanced configuration and orchestration capabilities.

- API version: v1
- Package version: 2.4.3


## Installation

### For the [Cloudmersive Configuration API](https://www.cloudmersive.com/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install cloudmersive-configuration-api-client --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your cloudmersive-configuration-api-client from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('cloudmersive-configuration-api-client')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var CloudmersiveConfigurationApiClient = require('cloudmersive-configuration-api-client');

var defaultClient = CloudmersiveConfigurationApiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Apikey.apiKeyPrefix['Apikey'] = "Token"

var api = new CloudmersiveConfigurationApiClient.OrchestratorApi()

var request = new CloudmersiveConfigurationApiClient.HttpOrchestrationRequest(); // {HttpOrchestrationRequest} 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.orchestratorHttpSimple(request, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://api.cloudmersive.com*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*CloudmersiveConfigurationApiClient.OrchestratorApi* | [**orchestratorHttpSimple**](docs/OrchestratorApi.md#orchestratorHttpSimple) | **POST** /config/orchestrator/http/simple | Orchestrate multiple HTTP API calls with a single API call in the order specified.  Call other Cloudmersive APIs or third party APIs.  For Cloudmersive APIs, the API Key will automatically propogate to the child calls without needing to be set explicitly.  Name each task and reference the output of a previous task in the inputs to a given task.
*CloudmersiveConfigurationApiClient.SettingsApi* | [**settingsCreateSetting**](docs/SettingsApi.md#settingsCreateSetting) | **POST** /config/settings/create | Create a setting in the specified bucket
*CloudmersiveConfigurationApiClient.SettingsApi* | [**settingsListSettings**](docs/SettingsApi.md#settingsListSettings) | **POST** /config/settings/list | Enumerate the settings in a bucket
*CloudmersiveConfigurationApiClient.SettingsApi* | [**settingsUpdateSetting**](docs/SettingsApi.md#settingsUpdateSetting) | **POST** /config/settings/update | Update a setting


## Documentation for Models

 - [CloudmersiveConfigurationApiClient.CreateSettingRequest](docs/CreateSettingRequest.md)
 - [CloudmersiveConfigurationApiClient.CreateSettingResponse](docs/CreateSettingResponse.md)
 - [CloudmersiveConfigurationApiClient.HttpFormDataParameter](docs/HttpFormDataParameter.md)
 - [CloudmersiveConfigurationApiClient.HttpGetParameter](docs/HttpGetParameter.md)
 - [CloudmersiveConfigurationApiClient.HttpOrchestrationHeader](docs/HttpOrchestrationHeader.md)
 - [CloudmersiveConfigurationApiClient.HttpOrchestrationRequest](docs/HttpOrchestrationRequest.md)
 - [CloudmersiveConfigurationApiClient.HttpOrchestrationResponse](docs/HttpOrchestrationResponse.md)
 - [CloudmersiveConfigurationApiClient.HttpOrchestrationTask](docs/HttpOrchestrationTask.md)
 - [CloudmersiveConfigurationApiClient.HttpRawBinaryParameter](docs/HttpRawBinaryParameter.md)
 - [CloudmersiveConfigurationApiClient.HttpRawTextParameter](docs/HttpRawTextParameter.md)
 - [CloudmersiveConfigurationApiClient.HttpWwwFormUrlEncodedParameter](docs/HttpWwwFormUrlEncodedParameter.md)
 - [CloudmersiveConfigurationApiClient.ListSettingsRequest](docs/ListSettingsRequest.md)
 - [CloudmersiveConfigurationApiClient.ListSettingsResponse](docs/ListSettingsResponse.md)
 - [CloudmersiveConfigurationApiClient.SettingValue](docs/SettingValue.md)
 - [CloudmersiveConfigurationApiClient.TaskOutputReference](docs/TaskOutputReference.md)
 - [CloudmersiveConfigurationApiClient.UpdateSettingRequest](docs/UpdateSettingRequest.md)
 - [CloudmersiveConfigurationApiClient.UpdateSettingResponse](docs/UpdateSettingResponse.md)


## Documentation for Authorization


### Apikey

- **Type**: API key
- **API key parameter name**: Apikey
- **Location**: HTTP header

