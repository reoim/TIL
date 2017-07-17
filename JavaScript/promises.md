Compare to `Callback`, `Promises` offer better way to execute and manage asynchronous operation. It allow us to handle asynchronous erros that similar to synchronous `try/ catch`.

# States
`Promises` got following 4 states
* **Fulfilled (Resolved)** - It worked
* **Rejected** - It didn't work
* **Pending** - Still wating
* **Settled** - Something happend


Promises can only settle once. they execute in the main thread and still potentially blocking.
