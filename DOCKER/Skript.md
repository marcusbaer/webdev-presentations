# Docker

- Docker = Docker Engine
    - wenn "Docker" sagen, meinen wir Docker Engine
    - Client-Server Applikation, der Docker daemon
      - REST API für Interaktionen mit dem daemon
      - und command line interface (CLI) client, der über API mit daemon spricht
- Docker ist nur eine von mehreren Container-Plattformen
- aber ist Technologie der Wahl zum Packen und Deployen moderner verteilter Anwendungen
- der am meisten verwendete Container-Service und einfacher zu deployen als andere Technologien
- Open-Source, robust, sicher, kosteneffizient und bietet viele Features
- getragen von einer großen Community von Firmen und Einzelpersonen
- als führende Container-Plattform, bietet es guten Support und großes Ökosystem
- und es läuft auch auf Windows, ermöglicht durch einen Linux virtualization layer, der sich zwischen Windows und Docker befindet
- Docker Machines, WSL 2
- auch Windows Container werden unterstützt
- Docker ist damit beste Wahl für die Mehrheit der Anwendungsfälle
- Docker Desktop Download und Installation: https://www.docker.com/get-started

## Docker Container

- in einem Atemzug mit Docker sind Container zu nennen
- Container sind Umgebungen, die nur die Ressourcen bereitstellen, die eine Anwendung gerade benötigt
- im Gegensatz zu VM = Gast-Betriebssystem
- Docker kann so erforderliche Infrastruktur von Anwendungen signifikant reduzieren
- geringere Größe und einfacheres System bedeuten auch, dass Container schneller gestartet und gestoppt werden können als VMs
- deutlich responsiver hinsichtlich Skalierungsanforderungen


- Container sind idealer Baustein für den modernen Cloud-Ansatz bei Softwarearchitekturen
- einem monolythischen Programm steht eine Ansammlung lose gekoppelter Microservices gegenüber
- Container bringen Vorteile bei der Replikation
- können Fehler tolerant sein: wenn Container failed -- Fallback auf andere Microservices im Cluster
- leichter zu warten: Patch oder Updates betreffen nur einen kleinen Teil des Clusters
- ihr kompaktes Design macht sie hoch portabel
- leicht zu integrieren in Continuous Integration (CI) oder Continuous Delivery (CD) Workflows
- sehr praktisches Werkzeug für Entwickler
- Projekte werden unabhängig von der Host-Umgebung, vom System des jeweiligen Entwicklers
- definierte Systemumgebung: Container verhalten sich auf jedem Host gleich, auch im CI Prozess
- Virtualisierung des Entwickler-Setups: einfaches (automatisiertes) Aufsetzen und Aktualisieren der Umgebung
- einfachere Migration und Duplikation von Umgebungen: Docker Repositories, Erweiterung der Instanzen
- wir können sie auf unterschiedlichen Servern mit verschiedenen Konfigurationen hosten

## Grundprinzip

- **Docker Engine**:
  - zu installierendes Programm zum Bauen, Starten und Managen der Container
- **Docker Daemon**:
  - Teil der Engine, der auf Anfragen hört und verarbeitet
- **Docker Client**:
  - CLI zur Kommunikation mit dem Docker System
- **Docker Image**:
  - ein nicht schreibbares Template (read-only) zum Erstellen von Docker Containern
  - Image besteht aus einer Reihe von Layern, welche alle erforderlichen Installationen, Abhängigkeiten, Libraries und Prozesse für eine vollständig lauffähige Container-Umgebung enthalten
  - ist der übliche Weg, um Anwendungen oder vorkonfigurierte Umgebungen zu packen, welche dann anderen Anwendern (Entwickler, DevOps, Repositories) zur Verfügung gestellt werden
  - Docker Images sind auch der Einstiegspunkt in die Dockerwelt
  - Beispiel-Images: Ubuntu, Apache, Nginx, MySQL, Wordpress, Mailhog, LaTeX usw. .... Node
- **Docker Container**:
  - eine "lebende" Instanz eines Docker Images, in welcher individuelle Microservices laufen oder gar ein ganzer Application Stack
  - Beim Starten eines Containers fügt man den darunterliegenden Image Layern einen oberen schreibbaren Layer hinzu (Container Layer)
  - Container speichert alle während der Laufzeit vorgenommenen Änderungen
- **Docker Registry**:
  - ein Katalagsystem zum Hosten, Pushen und Pullen von Docker images
  - eigene lokale Registry oder einer von vielen Registry Services von Drittanbietern (Amazon ECR, Google Container Registry oder Dockers eigene Registry "Docker Hub").



## Hands-on Docker

Docker ist dafür designed einzelne Prozesse in jedem Container auszuführen.

- https://labs.play-with-docker.com/


The `-it` instructs Docker to allocate a pseudo-TTY connected to the container’s stdin; creating an interactive bash shell in the container.

`-d` Detach = Run container in background and print container ID

## Docker Manifest

Dockerfile

## Docker Compose

Docker-Compose is essentially a higher-level scripting interface on top of Docker itself, making it easier (ostensibly) to manage launching several containers simultaneously. Its config file (docker-compose.yml) is confusing since some of its settings are passed down to the lower-level docker process, and some are used only at the higher level.
