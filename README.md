# coding-textbook
A service for providing assigned readings to students.

## Developing the application
This project has been configured with a docker-compose development environment.  You must docker and docker-compose installed, and if working in a Windows environment we highly recommend using Windows Subsystem for Linux with Docker Desktop and VS Code.

Once the required software has been installed, clone the project and build using the terminal command:

```
$ docker-compose build
```

And then launch the server and client with:

```
$ docker-compose up
```

You should then be able to access the service at http://localhost:3000. 

Both the client and server do hot code reloading, so you the server and/or client reboot and redeploy as you save changes in the code.  The only exception is changes to the dependencies and package file, which require a rebuild through docker-compose.


