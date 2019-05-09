import React from 'react';
import PropTypes from "prop-types";
import "./TextAndTitle.css";

export default class TextAndTitle extends React.Component {
  static propTypes = {
    text: PropTypes.string,
    title: PropTypes.string.isRequired
  };

  static defaultProps = {
    text: "Some subtitle"
  };

  state = {
    title: "Title"
  };

  onInputChange(event) {
    let {value} = event.target;

    value  = value + "zmiana";

    this.setState({
      title: value
    })
  }

  render() {
    const {text} = this.props;
    const {title} = this.state;

    return (

      <div className="text-and-title">
        <h1>{title}</h1>
        <p>{text}</p>
        <input type="text" defaultValue={title}
          onChange = {(event) => {
              this.onInputChange(event)
            }}
        />
      </div>
    )
  }
}


