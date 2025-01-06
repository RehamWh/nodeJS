//Reham wahbi , Francis Muzalbat
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const users = require('./users.json');

app.get('/', (req, res) => {
  res.send('<h1> Home Page</h1><a href="/api/users">products</a>');
});


/*filter:
req: minAge , maxAge
res : users json between minAge & maxAge
*/
app.get('/api/users/filter', (req, res) => {
  const { minAge, maxAge } = req.query;
  console.log(minAge, maxAge);
  let arr = [...users];
  if (minAge != null && maxAge != null) {
    arr = arr.filter(user => {
      return user.age >= minAge && user.age <= maxAge;

    }

    )
    res.status(200).json(arr);


  }



});

/* users
req : users
res : all users json details*/
app.get('/api/users', (req, res) => {
  const newUsers = users.map(user => {
    res.json(users);
  });
  res.send(newUsers);
});


/* :id 
req: id 
res : details of user with same id in html */
app.get('/users/:id', (req, res) => {
  const { id } = req.params;

  const singleUser = users.find(
    user => user.id === Number(id),
  );

  if (!singleUser) {
    return res.status(404).send('User Does Not Exist');
  }

  return res.send(`<html>
    <body>
    <h1>User's details required :</h1>
    <div>Name:<strong>${singleUser.name}</strong> </div>
    <div> Id: ${singleUser.id}</div>
    <div> Age: ${singleUser.age}</div>
    <div> email: ${singleUser.email}</div>
    </body>
    </html>`);

});

/*id:
req: id
res: details of user with id in json  */
app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;

  const singleUser = users.find(
    user => user.id === Number(id),
  );
  if (!singleUser) {
    return res.status(404).send('User Does Not Exist');
  }

  return res.json(singleUser);

});





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
