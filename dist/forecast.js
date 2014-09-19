// Generated by CoffeeScript 1.8.0
(function() {
  var React, iframe;

  React = require('react');

  iframe = React.DOM.iframe;

  module.exports = React.createClass({
    displayName: 'forecast',
    render: function() {
      return iframe({
        type: 'text/html',
        height: '245',
        width: '100%',
        frameborder: '0',
        style: {
          border: 'none'
        },
        src: "http://forecast.io/embed/#lat=" + this.props.latitude + "&lon=" + this.props.longitude + "&name=" + (this.props.name || "") + "&color=" + (this.props.color || "") + "&font=" + (this.props.font || "") + "&units=" + (this.props.units || "")
      });
    }
  });

}).call(this);