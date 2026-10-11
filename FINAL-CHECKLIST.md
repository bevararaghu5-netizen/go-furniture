# Final project review checklist

This ZIP contains an updated DevOps-focused README and monitoring guide. It does not overwrite the repository's Jenkinsfile or Kubernetes manifests because those must be aligned against the actual configuration before changes are safe.

- [ ] Verify all image names/tags in `Jenkinsfile` and `K8s/` manifests match.
- [ ] Ensure build and Docker Hub push occur before deployment.
- [ ] Use correct `K8s/` path capitalization.
- [ ] Verify the Jenkins pipeline succeeds end to end.
- [ ] Verify running pods use the intended image tags.
- [ ] Keep real secrets and kubeconfigs out of Git; use Jenkins Credentials for registry authentication.
- [ ] Treat Compose credentials as development-only and move them to environment configuration before public/production use.
- [ ] Verify Prometheus targets and Grafana panels with real data.
- [ ] Only claim Go Furniture-specific monitoring if its cluster/application targets are actually connected.
- [ ] Add real screenshots to `screenshots/`; don't use mockups as proof.
- [ ] Preserve database data; do not delete persistent volumes as part of routine cleanup.
