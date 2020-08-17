'use strict';

const GlimmerApp = require('@glimmer/application-pipeline').GlimmerApp;
const glimmerRedux = require('rollup-plugin-glimmer-redux');

module.exports = function(defaults) {
  let app = new GlimmerApp(defaults, {
	// Add options here
	rollup: {
		plugins: [
		  glimmerRedux()
		]
	}
  });

  return app.toTree();
};
