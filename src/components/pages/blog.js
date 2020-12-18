import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import BlogItem from "../blog/blog-item";
import BlogModal from "../modals/blog-modal";

export default class Blog extends Component {
  constructor() {
    super();

    this.state = {
      blogItems: [],
      totalCount: 0,
      currenPage: 0,
      isLoading: true,
      blogModalIsOpen: false,
    };
    this.getBlogItems = this.getBlogItems.bind(this);
    this.onScroll = this.onScroll.bind(this);
    window.addEventListener("scroll", this.onScroll, false);
    this.handleNewBlogClick = this.handleNewBlogClick.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
  }
  handleModalClose() {
    this.setState({
      blogModalIsOpen: false,
    });
  }
  handleNewBlogClick() {
    this.setState({
      blogModalIsOpen: true,
    });
  }
  onScroll() {
    if (
      this.state.isLoading ||
      this.state.blogItems.length === this.state.totalCount
    ) {
      return;
    }
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      this.getBlogItems();
    }
  }
  getBlogItems() {
    this.setState({
      currenPage: this.state.currenPage + 1,
    });
    axios
      .get(
        `https://christinem.devcamp.space/portfolio/portfolio_blogs?page=${this.state.currenPage}`,
        {
          withCredentials: true,
        }
      )
      .then(response => {
        console.log("getingBlogItems", response.data);
        this.setState({
          blogItems: this.state.blogItems.concat(response.data.portfolio_blogs),
          totalCount: response.data.meta.total_records,
          isLoading: false,
        });
      })
      .catch(error => {
        console.log("getBlogItemsError", error);
      });
  }

  componentWillMount() {
    this.getBlogItems();
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.onScroll, false);
  }
  render() {
    //Store blog records
    const blogRecords = this.state.blogItems.map(blogItem => {
      return <BlogItem key={blogItem.id} blogItem={blogItem} />;
    });

    return (
      <div className="blog-container">
        <BlogModal
          handleModalClose={this.handleModalClose}
          modalIsOpen={this.state.blogModalIsOpen}
        />
        <div className="new-blog-link">
          <a onClick={this.handleNewBlogClick}>Click here to open modal</a>
        </div>
        <div className="content-loader">
          <FontAwesomeIcon icon="spinner" spin />
        </div>
        <div className="content-container"> {blogRecords}</div>
      </div>
    );
  }
}
