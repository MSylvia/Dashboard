var React = require('react');
var Router = require("react-router");

var Bonjour = require('Bonjour');
var GoodNight = require("GoodNight");
var GoodDay = require("GoodDay");

var Routes = (
	<Router.Route name="app" path="/" handler={ Bonjour }>
		<Router.Route name="night" path="/night" handler={ GoodNight }/>
		<Router.Route name="day" path="/day" handler={ GoodDay }/>
	</Router.Route>
);

Router.run(Routes, function(Handler){
	React.render(<Handler />, document.getElementById('app'));
});
