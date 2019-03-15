const Joi = require('joi');
const express = require("express");
const app = express();


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to Vidly!");
});


const genres = [
    {id: 1, name: 'Action'},
    {id: 2, name: 'Horror'},
    {id: 3, name: 'Comedy'},
    {id: 4, name: 'Romance'},
    {id: 5, name: 'Drama'},
    {id: 6, name: 'Sci-Fi'},
    {id: 7, name: 'Documentary'},
    {id: 8, name: 'Independent'},

];

app.get('/api/genres', (req, res) => {
    res.send(genres);
});

app.post('/api/genres', (req, res) => {
    const {error} = validateGenre(req.body); result.error
    if(error) return res.status(400).send(result.error.details[0].message);
    const genre = {
        id: genres.length + 1,
        name: req.body.name 
    }
    genres.push(genre);
    res.send(genre);
});

app.put('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if(!course) return res.status(404).send('No course with that ID');

    const {error} = validateGenre(req.body);  //result.error
    if(error) return res.status(400).send(error.details[0].message);
    course.name = req.body.name;
    res.send(course);
});

app.get('/api/genres/:id', (req, res) => {
    const course = courses.find(c => c.id == parseInt(req.params.id));
    if(!course) return res.status(404).send('No course with that ID');
    res.send(course);
});

app.delete('/api/genres/:id', (req, res) => {

    const genre = genres.find(c => c.id == parseInt(req.params.id));
    if(!genre) return res.status(404).send('No course with that ID');

    const index = genres.indexOf(genre);
    genres.splice(index, 1);

    res.send(genre);
});


const port = process.env.port || 5000;
app.listen(port, () => console.log(`Listening on Port ${port}...`));

function validateGenre(genre){
    const schema = {
        name: Joi.string().min(3).required()
    }

    return Joi.validate(genre, schema);
}


