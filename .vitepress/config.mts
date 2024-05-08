import { defineConfig } from 'vitepress'
import { withMermaid } from "vitepress-plugin-mermaid";

// https://vitepress.dev/reference/site-config
export default withMermaid({
  title: "Origa | API Documentation",
  description: "Origa is the world's most advanced AI recruiter that conducts in-depth, human-like phone screening interviews upto 40 minutes long tailored to your hiring needs",
  head: [['link', { rel: 'icon', href: '/Origa-favicon-dark.png' }]],
  appearance: 'dark',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo:  {light: '/OrigaLogo-LightBG.svg', dark: '/OrigaLogo-DarkBG.svg',},
    siteTitle: false,
    nav: [
      { text: 'Home', link: 'https://www.origa.io' },
      { text: 'Docs', link: '/' },
      { text: 'API Reference', link: '/docs/api-reference' }
    ],

    sidebar: [
      {
        text: 'Technical Specifications',
        items: [
          { text: 'Overview', link: '/docs/overview' },
          { text: 'API Reference', link: '/docs/api-reference' },
          { text: 'API Runtime Examples', link: '/docs/api-examples' },
          { text: 'Webhooks', link: '/docs/webhooks' },
          { text: 'Error Handling', link: '/docs/error-handling' },
          { text: 'Rate Limiting', link: '/docs/rate-limiting' },
          { text: 'Support and Feedback', link: '/docs/support-and-feedback' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'linkedin', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: '3101 Park Boulevard, Palo Alto CA 94306<br>hello@origa.io<br>+1 650 800 3755',
      copyright: '<br>© Anson Careers Private Limited',
    },
    search: {
      provider: 'local'
    }
  },
  mermaid: {
    // refer https://mermaid.js.org/config/setup/modules/mermaidAPI.html#mermaidapi-configuration-defaults for options
  },
  // optionally set additional config for plugin itself with MermaidPluginConfig
  mermaidPlugin: {
    class: "mermaid my-class", // set additional css classes for parent container 
  },
  publicDir: 'public'
})
