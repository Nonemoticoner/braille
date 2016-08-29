#!/bin/bash -x

run (){
  mocha \
  -b \
  --require should \
  --reporter spec \
  --timeout 120000 \
  --slow 300 \
  "$@"
}

run tests/test.js
