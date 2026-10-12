const {Router} = require('express');
const router = Router();

let groups = [
    { id: 1, name: 'NPM-21' },
    { id: 2, name: 'NPN-21' },
    {id: 3, name: 'NPI-22' },
];

router.get('/', (req, res) => {
    res.render('groups', { title: 'Групи', groups: groups });
});

router.post('/', (req, res) => {
    const { name } = req.body;
    const newGroup = {
        id: groups.length + 1,
        name: name
    };
    groups.push(newGroup);
    res.redirect('/groups');
});

module.exports = router;