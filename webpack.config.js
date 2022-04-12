const webpack = require("@nativescript/webpack");

module.exports = (env) => {
	webpack.init(env);

	const NsVueTemplateCompiler = require('nativescript-vue-template-compiler');
	NsVueTemplateCompiler.registerElement('BottomSheet', () => require('@nativescript-community/ui-persistent-bottomsheet').Pager, {
	  model: {
		prop: 'stepIndex',
		event: 'stepIndexChange'
	  }
	});
	return webpack.resolveConfig();
};


