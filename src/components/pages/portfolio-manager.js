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
  /* method that populates the page with each new submission to the portfolio*/
  /* to update the state for each new record, use concat to add the existing array for portfolioItems to the created array for the newly added portfolio item*/
  /* this allows the new item to be added to the top of the array/list on the page*/
  /* Cannot use push since that will not give behavior we are looking for*/
  handleSuccessfulFormSubmission(portfolioItem) {
    this.setState({
      portfolioItems: [portfolioItem].concat(this.state.portfolioItems),
    });
  }
  handleFormSubmissionError(error) {
    console.log("handleFormSubmissionError", error);
  }
  getPortfolioItems() {
    axios
      .get(
        "https://christinem.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc",
        {
          withCredentials: true,
        }
      )
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
