'use strict'

var React = require('react');

module.exports = {
  addFieldValue: function() {
    var values = this.state.value;
    values.push(this.props.component.defaultValue);
    this.setState({
      value: values
    });
  },
  removeFieldValue: function(id) {
    var values = this.state.value;
    values.splice(id, 1);
    this.setState({
      value: values
    });
  },
  getElements: function() {
    var Component;
    var classLabel = "control-label" + ( this.props.component.validate && this.props.component.validate.required ? ' field-required' : '');
    var inputLabel = (this.props.component.label && !this.props.component.hideLabel ? <label htmlFor={this.props.component.key} className={classLabel}>{this.props.component.label}</label> : '');
    var requiredInline = (!this.props.component.label && this.props.component.validate && this.props.component.validate.required ? <span className="glyphicon glyphicon-asterisk form-control-feedback field-required-inline" aria-hidden="true"></span> : '');
    var className = (this.props.component.prefix || this.props.component.suffix ? 'input-group' : '');
    var prefix = (this.props.component.prefix ? <div className="input-group-addon">{this.props.component.prefix}</div> : '');
    var suffix = (this.props.component.suffix ? <div className="input-group-addon">{this.props.component.suffix}</div> : '');
    var data = this.state.value;
    if (this.props.component.multiple) {
      var rows = data.map(function(value, id) {
        var Element = this.getSingleElement(value, id);
        return (
          <tr key={id}>
            <td>{requiredInline}
              <div className={className}>
                {prefix} {Element} {suffix}
              </div>
            </td>
            <td><a onClick={this.removeFieldValue.bind(null, id)} className="btn btn-danger"><span className="glyphicon glyphicon-remove-circle"></span></a></td>
          </tr>
        );
      }.bind(this));
      Component =
        <div>
          {inputLabel}
          <table className="table table-bordered">
            <tbody>
              {rows}
              <tr>
                <td colSpan="2"><a onClick={this.addFieldValue} className="btn btn-primary"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span> Add another</a></td>
              </tr>
            </tbody>
          </table>
        </div>;
    }
    else {
      var Element = this.getSingleElement(data);
      Component =
        <div>
          {inputLabel} {requiredInline}
          <div className={className}>
            {prefix} {Element} {suffix}
          </div>
        </div>
    }
    return Component;
  }
};