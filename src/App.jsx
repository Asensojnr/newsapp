import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  state = {
    articles: [],
  }

  componentDidMount() {
    const url = "https://newsapi.org/v2/top-headlines?apiKey=6ae2a62c27604da188654db076151307&country=us"
    axios.get(url).then(response => {
      let apiArticles = response.data.articles;
      this.setState({ articles: apiArticles })
    }).catch(error => {
      console.log(error)
    })

  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="title is-10"> AS NEWS</p>
            </div>
            <div className="column">
              <p className="title is-10">ARTICLES</p>
              {this.state.articles.map(x => (
                <div className="columns">
                  <div className="column is-one-quater">
                    <img src={x.urlToImage} alt={x.title} className="rounded-img" />
                  </div>
                  <div className="column">
                    <p className="title is-5">{x.title}</p>
                    <p className="subtitle">{x.description}</p>
                    <a href={x.url} target="_blank" rel="noopener noreferrer">Readmore</a>

                  </div>
                </div>
              ))}

            </div>
          </div>

        </div>

      </section>
    )
  }
}


export default App;
