# IFCNodes

**Powerful IFC Processing for Dynamo Visual Programming**

IFCNodes is a comprehensive Dynamo package that enables you to load, query, filter, visualize, and analyze IFC (Industry Foundation Classes) files directly within your Dynamo workflows.

## Documentation

Full documentation is available at: **https://BasselHarby.github.io/IFCNodes**

## Features

- **Model Loading**: Load single or federated IFC models with automatic geometry caching
- **Data Querying**: Extract properties, quantities, materials, classifications, and relationships
- **Smart Filtering**: Filter elements by attributes, properties, quantities, spatial containment
- **Geometry Extraction**: Convert IFC geometry to Dynamo meshes and bounding boxes
- **Clash Detection**: Detect hard clashes, soft clashes, and clearance violations
- **AI-Powered Chat**: Chat with your IFC model using natural language (requires Google AI API key)
- **3D Visualization**: Built-in viewer with highlighting and isolation capabilities
- **Schema Knowledge**: Query IFC4x3 schema without loading a model

## Installation

### Option 1: Dynamo Package Manager (Recommended)

1. Open Dynamo
2. Go to Packages > Search for a Package
3. Search for "IFCNodes"
4. Click Install

### Option 2: Manual Installation

1. Download the latest release from the [Releases](https://github.com/BasselHarby/IFCNodes/releases) page
2. Extract the ZIP file
3. Copy the IFCNodes folder to your Dynamo packages directory:
   - Dynamo Sandbox: `%AppData%\Dynamo\Dynamo Core\2.x\packages`
   - Dynamo for Revit: `%AppData%\Dynamo\Dynamo Revit\2.x\packages`
4. Restart Dynamo

## Requirements

- Dynamo 2.x or later (tested on 2.19.0) 
- Windows 10/11 (64-bit)
- .NET Framework 4.8 or later

## Quick Start

1. Add **IFCReader.LoadIFCModel** to your canvas
2. Connect a file path to load your IFC file
3. Use **IFCFilter** nodes to select elements
4. Use **IFCQuery** nodes to extract data
5. Use **IFCViewer** to visualize results

## Node Categories

| Category | Description |
|----------|-------------|
| IFCReader | Load and create IFC models |
| IFCModel | Model information and statistics |
| IFCQuery | Element-level data retrieval |
| IFCFilter | Filter elements by criteria |
| IFCExplore | Discover model contents |
| IFCSchema | Static IFC4x3 schema knowledge |
| IFCSpatialQueries | Geometric spatial queries |
| IFCClashDetection | Clash detection |
| IFCGeometry | Extract Dynamo geometry |
| IFCViewer | 3D visualization |
| IFCChat | AI-powered chat interface |

## AI Chat Setup

The IFCChat feature requires a Google AI Studio API key:

1. Visit https://aistudio.google.com/app/api-keys
2. Create an API key
3. Use it with the IFCChat.ChatWithIFCModel node

## License

MIT License - see LICENSE file for details

## Version

Current version: **0.0.2**