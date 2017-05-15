# Concept
**Image** - 컨테이너 실행에 필요한 파일과 설정값 포함 (Immutable)

**Container** - `Image`를 실행한 상태. 격리된 공간에서 프로세서가 동작하는 기술

[docker store](https://store.docker.com/) - public image repository

# Command
`docker help` - Show docker command usage information

`docekr version` - Version check

`docker ps` - Check running containers

`docker ps -a` - Show all containers on the system

`docker ps -aq` - Show all containers with numeric IDs only

`docker rm -f $(docker ps -aq)` - Clean up all containers

`docker run imageName` - Run image

`docker images` - Lists all the images on your local system

### Remove all exited containers
List - `docker ps -a -f status=exited`

Remove - `docker rm $(docker ps -a -f status=exited -q)`

### Change tag
`docker tag [imageid] [imagename:tag]`

ex>
```
$ docker tag 7d9495d03763 maryatdocker/docker-whale:latest
```

### Get into docker container
```
docker exec -it <mycontainer> bash
```

### list all dangling volume
```
docker volume ls -f dangling=true
```

### To remove all unused volume and free up space
```
docker volume prune
```

### Important tip on using shared volumes
> Multiple containers can share one or more data volumes. However, multiple container writing to a single shared data volume can cause data corruption. Make sure your application is desinged to write to shared data stores.
>
> Data volumes are directly accessble from the Docker host. This means you can read and write to them with normal linux tools. In most cases, you should not do this as it can cause data corruption if your containers or applications are unaware of your direct access.


## Docker Swarm
Useful commands

```yml
docker-machine create --driver virtualbox myvm1                                 # Create a VM (Mac, Win7, Linux)

docker-machine create -d hyperv --hyperv-virtual-switch "myswitch" myvm1        # Win10

docker-machine env myvm1                                                        # View basic information about your node

docker-machine ssh myvm1 "docker node ls"                                       # List the nodes in your swarm

docker-machine ssh myvm1 "docker node inspect <node ID>"                        # Inspect a node

docker-machine ssh myvm1 "docker swarm join-token -q worker"                    # View join token

docker-machine ssh myvm1                                            # Open an SSH session with the VM; type "exit" to end

docker-machine ssh myvm2 "docker swarm leave"                       # Make the worker leave the swarm

docker-machine ssh myvm1 "docker swarm leave -f"                    # Make master leave, kill swarm

docker-machine start myvm1                                          # Start a VM that is currently not running

docker-machine stop $(docker-machine ls -q)                         # Stop all running VMs

docker-machine rm $(docker-machine ls -q)                           # Delete all VMs and their disk images

docker-machine scp docker-compose.yml myvm1:~                       # Copy file to node's home dir

docker-machine ssh myvm1 "docker stack deploy -c <file> <app>"      # Deploy an app
```

# References
[Docker Doc](https://docs.docker.com/)

[초보를 위한 도커 안내서 by subicura](https://subicura.com/2017/01/19/docker-guide-for-beginners-1.html)

[How To Remove Docker Images, Containers, and Volumes](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)
