export type AmplifyDependentResourcesAttributes = {
    "auth": {
        "photowebapp": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolArn": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "function": {
        "menuItems": {
            "Name": "string",
            "Arn": "string",
            "Region": "string",
            "LambdaExecutionRole": "string"
        }
    },
    "api": {
        "menu": {
            "RootUrl": "string",
            "ApiName": "string",
            "ApiId": "string"
        }
    }
}