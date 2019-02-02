const proxy = require("http-proxy-middleware");

module.exports = function(app) {
  app.user(proxy("/auth/google", { target: "http://localhost:5000" }));
};
