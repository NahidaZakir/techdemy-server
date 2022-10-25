const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

app.use(cors());
const categories = require('./data/catgories.json');
const courses = require('./data/course.json');
app.get('/', (req, res) => {
    res.send('News Api running')
})

app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '05') {
        res.send(courses);
    }
    else {
        const category_course = courses.filter(n => n.category_id === id);
        res.send(category_course);
    }

})

app.get('/course', (req, res) => {
    res.send(courses);
})

app.get('/course-categories', (req, res) => {
    res.send(categories);
})
  


app.listen(port, () => {
    console.log(`Dragon news serrver on port ${port}`)
  })


