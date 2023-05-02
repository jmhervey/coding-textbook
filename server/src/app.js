const axios = require( "axios" )
const express = require( "express" )
const bodyParser = require( "body-parser" )

const app = express()

app.use( bodyParser.json() )

//API call that gets the links of textbook pages to show in the navigation panel
app.get('/api/assigned-readings', (req, res) => {
  res.json({
      0: { id: 0, title: "CIS 400 Textbook", url: "https://textbooks.cs.ksu.edu/cis400/" },
    1: {id: 1, title: "Introduction", url: "https://textbooks.cs.ksu.edu/tlcs/1-what-is-cs/01-introduction/embed.html"},
    2: {id: 2, title: "What is Computer Science?", url: "https://textbooks.cs.ksu.edu/tlcs/1-what-is-cs/04-computer-programming/embed.html"}
  })
})

//API call that embeds hypothesis into html
app.post('/api/reading', async (req, res) => {
  const response = await axios.get(req.body.url);
  res.send(response.data.replace('</body>', '<script src="https://hypothes.is/embed.js" async></script></body>'))
})

module.exports = app;
