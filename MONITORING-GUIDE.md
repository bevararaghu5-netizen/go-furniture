# Prometheus and Grafana — Monitoring Guide

## Short explanation for interviews

"I used Prometheus and Grafana in my DevOps learning projects. Prometheus collects and stores metrics from configured targets, and Grafana visualizes those metrics in dashboards. I check target health and confirm that queries return data. For Go Furniture specifically, I verify that the monitoring configuration is connected to the intended Kubernetes cluster or application before describing it as integrated monitoring."

## Responsibilities

- **Prometheus:** scraping, storing, and querying time-series metrics.
- **Grafana:** dashboards, panels, and visualization from a configured data source.
- **Exporter / metrics endpoint:** makes metrics available for Prometheus to scrape.
- **Target status:** indicates whether Prometheus can scrape a configured target; it does not prove that every desired metric is available.

## Verification

From PowerShell with the correct cluster context:

```powershell
kubectl config current-context
kubectl get pods -A
kubectl get services -A
kubectl get deployments -A
```

In Prometheus:
1. Open **Status → Targets**.
2. Check the relevant target is `UP`.
3. Query a metric supplied by that target and select a suitable time range.

In Grafana:
1. Verify the Prometheus data source.
2. Open the intended dashboard.
3. Check panel queries and confirm they return data.
4. Capture genuine screenshots showing the real dashboard.

## Be specific about the monitoring scope

- **Kubernetes/cluster monitoring:** metrics about pods, nodes, and cluster objects, depending on installed exporters.
- **Application monitoring:** metrics emitted by the application or an application exporter, such as request counts or latency.
- A Kubernetes dashboard does not automatically mean business/application-level metrics are being collected.
