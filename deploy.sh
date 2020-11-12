#!/bin/bash
#
# Deploys a clean Gatsby build to Firebase
# Requires Gatsby and Firebase CLI

gatsby clean
gatsby build

firebase deploy --token ${1}