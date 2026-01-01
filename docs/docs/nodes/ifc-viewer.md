---
sidebar_position: 10
title: IFCViewer
---

# IFCViewer

Nodes for 3D visualization of IFC models.

## ViewIFCModel

Opens a 3D viewer for the loaded IFC Model. Displays all models in a federated project.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The wrapper containing the IFC Store(s) |

**Output:**

| Type | Description |
|------|-------------|
| string | Status message |

---

## ViewWithHighlight

Opens the viewer and highlights specific elements by their Global Unique IDs (GUIDs). Scans all loaded models to find the matching elements.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The IFC Model wrapper |
| globalIds | List of string | List of GlobalIds to highlight |
| color | string | Highlight color (e.g., "Red", "Blue", "#FF0000") |

**Output:**

| Type | Description |
|------|-------------|
| string | Status message |

---

## ViewWithColorGroups

Opens the viewer and highlights multiple groups of elements with different colors.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The IFC Model wrapper |
| colors | List of string | List of color strings (e.g., "Red", "Green", "#FF0000") |
| globalIdGroups | Nested List of string | Nested list of GlobalIds where each sublist corresponds to a color |

**Output:**

| Type | Description |
|------|-------------|
| string | Status message |

**Example:**

To color walls red, doors blue, and windows green:

- colors: ["Red", "Blue", "Green"]
- globalIdGroups: [[wall1, wall2], [door1, door2], [window1, window2]]

---

## ViewIsolated

Opens the viewer showing only the specified elements (isolation mode).

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The IFC Model wrapper |
| globalIds | List of string | List of GlobalIds to isolate and display |

**Output:**

| Type | Description |
|------|-------------|
| string | Status message |

---

## Supported Color Formats

The viewer accepts colors in these formats:

| Format | Examples |
|--------|----------|
| Named colors | "Red", "Blue", "Green", "Yellow", "Orange", "Purple", "Cyan", "Magenta" |
| Hex colors | "#FF0000", "#00FF00", "#0000FF" |
| RGB format | "rgb(255,0,0)", "rgb(0,255,0)" |

---

