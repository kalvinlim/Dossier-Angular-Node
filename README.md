# Dossier-Angular-Node
Dossier Auditor written using the MEAN stack 

### Overview
Self auditing tool to datamine the web for information based on email search.  This is an exercise in angular/node.js as well as RESTful api design and consumption

### Demo

* [[Example search result]](http://ec2-52-88-245-162.us-west-2.compute.amazonaws.com:8080/zuck@facebook.com)
* [[Default page view]](http://ec2-52-88-245-162.us-west-2.compute.amazonaws.com:8080/)

### Dependencies:

* [Bower](http://bower.io/)
* [node.js](https://nodejs.org/)


### Installation

Node.js command prompt:
``` 
> npm install -g bower
> bower-install
> node server.js
````

### APIs used:
* [FullContact](https://www.fullcontact.com/) : server-side api key needed in config/apiKey.json (Not provided)
* [Google Maps](https://developers.google.com/maps/) : client-side public api key needed (Provided in source code)

REST endpoints:
```
/api/v1/person.json
```
Accepted params:
* email

Example usage
```
/api/v1/person.json?email=person@example.com
```
