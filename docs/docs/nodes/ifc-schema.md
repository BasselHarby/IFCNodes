---
sidebar_position: 6
title: IFCSchema
---

# IFCSchema

Static schema knowledge about IFC4x3 entities, properties, and quantities. These nodes do not require an IFC model - they query embedded schema metadata.

<div className="alert-box info">
  <strong>No IFCModel Required:</strong> These nodes provide schema information without needing to load an IFC file. Useful for understanding IFC structure and validating data.
</div>

## GetEntityInheritance

Returns the full inheritance chain for an IFC class.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcClassName | string | The IFC class name (e.g., "IfcWall", "IfcDoor", "Wall") |

**Output:**

| Type | Description |
|------|-------------|
| List of string | Class names from most specific to most general |

**Example:**

Input: "IfcWall"

Output: IfcWall, IfcBuildingElement, IfcElement, IfcProduct, IfcObject, IfcObjectDefinition, IfcRoot

---

## GetEntitySubtypes

Returns all direct and indirect subtypes of an IFC class.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcClassName | string | The IFC class name (e.g., "IfcBuildingElement", "IfcElement") |

**Output:**

| Type | Description |
|------|-------------|
| List of string | All subtype class names |

**Example:**

Input: "IfcBuildingElement"

Output: IfcWall, IfcWallStandardCase, IfcDoor, IfcWindow, IfcSlab, IfcBeam, IfcColumn, etc.

---

## GetEntityAttributes

Returns schema-defined explicit attributes for an IFC class including inherited attributes.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcClassName | string | The IFC class name (e.g., "IfcWall") |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Each dictionary contains Name, Type, IsOptional, and DeclaredIn |

---

## GetEntityRelationships

Returns schema-defined inverse relationships for an IFC class including inherited relationships. Inverse relationships define how entities connect to each other (e.g., HasAssociations, IsDefinedBy).

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcClassName | string | The IFC class name (e.g., "IfcWall", "IfcProduct") |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Each dictionary contains Name, RelatedEntity, AggregationType, and DeclaredIn |

---

## GetStandardPropertySets

Returns standard buildingSMART Property Sets applicable to an IFC class. Includes inherited PSets from parent classes.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcClassName | string | The IFC class name (e.g., "IfcWall", "IfcDoor") |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Each dictionary contains Name, Definition, TemplateType, ApplicableEntities, and Properties |

---

## GetStandardQuantitySets

Returns standard buildingSMART Quantity Sets applicable to an IFC class. Includes inherited QSets from parent classes.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcClassName | string | The IFC class name (e.g., "IfcWall", "IfcSlab") |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Each dictionary contains Name, Definition, TemplateType, ApplicableEntities, and Quantities |

---

## GetEnumerationValues

Returns valid values for an IFC enumeration type.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| enumName | string | The IFC enumeration name (e.g., "IfcWallTypeEnum", "IfcDoorTypeEnum") |

**Output:**

| Type | Description |
|------|-------------|
| List of string | Valid enumeration values |

**Example:**

Input: "IfcWallTypeEnum"

Output: MOVABLE, PARAPET, PARTITIONING, PLUMBINGWALL, SHEAR, SOLIDWALL, STANDARD, POLYGONAL, ELEMENTEDWALL, RETAININGWALL, WAVEWALL, NOTDEFINED, USERDEFINED

---

## GetPredefinedTypeValues

Returns valid PredefinedType values for an IFC class. Automatically finds the corresponding enum (e.g., IfcWall uses IfcWallTypeEnum).

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcClassName | string | The IFC class name (e.g., "IfcWall", "IfcDoor") |

**Output:**

| Type | Description |
|------|-------------|
| List of string | Valid PredefinedType values |

---

## GetAllEntityNames

Returns all available IFC entity class names in the schema. Useful for discovering what entity types exist.

**Inputs:**

None

**Output:**

| Type | Description |
|------|-------------|
| List of string | All IFC entity class names |

---

## GetAllStandardPropertySetNames

Returns all standard Property Set names from buildingSMART.

**Inputs:**

None

**Output:**

| Type | Description |
|------|-------------|
| List of string | All standard PSet names |

---

## GetAllStandardQuantitySetNames

Returns all standard Quantity Set names from buildingSMART.

**Inputs:**

None

**Output:**

| Type | Description |
|------|-------------|
| List of string | All standard QSet names |