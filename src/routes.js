import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Parser from 'html-react-parser';
import { render } from 'react-dom';

import Posts from "./blogComponent.js";
import Content from "./content.js";

class BasicExample extends React.Component {
   render() {
      return (
         <Router>
            <div>
               <ul>
                  <li>
                     <Link to="/"> Home </Link>
                  </li>
                  <li>
                     <Link to="/about"> About </Link>
                  </li>
                  <li>
                     <Link to="/topics"> Blog </Link>
                  </li>
                  <li>
                     <Link to="/content">
                        <Posts
                           isActive={this.props.isActive}
                           activePost={this.props.activePost}                                          
                           update={this.props.update}                           
                        />
                     </Link>
                  </li>
               </ul>

               <Route exact path="/" component={Home} />
               <Route path="/about" component={About} />
               <Route path="/topics" component={Topics} />
               <Route path="/content" component={Words} />
            </div>
         </Router>
      )
   }
}

class Words extends React.Component {
   render() {
      return (
         <div>
            <Content
               isActive={this.props.isActive}
               activePost={this.props.activePost}                              
               update={this.props.update}
            />
         </div>
      )
   }
};

const Home = () => (
   <div>
      <h2>Home</h2>
   </div>
);

const About = () => (
   <div>
      <h2>About</h2>
      <div>
         <p> yo dog its cage bro dog g </p>
         <h2> getting me a credit card </h2>
      </div>
   </div>
);

const Topics = ({ match }) => (
   <div>
      <h2>Blog</h2>
      <ul>
         <li>
            <Posts />
         </li>
         <li>
            <Link to={`${match.url}/rendering`}>Rendering with React</Link>
         </li>
         <li>
            <Link to={`${match.url}/components1`}> Components</Link>
         </li>
         <li>
            <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
         </li>
      </ul>

      <Route path={`${match.url}/:topicId`} component={Topic} />
      <Route
         exact
         path={match.url}
         render={() => <h3>Please select a topic.</h3>}
      />
   </div>
);

const Topic = ({ match }) => (
   <div>
      <h3> dude bro</h3>
   </div>

);

export default BasicExample;
