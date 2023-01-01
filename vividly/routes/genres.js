const express = require('express');
const router = express.Router();
const genresController = require('../controllers/genres')

router.get('/', genresController.getAll);
router.get('/:id', genresController.getById);
router.post('/', genresController.createGenre);
router.patch('/:id', genresController.updateGenre);
router.delete('/:id', genresController.deleteGenre);

module.exports = router;