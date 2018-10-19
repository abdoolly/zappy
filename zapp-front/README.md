# Zappy

## Prerequisites

- make sure you have installed docker in your machine

## Front Installation  Steps
first install the needed dependencies using this command
```
npm install
```

then dont forget to change the backend url to your backend url

open file src/app/services/twitter/tweeter-service.service.ts

and change the baseUrl value to your backend then continue with the steps below

then just run this command to build the application
```
npm run build
```
then just run this command to serve the app

```
sudo docker-composer up -d
```

after that command runs successfully you will be able to access your app on that link

http://localhost:4200