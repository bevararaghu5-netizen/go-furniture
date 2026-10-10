# Go Furniture architecture notes

This document summarizes the known component flow:

1. The browser loads the frontend.
2. The frontend requests product data from the backend API.
3. The backend reads product records from PostgreSQL.
4. `database/init.sql` creates the products table and seeds sample products.
5. Docker images package the frontend and backend.
6. Kubernetes/Minikube runs the frontend, backend, and PostgreSQL workloads.

Before publishing detailed deployment documentation, verify the exact manifest paths, image tags, service names, ports, and environment variable names in the repository. Do not include secrets in documentation.
