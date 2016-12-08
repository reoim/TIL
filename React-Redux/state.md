# State
* `State` is plain javascript object and exist in class based component, but not in functional component.

How to declare state in the class?
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: ''}; //Property 'term' can be replaced by any other word
  }
}
```
* Whenever the state is changed, it will re-render component and all children.

How to manipulate state? like this. `this.setState({ term: event.target.value})`

ex>
```javascript
  render() {
    return (
      <div>
        <input onChange={event => this.setState({ term: event.target.value})} />
      </div>
    );
  }
```
However, above example does not change value of input. It only trigger event handler and change state. 

To set value as state change, set declare value as state.
```javascript

class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: ''}; //Property 'term' can be replaced by any other word. default value is empty
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term} //default term value is empty
          onChange={event => this.setState({ term: event.target.value})} />
      </div>
    );
  }
}
```

In this case, whenever state change, component will be re-rendered so does value attribute. So it will have updated state as value.





* **Component state is completely different from application state**
