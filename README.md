# Renovator - a dependency bot 
- Purpose of this project is simple, scan Java microservices xyz, zyx
- Create a PR out of the scan
- Well done, you are up-to-date with the newest version of the dependencies
---
## Used:
- `azure-pipelines.yml` to define the pipeline structure and it's jobs
- `config.js` for the authentication and authorization configuration
- `.npmrc` registry (npm) configuration
- `package-lock.json` for the global configuration
---
## Needed credentials:
- `GITHUB_COM_TOKEN` - PAT token
- `SYSTEM_ACCESSTOKEN` - build in ADO
---
# Reminder 
Example is specified for the Azure DevOps