# coding-textbook
A service for providing assigned readings to students.

## Developing the application
This project has been configured with a docker-compose development environment.  You must have docker and docker-compose installed, and if working in a Windows environment we highly recommend using Windows Subsystem for Linux with Docker Desktop and VS Code.

Currently, this repository is configured to run in a "development mode" where the code in each project is mounted as a volume in their respective Docker containers. More work must be done to update the `Dockerfile.dev` files to properly Dockerize this project for deployment.

First, you must install NodeJS version 16 on your system (recommend using [NVM](https://github.com/nvm-sh/nvm) to manage NodeJS versions). Then, clone the repository and run `npm install` from both the client and server directories:

```
$ cd client
$ npm install
$ cd ../server
$ npm install
```

Once the required software has been installed, build using the terminal command:

```
$ docker-compose build
```

And then launch the server and client with:

```
$ docker-compose up
```

You should then be able to access the service at http://localhost:3000. 

Both the client and server do hot code reloading, so you the server and/or client reboot and redeploy as you save changes in the code.  The only exception is changes to the dependencies and package file, which require a rebuild using `npm install` and through docker-compose.

## User Documentation

When the platform is loaded, assigned readings will show up in the left navigation pane. As of right now only a couple textbook pages are accessible and has to be hard coded into the API of the platform. Users can navigate through the pages by clicking the title of the assigned reading. This will then change the reading view to show that page of the textbook. Users can then highlight words in the textbook/reading view and then have the option to highlight or annotate. The highlight option highlights the text in yellow. The annotate option opens the hypthesis note taking on the right for users to add notes to the given text highlighted. Users may need to create an hypothesis account, which can be done from the hypothesis side bar, in order to save their notes. Notes should be saved when you leave the page and come back to it, even if you restart the platform.
