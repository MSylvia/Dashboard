var React = require("react");
var Router = require("react-router");

var Link = Router.Link;
var RouteHandler = Router.RouteHandler;


var Bonjour = React.createClass({
  render: function () {
  	return (
  		<div>
	  		<h1>Buongiorno</h1>
	  		<p><Link to="day">Day</Link></p>
	  		<p><Link to="night">Night</Link></p>
	  		<RouteHandler />
	  	</div>
  	);
  }
});

module.exports = Bonjour;

