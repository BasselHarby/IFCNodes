---
sidebar_position: 3
title: Installation
---

# Installation

IFCNodes can be installed through the Dynamo Package Manager or manually.

## Method 1: Dynamo Package Manager (Recommended)

1. Open Dynamo
2. Go to **Packages** then **Search for a Package**
3. Search for **IFCNodes**
4. Click **Install**
5. Restart Dynamo

## Method 2: Manual Installation

1. Download the latest release from GitHub Releases at https://github.com/BasselHarby/IFCNodes/releases
2. Extract the ZIP file
3. Copy the IFCNodes folder to your Dynamo packages directory

**Default locations:**

For Dynamo Sandbox use this path: %AppData%\Dynamo\Dynamo Core\2.x\packages

For Dynamo for Revit use this path: %AppData%\Dynamo\Dynamo Revit\2.x\packages

4. Restart Dynamo

## Package Contents

The IFCNodes folder contains:
- bin folder with DLL files
- doc folder with Documentation
- dyf folder with Custom node definitions
- extra folder with Additional resources
- pkg.json file which is the Package manifest

## System Requirements

- **Dynamo**: 2.18.0 or later
- **Operating System**: Windows 10/11 (64-bit)
- **.NET Framework**: 4.8 or later

## Verifying Installation

After installation, you should see these categories in the Dynamo library:

- IFCNodes then IFCReader
- IFCNodes then IFCModel
- IFCNodes then IFCQuery
- IFCNodes then IFCFilter
- IFCNodes then IFCExplore
- IFCNodes then IFCSchema
- IFCNodes then IFCSpatialQueries
- IFCNodes then IFCClashDetection
- IFCNodes then IFCGeometry
- IFCNodes then IFCViewer
- IFCNodes then IFCChat

<div className="alert-box tip">
  <strong>Tip:</strong> If nodes do not appear, try restarting Dynamo completely by closing and reopening it.
</div>

## Troubleshooting

### Nodes not appearing

- Ensure all DLL files are in the bin folder
- Check that the pkg.json file is valid
- Restart Dynamo completely

### Missing dependencies

- IFCNodes includes all required dependencies in the package
- If you see missing assembly errors, re-download the package

### Geometry extraction errors

- Some complex IFC geometries may not extract perfectly
- Use IFCModel.GetGeometryErrors node to see extraction issues