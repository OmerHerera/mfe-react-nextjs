// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
// next.config.js
const { withFederatedSidecar } = require("@module-federation/nextjs-mf");

module.exports = withFederatedSidecar({
  name: "remote_nextjs",
  filename: "static/chunks/remoteEntry.js",
  exposes: {
    "./ExposedComponent": "./components/ExposedComponent",
  },
  shared: {
    // react: {
    //   // Notice shared are NOT eager here.
    //   requiredVersion: false,
    //   singleton: true,
    // }
  },
})({
  // your original next.config.js export
});