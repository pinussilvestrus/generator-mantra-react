import <%= _module %> from './containers/<%= module %>';

export default [
	{
		path: '/<%= path %>/',
		name: '<%= module %>',
		component: <%= _module %>
	}
];
