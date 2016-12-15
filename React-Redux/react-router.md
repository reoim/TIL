[React Router](https://github.com/ReactTraining/react-router) is a complete routing library for [React](https://facebook.github.io/react).

React Router keeps your UI in sync with the URL. It has a simple API with powerful features like lazy code loading, dynamic route matching, and location transition handling built right in. Make the URL your first thought, not an after-thought.



# Child route and component

[React Router](https://github.com/ReactTraining/react-router) defines mapping between a given url path and components
```javascript
import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';

const Greeting = () => {
  return <div>Hey there!</div>;
};

// We can nest routes with inside other routes to define more complex url
export default (
  <Route path="/" component={App}>
    <Route path="greet" component={Greeting} />
    <Route path="greet2" component={Greeting} />
    <Route path="greet3" component={Greeting} />
  </Route>
);
```
**Whenever we expect a parent route to render a child route, the parent needs to reference this.props.children in the rendered method as that is where the child component will be rendered**

app.js
```javascript
import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

```

# Navigating Programatically
[react-router doc](https://github.com/reactjs/react-router-tutorial/tree/master/lessons/12-navigating)

