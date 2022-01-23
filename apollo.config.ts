module.exports = {
  client: {
    service: {
      name: "lotto",
      // URL to the GraphQL API
      url: "http://localhost:8010/proxy",
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.ts"],
  },
};
