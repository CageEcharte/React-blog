import React from 'react';

import Parser from 'html-react-parser';
import { render } from 'react-dom';


class Content extends React.Component {

constructor(){
  super();
  this.state = {
    text: [],
  }
}


componentDidMount(){
  let contentURL= "http://localhost:8888/cage-website/wp-json/wp/v2/posts";
  fetch(contentURL).then(response => response.json()).then(response => {
    console.log()
this.setState({
      text: response
    })
  })
}


render() {

  let projects = this.state.text.map((project, index) => {


    return(
      <div key={index}>
{Parser(project.content.rendered)}

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

export default Content
