import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

  firebase.initializeApp(config);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export { firebase,googleAuthProvider, database as default };

//     // chid_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
// console.log(snapshot.key, snapshot.val());
// });

// //child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
//   });

//   //child_added
//   database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//     });
  


  // database.ref('expenses').on('value', (snapshot) => {
  //   const expenses = [];

  //   snapshot.forEach((childSnapshot) => {
  //    expenses.push({
  //    id: childSnapshot.key,
  //    ...childSnapshot.val()
  //    });
  //   });
 
  //   console.log(expenses);
  // });
  // .then ((snapshot) => {
  //  const expenses = [];

  //  snapshot.forEach((childSnapshot) => {
  //   expenses.push({
  //   id: childSnapshot.key,
  //   ...childSnapshot.val()
  //   });
  //  });

  //  console.log(expenses);
  // });

   database.ref('expenses').push({
    description: 'Water Bill',
    note: 'Monthly Water Bill',
    amount: 50000,
    createdAt: 976123498763
  });


 
 //database.ref('notes/-LYw42USHery8XIp-cto').remove();

  // database.ref('notes').push({
  //   tite: 'Course Topics',
  //   body: 'React Native, Angular, Python'
  // });

 
//  database.ref().on('value', (snapshot) => {
// const val = snapshot.val();
// console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`)
//  });
 
//   database.ref('location/city')
//   .once('value')
//   .then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
//   })
//    .catch((e)=>{
//  console.log('Error fetching data',e);
//    });

//     database.ref().set({
//      name: 'Lani Heritage',
//     age: 42,
//     stressLevel: 6,
//     job: {
//       title: 'Company Director',
//       company: 'Sonly Cleaning Services'
//     },
//       location: {
//          city: 'Andover',
//          country: 'United Kingdom'
//        }, 
//     }).then (()=>{
//         console.log('Data is saved');
//    }).catch((e)=>{
//   console.log('This failed', e);
//     })

// database.ref().update({
//  stressLevel: 9,
//  'job/company': 'Amazon',
//  'location/city': 'Seattle'
// });

 

// database.ref('isSingle')
// .remove()
// .then(() => {
// console.log('Data was removed');
// }).catch((e)=> {
// console.log('things did not work as planned',e);
// });


