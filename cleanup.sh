#!/bin/bash

DOMAIN_NAME=$(aws apigateway get-domain-names \
--query="items[0].domainName" \
--output=text )


echo $DOMAIN_NAME

aws apigateway delete-domain-name --domain-name $DOMAIN_NAME
