import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PortfolioSideBarList = props => {
  const portfolioList = props.data.map(portfolioItem => {
    return (
      <div key={portfolioItem.id} className="portfolio-item-thumb">
        <div className="portfolio-item-thumb-img">
          <img src={portfolioItem.thumb_image_url} /> 12
        </div>
        <div className="text-content">
          <div className="title">{portfolioItem.name}</div>
          <div className="actions">
            <a
              className="action-icon"
              onClick={() => props.handleEditClick(portfolioItem)}>
              <FontAwesomeIcon icon="edit" />
            </a>

            {/* to delete an image/item on the page*/}
            {/* method created at portfolio-manager and will be applied to elements rendered in sidebar*/}
            <a
              className="action-icon"
              onClick={() => props.handleDeleteClick(portfolioItem)}>
              <FontAwesomeIcon icon="trash" />
            </a>
          </div>
        </div>
      </div>
    );
  });
  return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default PortfolioSideBarList;
