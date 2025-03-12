module.exports = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
    },
    {
      type: 'doc',
      id: 'getting-started',
    },
    {
      type: 'category',
      label: 'API Documentation',
      items: [
        {
          type: 'link',
          label: 'API Reference',
          href: '/stopLightapi', // This links directly to `/api`
        },
        {
          type: 'link',
          label: 'API Reference',
          href: '/swagger-api', // This links directly to `/api`
        },
      ],
    },
  ],
};


