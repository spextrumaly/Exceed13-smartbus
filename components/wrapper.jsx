var ReactDOM = require("react-dom");
var HelloWorld = React.createClass({
  <div>Hello World123</div>
});

module.exports = HelloWorld;

var Wrapper = require('./wrapper.jsx');
ReactDOM.render(
  <Wrapper/>,document.getElementById("container"));
