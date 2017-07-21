'use strict';
const pop = require('./pop');
const api = require('./api');

function print(err,data){
  if (err) {
    console.error(err);
  }
  else {
    console.log(JSON.stringify(data));
  }
}

var obj = {
	resource: '/{proxy+}',
	path: '/tdc',
	httpMethod: 'GET',
	headers: {
		Accept: '*/*',
		'CloudFront-Forwarded-Proto': 'https',
		'CloudFront-Is-Desktop-Viewer': 'true',
		'CloudFront-Is-Mobile-Viewer': 'false',
		'CloudFront-Is-SmartTV-Viewer': 'false',
		'CloudFront-Is-Tablet-Viewer': 'false',
		'CloudFront-Viewer-Country': 'BR',
		Host: 't1a00r0x0a.execute-api.us-east-1.amazonaws.com',
		'User-Agent': 'curl/7.51.0',
		Via: '1.1 05f40c70c962f7b2d4d9cf720beb3f64.cloudfront.net (CloudFront)',
		'X-Amz-Cf-Id': '6Wh3nPyk_nc2cj_Ra4g2uGE_R6XFMKuPcEcdr-pejHLoSTWwMnqEHQ==',
		'X-Amzn-Trace-Id': 'Root=1-5970f293-5e864209014072e85a000e6e',
		'X-Forwarded-For': '201.23.92.98, 54.182.233.45',
		'X-Forwarded-Port': '443',
		'X-Forwarded-Proto': 'https'
	},
	queryStringParameters: null,
	pathParameters: {
		proxy: 'tdc'
	},
	stageVariables: null,
	requestContext: {
		path: '/prod/tdc',
		accountId: '769662751619',
		resourceId: '959w1n',
		stage: 'prod',
		requestId: '01f5ef41-6d77-11e7-b363-ab5e5812fc74',
		identity: {
			cognitoIdentityPoolId: null,
			accountId: null,
			cognitoIdentityId: null,
			caller: null,
			apiKey: '',
			sourceIp: '201.23.92.98',
			accessKey: null,
			cognitoAuthenticationType: null,
			cognitoAuthenticationProvider: null,
			userArn: null,
			userAgent: 'curl/7.51.0',
			user: null
		}
  }
};

/*
api.lookup({path:'/some/gist'},{},print);
pop.lookup(obj,
		resourcePath: '/{proxy+}',
		httpMethod: 'GET',
		apiId: 't1a00r0x0a'
	},
	body: null,
	isBase64Encoded: false
},
    {},
    print);
*/
console.log(JSON.stringify(obj));
