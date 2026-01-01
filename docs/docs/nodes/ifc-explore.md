---
sidebar_position: 5
title: IFCExplore
---

# IFCExplore

Model-wide discovery methods to explore what exists in a loaded IFC model.

## GetTypes

Returns all unique IFC class types used in the model with usage counts. Optionally filter to subtypes of a base class.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| baseClass | string | Optional base class to filter results (e.g., "IfcBuildingElement" returns only walls, doors, windows, etc.). Empty returns all product types. |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Each dictionary contains IfcClass, Count, and PredefinedTypes used |

---

## GetTypeObjects

Returns all IfcTypeObject instances in the model. Optionally filter by type class.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| ifcTypeClass | string | Optional type class filter (e.g., "IfcWallType", "IfcDoorType"). Empty returns all type objects. |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Each dictionary contains GlobalId, Name, IfcClass, and AppliedToCount |

---

## GetMaterials

Returns all materials in the model with usage counts.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Each dictionary contains Name, Category, UsageCount, and HasProperties |

---

## GetMaterialStructures

Returns all material layer sets, profile sets, and constituent sets in the model.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Full material structure details |

---

## GetPropertySets

Returns all property sets in the model with usage information. Optionally filter by property set name.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| psetName | string | Optional PSet name filter. Empty returns all. |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | PSet details |

---

## GetQuantitySets

Returns all quantity sets in the model with usage information. Optionally filter by quantity set name.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| qsetName | string | Optional QSet name filter. Empty returns all. |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | QSet details |

---

## GetPropertyValues

Returns property values distribution or detailed values for a property across the model.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| propertyName | string | Property name: "PropertyName" or "PsetName.PropertyName" |
| verbose | bool | If true, returns all values with element GlobalIds. If false, returns value counts. |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary or List | Value counts (verbose=false) or list of value details (verbose=true) |

---

## GetQuantityValues

Returns quantity values distribution or detailed values for a quantity across the model.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| quantityName | string | Quantity name: "QuantityName" or "QsetName.QuantityName" |
| verbose | bool | If true, returns all values with element GlobalIds. If false, returns statistics. |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary or List | Statistics like Min, Max, Sum, Count, Average (verbose=false) or list of value details (verbose=true) |

---

## GetClassifications

Returns all classification systems used in the model.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Classification system details |

---

## GetDocuments

Returns all documents referenced in the model.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Document details and usage counts |

---

## GetGroups

Returns all groups, systems, and zones in the model. Optionally filter by group type.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| groupType | string | Optional filter: "IfcGroup", "IfcSystem", "IfcZone", or empty for all |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Group details |

---

## GetSpatialElements

Returns all spatial elements in the model. Optionally filter by spatial type.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| spatialType | string | Optional filter: "Site", "Building", "Storey", "Space", or empty for all |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Spatial element details |

---

## GetSpatialStructure

Returns the complete spatial hierarchy tree of the model.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Project tree structure |

---

## GetProjectContext

Returns complete project context including units, coordinate system, and project info.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Project context details |