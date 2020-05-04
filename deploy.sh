# Deploys a clean Gatsby build to Firebase
# Requires Gatsby and Firebase CLI
#
#!/bin/bash

gatsby clean
gatsby build
firebase deploy

