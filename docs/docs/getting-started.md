---
sidebar_position: 2
title: Getting Started
---

# Getting Started with IFCNodes

This guide will walk you through the basic concepts of IFCNodes and help you create your first IFC workflow in Dynamo.

## Core Concepts

### The IFCModel Object

Almost every node in IFCNodes requires an **IFCModel** as input. This is a wrapper object that contains:

- One or more loaded IFC files (federation support)
- Pre-cached geometry for performance
- Fast GlobalId lookup indexes

### GlobalIds

Elements in IFC are identified by **GlobalId** (GUID) - a unique 22-character string like `2O2Fr$t4X7Zf8NOew3FL9r`. Most nodes work with lists of GlobalIds.

### Workflow Pattern

Most IFCNodes workflows follow this pattern:

**Load Model → Filter Elements → Query Data → Process/Visualize**

## Your First Workflow

### Step 1: Load an IFC File

1. Add **IFCReader.LoadIFCModel** to your canvas
2. Connect a **File Path** node with your `.ifc` file path
3. The output is an **IFCModel** object

### Step 2: Get All Elements

1. Add **IFCFilter.AllElements**
2. Connect the IFCModel to the `ifcModel` input
3. Optionally set `baseClass` to filter by type (e.g., `IfcWall`)
4. Output is a list of GlobalId strings

### Step 3: Query Element Data

1. Add **IFCQuery.GetProperties**
2. Connect your IFCModel
3. Connect a single GlobalId (use **List.FirstItem** on your list)
4. Output is a dictionary of all property sets

### Step 4: Visualize

1. Add **IFCViewer.ViewIFCModel**
2. Connect your IFCModel
3. Run the graph to open the 3D viewer

## Understanding Node Categories

| Category | Purpose | Requires IFCModel? |
|----------|---------|-------------------|
| **IFCReader** | Load and create IFC models | No (creates IFCModel) |
| **IFCModel** | Model information and statistics | Yes |
| **IFCQuery** | Get data from specific elements | Yes |
| **IFCFilter** | Filter elements by criteria | Yes |
| **IFCExplore** | Discover model contents | Yes |
| **IFCSchema** | IFC schema knowledge | **No** |
| **IFCSpatialQueries** | Geometric spatial queries | Yes |
| **IFCClashDetection** | Clash detection | Yes |
| **IFCGeometry** | Extract Dynamo geometry | Yes |
| **IFCViewer** | 3D visualization | Yes |
| **IFCChat** | AI-powered chat | Yes + API Key |

## Combining Filters

IFCNodes filters return lists of GlobalIds. You can combine them using Dynamo's built-in list operations:

- **AND**: Use `List.SetIntersection`
- **OR**: Use `List.SetUnion`
- **NOT**: Use `List.SetDifference`

## Next Steps

- [Installation Guide](./installation) - Different installation methods
- [Node Reference](./category/node-reference) - Detailed node documentation
- [Examples](./examples) - Real-world workflow examples