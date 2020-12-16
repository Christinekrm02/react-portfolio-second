import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogItem from "../blog/blog-item";

export default class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      totalCount: 0,
      currenPage: 0,
    };
    this.getBlogItems = this.getBlogItems.bind(this);
    this.activateInfiniteScroll();
  }
  activateInfiniteScroll() {
    window.onscroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        console.log("get more posts");
      }
    };
  }
  getBlogItems() {
    this.setState({
      currenPage: this.state.currenPage + 1,
    });
    axios
      .get("https://christinem.devcamp.space/portfolio/portfolio_blogs", {
        withCredentials: true,
      })
      .then(response => {
        this.setState({
          blogItems: response.data.portfolio_blogs,
          totalCount: response.data.meta.total_records,
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

    return (
      <div className="blog-container">
        <div className="content-container"> {blogRecords}</div>
      </div>
    );
  }
}
