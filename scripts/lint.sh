#!/bin/bash

node_modules/eslint/bin/eslint.js --config .eslintrc.json $(find . -path ./node_modules -prune -o -name '*.js' -type f -print)
