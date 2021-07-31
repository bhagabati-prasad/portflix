# Portflix: Portfolio generator

The project is to generate a portfolio as per the data submitted by the user. User can sign up and fill the portfolio form and generate portfolio page dynamically.

## Installation

---

This project uses React.js for front-end and Node.js for back-end.
<br />
As it's in production phase, you need not run it on locally. You can deploy it on any server.
<br />

### Env variable

---

FIrst createa a file named `.env` on root dir and add values to these variables:

```
MONGO_URI='<mongodb-url>/<collection-name>'

SECRET_TOKEN='your secret token'
```

### Run Server

---

Then install mongoDB database and create collection named `portflix` or in ant name and change the value of `MONGO_URI` in `.env` file.
<br />
Then go to server folder (./client) and open command panel to run the command and install react:

```
$ npm install
```

After installing react and dependencies, create production built react app (if you've made any changes):

```
$ npm run build
```

After that the project is ready to be deployed.
<br>

## Plugins used

---

- typewriter-effect
- react-background-slider
- react-circular-progressbar
