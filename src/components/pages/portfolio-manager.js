import React, { Component } from "react";
import axios from "axios";

import PortfolioSideBarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
  constructor() {
    super();
    this.state = {
      portfolioItems: [],
    };
    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(
      this
    );
    this.handleSuccessfulFormSubmissionError = this.handleFormSubmissionError.bind(
      this
    );
  }

  handleSuccessfulFormSubmission(portfolioItem) {
    //TODO
    //Update portfolioItems state
    //add portfolioItem to list
  }
  handleFormSubmissionError(error) {
    console.log("handleFormSubmissionError", error);
  }
  getPortfolioItems() {
    axios
      .get("https://christinem.devcamp.space/portfolio/portfolio_items", {
        withCredentials: true,
      })
      .then(response => {
        this.setState({
          portfolioItems: [...response.data.portfolio_items],
        });
      })
      .catch(error => {
        console.log("error in PortfolioItemsfunction", error);
      });
  }

  componentDidMount() {
    this.getPortfolioItems();
  }
  render() {
    return (
      <div className="portfolio-manager-wrapper">
        <div className="left-column">
          <PortfolioForm
            handleSuccessfulFormSubmission={this.handleSuccessfulFormSubmission}
            handleSuccessfulFormSubmissionError={this.handleFormSubmissionError}
          />
        </div>
        <div className="right-column">
          <PortfolioSideBarList data={this.state.portfolioItems} />
        </div>
      </div>
    );
  }
}
