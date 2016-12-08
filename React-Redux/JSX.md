# JSX
`React` uses `JSX` which is a preprocessor step that adds XML syntax to JavaScript. 


### class
`class` is already in use for class component. 

For the naming convention, use `className` for html `class` attribute.

```javascript
const VideoList = () => {
  return (
    <ul className="myClass">
    </ul>
  )
}
```

### import
If you write just a word, it will import the entire object from that file.

ex> 
```javascript
import React from 'react';
```
But if you use curly braces, it will pull off just a single property.

ex>
```javascript
import { connect } from 'react-redux';
```
Also you can import them together

ex>
```javascript
import React from 'react';

class myClass extends React.Component {
  render(){
    ...
  }
}

// above code can be write like following code

import React, { Component } from 'react';

class myClass extends Component {
  render(){
    ...
  }
}
```

