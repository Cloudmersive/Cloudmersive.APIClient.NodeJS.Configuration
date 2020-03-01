﻿Remove-Item –path ./client –recurse
& java -jar swagger-codegen-cli-2.4.5.jar generate -i https://api.cloudmersive.com/swagger/api/config -l javascript -o client -c packageconfig.json
# (Get-Content ./client/src/api/ConvertDocumentApi.js).replace('var returnType = Object;', "var returnType = 'Blob';") | Set-Content ./client/src/api/ConvertDocumentApi.js
# (Get-Content ./client/src/api/ConvertWebApi.js).replace('var returnType = Object;', "var returnType = 'Blob';") | Set-Content ./client/src/api/ConvertWebApi.js

(Get-Content ./client/src/ApiClient.js).replace('this.timeout = 60000;', "this.timeout = 180000;") | Set-Content ./client/src/ApiClient.js
(Get-Content ./client/package.json).replace('"superagent": "3.5.2"', '"superagent": "3.8.3"') | Set-Content ./client/package.json
(Get-Content ./client/README.md).replace('This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:', '[Cloudmersive Configuration API](https://www.cloudmersive.com/convert-api) provides advanced configuration and orchestration capabilities.') | Set-Content ./client/README.md
(Get-Content ./client/README.md).replace('- Build package: io.swagger.codegen.languages.JavascriptClientCodegen', '') | Set-Content ./client/README.md

& npm build ./client


& npm build ./client

(Get-Content ./client/README.md).replace('For [Node.js](https://nodejs.org/)', "For the [Cloudmersive Configuration API](https://www.cloudmersive.com/)") | Set-Content ./client/README.md

Copy-Item ./client/README.md ./README.md