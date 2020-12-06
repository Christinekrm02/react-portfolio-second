import React, { Component } from "react";
import axios from "axios";

import PortfolioSideBarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";

export default class PortfolioManager extends Component {
  constructor() {
    super();
    this.state = {
      portfolioItems: [],
      /* for CRUD (update) functionality */
      portdolioToEdit: {},
    };
    this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(
      this
    );
    this.handleSuccessfulFormSubmissionError = this.handleFormSubmissionError.bind(
      this
    );
    /*CRUD */
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
    this.clearPortfolioToEdit = this.clearPortfolioToEdit.bind(this);
  }
  clearPortfolioToEdit() {
    this.setState({
      portfolioToEdit: {},
    });
  }
  handleEditClick(portfolioItem) {
    this.setState({
      portfolioToEdit: portfolioItem,
    });
  }
  /* functionality to delete items in sidebar, will be applied to portfolio-sidebar.js */
  /* tip- why use filter instead of map?*/
  /* deletion occurs here*/
  handleDeleteClick(portfolioItem) {
    axios
      .delete(
        `https://api.devcamp.space/portfolio/portfolio_items/${portfolioItem.id}`,
        { withCredentials: true }
      )
      /* matching state for deletion occurs here*/
      .then(response => {
        this.setState({
          portfolioItems: this.state.portfolioItems.filter(item => {
            return item.id !== portfolioItem.id;
          }),
        });
        return response.data;
      })
      .catch(error => {
        console.log("handleDeleteClick error", error);
      });
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
            clearPortfolioToEdit={this.clearPortfolioToEdit}
            portfolioToEdit={this.state.portdolioToEdit}
          />
        </div>
        <div className="right-column">
          <PortfolioSideBarList
            handleDeleteClick={this.handleDeleteClick}
            data={this.state.portfolioItems}
            handleEditClick={this.handleEditClick}
          />
        </div>
      </div>
    );
  }
}
