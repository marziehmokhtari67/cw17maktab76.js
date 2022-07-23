import React, { Component } from "react";
import "./App.css";
import SideBar from "./components/SideBar";
import Content from "./components/Content";

class App extends Component {
  state = {
    info: [],
    currentPost:[ {
      id: 1,
      title: "Down And Out",
      author: "Kenny Hansen",
      body: "He sat across from her trying to imagine it was the first time. It wasn't. Had it been a hundred? It quite possibly could have been. Two hundred? Probably not. His mind wandered until he caught himself and again tried to imagine it was the first time.",
      image: "1.jpg"
  }],
  };
  selectPost=(key)=>{
   const{info}=this.state
    this.setState({currentPost:info.filter(item=>item.id===key)},()=>console.log(this.state.currentPost))
    
  }

  //cathing data and filling info array for all components
  componentDidMount() {
    fetch("http://localhost:3004/posts").then((data) => 
      data.json()).then(result=>{this.setState({info:result})}) 
  }

  render() {
    return (
      
      <div className="wrapper">
        <SideBar posts={this.state.info} selectPost={this.selectPost}/>
        <Content  post={this.state.currentPost}/>
      </div>
    );
  }
}
export default App;
