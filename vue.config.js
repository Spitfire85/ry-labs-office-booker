var path = require('path');

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'node_modules': path.resolve(__dirname, '../node_modules')
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/scss/functions.scss";
          @import "@/scss/variables.scss";
          @import "@/scss/mixins.scss";
        `
      },
    },
  },
}
