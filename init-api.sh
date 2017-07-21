#!/bin/bash

DOMAIN_NAME="julio.cloud"
API_NAME="api.$DOMAIN_NAME"
API_ID="t1a00r0x0a"
API_STAGE="prod"

CERT_ARN=$(aws acm request-certificate \
  --domain-name "*.$DOMAIN_NAME" \
  --query="CertificateArn" \
  --output=text)
echo $CERT_ARN

aws apigateway create-domain-name \
  --domain-name "$API_NAME" \
  --certificate-arn $CERT_ARN

aws apigateway create-base-path-mapping \
  --domain-name "$API_NAME" \
  --base-path "/" \
  --rest-api-id "$API_ID" \
  --stage "$API_STAGE"
