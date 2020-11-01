import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
        { title: "Bluepearl", category: "veterinary", slug: "Bluepearl" },
        {
          title: "Memorial Sloan Kettering",
          catergory: "Healthcare",
          slug: "Memorial-Sloan-Kettering",
        },
        { title: "Pfizer", category: "Pharmaceutical", slug: "Pfizer" },
      ],
    };
    this.handleFilter = this.handleFilter.bind(this);
    this.getPortfolioItems = this.getPortfolioItems.bind(this);
  }
  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      }),
    });
  }
  getPortfolioItems() {
    axios
      .get("https://christinem.devcamp.space/portfolio/portfolio_items")
      .then(response => {
        // handle success
        console.log("response data : ", response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return (
        <PortfolioItem title={item.title} url={"google.com"} slug={item.slug} />
      );
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    this.getPortfolioItems();

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>
        <button onClick={() => this.handleFilter("veterinary")}>
          veterinary
        </button>
        <button onClick={() => this.handleFilter("Healthcare")}>
          Healthcare
        </button>
        <button onClick={() => this.handleFilter("Pharmaceutical")}>
          Pharmaceutical
        </button>

        {this.portfolioItems()}
      </div>
    );
  }
}
