## Composed Message Processor
The combination of a Splitter, a Router  and and Aggregator

## Process Manager
Central component that manages the flow of messages through the system. It provides 2 main functions:
* Storing data between messages
* Keeping track of progress and determining  the next step

`Shared Database` is simple and efficient approach to display current data on web interface. But it is tightly coupled to the database.

## Smart Proxy
`Request-reply` service need to support the concep to of a `Return Address`. Many legacy systems don't have the `Return Address` concept. So warp access to legacy system with `Smart Proxcy`

`Smart Proxy` intercepts request and reply messages. Store information from request message and use it to process the reply message.

Very useful to track quality of service of an external service.


