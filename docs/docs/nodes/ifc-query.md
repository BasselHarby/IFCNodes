---
sidebar_position: 3
title: IFCQuery
---

# IFCQuery

Element-level data retrieval nodes. All methods accept a single GlobalId. To process multiple elements, use Dynamo's lacing feature (right-click the node, then Lacing, then Longest or Cross Product).

## GetElementData

Returns complete data for an IFC element including all available information.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | All element data organized by category |

**Output Dictionary Contains:**

- Identity: GlobalId, Name, Description, Tag, ObjectType
- Type: IFC class and inheritance chain
- TypeDefinition: Type object data
- Attributes: Schema attributes
- Properties: All property sets
- Quantities: All quantity sets
- Materials: Material associations
- Associations: Classifications, documents, etc.
- Composition: Aggregation, nesting, openings
- Assignments: Groups, systems, zones
- Connectivity: Connections and ports
- SpatialContainment: Containing space or storey

---

## GetIdentity

Returns identity information for an element.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Identity information |

**Output Contains:**

- GlobalId: Unique identifier
- Name: Element name
- Description: Element description
- Tag: Element tag
- ObjectType: Object type string
- OwnerHistory: Creation and modification info

---

## GetTypeInheritanceChain

Returns type and inheritance information for an element.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Type and inheritance information |

**Output Contains:**

- IfcClass: The element IFC class name
- InheritanceChain: List of parent classes
- PredefinedType: The predefined type value
- IsAbstract: Whether the class is abstract

---

## GetAttributes

Returns all explicit attributes for an element based on the IFC schema. Includes attributes inherited from parent classes.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Attribute names and values |

---

## GetTypeDefinition

Returns the type object definition for an element via the IsTypedBy relationship. Includes type properties, quantities, and materials.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Type object data |

---

## GetProperties

Returns all property sets for an element with their properties. For standard PSets, includes metadata about expected and missing properties.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Property set names as keys and property data as values |

---

## GetPropertyValue

Returns a single property value for an element.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |
| propertyPath | string | Property path: "PropertyName" (any PSet) or "PsetName.PropertyName" (specific PSet) |

**Output:**

| Type | Description |
|------|-------------|
| object | The property value, or empty string if not found |

---

## GetQuantities

Returns all quantity sets for an element with their quantities. For standard QSets, includes metadata about expected and missing quantities.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Quantity set names as keys and quantity data as values |

---

## GetQuantityValue

Returns a single quantity value for an element.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |
| quantityPath | string | Quantity path: "QuantityName" (any QSet) or "QsetName.QuantityName" (specific QSet) |

**Output:**

| Type | Description |
|------|-------------|
| double | The quantity value, or 0 if not found |

---

## GetMaterials

Returns material data for an element including single materials, layer sets, profile sets, and constituent sets. If the element has no direct material association, returns the material from its type object.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Material information |

---

## GetClassifications

Returns classification references for an element.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Classification dictionaries |

---

## GetDocuments

Returns document references for an element.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Document dictionaries |

---

## GetAssociations

Returns all associations for an element including materials, classifications, documents, libraries, constraints, and approvals.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Association categories |

---

## GetComposition

Returns composition relationships for an element including aggregation (Decomposes/IsDecomposedBy), nesting (Nests/IsNestedBy), openings, coverings, projections, and surface features.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Composition relationships |

<div className="alert-box info">
  <strong>Note:</strong> This returns explicitly defined IFC relationships only. For geometric-based relationships (elements physically inside other elements), use IFCSpatialQueries.
</div>

---

## GetOpenings

Returns openings (voids) in an element and the elements that fill them.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Opening dictionaries with FilledBy information |

---

## GetHostElement

Returns the host element if this element fills a void (e.g., door in wall).

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Host element information, or empty if not filling a void |

---

## GetAssignments

Returns all assignment relationships for an element including groups, systems, zones, actors, processes, controls, and resources.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Assignment categories |

---

## GetGroups

Returns the groups an element is assigned to.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Group dictionaries |

---

## GetConnectivity

Returns all connectivity relationships for an element including element connections, path connections, ports, interferences, and space boundaries.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Connectivity categories |

<div className="alert-box info">
  <strong>Note:</strong> This returns explicitly defined IFC relationships only. For geometric-based connectivity (elements touching or intersecting), use IFCSpatialQueries.
</div>

---

## GetConnectedElements

Returns all elements connected to this element via explicit IFC relationships.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Connected element dictionaries |

---

## GetSpatialContainment

Returns spatial containment information for an element including the containing spatial structure and referenced structures.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Spatial containment and placement |

---

## GetContainingElement

Returns the spatial structure element containing this element (e.g., the storey).

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Containing spatial element, or empty if not contained |

---

## GetPlacement

Returns the placement and location of an element in the model coordinate system.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | X, Y, Z coordinates and placement type |

---

## GetSpaceBoundaries

Returns space boundaries for an element showing which spaces it bounds.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Space boundary dictionaries |

---

## ElementExists

Checks if an element exists in the model.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) to check |

**Output:**

| Type | Description |
|------|-------------|
| bool | True if element exists, false otherwise |

---

## GetElementSummary

Returns basic summary information for an element. Useful for quick identification without retrieving all data.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | GlobalId, Name, IfcClass, and PredefinedType |

---

## GetElementsOfSameType

Returns the GlobalIds of all elements that share the same type object as the given element.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds sharing the same type object |

---

## GetElementsInSameContainer

Returns the GlobalIds of all elements in the same spatial container as the given element.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds in the same spatial container |

---

## GetElementRepresentations

Returns detailed information about an element's representations and mapped representations. Useful for understanding geometry structure and debugging extraction issues.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| globalId | string | The Global Unique ID (GUID) of the element |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Representation details including types, identifiers, and item counts |