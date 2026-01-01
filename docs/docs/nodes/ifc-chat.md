---
sidebar_position: 11
title: IFCChat
---

# IFCChat

AI-powered chat interface for interacting with IFC models using natural language. Powered by Google Gemini AI.

<div className="alert-box warning">
  <strong>API Key Required:</strong> This node requires a Google AI Studio API key. See the <a href="/api-key-setup">API Key Setup</a> page for instructions.
</div>

## ChatWithIFCModel

Opens an interactive viewer with a chat interface for natural language queries about your IFC model.

**Inputs:**

| Parameter | Type | Description |
|-----------|------|-------------|
| apiKey | string | Your Google AI Studio API key |
| ifcModel | IFCModel | The loaded IFC Model |

**Output:**

Opens an interactive window (no return value).

---

## Interactive Window Features

The chat window includes three main components:

### 3D Model View

- Full 3D visualization of your IFC model
- Rotate, pan, and zoom navigation
- Elements can be highlighted based on chat responses
- Selection of elements for chat context

### Tree View

- Hierarchical view of the model structure
- Navigate through spatial hierarchy (Project, Site, Building, Storey)
- Click to select elements
- Expand and collapse branches

### Chat Interface

- Natural language input
- AI-powered responses
- Results displayed with element links
- Clickable element references to highlight in 3D view

---

## AI Tools

The AI assistant has access to these tools to help answer your questions:

<div className="tool-grid">
  <div className="tool-card">
    <h4>filter_elements</h4>
    <p>Find elements by type, property values, spatial location, or other criteria. Returns matching GlobalIds.</p>
  </div>
  <div className="tool-card">
    <h4>get_element_details</h4>
    <p>Get comprehensive information about specific elements including properties, quantities, materials, and relationships.</p>
  </div>
  <div className="tool-card">
    <h4>analyze_relationships</h4>
    <p>Explore connections and relationships between elements such as containment, aggregation, and connectivity.</p>
  </div>
  <div className="tool-card">
    <h4>detect_clashes</h4>
    <p>Find geometric conflicts between element sets with configurable clearance requirements.</p>
  </div>
  <div className="tool-card">
    <h4>web_search</h4>
    <p>Search the web for IFC specifications, BIM standards, or related technical information.</p>
  </div>
  <div className="tool-card">
    <h4>get_user_selection</h4>
    <p>Get information about elements currently selected in the 3D viewer.</p>
  </div>
  <div className="tool-card">
    <h4>visualize_elements</h4>
    <p>Highlight, isolate, or color elements in the 3D view based on query results.</p>
  </div>
  <div className="tool-card">
    <h4>capture_view</h4>
    <p>Capture the current 3D view as an image for documentation or reporting.</p>
  </div>
</div>

---

## Example Questions

You can ask the AI assistant questions like:

**Finding Elements:**
- "Show me all the exterior walls"
- "Find doors on Level 2"
- "Which elements are made of concrete?"
- "List all fire-rated walls"

**Getting Information:**
- "What properties does this wall have?"
- "What is the area of all floors?"
- "Tell me about the selected element"
- "What materials are used in this building?"

**Analyzing Relationships:**
- "What spaces does this wall bound?"
- "Which elements are contained in Room 101?"
- "What is connected to this pipe?"

**Clash Detection:**
- "Are there any clashes between ducts and beams?"
- "Check for clashes between structural and MEP elements"
- "Find pipes that are too close to walls"

**Visualization:**
- "Highlight all windows"
- "Color the walls by fire rating"
- "Isolate the mechanical equipment"
- "Show me elements without fire ratings"

---

## Tips for Best Results

- **Be specific**: "Find walls with FireRating equal to 2HR" works better than "find fire walls"
- **Use IFC terminology**: Terms like "IfcWall", "IfcDoor", "PredefinedType" help the AI understand your intent
- **Select elements first**: Select elements in the viewer then ask "What is this?" or "Tell me about the selection"
- **Iterate**: Ask follow-up questions to refine results
- **Check visualizations**: Ask to highlight results in the 3D view to verify findings