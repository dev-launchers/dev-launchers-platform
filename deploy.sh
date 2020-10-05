#!/bin/bash
# Replace variables in wrangler.toml with env vars defined in travis
sed -e "s~WORKER_NAME~$WORKER_NAME~" \
    -e "s~ACCOUNT_ID~$ACCOUNT_ID~" \
    -e "s~ROUTE~$ROUTE~" \
    -e "s~ZONE_ID~$ZONE_ID~" \
    wrangler.toml > templated_wrangler.toml
mv templated_wrangler.toml wrangler.toml
CF_API_KEY=$CF_API_KEY CF_EMAIL=$CF_EMAIL wrangler publish
CF_API_KEY=$CF_API_KEY CF_EMAIL=$CF_EMAIL wrangler publish
rm wrangler.toml