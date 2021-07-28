import React from "react";
import { Router, Switch, Route, Link } from "./lib";

const PageNotFound = () => <div>Page not found</div>;

const Page1 = () => (
  <div>
    <p>Page 1</p>
    <Link href="/page2">Go to page 2</Link>
  </div>
);

const Page2 = () => (
  <div>
    <p>Page 2</p>
    <Link href="/page3">Go to page 3</Link>
  </div>
);

const Page3 = () => (
  <div>
    <p>Page 3</p>
    <Link href="/">Go to page 1</Link>
  </div>
);

function App() {
  return (
    <Router>
      <Switch notFoundComponent={PageNotFound}>
        <Route path="/" exact component={Page1} />
        <Route path="/page2" component={Page2} />
        <Route path="/page3" component={Page3} />
      </Switch>
    </Router>
  );
}

export default App;
