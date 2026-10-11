# Monitoring Guide — Prometheus and Grafana

This guide supports the monitoring section of the Go Furniture DevOps project documentation.

## Purpose

- **Prometheus** collects and stores metrics from configured scrape targets.
- **Grafana** queries a configured data source such as Prometheus and displays metrics in dashboards.

The metrics available depend on the exporters, endpoints, and scrape configuration actually deployed.

## Verification walkthrough

### 1. Check the Kubernetes environment

Run in PowerShell:

```powershell
kubectl get pods -A
kubectl get services -A
kubectl get deployments -A
```

Identify the monitoring namespace and the actual Prometheus/Grafana service names in your environment. Do not assume a namespace or port.

### 2. Check Prometheus targets

1. Open the Prometheus UI using the actual service URL or port-forward configured in your cluster.
2. Navigate to **Status → Targets**.
3. Confirm that the target relevant to your demonstration is `UP`.
4. Run a query for a metric exposed by that target and verify it returns data.

A metric such as `kube_pod_info` is only available when the relevant Kubernetes-state metrics exporter is deployed and scraped.

### 3. Check Grafana

1. Open Grafana using its configured URL.
2. Open **Connections / Data sources** and confirm the Prometheus data source works.
3. Open the dashboard and select a suitable time range.
4. Confirm that the panels return data.
5. Be prepared to explain each panel's query and what it measures.

## Be precise about the monitoring scope

Use one of these descriptions depending on what you verified:

- **Cluster monitoring:** Prometheus collects Kubernetes or node metrics and Grafana visualizes them.
- **Application monitoring:** Prometheus scrapes application-specific metrics exposed by Go Furniture or its backend.
- **Combined monitoring:** Both cluster metrics and application metrics are collected and visualized.

Do not describe the project as having application-level monitoring unless the scrape target and metrics demonstrate that integration.

## Suggested evidence to capture

- Prometheus Targets page with relevant targets and their health.
- Prometheus query result for a metric you can explain.
- Grafana dashboard with a visible time range and meaningful panel titles.
- Kubernetes pod/service output that establishes which environment is being monitored.

Capture these from the actual running environment. Do not use fabricated dashboard screenshots.
