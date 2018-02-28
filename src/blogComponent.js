import React from 'react';

import Parser from 'html-react-parser';
import { render } from 'react-dom';
import BasicExample from './routes.js';

class Posts extends React.Component {

constructor(){
  super();
  this.state = {
    projects: [],
  }
}


componentDidMount(){
  let projectURL= "http://localhost:8888/cage-website/wp-json/wp/v2/posts";
  fetch(projectURL).then(response => response.json()).then(response => {
this.setState({
      projects: response
    })
  })
}





render() {

  let projects = this.state.projects.map((project, index) => {

    return(
      <div key={index}>
   <a href="#"> {project.title.rendered} </a>

      </div>
    )
  })
  return(
<div>
 {projects}
</div>
  );
}


}

export default Posts
