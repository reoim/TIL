## function = fat arrow 
```javascript
function(){}

// in ES6

() => {}
```

## { }
```javascript
const { fields: { title, categories, content }, handleSubmit } = this.props;

// same as 

const handleSubmit = this.props. handleSubmit
const title = this.props.fields.title
const categories = this.props.fields.categories
const content = this.props.fields.content
```

{ key: value }, if key and value are same
``` javascript
{ test: test }

// same as 

{ test }
```
