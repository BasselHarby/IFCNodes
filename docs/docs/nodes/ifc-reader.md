---
sidebar_position: 1
title: IFCReader
---

# IFCReader

Nodes for loading and creating IFC models.

## LoadIFCModel

Loads IFC file(s) into a model wrapper. Automatically discovers and loads related IFC files from the same directory. Geometry is extracted and cached during loading for optimal performance.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcFilePath | string | Path to the primary IFC file |
| federationDirectory | string | Optional: Directory to search for additional IFC files. Empty searches the same directory as the primary file. Set to "none" to disable auto-discovery and load only the specified file. |

**Output:**

| Type | Description |
|------|-------------|
| IFCModel | Wrapper containing all loaded models with pre-built geometry cache |

**Usage Notes:**

- **Federation**: When loading from a directory, all .ifc files are loaded and indexed together
- **Performance**: Geometry is cached during load for fast subsequent access
- **Memory**: Large models may take time to load

**Example:**

File Path: "C:\Projects\Model.ifc"
Federation Directory: "" (empty for auto-discovery)

Result: IFCModel containing Model.ifc and any other IFC files in the same folder

---

## CreateIFCModel

Creates a new empty IFC model with minimal structure.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| filePath | string | Path where the IFC file will be saved |
| projectName | string | Optional: Name for the project. Default is "New Project" |

**Output:**

| Type | Description |
|------|-------------|
| IFCModel | Wrapper containing the new model |

**Created Structure:**

The new model contains:
- IfcProject
  - IfcSite
    - IfcBuilding
      - IfcBuildingStorey