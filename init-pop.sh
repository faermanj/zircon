aws configure set preview.cloudfront true

aws cloudfront create-distribution \
  --distribution-config file://distribution-config.json
