---
sidebar_position: 13
title: API Key Setup
---

# API Key Setup for IFC Chat

The **IFCChat.ChatWithIFCModel** node requires a Google AI Studio API key to enable AI-powered conversations with your IFC model.

## Getting Your API Key

### Step 1: Go to Google AI Studio

Visit https://aistudio.google.com/app/api-keys

### Step 2: Sign In

Sign in with your Google account. If you do not have one, create a free Google account first.

### Step 3: Create an API Key

1. Click **Create API Key**
2. Select a Google Cloud project or create a new one
3. Click **Create API Key in New Project** 
4. Your API key will be displayed

### Step 4: Copy Your Key

Copy the API key. It looks something like this: AIzaSyB1234567890abcdefghijklmnop

<div className="alert-box warning">
  <strong>Important:</strong> Keep your API key private. Do not share it publicly or commit it to version control.
</div>

## Using the API Key in Dynamo

### Method 1: Direct Input

1. Add **IFCChat.ChatWithIFCModel** to your canvas
2. Connect a **String** node to the `apiKey` input
3. Enter your API key in the String node
4. Connect your IFCModel to the `ifcModel` input

### Method 2: Environment Variable 

For better security, store your API key as an environment variable:

1. Press Windows + R, type `sysdm.cpl` and press Enter
2. Go to **Advanced** tab
3. Click **Environment Variables**
4. Under User Variables, click **New**
5. Variable name: `GOOGLE_AI_API_KEY`
6. Variable value: Your API key
7. Click OK and restart Dynamo

Then use a Python node or custom node to read the environment variable.

## IFC Chat Features

Once connected, the IFC Chat opens an interactive window with:

- **3D Model View**: Visualize your IFC model
- **Tree View**: Navigate the model hierarchy
- **Chat Interface**: Ask questions in natural language

### Available AI Tools

The AI assistant can use these tools to help you:

<div className="tool-grid">
  <div className="tool-card">
    <h4>filter_elements</h4>
    <p>Find elements by type, property, or other criteria</p>
  </div>
  <div className="tool-card">
    <h4>get_element_details</h4>
    <p>Get detailed information about specific elements</p>
  </div>
  <div className="tool-card">
    <h4>analyze_relationships</h4>
    <p>Explore connections between elements</p>
  </div>
  <div className="tool-card">
    <h4>detect_clashes</h4>
    <p>Find geometric conflicts between elements</p>
  </div>
  <div className="tool-card">
    <h4>web_search</h4>
    <p>Search the web for IFC or BIM related information</p>
  </div>
  <div className="tool-card">
    <h4>get_user_selection</h4>
    <p>Get elements currently selected in the viewer</p>
  </div>
  <div className="tool-card">
    <h4>visualize_elements</h4>
    <p>Highlight or isolate elements in the 3D view</p>
  </div>
  <div className="tool-card">
    <h4>capture_view</h4>
    <p>Capture the current 3D view as an image</p>
  </div>
</div>

## Example Questions

You can ask the AI assistant questions like:

- "Show me all the walls on Level 1"
- "What is the fire rating of the selected door?"
- "Find all elements made of concrete"
- "Are there any clashes between the structural and MEP elements?"
- "What properties does this wall have?"
- "Highlight all windows in the model"

## Troubleshooting

### Chat window does not open

- Verify your API key is correct
- Check your internet connection
- Ensure the IFCModel is properly loaded

### AI responses are slow

- Complex queries require more computation
- Check your internet connection speed

### API key errors

- Verify the key is copied correctly with no extra spaces
- Check that your Google Cloud project has the Generative AI API enabled
- Ensure you have not exceeded API usage limits