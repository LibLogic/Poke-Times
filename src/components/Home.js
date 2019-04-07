import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Pokeball from '../pokeball.png'
import Axios from 'axios';


class Home extends Component {
  state ={
    posts: []
  }
  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      this.setState({
        posts: res.data.slice(0, 10)
      });
    });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key="post.id">
            <img src={ Pokeball } alt="A Pokeball" />
            <div className="card-content">
              <Link to={ '/' + post.id }>
                <span className="card-title red-text">{ post.title }</span>
              </Link>
              <p>{ post.body }</p>
            </div>
          </div>
        )
      })
    ) : ( <div className="center">No posts yet</div> )

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        { postList }
      </div>
    )
  }
}


export default Home;