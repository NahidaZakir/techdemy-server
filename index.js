const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

const cors = require('cors');

app.use(cors());
const categories = require('./data/categories.json');
const courses = require('./data/course.json');
const blogs = require('./data/blog.json');
const questions = require('./data/ques.json');
app.get('/', (req, res) => {
    res.send('Courses Api running')
})
app.get('/courses', (req, res) => {
    res.send(courses);
})
app.get('/categories', (req, res) => {
    res.send(categories);
})
app.get('/category/:id', (req, res) => {
    const id = req.params.id;
    if (id === '06') {
        res.send(courses);
    }
    else {
        const category_course = courses.filter(n => n.category_id === id);
        res.send(category_course);
    }
})
app.get('/courses/:id', (req, res) => {
    const s_id = req.params.id;
    const selectedCourse = courses.find(course => course.id === s_id);
    res.send(selectedCourse);
})
app.get('/blogs', (req, res) => {
    res.send(blogs);
})
app.get('/faq', (req, res) => {
    res.send(questions);
})


app.listen(port, () => {
    console.log(`Techdemy server on port ${port}`)
  })


