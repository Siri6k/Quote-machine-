import React from "react";
import PropTypes from "prop-types";

import Quote from "./components/Quote";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: this.getRandomHexColor(),
    };
  }

  getRandomHexColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  componentDidMount() {
    this.props.fetchData();
    this.getRandomHexColor();
  }

  render() {
    const { fetching, quotes } = this.props;
    const selectedQuote =
      quotes.length > 0
        ? quotes[Math.floor(Math.random() * quotes.length)]
        : { quote: "", author: "" };

    return (
      <div
        className="d-flex flex-column min-vh-100 min-vw-100 align-items-center justify-content-center"
        style={{ backgroundColor: this.getRandomHexColor() }}
      >
        {fetching ? (
          <p>Loading...</p>
        ) : (
          <Quote
            quote={selectedQuote}
            fetchNewQuote={this.props.fetchData}
            color={this.getRandomHexColor}
          />
        )}
        <p className="text-center">-by Sirisk</p>
      </div>
    );
  }
}
