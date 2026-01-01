/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    'intro',
    'getting-started',
    'installation',
    {
      type: 'category',
      label: 'Node Reference',
      collapsed: false,
      items: [
        'nodes/ifc-reader',
        'nodes/ifc-model',
        'nodes/ifc-query',
        'nodes/ifc-filter',
        'nodes/ifc-explore',
        'nodes/ifc-schema',
        'nodes/ifc-spatial-queries',
        'nodes/ifc-clash-detection',
        'nodes/ifc-geometry',
        'nodes/ifc-viewer',
        'nodes/ifc-chat',
      ],
    },
    'api-key-setup',
    'examples',
  ],
};

export default sidebars;