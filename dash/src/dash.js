var React = require("react");
var Router = require("react-router");

var Bonjour = require("Bonjour");

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Dash = React.createClass({
  render: function () {
  	return (
  		<div>
	  		<h1>Dash</h1>
	  		<Bonjour />
	  		<RouteHandler />
	  	</div>
  	);
  }
});

module.exports = Dash;

