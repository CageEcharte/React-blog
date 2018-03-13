import React from 'react';

import Parser from 'html-react-parser';
import { render } from 'react-dom';
import BasicExample from './routes.js';

class Posts extends React.Component {

   constructor() {
      super();
      this.state = {
         projects: [],
         currentProject: null
      }
      this.displayContent = this.displayContent.bind(this)
   }


   componentWillMount() {
      let projectURL = "http://159.65.57.115/blog/wp-json/wp/v2/posts";
      fetch(projectURL)
         .then(response => response.json())
         .then(response => {
            // console.log(response[0])

            this.setState({
               projects: response,
               currentProject: response[0]
            });
         })
   }

   displayContent(el) {
      var content;
      // console.log(typeof el.currentTarget.id);

      this.state.projects.map((project, index) => {
         console.log(el.currentTarget.id);

         if (parseInt(el.currentTarget.id) === project.id) {
            // console.log(project);
            this.props.update({
               activePost: el.currentTarget.id
            })
         }
      })

   }

   render() {
      let projects = this.state.projects.map((project, index) =>
         <div key={index} id={project.id} onClick={this.displayContent}>
            <button> {project.title.rendered} </button>
         </div>
      )

      return (
         <div>
            {projects}
         </div>
      );
   }


}

export default Posts
