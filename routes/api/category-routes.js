const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  try {
    const catData = Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(catData);
  } catch (err){ 
    res.status(500).json(err);

  }
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const catGetId = Category.findOne({
      where: { id: req.params.id},
      include: [{model: Product}] });
    res.status(200).json(catGetId);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const catPost = Category.create(req.body);
    res.status(200).json(catPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const catUpdate = Category.update({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(catUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const catDelete = Category.destroy({
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(catDelete);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
