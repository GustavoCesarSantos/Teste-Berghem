const express = require('express');
const bodyParser = require('body-parser');

const cashierHelper = require('./cashierHelper');

const app = express();

app.use(bodyParser.json());

app.post('/calc' , (req, res) => {
  const userValues = req.body;
  if(!userValues.totalAmount || !userValues.providedAmount)
    res.status(400).json({msg: 'The values not provided'});
    
  try{
    const changeResult = cashierHelper.getChange(userValues.totalAmount, userValues.providedAmount); 
    res.status(200).json(changeResult);
  }catch(error){
    res.status(400).json({msg: error.message});
  };
});

app.listen(3000, () => {
  console.log('Server inicialized in port 3000');
});