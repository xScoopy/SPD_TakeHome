const request = require('request');
const api = process.env.API_KEY

module.exports = (app) => {
    app.post("/", (req, res) => {
            const city = req.body.city
            let url = `http://api.openweathermap.org/data/2.5/weather?units=imperial&q=${city}&appid=${api}`

            request(url, function (err, response, body) {
                if(err){
                  console.log('error:', error);
                  res.redirect('/')
                } else {
                    let weather = JSON.parse(body);
                    console.log(weather)
                    res.render("results", {weather})
                }
              });
    })
}