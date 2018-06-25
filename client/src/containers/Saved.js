import React, { Component } from "react";
import API from "../utils/API";
import moment from "moment";

class Saved extends Component {

  state = {
    articles: []
  }

  componentDidMount() {
    this.getSavedArticles();
  }

  getSavedArticles = () => {
    API.articleRetrieve()
      .then(res => this.setState({articles: res.data}))
      .catch(err => console.log(err))
  }

  deleteArticle = id => {
    API.articleDelete(id)
      .then(() => this.getSavedArticles())
      .catch(err => console.log(err))
  }
  


  render() {
    return (
      <div>
        <div className="container">
        <div className="jumbotron jumbotron-fluid py-5 jumboStyle">
        </div>
          <div className="row firstRow mx-auto row align-items-center justify-content-center my-5">
          <h1>Saved Articles Below</h1>
          </div>

                      {/* Article result container */}
                      <div className="col-12">
                        <h2>{this.state.articles.length
                          ? ""
                          : "No Saved Articles to Display"}
                        </h2>

                        <ul className="list-group list-group-flush">
                          {this
                            .state
                            .articles
                            .map(article => (
                              <li key={article._id} className="list-group-item d-flex justify-content-between align-items-center">
                                <a href={article.url} target="_blank">{article.title} - {moment(article.date).format("Do	MMMM YYYY hh:mm:ss a")}</a>
                                <span
                                  className="badge badgeColor py-2"
                                  onClick={() => this.deleteArticle(article._id)}>Delete Article</span>
                              </li>
                            ))}
                        </ul>
                      </div>
              </div>
          </div>
    )
  }
}

export default Saved;