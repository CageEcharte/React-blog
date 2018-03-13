import React from 'react';

import Parser from 'html-react-parser';
import { render } from 'react-dom';


class Content extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         text: []
      }
   }

   componentDidMount() {
      let contentURL = "http://159.65.57.115/blog/wp-json/wp/v2/posts";
      fetch(contentURL).then(response => response.json()).then(response => {
         this.setState({
            text: response
         })
      })
   }


   render() {
      console.log(this.props.activePost);
      let projects = this.state.text.map((project, index) => {
         return (
            <div key={index} id={project.id} 
               className={`${this.props.activePost === project.id ? '' : 'hidden'}`}>
               {Parser(project.content.rendered)}
            </div>
         )
      })
      return (
         <div>
            {projects}
         </div>
      );
   }


}

export default Content
