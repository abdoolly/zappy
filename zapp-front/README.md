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

then we will build the docker image which will serve our app using this command
( the dot at the end is intended)
```
docker build -t zappfront .
```

then just run this command to build the application
```
npm run build
```

then to serve the app run you can also change the port to whatever port you like to serve the app on
```
docker run -dit --name zapp_front_container -p 4200:80 zappfront
```

after that command runs successfully you will be able to access your app on that link

http://localhost:4200