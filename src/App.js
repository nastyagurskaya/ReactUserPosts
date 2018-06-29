import React, { Component } from 'react';
import Details from './components/Details/Details';
import Login from './components/Login/Login';
import PostsList from './components/Posts/PostsList';
import Registration from './components/Registration/Registration';
import Sidebar from './components/Sidebar/Sidebar';
import './App.css';
import { axios } from "axios";
import { Route } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import SplitPane from 'react-split-pane';

const bodyDivStyle = {
  position: 'absolute',
  height: '100%',
  width: '100%',
  overflow: 'scroll',
  padding: '30px'
};
const splitPaneStyle = {
  background: '#F2F2F2',
  fontFamily: 'Montserrat',
}
class  App extends Component {
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     posts: []
  //   };
  // }
//   componentDidMount() {
//     // fetch('https://jsonplaceholder.typicode.com/posts')
//     // .then(data => {
//     //   return data.json();
//     //   alert(data);
//     // })
//     fetch('https://jsonplaceholder.typicode.com/posts').
//   then(response => response.json()).then((posts) => {
//       //console.log(posts);
//       //console.log(posts.length);
//       this.setState({
//         posts: posts
//       });
//     });
// }
  render() {
    return (
      <SplitPane split="vertical" minSize={50} defaultSize={70} style={splitPaneStyle}>
      <div>
        <Sidebar/>
      </div>
        <div style = {bodyDivStyle}>
        <Route path="/details" component={Details}/>
      <Route path="/login" component={Login}/>
      <Route path="/registration" component={Registration}/>
      <Route path="/postslist" component={PostsList}/>
      </div>
      </SplitPane>
    );
  }
}

export  default App;
