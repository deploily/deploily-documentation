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
      link: {
        type: 'doc',
        id: 'ors-docs', // This should be `docs/ors-docs.md`
      },
      items: [
        {
          type: 'link',
          label: 'Open route service',
          href: '/ors-api-docs'
        }
      ],
    },
  ],
};


