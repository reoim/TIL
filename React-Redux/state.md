# State
* `State` is plain javascript object and exist in class based component, but not in functional component.

How to declare state in the class?
```javascript
class MyComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: ''}; //Property 'term' can be replaced by any other word
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
        Value of the input: {this.state.term}
      </div>
    );
  }
```
