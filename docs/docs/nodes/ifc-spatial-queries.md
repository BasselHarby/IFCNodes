---
sidebar_position: 7
title: IFCSpatialQueries
---

# IFCSpatialQueries

Spatial and geometric queries on IFC models using a Bounding Volume Hierarchy (BVH). These queries detect geometric relationships not explicitly defined in the IFC schema.

<div className="alert-box info">
  <strong>Geometric vs Explicit Relationships:</strong> These nodes find relationships based on geometry (touching, intersecting, nearby). For explicitly defined IFC relationships, use IFCQuery nodes instead.
</div>

## GetModelPrecision

Returns the model's geometric precision.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |

**Output:**

| Type | Description |
|------|-------------|
| double | The precision value in model units |

---

## GetOneMeterValue

Returns the value of one meter in the model's units.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |

**Output:**

| Type | Description |
|------|-------------|
| double | One meter expressed in model units |

---

## GetSpatialHierarchy

Builds and returns the spatial index structure for all loaded models. Uses a Bounding Volume Hierarchy (BVH) for efficient spatial queries.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Contains the BVH structure, element count, and coordinate warnings |

---

## GetElementBoundingBox

Returns the axis-aligned bounding box of an element.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The GlobalId of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | MinX, MinY, MinZ, MaxX, MaxY, MaxZ, SizeX, SizeY, SizeZ, CenterX, CenterY, CenterZ |

---

## QueryByBoundingBox

Returns all elements whose bounding boxes intersect the specified region.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| minX | double | Minimum X coordinate |
| minY | double | Minimum Y coordinate |
| minZ | double | Minimum Z coordinate |
| maxX | double | Maximum X coordinate |
| maxY | double | Maximum Y coordinate |
| maxZ | double | Maximum Z coordinate |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds of elements in the region |

---

## GetIntersectingElements

Returns all elements whose bounding boxes intersect (overlap) with the source element. Intersection means the boxes share volume.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The GlobalId of the source element |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds of intersecting elements |

---

## GetTouchingElements

Returns all elements whose bounding boxes touch the source element. Touching means the boxes share a boundary but do not overlap.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The GlobalId of the source element |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds of touching elements |

---

## GetContainedElements

Returns all elements whose bounding boxes are fully contained within the source element.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The GlobalId of the source element |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds of contained elements |

---

## GetContainingElements

Returns all elements whose bounding boxes fully contain the source element.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The GlobalId of the source element |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds of containing elements |

---

## GetNearbyElements

Returns all elements within a specified distance from the source element.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The GlobalId of the source element |
| searchRadius | double | Maximum distance to search in model units |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Each dictionary contains GlobalId and Distance |

---

## GetElementsOnStorey

Returns all elements located on a specific building storey. Uses explicit storey elevation and height when available, falls back to geometric detection.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| storeyGlobalIdOrName | string | The GlobalId or Name of the building storey |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds of elements on the storey |

---

## GetSpaceBoundingElements

Returns all elements that bound a specific space. Combines explicit IFC relationships and geometric proximity detection.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| spaceGlobalId | string | The GlobalId of the IfcSpace |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Each dictionary contains GlobalId, Name, IfcClass, SourceModel, and RelationType |

---

## GetConnectedElements

Returns all elements geometrically connected to the source element. Includes intersecting, touching, and contained elements.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The GlobalId of the source element |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Each dictionary contains GlobalId, Name, IfcClass, SourceModel, and RelationType |

<div className="alert-box tip">
  <strong>Tip:</strong> For explicit IFC relationships like IfcRelConnectsElements, use IFCQuery.GetConnectivity instead.
</div>