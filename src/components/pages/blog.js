import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogItem from "../blog/blog-item";

export default class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
    };
    this.getBlogItems = this.getBlogItems.bind(this);
  }
  getBlogItems() {
    axios
      .get("https://christinem.devcamp.space/portfolio/portfolio_blogs", {
        withCredentials: true,
      })
      .then(response => {
        this.setState({
          blogItems: response.data.portfolio_blogs,
        });
      })
      .catch(error => {
        console.log("getBlogItemsError", error);
      });
  }

  componentWillMount() {
    this.getBlogItems();
  }
  render() {
    //Store blog records
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <BlogItem key={blogItem.id} blogItem={blogItem} />;
    });
    //blodRecords is locally scoped so we do not need to call this again
    return <div>{blogRecords}</div>;
  }
}
