# Final Review Checklist

Use this checklist before publishing the repository or presenting it to a DevOps professional.

## Documentation and presentation
- [ ] README describes Go Furniture specifically, not a generic project.
- [ ] Architecture reflects the actual app and deployment flow.
- [ ] Project folder names and paths match the repository (`K8s/` capitalization).
- [ ] Screenshots are genuine and current.
- [ ] No stale local machine paths or sensitive data are published.

## GitHub and Jenkins
- [ ] Latest changes are committed and pushed to the intended branch.
- [ ] Jenkins checks out the correct repository and branch.
- [ ] Pipeline stages complete in the intended order.
- [ ] Build and push occur before deployment of the image version.
- [ ] Docker Hub credentials are stored in Jenkins Credentials.
- [ ] A successful run is available before claiming the full pipeline passed.

## Docker and Kubernetes
- [ ] Image names and tags in Jenkins match Docker Hub and Kubernetes manifests.
- [ ] Kubernetes manifests are under `K8s/` and Jenkins uses the matching path.
- [ ] Deployments, pods, and services are healthy.
- [ ] Rollout status has been verified.
- [ ] PostgreSQL data is backed up before any destructive volume or database operation.

## Prometheus and Grafana
- [ ] Relevant Prometheus target is `UP`.
- [ ] Queries return metrics for the selected environment.
- [ ] Grafana data source test succeeds.
- [ ] Dashboard panels display data.
- [ ] Documentation clearly distinguishes cluster monitoring from Go Furniture application monitoring.

## Security
- [ ] `.env`, tokens, private keys, kubeconfigs, and real credentials are not committed.
- [ ] Development database credentials are clearly labeled and not reused for production.
- [ ] No secrets are visible in screenshots or console output.
