const express = require('express');
const router = express.Router();

const authorController = require('../controllers/authorController');
//insert other controllers here later







router.get('/', (req, res) => res.render('pages/_home'));
router.get('/about', (req, res) => res.render('pages/_about'));












router.get('/authors', authorController.index);

//router.route('/authors/new')
  //.get(secureRoute, authorController.new);

router.get('/authors/:id', authorController.show);
router.post('/authors', authorController.create);
router.get('/authors/:id/edit', authorController.edit);
router.put('/authors/:id', authorController.update);

router.route('/authors/:id')
  .delete((req, res, next) => {
    if (req.session.userId) {
      authorController.delete(req, res, next);
    } else {
      res.render('sessions/new', {message: 'oh well'});
    }

  });








module.exports = router;
