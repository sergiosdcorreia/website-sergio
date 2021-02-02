/*
  dependencies
*/

const express = require('express')
const admin = require('firebase-admin')

/*
  config - express
*/

const app = express()

/*
  config - firebase
*/

const serviceAccount = require('./website-sergio-firebase.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

/*
  endpoint - projects
*/

app.get('/projects', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  let projects = []
  db.collection('projects').get().then(snapshot => {
    snapshot.forEach((doc) => {
      projects.push(doc.data())
    })
    response.send(projects)
  })
})

/*
  endpoint - photos
*/

app.get('/photos', (request, response) => {
  response.set('Access-Control-Allow-Origin', '*')
  let photos = []
  db.collection('photos').get().then(snapshot => {
    snapshot.forEach((doc) => {
      photos.push(doc.data())
    })
    response.send(photos)
  })
})

/*
  listen
*/

app.listen(process.env.PORT || 3000)