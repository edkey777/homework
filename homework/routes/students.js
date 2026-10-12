const {Router} = require('express');
const router = Router();

let students = [
    { id: 1, firstName: 'Олександр', lastName: 'Петренко', group: 'NPM-21' },
    { id: 2, firstName: 'Марія', lastName: 'Іваненко', group: 'NPN-21' },
    { id: 3, firstName: 'Дмитро', lastName: 'Коваленко', group: 'NPI-22' }
];


router.get('/', (req, res) => {
    res.render('students', { title: 'Студенти', students: students });
});
router.get('/add', (req, res) => {
    res.render('add-student', { title: 'Додати студента' });
});

router.post('/add', (req, res) => {
    const { firstName, lastName, group } = req.body;
    const newStudent = {
        id: students.length + 1,
        firstName: firstName,
        lastName: lastName,
        group: group
    };
    students.push(newStudent);
    res.redirect('/students');
});

module.exports = router;