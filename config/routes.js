const express = require('express');
const router = express.Router();

const audiobookController = require('../controllers/audiobookController');
//insert other controllers here later
const registrationController = require('../controllers/registrationController');
const sessionController = require('../controllers/sessionController');
const commentController = require('../controllers/commentController');

//(stops non logged in users)
function secureRoute(req, res, next) {
  if (!req.session.userId) {
    return req.session.regenerate(() => {
      req.flash('danger', 'Please Log In...');
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



router.get('/audiobooks', audiobookController.index);

router.route('/audiobooks/new')
  .get(secureRoute, audiobookController.new);

router.get('/audiobooks/:id', audiobookController.show);
router.post('/audiobooks', audiobookController.create);
router.get('/audiobooks/:id/edit', audiobookController.edit);
router.put('/audiobooks/:id', audiobookController.update);

router.route('/audiobooks/:id')
  .delete((req, res, next) => {
    if (req.session.userId) {
      audiobookController.delete(req, res, next);
    } else {
      res.render('sessions/new', {message: 'oh well'});
    }

  });


router.route('/audiobooks/:audiobookId/comments')
  .post(secureRoute, commentController.create);

router.route('/audiobooks/:audiobookId/comments/:commentId')
  .delete(secureRoute, commentController.delete);
/// will need to insert comment routes when i get to it




module.exports = router;
