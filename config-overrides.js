const { alias } = require("react-app-rewire-alias");

module.exports = function override(config, env) {
  alias({
    "@components": "src/components",
    "@store": "src/store",
    "@UI": "src/UI",
    "@assets": "src/assets",
    "@styles": "src/styles",
    "@constants": "src/constants",
    "@services": "src/services",
  })(config);

  return config;
};
