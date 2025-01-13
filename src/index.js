import React from "react";
import ReactDOM from "react-dom/client";
import { Provider, connect } from "react-redux";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import store from "./features/store";
import { handleAsync } from "./features/actions";

const mapStateToProps = (state) => {
  return {
    fetching: state.fetching,
    quotes: state.quotes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(handleAsync()),
  };
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Container />
  </Provider>
);
