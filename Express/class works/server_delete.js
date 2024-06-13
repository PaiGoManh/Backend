const express = require('express');

const app = express();
const PORT = 3001;

app.use(express.json());

let users=[
    {id: 1 ,name:"Rahul"},
    {id: 2 ,name:"Midhun"},
    {id: 3 ,name:"Manu"}
];

app.get('/users',(req,res)=>{
    res.json(users);
})

app.delete('/users/:id',(req,res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex !== -1) {
      const deletedUser = users.splice(userIndex, 1)[0];
      res.json(deletedUser);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  });
  
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });



