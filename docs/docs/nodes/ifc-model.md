---
sidebar_position: 2
title: IFCModel
---

# IFCModel

The IFCModel object is the central container for loaded IFC data. These nodes provide information about the loaded model(s).

## GetLoadedModelNames

Returns the names of all loaded models in the federation.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |

**Output:**

| Type | Description |
|------|-------------|
| List of string | List of model file names loaded in the federation |

---

## GetModelSummary

Returns summary statistics for all loaded models.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Summary information about the model |

**Output Dictionary Contains:**

- IsFederation: Whether multiple models are loaded
- ModelCount: Number of loaded models
- ModelNames: List of model names
- Per-model statistics including element counts

---

## GetGeometryErrors

Returns a list of all geometry extraction errors that occurred during model loading.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |

**Output:**

| Type | Description |
|------|-------------|
| List of string | Error messages for elements where geometry extraction failed |

<div className="alert-box info">
  <strong>Tip:</strong> Some complex parametric geometry may not extract perfectly. Use this node to identify which elements had issues.
</div>