require('dotenv').config()
module.exports = {
  siteMetadata: {
    title: 'Tlon',
    siteUrl: 'https://www.tlon.it',
    description: 'Filosofia e Immaginazione',
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Tlon, Filosofia e Immaginazione',
        short_name: 'tlon',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // icon: 'src/images/32x32.ico', // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-wordpress",
      options: {
        /*
         * The base URL of the Wordpress site without the trailingslash and the protocol. This is required.
         * Example : 'gatsbyjsexamplewordpress.wordpress.com' or 'www.example-site.com'
         */
        baseUrl: "www.moarstudio.com",
        // The protocol. This can be http or https.
        protocol: "http",
        // Indicates whether the site is hosted on wordpress.com.
        // If false, then the assumption is made that the site is self hosted.
        // If true, then the plugin will source its content on wordpress.com using the JSON REST API V2.
        // If your site is hosted on wordpress.org, then set this to false.
        hostingWPCOM: false,
        // If useACF is true, then the source plugin will try to import the Wordpress ACF Plugin contents.
        // This feature is untested for sites hosted on Wordpress.com.
        // Defaults to true.
        useACF: true,
        acfOptionPageIds: [],
        // Set verboseOutput to true to display a verbose output on `npm run develop` or `npm run build`
        // It can help you debug specific API Endpoints problems.
        verboseOutput: true,
        // Set how many pages are retrieved per API request.
        perPage: 25,
        // Search and Replace Urls across WordPress content.
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "http://tlon.it",
        //   replacementUrl: "http://localhost:8000",
        // },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Exclude specific routes using glob parameters
        // See: https://github.com/isaacs/minimatch
        excludedRoutes: ["/**/comments",
        "**/akismet/**",
        "**/akismet",
        "**/jetpack/**",
        "**/jetpack",
        "**/pum/**",
        "**/pum",
        "**/redirection/**",
        "**/redirection",
        "**/pages/**",
        "**/pages",
        "**/page",
        "**/feedback/**",
        "**/feedback",
        "**/statuses/**",
        "**/statuses",
        "**/settings/**",
        "**/settings",
        "**/users/**",
        "**/users",
        "**/media/**",
        "**/media",
        "**/types/**",
        "**/types",
        "**/comments/**",
        "**/comments",
        "**/ccf/**",
        "**/ccf"],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: function({ entities }) {
          return entities
        },
    },
  },
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
  ],
}
