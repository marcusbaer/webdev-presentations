##

![Docker Logo](https://cdn.worldvectorlogo.com/logos/docker.svg)

## Docker

- Docker = Client-Server Applikation mit CLI + Desktop
- Technologie der Wahl zum Packen und Deployen moderner verteilter Anwendungen
- große Community für die Mehrheit der Anwendungsfälle
- guter Support und großes Ökosystem
- läuft auch auf Windows
- Docker Desktop: [https://www.docker.com/get-started](https://www.docker.com/get-started)

## Docker Container

- stellen *benötigte* Ressourcen bereit ≠ VM
- Infrastruktur von Anwendungen signifikant kleiner
- geringere Größe, einfacheres System &mdash; schneller
- besser zu skalieren

![VM vs Docker](https://jfrog--c.eu12.content.force.com/servlet/servlet.ImageServer?id=0151r000006uDem&oid=00D20000000M3v0&lastMod=1584630235000)

## Docker Container

Container sind ideal für moderne Cloud-Architekturen mit lose gekoppelten Microservices.

- Vorteile bei Replikation
- gute Fehlertoleranz dank Fallbacks im Cluster
- bessere Wartbarkeit
- hohe Portabilität durch kompaktes Design
- leicht zu integrieren in CI/CD

## Docker Container

- praktisches Werkzeug für Entwickler
- Projekte = unabhängig von Host
- einfaches (automatisiertes) Aufsetzen und Aktualisieren
- leichte Migration und Duplikation von Umgebungen
- Hosting mit verschiedenen Konfigurationen

## Konzept und Aufbau

- **Docker Engine** baut und startet Container
- **Docker Daemon** verarbeitet Anfragen an API
- **Docker Client** als CLI zur Kommunikation mit Docker
- **Docker Image**
  - read-only Template zum Erstellen von Containern
  - Reihe von Layern, die erforderliche Installationen enthalten
  - Austauschformat

## Konzept und Aufbau

- **Docker Container**
  - lebende Instanz eines Docker Images
  - Starten eines Containers fügt den darunter liegenden Image Layern einen oberen schreibbaren Layer hinzu (Container Layer)
  - Container speichert alle während der Laufzeit vorgenommenen Änderungen

## Konzept und Aufbau

- **Docker Registry**
  - Katalog zum Hosten von Docker Images
  - lokale Registry oder andere Services (Docker Hub)

![Docker Architecture](https://jfrog--c.eu12.content.force.com/servlet/servlet.ImageServer?id=0151r000006uDFc&oid=00D20000000M3v0&lastMod=1584523377000)

## Hands-on Docker

> [https://labs.play-with-docker.com/](https://labs.play-with-docker.com/)

### Getting Started

Docker ist dafür designed einzelne Prozesse in jedem Container auszuführen.

```
docker run -dp 80:80 docker/getting-started

docker run -dp 80:80 docker/getting-started:pwd
docker ps
docker images
docker stop <container>
```

### Apache

```
echo "<html>Hallo Web.Dev</html>"
    > public/tutorial/index.html

docker run --rm --name apache
    -v $(pwd)/public:/app
    -p 80:8080 -p 443:8443
    bitnami/apache:latest
```

### Aufräumen

```
docker images -a
docker rmi <apache-image>
docker rmi <getting-started-image>
docker ps -a
docker rm <container>
```

### Container starten

`docker run <image> <command>`

- `-p 80:8080` Port und Mapping (`host:guest`)
- `-v $(pwd)/public:/app` Volume-Binding
- `-e PORT=8080` Umgebungsvariable
- `-d` Detach = started Container im Hintergrund und zeigt Container ID
- `-it` anbinden einer Pseudo-TTY, mit `stdin` des Containers verbunden; erzeugt interaktive Bash-Shell im Container

### Container starten

- `--rm` nach Ausführung löschen
- `--name container-name` Name eines Containers

### Node

> [https://hub.docker.com/_/node](https://hub.docker.com/_/node)

```
docker run --rm -e NODE_ENV=production
    node:13-alpine node -v

docker run --rm -d -it --name node
    -v $(pwd):/usr/src/app -p 80:8080 -e PORT=8080
    -e SERVER_NAME=Docker -w /usr/src/app
    node:13-alpine node server.js

docker stop node
```

### Node

Ausführen über NPM commands in `package.json`

```
docker run --rm -dit --name node
    -v $(pwd):/usr/src/app -p 80:8080
    -e PORT=8080 -e SERVER_NAME=Docker
    -w /usr/src/app
    node:13-alpine npm start

docker logs [-f] <container>
```

### SSH in Container

```
docker exec -it node /bin/sh

$ vi public/tutorial/formular.html
$ exit
```

### Image aus Container erzeugen

```
docker commit node marcus/node:1.0

docker stop node

docker run --rm -d -it --name node2
    -v $(pwd):/usr/src/app -p 80:8080
    marcus/node:1.0 npm start
```

### Image ohne Volume

```
ls public/tutorial
docker run --rm -p 80:8080 marcus/node:1.0 npm start
```

Wir lernen

1. Volume-Binding erzeugt Datei auf Host
2. Volumes sind nicht Bestandteil des erzeugten Images!

## Docker Manifest

`Dockerfile` erstellen aus `docker run` Befehl

- FROM
- ENV, WORKDIR
- COPY, RUN
- EXPOSE, VOLUME
- CMD

### Dockerfile

```
FROM node:13-alpine AS node

ENV PORT=8080
ENV SERVER_NAME=Docker
ENV NODE_ENV=production

WORKDIR /usr/src/app

COPY package.json /usr/src/app/package.json
COPY server.js /usr/src/app/server.js
COPY public /usr/src/app/public

RUN cd /usr/src/app && \\
    npm install

EXPOSE 8080

VOLUME [ "/usr/src/app/public/tutorial" ]

CMD [ "npm", "start" ]
```

### Image aus Dockerfile bauen

```
docker rmi marcus/node:1.0
docker build --tag marcus/node:1.0 .
docker run --rm -dit --name node -v $(pwd)/public/tutorial:/usr/src/app/public/tutorial -p 80:8080 marcus/node:1.0 npm start
```

## Docker Hub Repository

```
docker push marcus/node:2.0
```

### Image als TAR

```
docker save --output marcus-node-2.0.0.tar marcus/node:2.0
docker load --input marcus-node-2.0.0.tar

docker run -p 8080 marcus/node:2.0
docker port 
```

## Docker Compose

Docker-Compose is essentially a higher-level scripting interface on top of Docker itself, making it easier (ostensibly) to manage launching several containers simultaneously. Its config file (docker-compose.yml) is confusing since some of its settings are passed down to the lower-level docker process, and some are used only at the higher level.

# 

## Quellen

- [What Is Docker? A Beginner’s Guide](https://jfrog.com/knowledge-base/what-is-docker-why-use-docker-containers-a-beginners-guide/)
- [A Beginner’s Guide to Understanding and Building Docker Images](https://jfrog.com/knowledge-base/a-beginners-guide-to-understanding-and-building-docker-images/#:~:text=A%20Docker%20image%20is%20a,publicly%20with%20other%20Docker%20users.)
- https://jfrog.com/knowledge-base/6-alternatives-to-docker-all-in-one-solutions-and-standalone-container-tools/
- https://www.ionos.de/digitalguide/server/knowhow/kubernetes-vs-docker/
- https://www.edureka.co/community/51049/how-is-docker-machine-different-from-docker-engine
- https://www.macadamian.com/learn/docker-machine-basic-examples/
- https://phase2.github.io/devtools/common-tasks/ssh-into-a-container/
- https://stackoverflow.com/questions/24482822/how-to-share-my-docker-image-without-using-the-docker-hub
- https://stackoverflow.com/questions/22655867/what-is-the-difference-between-save-and-export-in-docker#:~:text=There%20are%20two%20main%20differences,smaller%20then%20the%20saved%20one.
- https://docs.docker.com/get-started/part2/
- https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-docker.html
- https://console.aws.amazon.com/ecs/home#/firstRun
- https://www.infoq.com/news/2020/07/docker-ecs-plugin/
- https://runnable.com/docker/install-docker-on-windows-10
- https://docs.docker.com/docker-for-windows/install/
- https://www.docker.com/101-tutorial
- https://labs.play-with-docker.com/