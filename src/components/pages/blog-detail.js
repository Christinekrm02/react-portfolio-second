import React, { Component } from "react";
import axios from "axios";

export default class BlogDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBlogId: this.props.match.params.slug,
      blogItem: {},
    };
  }
  getBlogItem() {
    axios
      .get(
        `https://christinem.devcamp.space/portfolio/portfolio_blogs/${this.state.currentBlogId}`
      )
      .then(response => {
        console.log("response", response);
      })
      .catch(error => {
        console.log("getBlgItemError", error);
      });
  }
  componentDidMount() {
    this.getBlogItem();
  }

  render() {
    console.log("currentBlogId", this.state.currentBlogId);
    return (
      <div>
        <h1>Blog detail</h1>
      </div>
    );
  }
}
