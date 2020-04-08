const path = require('path');
var bodyParser = require('body-parser');

const express = require('express');
const cors = require('cors');
const low = require('lowdb')
const FileAsync = require('lowdb/adapters/FileSync')

const UserAdapter = new FileAsync('userDB.json')
const UserDB = low(UserAdapter)
UserDB.defaults({users:[], count:0}).write()
const OrderAdapter = new FileAsync('orderDB.json')
const orderDB = low(OrderAdapter) 
orderDB.defaults({orders:[], count:0}).write()

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
const port = 8000;

app.get('/api/products', (req, res) => {
  res.sendFile(path.join(__dirname, 'data', 'products.json'));
});

app.post('/api/order/new', async(req, res)=> {
  console.log('a');
  const products = req.body.products
  const total = req.body.total
  const count = orderDB.get('count').value()
  const finalOrder = {id:count+1, products:products, total:total, status:0}
  orderDB.get('orders').push(finalOrder).write()
  orderDB.update('count', n => n + 1)
  .write()
  res.send(`${await orderDB.get('count').value()}`)
});

app.get('/api/order/get/:id', async(req, res)=> {
  const order = await orderDB.get('orders').value()
  res.json(order[req.params.id -1])
})

app.get('/api/checkUser/:email', async(req, res)=> {
  
  const profile = (UserDB.get('users').find({email:req.params.email}).value())
  if(profile===undefined){
    res.json({status:0})
  }else{
    res.json({status:1, address:await UserDB.get('users').find({email:req.params.email}).value().address})
  }
  //console.log()
})

app.get('/api/createUser/:email', async(req, res)=> {
  console.log(`New user John created`)
  //TODO
})

app.post('/api/order/status', (req,res)=>{
  //TODO
})

app.listen(40)