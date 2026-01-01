---
sidebar_position: 4
title: IFCFilter
---

# IFCFilter

Element filtering nodes. All filters return lists of GlobalIds. Use Dynamo's native list operations to combine filters:

- **AND**: Use List.SetIntersection
- **OR**: Use List.SetUnion
- **NOT**: Use List.SetDifference

## Helper Nodes

These nodes return valid values for filter parameters:

**ComparisonOperators()** returns: equals, not equals, greater than, less than, greater or equal, less or equal, contains, startswith, endswith, between, null, not null

**RelationshipTypes()** returns: Valid relationship type strings

**SpatialTypes()** returns: Any, Site, Building, Storey, Space

**AssociationTypes()** returns: Material, Classification, Document, and others

**AttributeNames(ifcClassName)** returns: Valid attribute names for filtering

---

## AllElements

Returns all element GlobalIds in the model, optionally filtered to a base class.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| baseClass | string | Optional: Filter to this class and subtypes (e.g., IfcWall, IfcBuildingElement). Empty returns all products. |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds of matching elements |

---

## ElementsInSpatial

Returns GlobalIds of all elements contained in a spatial structure element.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| spatialGlobalIdOrName | string | GlobalId or Name of the spatial element (Site, Building, Storey, Space) |
| includeNested | bool | If true, includes elements in nested spatial structures |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds of contained elements |

---

## ElementsInGroup

Returns GlobalIds of all elements assigned to a group, system, or zone.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| groupGlobalIdOrName | string | GlobalId or Name of the group |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds of elements in the group |

---

## ElementsOfTypeObject

Returns GlobalIds of all elements typed by a specific type object.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| typeGlobalIdOrName | string | GlobalId or Name of the type object |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds of elements with that type |

---

## ElementsWithMaterial

Returns GlobalIds of all elements using a specific material.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| materialName | string | Material name to search for |
| matchOperator | string | How to match: equals, contains, startswith, endswith |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds of elements with that material |

---

## ElementsWithClassification

Returns GlobalIds of all elements with a specific classification.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| systemOrCode | string | Classification system name or reference code to search for |
| criteria | string | What to match: System, Code, or Contains |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds of elements with that classification |

---

## ByAttribute

Filters elements by schema attribute value. Common attributes: GlobalId, Name, Description, Tag, ObjectType, PredefinedType, IfcClass.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalIds | List of string | List of GlobalIds to filter |
| attributeName | string | Attribute name to filter by |
| comparisonOperator | string | Comparison operator (use ComparisonOperators node to see valid options) |
| value | object | Value to compare against. Use null for null or not null operators |
| valueTo | object | Second value for between operator |

**Output:**

| Type | Description |
|------|-------------|
| List of string | Filtered list of GlobalIds |

---

## ByProperty

Filters elements by property value. Searches both instance properties and type properties.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalIds | List of string | List of GlobalIds to filter |
| propertyName | string | Property path: PropertyName (any PSet) or PsetName.PropertyName (specific PSet) |
| comparisonOperator | string | Comparison operator |
| value | object | Value to compare against |
| valueTo | double | Second value for between operator (only required when using between) |
| tolerance | double | Tolerance for numeric equals comparison. Default 0.001 |

**Output:**

| Type | Description |
|------|-------------|
| List of string | Filtered list of GlobalIds |

---

## ByPropertySet

Filters elements by property set existence.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalIds | List of string | List of GlobalIds to filter |
| psetName | string | Property set name to check |
| existsOperator | string | exists or notexists |

**Output:**

| Type | Description |
|------|-------------|
| List of string | Filtered list of GlobalIds |

---

## ByQuantity

Filters elements by quantity value.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalIds | List of string | List of GlobalIds to filter |
| quantityName | string | Quantity path: QuantityName (any QSet) or QsetName.QuantityName (specific QSet) |
| comparisonOperator | string | Comparison operator: equals, not equals, greater than, less than, greater or equal, less or equal, between |
| value | double | Value to compare against |
| valueTo | double | Second value for between operator |
| tolerance | double | Tolerance for equals comparison. Default 0.001 |

**Output:**

| Type | Description |
|------|-------------|
| List of string | Filtered list of GlobalIds |

---

## ByAssociation

Filters elements by association (material, classification, document, etc.).

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalIds | List of string | List of GlobalIds to filter |
| associationType | string | Association type (use AssociationTypes node to see valid options) |
| existsOperator | string | exists or notexists |
| matchValue | string | Optional value to match (e.g., material name, classification code) |
| matchOperator | string | How to match the value: equals, contains, etc. |

**Output:**

| Type | Description |
|------|-------------|
| List of string | Filtered list of GlobalIds |

---

## ByRelationship

Filters elements by relationship type.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalIds | List of string | List of GlobalIds to filter |
| relationshipType | string | Relationship type (use RelationshipTypes node to see valid options) |
| existsOperator | string | exists or notexists |
| targetGlobalId | string | Optional GlobalId of target element for specific relationship checks |

**Output:**

| Type | Description |
|------|-------------|
| List of string | Filtered list of GlobalIds |

---

## BySpatialContainment

Filters elements by spatial containment.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalIds | List of string | List of GlobalIds to filter |
| spatialType | string | Spatial type filter: Any, Site, Building, Storey, Space |
| spatialGlobalIdOrName | string | Optional GlobalId or Name of specific spatial element |
| nameOperator | string | How to match the name: equals, contains, etc. |

**Output:**

| Type | Description |
|------|-------------|
| List of string | Filtered list of GlobalIds |

---

## BySourceModel

Filters elements by their source model file name.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalIds | List of string | List of GlobalIds to filter |
| sourceModelName | string | Source model name to match |
| matchOperator | string | How to match: equals, contains, startswith, endswith |

**Output:**

| Type | Description |
|------|-------------|
| List of string | Filtered list of GlobalIds |

---

## ByTypeObject

Filters elements by type object assignment.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalIds | List of string | List of GlobalIds to filter |
| existsOperator | string | exists (has type object) or notexists (no type object) |
| matchValue | string | Optional type name or class to match |
| matchOperator | string | How to match: equals, contains, etc. |

**Output:**

| Type | Description |
|------|-------------|
| List of string | Filtered list of GlobalIds |