## Scope
* universe
* package
* file
* block(curly braces)

## Package scope
* exported/unexported
> Capitalize: exported, visible outside the package

> lowercase: unexported, not visible outside the package

## Closure
We can use `anonymous function` as `closures` in `Go`.

`Closures` means `function value` that references variable from outside of function scope.
```go
package main

import (
	"fmt"
)

func intSeq() func() int {
	i := 0
	return func() int {
		i += 1
		return i
	}
}

func main() {
	nextInt := intSeq()

	fmt.Println(nextInt())
	fmt.Println(nextInt())
	fmt.Println(nextInt())

	newInts := intSeq()
	fmt.Println(newInts())
}
```

function `intSeq` returns another `anonymous function`. Inner scope of the anonymous function uses `i` variable which was defined outter scope. 

Call `intSeq` and assign to nextInt. This function value captures its own `i` value, which will be updated each time we call `nextInt`.

If we assign new `intSeq`, the `i` value will be reset.

Long story, short.

Influence of the inner scope persist value of the outter scope = `closure`


## Struct and Interface
* Struct - define fields

```go
type Rect struct {
	width, height int
}
```

* Interface - define `method set`. `Method set` is a list of methods that a type must have in order to implement the interface

```go
type Shape interface {
  area() float64
}
```


## Concurrency and Parallelism

> In programming, concurrency is the composition of independently executing processes, while parallelism is the simultaneous execution of (possibly related) computations. 

> Concurrency is about dealing with lots of things at once. Parallelism is about doing lots of things at once.


## Reference
[golang blog](golang.org)
