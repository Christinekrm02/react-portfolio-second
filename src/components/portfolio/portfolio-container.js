import React, { Component } from "react";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [
        { title: "Bluepearl", category: "veterinary" },
        { title: "Memorial Sloan Kettering", catergory: "Healthcare" },
        { title: "Pfizer", category: "Pharmaceutical" },
      ],
    };
    this.handleFilter = this.handleFilter.bind(this);
  }
  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      }),
    });
  }

  portfolioItems() {
    return this.state.data.map(item => {
      return <PortfolioItem title={item.title} url={"google.com"} />;
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }
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
