| ![1664245084944](image/README/1664245084944.png) | col2 |
| ---------------------------------------------- | ---- |

---





• Ingeniero de Sistemas (Universidad Cooperativa de Colombia, Bogotá 2014).
• Seminario Itil v3, Cobit Iso2000 (Universidad de los Andes, Bogotá 2014).

• Posee 11 años de experiencia en análisis, diseño e implementación de soluciones tecnologicas.

AOS SAS
Sterling MFT
• Formó parte del equipo de implementación del proyecto de MFT con Colpatria cumpliendo tareas de Consultor Especialista.
• Formó parte del equipo de implementación del proyecto de MFT en Bancolombiacumpliendo tareas de desarrollador backend.
• Formó parte del equipo de definiciones y estimaciones de desarrollos de transmisiones para el proyecto de Colpatria.

• Apoyo a los equipos de monitorización, como soporte del siguiente nivel de fallas en flujos o causas asociadas al modelo MFT en Colpatria.

DevOps
• Formó parte del equipo de implementación del automatización de despliegues de MFT IBM Sterling con el proyecto Colpatria.
• Formó parte del equipo de implementación del automatización de portal de MFT IBM Sterling con el proyecto Bancolombia.

---

Jenkins Setup

---

Installing on Docker
====================

* https://github.com/jenkinsci/docker/blob/master/README.md

#. Set-up environment:

    .. code-block:: console

    $ mkdir -p /home/jenkins
        $ chmod 777 /home/jenkins
        $ chmod 666 /var/run/docker.sock
        $ ln -s /home/jenkins /var/jenkins_home

#. Run Docker container:

    .. code-block:: console

    $ docker run
    --detach
    --name jenkins
    --rm
    --publish 8080:8080
    --volume /home/jenkins:/var/jenkins_home
    --volume /var/run/docker.sock:/var/run/docker.sock
    jenkins/jenkins

#. Get admin password:

    .. code-block:: console

    $ cat /home/jenkins/secrets/initialAdminPassword

Installing using Docker Compose
===============================

#. Create ``/home/jenkins.yaml``:

    .. code-block:: yaml
        :caption:``jenkins.yaml``

    version: '3'

    networks:
            ecosystem:
                driver: bridge

    services:
            jenkins:
                image: jenkins/jenkins
                container_name: jenkins
                restart: "no"
                ports:
                    - "8100:8080"
                networks:
                    - ecosystem
                volumes:
                    - /home/jenkins:/var/jenkins_home/
                    - /var/run/docker.sock:/var/run/docker.sock

#. Run Jenkins

    .. code-block:: console

    $ cd /home/
        $ docker-compose -f jenkins.yaml up -d
