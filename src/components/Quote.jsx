import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faTumblr } from "@fortawesome/free-brands-svg-icons";

export default class Quote extends React.Component {
  constructor(props) {
    super(props);

    this.getNewQuote = this.getNewQuote.bind(this);
  }

  getNewQuote() {
    this.props.fetchNewQuote();
  }

  render() {
    const { quote, author } = this.props.quote;
    const color = this.props.color();
    const message = `"${quote}" -${author}`;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      `"${quote}" - ${author}`
    )}`;

    const tumblrUrl = `https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,inspiration&caption=${encodeURIComponent(
      author
    )}&content=${encodeURIComponent(
      quote
    )}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`;
    return (
      <div
        id="quote-box"
        className="container-fluid  bg-white rounded"
        style={{ padding: 20, borderRadius: 15, color: color, width: 700 }}
      >
        <div id="text" className="text-center mt-auto mt-3">
          "{quote}"
        </div>
        <p id="author" className="d-flex justify-content-end mt-3">
          - {author}
        </p>
        <div className="container d-flex justify-content-between">
          <div className="d-flex gap-2">
            <a
              id="tweet-quote"
              href={twitterUrl}
              target="_blank"
              className="btn btn-primary"
              style={{ backgroundColor: color }}
            >
              <FontAwesomeIcon icon={faTwitter} color="white" />
            </a>

            <a
              id="share-quote"
              href={tumblrUrl}
              className="btn btn-primary"
              style={{ backgroundColor: color }}
            >
              <FontAwesomeIcon icon={faTumblr} color="white" />
            </a>
          </div>
          <button
            id="new-quote"
            className="btn btn-primary"
            style={{ backgroundColor: color }}
            onClick={this.getNewQuote}
          >
            New Quote
          </button>
        </div>
      </div>
    );
  }
}
