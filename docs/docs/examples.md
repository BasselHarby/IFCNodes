---
sidebar_position: 14
title: Examples
---

# Example Workflows

This page provides practical examples of common IFCNodes workflows.

## Example 1: Extract All Wall Properties

**Goal:** Get properties from all walls in the model.

**Nodes used:**
1. IFCReader.LoadIFCModel
2. IFCFilter.AllElements
3. IFCQuery.GetProperties

**Steps:**
1. Load your IFC file with IFCReader.LoadIFCModel
2. Use IFCFilter.AllElements with baseClass set to "IfcWall"
3. Connect the GlobalIds to IFCQuery.GetProperties (set lacing to Longest)
4. Output is a list of property dictionaries for each wall

## Example 2: Find Elements by Property Value

**Goal:** Find all elements with a specific fire rating.

**Nodes used:**
1. IFCReader.LoadIFCModel
2. IFCFilter.AllElements
3. IFCFilter.ByProperty

**Steps:**
1. Load your IFC file
2. Get all elements with IFCFilter.AllElements
3. Use IFCFilter.ByProperty with:
   - propertyName: "FireRating"
   - comparisonOperator: "="
   - value: "2HR"
4. Output is GlobalIds of elements with 2-hour fire rating

## Example 3: Elements on a Specific Level

**Goal:** Get all elements contained in a specific building storey.

**Nodes used:**
1. IFCReader.LoadIFCModel
2. IFCFilter.ElementsInSpatial

**Steps:**
1. Load your IFC file
2. Use IFCFilter.ElementsInSpatial with:
   - spatialGlobalIdOrName: "Level 1" (or the storey name)
   - includeNested: true
3. Output is all GlobalIds on that level

## Example 4: Clash Detection Between Systems

**Goal:** Find clashes between structural and MEP elements.

**Nodes used:**
1. IFCReader.LoadIFCModel
2. IFCFilter.AllElements (two instances)
3. IFCClashDetection.DetectClashes

**Steps:**
1. Load your IFC file
2. Get structural elements: IFCFilter.AllElements with baseClass "IfcBeam" or "IfcColumn"
3. Get MEP elements: IFCFilter.AllElements with baseClass "IfcFlowSegment"
4. Use IFCClashDetection.DetectClashes with:
   - setA: structural GlobalIds
   - setB: MEP GlobalIds
   - clearance: 0.05 (50mm clearance)
5. Output shows all clash pairs and types

## Example 5: Export Element Data to Excel

**Goal:** Create a schedule of doors with their properties.

**Nodes used:**
1. IFCReader.LoadIFCModel
2. IFCFilter.AllElements
3. IFCQuery.GetPropertyValue
4. Dynamo Excel nodes

**Steps:**
1. Load your IFC file
2. Get all doors: IFCFilter.AllElements with baseClass "IfcDoor"
3. For each door, get properties using IFCQuery.GetPropertyValue:
   - "Width"
   - "Height"
   - "FireRating"
4. Combine into lists and export using Data.ExportToExcel

## Example 6: Visualize Elements by Type

**Goal:** Color-code elements in the viewer by their IFC class.

**Nodes used:**
1. IFCReader.LoadIFCModel
2. IFCFilter.AllElements (multiple instances)
3. IFCViewer.ViewWithColorGroups

**Steps:**
1. Load your IFC file
2. Create separate lists:
   - Walls: IFCFilter.AllElements with "IfcWall"
   - Doors: IFCFilter.AllElements with "IfcDoor"
   - Windows: IFCFilter.AllElements with "IfcWindow"
3. Use IFCViewer.ViewWithColorGroups with:
   - colors: ["Red", "Blue", "Green"]
   - globalIdGroups: [wallIds, doorIds, windowIds]

## Example 7: Find Nearby Elements

**Goal:** Find all elements within 2 meters of a selected element.

**Nodes used:**
1. IFCReader.LoadIFCModel
2. IFCSpatialQueries.GetNearbyElements

**Steps:**
1. Load your IFC file
2. Use IFCSpatialQueries.GetNearbyElements with:
   - globalId: The target element GlobalId
   - searchRadius: 2.0 (in model units)
3. Output includes GlobalId and Distance for each nearby element

## Example 8: Material Takeoff

**Goal:** Get quantities grouped by material.

**Nodes used:**
1. IFCReader.LoadIFCModel
2. IFCExplore.GetMaterials
3. IFCFilter.ElementsWithMaterial
4. IFCQuery.GetQuantityValue

**Steps:**
1. Load your IFC file
2. Get all materials: IFCExplore.GetMaterials
3. For each material, get elements: IFCFilter.ElementsWithMaterial
4. Sum quantities using IFCQuery.GetQuantityValue with "NetVolume" or "NetArea"

## Example 9: Model Validation

**Goal:** Find elements missing required properties.

**Nodes used:**
1. IFCReader.LoadIFCModel
2. IFCFilter.AllElements
3. IFCFilter.ByProperty

**Steps:**
1. Load your IFC file
2. Get all walls: IFCFilter.AllElements with "IfcWall"
3. Find walls WITH fire rating: IFCFilter.ByProperty with comparisonOperator "!null"
4. Use List.SetDifference to find walls WITHOUT fire rating
5. Output is walls missing the required property

## Example 10: AI-Assisted Analysis

**Goal:** Use natural language to explore the model.

**Nodes used:**
1. IFCReader.LoadIFCModel
2. IFCChat.ChatWithIFCModel

**Steps:**
1. Load your IFC file
2. Get your API key from https://aistudio.google.com/app/api-keys
3. Use IFCChat.ChatWithIFCModel with your API key and model
4. In the chat window, ask questions like:
   - "What types of elements are in this model?"
   - "Show me all exterior walls"
   - "Are there any doors without fire ratings?"
   - "Find clashes between pipes and beams"