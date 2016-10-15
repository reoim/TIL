# Web Hosting
## FTP
The **File Transfer Protocol(FTP)** is a standard network protocol used to transfer computer fiels between a client and server on a computer network. **FTP** is built on a client-server model architecture and uses seperate control and data connections between the client and the server.

쉽게 말하면 내 PC에 있는 파일을 서버로 전송하는 방법이다.

Firefox 에드온 중 FireFTP 사용.


## ERROR 508 - Resource limit is reached
Our server was downed today because of infinitive loop that I caused :(

**What is 508 error?**

Website is hitting one or more of the hosting account’s virtual resource limits: CPU Usage, RAM Usage, I/O usage or Entry Processes.

**Why 508 error appear?**

The error message appears when the account is exceeding the allocated resources limit (CPU, RAM usage and/or the number of concurrent processes running under your cPanel account). You can check the resource usage of your account by logging into cPanel -> Resources Usage icon or in real time using SSH command top -c. If the error appears too often, optimization of scripts or account upgrade to the plan with higher server resource limits will be required.
