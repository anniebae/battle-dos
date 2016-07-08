var React = require('react');
var ReactDOM = require('react-dom');

// define a component
var HelloWorld = React.createClass({
	render: function() {
		return(
			<div>Hello World</div>
		)
	}
});


ReactDOM.render(
	// invoke a component
	<HelloWorld />,
	document.getElementById('app')
);