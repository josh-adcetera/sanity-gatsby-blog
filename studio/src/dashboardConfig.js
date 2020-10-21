export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f90923a9e619527a46584bc',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-58t68kd4',
                  apiId: 'ff011c5a-e3ed-43a5-8d4c-4fdca2dce9fa'
                },
                {
                  buildHookId: '5f90923ae1ed101d5b36ec5f',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9tko4ftc',
                  apiId: '51ef41b2-5d7c-453b-aaf8-6cfafadcf554'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/josh-adcetera/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9tko4ftc.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
