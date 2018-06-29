var express = require('express')
var app = express()

app.set('port', (process.env.PORT || 5000))
  .set('views', __dirname + '/views')
  .set('view engine', 'ejs')
  .use(express.static(__dirname + '/public'))
  .get('/', (req, res) => res.render('pages/index'))
  .listen(app.get('port'), () => {
    console.log("Node app is running at localhost:" + app.get('port'))
  });
