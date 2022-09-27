const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/assets/style/abstracts/mixins.scss";
        @import "@/assets/style/abstracts/variables.scss";
        `,
      },
    },
  }
});
