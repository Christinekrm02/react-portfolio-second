import React, { Component } from "react";

export default class PortfolioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      category: "",
      position: "",
      url: "",
      thumb_image: "",
      banner_image: "",
      logo: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
    console.log("event: ", e);
    e.preventDefault();
  }
  render() {
    return (
      <div>
        <h1>Portfolio Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Portfolio item name"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="url"
              placeholder="URL"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={this.state.posiion}
              onChange={this.handleChange}
            />
            <input
              type="text"
              name="category"
              placeholder="Category"
              value={this.state.category}
              onChange={this.handleChange}
            />
            <div>
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={this.state.position}
                onChange={this.handleChange}
              />
            </div>
            <div>
              <button type="submit">Save</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
