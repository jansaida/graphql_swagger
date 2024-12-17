import path from 'path'
export default {
  introspection: {
    type: 'url',
    url:'https://b.slingcommerce.com/graphql',
  },
  website: {
    template: 'carbon-multi-page',
    staticAssets: path.join(__dirname, 'assets'),
    options: {
      appTitle: 'Sling Commerce GraphQl',
      appLogo: 'https://styles.redditmedia.com/t5_35q6u/styles/communityIcon_snvtzbtcp8hd1.png',
      pages: [{
        title: 'Sling Commerce GraphQl',
        content: `
# Sling Adobe Commerce
Sling TV is the first app-based TV service letting you stream live television and on-demand content over the internet. Watch live shows wherever you are, at home or on the go! With Sling TV, you get to choose the television option perfect for you, including Channel Add-ons, Premiums Add-ons, DVR Plus and more. Watching live TV is easier and more affordable with Sling - the way TV should be!
`
      }],
    },
  },
}
