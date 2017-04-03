# Concept
**Image** - 컨테이너 실행에 필요한 파일과 설정값 포함 (Immutable)

**Container** - `Image`를 실행한 상태. 격리된 공간에서 프로세서가 동작하는 기술

[docker store](https://store.docker.com/) - public image repository

# Command
`docker help` - Show docker command usage information

`docekr version` - Version check

`docker ps` - Check running containers

`docker ps -a` - Show all containers on the system

`docker run imageName` - Run image

`docker images` - Lists all the images on your local system

### Remove all exited containers
List - `docker ps -a -f status=exited`

Remove - `docker rm $(docker ps -a -f status=exited -q)`

# References
[Docker Doc](https://docs.docker.com/)

[초보를 위한 도커 안내서 by subicura](https://subicura.com/2017/01/19/docker-guide-for-beginners-1.html)

[How To Remove Docker Images, Containers, and Volumes](https://www.digitalocean.com/community/tutorials/how-to-remove-docker-images-containers-and-volumes)
