'use strict'

var React = require('react');
var componentMixin = require('./mixins/componentMixin');
var multiMixin = require('./mixins/multiMixin');

module.exports = React.createClass({
  displayName: 'Number',
  mixins: [componentMixin, multiMixin],
  getSingleElement: function(value, index) {
    index = index || 0;
    return(
      <input
        type={this.props.component.inputType}
        className="form-control"
        id={this.props.component.key}
        data-index={index}
        name={this.props.name}
        value={value}
        disabled={this.props.readOnly}
        placeholder={this.props.component.placeholder}
        mask={this.props.component.inputMask}
        min={this.props.component.validate.min}
        max={this.props.component.validate.max}
        step={this.props.component.validate.step}
        onChange={this.onChange}
        >
      </input>
    );
  }
});
