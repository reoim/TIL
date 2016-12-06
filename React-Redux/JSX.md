# index
This is example of main index page.

First, find library `react` and assign to variable `React`

Create component and import it. The component should produce some html



```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'; //component


const App = function(){
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// or

const App = () => {
	return (
    <div>
      <SearchBar />
    </div>
  );
}

//then


// Take this component's generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
```


**New Syntax** 

`const App = function(){}` = `const App = () => {}`
