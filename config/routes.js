const express = require('express');
const router = express.Router();

const authorController = require('../controllers/authorController');
//insert other controllers here later
const registrationController = require('../controllers/registrationController');
const sessionController = require('../controllers/sessionController');


//(stops non logged in users)
function secureRoute(req, res, next) {
  if (!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'Log in or face the consequences');
      res.redirect('/sessions/new');
    });
  }
  return next();
}



router.get('/', (req, res) => res.render('pages/_home'));
router.get('/about', (req, res) => res.render('pages/_about'));


router.route('/registrations/new')
  .get(registrationController.new); //show the form
router.route('/registrations')
  .post(registrationController.create); //create the user in db


router.route('/sessions/new')
  .get(sessionController.new); //show the form
router.route('/sessions')
  .post(sessionController.create); //create the user in db
router.route('/sessions/delete')
  .get(sessionController.delete);



router.get('/authors', authorController.index);

router.route('/authors/new')
  .get(secureRoute, authorController.new);

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



/// will need to insert comment routes when i get to it




module.exports = router;
