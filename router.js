const router = require('express');
const opsSchema= require('./model/operation.js');
const opsRouter = router;

app.post("/op", async (request, response) => {

   number1=request.body.number1 ;
   number2=request.body.number2;

   operation= request.body.operation; 
   let result ;

   if(operation == "+")
     result = number1 + number2;
   else if(operation == "-")
     result = number1 - number2;
   
   else if(operation == "*")
    result = number1*number2;

  try {
  
    await opsSchema.save();
    response.send(result);
  } catch (error) {
    response.status(500).send(error);
  }
      
  });

  module.exports = opsRouter;

 

  
