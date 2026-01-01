---
sidebar_position: 9
title: IFCGeometry
---

# IFCGeometry

Nodes for extracting geometry from IFC elements and converting them to Dynamo geometry objects.

## GetElementGeometry

Extracts geometry from IFC elements and converts them to Dynamo meshes. Uses pre-cached geometry for optimal performance.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalIds | List of string | List of Global Unique IDs (GUIDs) of the elements |

**Output:**

| Type | Description |
|------|-------------|
| List of Mesh | Dynamo Mesh geometry objects. Null entries indicate elements where geometry is not available. |

---

## GetRepresentationGeometry

Extracts geometry from a specific representation of IFC elements.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalIds | List of string | List of Global Unique IDs (GUIDs) of the elements |
| representationIdentifier | string | The representation identifier to extract (e.g., "Body", "Axis", "FootPrint"). If empty, extracts Body representation or all representations if Body is not found. |

**Output:**

| Type | Description |
|------|-------------|
| List of Mesh | Dynamo Mesh geometry objects. Null entries indicate elements where geometry extraction failed. |

<div className="alert-box info">
  <strong>Note:</strong> Only Body representation uses the pre-built cache. Other representations are extracted on-demand. Use IFCQuery.GetElementRepresentations to find available representation identifiers.
</div>

---

## GetAllRepresentationGeometries

Extracts geometry from all representations of IFC elements as separate meshes.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalIds | List of string | List of Global Unique IDs (GUIDs) of the elements |

**Output:**

| Type | Description |
|------|-------------|
| Nested List of Mesh | One list per element containing meshes for each representation |

---

## GetElementBoundingBox

Returns the Axis-Aligned Bounding Box of elements as Dynamo Solids. Uses pre-cached bounding boxes for optimal performance.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalIds | List of string | List of Global Unique IDs (GUIDs) of the elements |

**Output:**

| Type | Description |
|------|-------------|
| List of Cuboid | Dynamo Cuboids representing the bounding boxes in world coordinates. Null entries indicate elements without bounding boxes. |

---

## IFC Representation Types

IFC elements can have multiple geometric representations:

| Identifier | Description |
|------------|-------------|
| Body | The main 3D geometry of the element |
| Axis | The axis or centerline (often for linear elements like walls, beams) |
| FootPrint | The 2D footprint outline |
| Box | A simple bounding box representation |
| Annotation | 2D annotation geometry |
| Profile | The profile shape |

---

## Performance Tips

- **Batch requests** by passing multiple GlobalIds at once rather than calling the node multiple times
- **Check for nulls** in the output list as some elements may not have extractable geometry
- **Use GetElementBoundingBox** for quick spatial analysis when full mesh detail is not needed