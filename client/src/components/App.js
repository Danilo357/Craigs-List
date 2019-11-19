import React from "react";
import main from "./main";
import Posts from "./PostList";
import CreatePost from "./PostForm";
import Post from "./ViewPost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App(props) {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route exact path="/" component={main}></Route>
          <Route exact path="/:slug" component={Posts}></Route>
          <Route exact path="/:slug/post" component={CreatePost}></Route>
          <Route exact path="/:slug/:id" component={Post}></Route>

          {/* <Route exact path="/users/"></Route> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
