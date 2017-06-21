const loremIpsum = require('lorem-ipsum');
const express = require('express');
const app = express();

app.get('/lorem', function(req, res){
  let info = loremIpsum({count: 3, format:"html", units:"paragraphs"})
  res.send(info)
  console.log('hello from the get')
});

app.listen(3000,function(){
  console.log("Hear Me Please!")
});
