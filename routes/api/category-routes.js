const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  try {
    const categoryData = Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(categoryData);
  } catch (err){ 
    res.status(500).json(err);

  }
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  // findByPk(req.params.id
  try {
    const categoryId = Category.findByPk({
      include: [{model: Product}] }, req.params.id);
    res.status(200).json(categoryId);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    // const 
  } catch (error) {
    
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    
  } catch (error) {
    
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    
  } catch (error) {
    
  }
});

module.exports = router;
