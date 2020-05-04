# Deploys Gatsby build to firebase
#
#!/bin/bash

gatsby clean
gatsby build
firebase deploy

