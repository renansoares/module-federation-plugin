const { withNativeFederation, shareAll } = require("@angular-architects/native-federation");

module.exports = withNativeFederation({

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: "auto" }),
  }

});