import React, { Component } from "react";
import axios from "axios";
import DropzoneComponent from "react-dropzone-component";
import "../../../node_modules/react-dropzone-component/styles/filepicker.css";
import "../../../node_modules/dropzone/dist/min/dropzone.min.css";

export default class PortfolioForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
      category: "eCommerce",
      position: "",
      url: "",
      thumb_image: "",
      banner_image: "",
      logo: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentConfig = this.componentConfig.bind(this);
    this.djsConfig = this.djsConfig.bind(this);
  }
  /*see dropzone docs */
  componentConfig() {
    return {
      iconFiletypes: [".jpg", ".png"],
      showFiletypeIcon: true,
      postUrl: "https://httpbin.org/post",
    };
  }
  djsConfig() {
    return {
      addRemoveLinks: true,
      maxFiles: 1,
    };
  }
  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_item[name]", this.state.name);
    formData.append("portfolio_item[description]", this.state.description);
    formData.append("portfolio_item[url]", this.state.url);
    formData.append("portfolio_item[category]", this.state.category);
    formData.append("portfolio_item[position]", this.state.position);

    return formData;
  }
  handleChange(e) {
    axios
      .post(
        "https://christinem.devcamp.space/portfolio/portfolio_items",
        this.buildForm(),
        { withCredentials: true }
      )
      .then(response => {
        this.props.handleSuccessfulFormSubmission(response.data.portfolio_item);
      })
      .catch(error => {
        console.log("portfolio form handleSubmit error", error);
      });
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleSubmit(e) {
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
            {/* Use a select tag to create a drop down */}
            {/* option values should be hardcoded because these are the actual options provided in dropdown*/}
            {/* go up to state and add a default value for state so that the category gets added to the database*/}
            <select
              name="category"
              value={this.state.category}
              onChange={this.handleChange}>
              <option value="eCommerce">eCommerce</option>
              <option value="Scheduling">Scheduling</option>
              <option value="Enterprise">Enterprise</option>
            </select>
            <div>
              <textarea
                type="text"
                name="description"
                placeholder="Description"
                value={this.state.position}
                onChange={this.handleChange}
              />
            </div>
            <div className="image-uplloaders">
              <DropzoneComponent
                config={this.componentConfig()}
                djsConfig={this.djsConfig()}></DropzoneComponent>
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
