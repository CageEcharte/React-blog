import React from 'react';

import Parser from 'html-react-parser';
import { render } from 'react-dom';
import BasicExample from './routes.js';

class Posts extends React.Component {

constructor(){
  super();
  this.state = {
    projects: [],
    currentProject: []
  }
  this.displayContent = this.displayContent.bind(this)
}


componentWillMount(){
  let projectURL= "http://localhost:8888/cage-website/wp-json/wp/v2/posts";
  fetch(projectURL).then(response => response.json()).then(response => {
    console.log(response[0])
this.setState({
      projects: response,
      currentProject: response[0]

    })

  })
}

displayContent (el){
  var content;
  console.log(typeof el.currentTarget.id);

this.state.projects.map((project, index) => {

if (parseInt(el.currentTarget.id) === project.id) {
  this.setState({
        currentProject: project

      })
   }
})

}

render() {

  let projects = this.state.projects.map((project, index) => {

    return(

      <div key={index} id={project.id} onClick={this.displayContent}>
   <a href="#"> {project.title.rendered} </a>

      </div>

    )
  })
  return(
<div>
 {projects}
{this.state.currentProject.content.rendered}
</div>
  );
}


}

export default Posts
