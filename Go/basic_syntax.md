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
