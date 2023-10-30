// displays information from a database
import React, { Component } from "react";
import axios from "axios";

class MyWork extends Component {
  constructor() {
    super();
    this.state = {
      webapps: [],
      selectedItem: null, // Keeps track of the selected item
    };
  }

  componentDidMount() {
    // Make the API call to fetch the webapp data from your server
    axios
      .get("/api/webapp")
      .then((response) => {
        const webapps = response.data;
        this.setState({
          webapps: webapps,
          selectedItem: webapps.length > 0 ? webapps[0] : null, // Set the first item as the selected item
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleItemClick = (item) => {
    this.setState({ selectedItem: item });
  };

  render() {
    const { webapps, selectedItem } = this.state;
    return (
      <div className="section" id="work">
        <div className="work-box-holder">
          <div className="leftbox">
            <h1 className="my-work-title">My Work</h1>
            <div className="work-selection">
              {webapps.map((webapp) => (
                <div
                  key={webapp._id}
                  onClick={() => this.handleItemClick(webapp)} // Add onClick event
                  className={`item ${
                    webapp === selectedItem ? "selected" : ""
                  }`} // Apply different classes based on selection for styling
                >
                  <div className="name">{webapp.name}</div>
                  <div className="description">{webapp.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rightbox">
            <h1>Preview</h1>
            {selectedItem &&
              (selectedItem.linkURL ? (
                <div>
                  <a
                    href={selectedItem.linkURL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={selectedItem.previewImageURL}
                      className="preview"
                      alt={selectedItem.name}
                    />
                  </a>
                  <p>(Click image to enter)</p>
                </div>
              ) : (
                <div>
                  <img
                    src={selectedItem.previewImageURL}
                    className="preview"
                    alt={selectedItem.name}
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="img-container">
          <img src="midjour_climbin.png" className="img" alt="Halfway Climb" />
        </div>
      </div>
    );
  }
}
export default MyWork;
