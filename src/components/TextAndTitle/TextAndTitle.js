import React from 'react';
import PropTypes from "prop-types";
import "./TextAndTitle.css";

export default class TextAndTitle extends React.Component {
  // Define what props of which type will be used in this component
  static propTypes = {
    text: PropTypes.string,
    title: PropTypes.string
  };

  // Define default props (values here will be used when given prop will not be provided)
  static defaultProps = {
    text: "Some subtitle"
  };

  // Define initial state of component
  state = {
    title: "Title"
  };

  onInputChange(event) {
    // Get value from event target (which in this case is here, so we will end up with new input's value)
    let {value} = event.target;

    value  = value + "zmiana";
    // could as well be `value += "zmiana"`

    // Update state with given value
    // Object passed here will be merged with existing state
    this.setState({
      title: value
    })
  }

  render() {
    // Get text field from this.props
    const {text} = this.props;
    // Get title field from this.props
    const {title} = this.state;

    // render method should ALWAYS return JSX or null
    // JSX returned has to be wrapped in singe element (div, span, ul, etc...)
    return (
      <div className="text-and-title">
        <h1>{title}</h1>
        <p>{text}</p>
        <input type="text" defaultValue={title}
               {/* Attach handled on input change */}
               onChange = {(event) => {
                 this.onInputChange(event)
               }}
        />
      </div>
    )
  }
}


