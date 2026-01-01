---
sidebar_position: 8
title: IFCClashDetection
---

# IFCClashDetection

Clash detection between IFC elements using bounding box and mesh analysis.

## Clash Types

| Type | Description |
|------|-------------|
| **Hard Clash (Intersection)** | Elements physically overlap - volumetric mesh intersections |
| **Soft Clash (Touch)** | Elements share a boundary but do not overlap |
| **Soft Clash (Clearance)** | Elements are within the minimum required clearance distance |

---

## DetectClashes

Detects geometric clashes between two sets of elements.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| setA | List of string | List of GlobalIds for the first element set |
| setB | List of string | List of GlobalIds for the second element set |
| clearance | double | Minimum required clearance distance in model units. When 0, only hard clashes (intersections) are detected. When greater than 0, also detects soft clashes (touch and clearance violations). |
| tolerance | double | Optional tolerance for geometric comparisons in model units. Default is -1, which uses the model's precision value. |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Contains clash results and statistics |

---

## GetClashSummaryByElement

Returns clash results grouped by element, showing which elements each element clashes with.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| setA | List of string | List of GlobalIds for the first element set |
| setB | List of string | List of GlobalIds for the second element set |
| clearance | double | Minimum required clearance distance in model units. Default is 0. |
| tolerance | double | Optional tolerance for geometric comparisons. Default is -1 (uses model precision). |

**Output:**

| Type | Description |
|------|-------------|
| List of Dictionary | Each dictionary contains an element's GlobalId and its list of clashing elements |

---

## DetectSelfClashes

Detects all clashing pairs within a single set of elements.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| elementSet | List of string | List of GlobalIds to check for internal clashes |
| clearance | double | Minimum required clearance distance in model units. Default is 0. |
| tolerance | double | Optional tolerance for geometric comparisons. Default is -1 (uses model precision). |

**Output:**

| Type | Description |
|------|-------------|
| Dictionary | Contains clash results |

---

## GetClashPairs

Returns only the GlobalId pairs of clashing elements.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| setA | List of string | List of GlobalIds for the first element set |
| setB | List of string | List of GlobalIds for the second element set |
| clearance | double | Minimum required clearance distance in model units. Default is 0. |
| tolerance | double | Optional tolerance for geometric comparisons. Default is -1 (uses model precision). |

**Output:**

| Type | Description |
|------|-------------|
| List of string arrays | Each array contains two clashing GlobalIds |

---

## GetClashingElements

Returns GlobalIds of all elements that have at least one clash.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| setA | List of string | List of GlobalIds for the first element set |
| setB | List of string | List of GlobalIds for the second element set |
| clearance | double | Minimum required clearance distance in model units. Default is 0. |
| tolerance | double | Optional tolerance for geometric comparisons. Default is -1 (uses model precision). |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds of elements involved in clashes |

---

## GetNonClashingElements

Returns GlobalIds of elements from setA that have no clashes with setB.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| ifcModel | IFCModel | The loaded IFC Model |
| setA | List of string | List of GlobalIds for the first element set |
| setB | List of string | List of GlobalIds for the second element set |
| clearance | double | Minimum required clearance distance in model units. Default is 0. |
| tolerance | double | Optional tolerance for geometric comparisons. Default is -1 (uses model precision). |

**Output:**

| Type | Description |
|------|-------------|
| List of string | GlobalIds of elements without clashes |

---

## FilterClashesByType

Filters clashes by type.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| clashResult | Dictionary | The result from DetectClashes |
| clashType | string | Type to filter: "Intersection", "Touch", or "Clearance" |

**Output:**

| Type | Description |
|------|-------------|
| List | Clashes matching the specified type |

---

## Usage Example

**Goal:** Find clashes between structural beams and MEP ducts with 50mm clearance.

**Steps:**

1. Load your IFC file with IFCReader.LoadIFCModel
2. Get structural elements: IFCFilter.AllElements with baseClass "IfcBeam"
3. Get MEP elements: IFCFilter.AllElements with baseClass "IfcDuctSegment"
4. Use IFCClashDetection.DetectClashes with:
   - setA: beam GlobalIds
   - setB: duct GlobalIds
   - clearance: 0.05 (50mm)
5. Use FilterClashesByType to separate hard and soft clashes