const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll({
    include: [{
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']


    }],
  })

    .then((categories) => res.json(categories))
    .catch((err) => { console.log(err) });


  // find all categories
  // be sure to include its associated Products

});

router.get('/:id', (req, res) => {

  Category.findByPk(req.params.id, {
    include: {
      model: Product,
      attributes: ['product_name', 'price', 'stock', 'category_id']
    },
  })

    .then((categories) => res.json(categories))
    .catch((err) => { console.log(err) });

  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body, {
  })

    .then((categories) => res.json(categories))
    .catch((err) => { console.log(err) });
  // create a new category
});

router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id
    },

  })

    .then((categories) => res.json(categories))
    .catch((err) => { console.log(err) });

  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id
    }
  })

    .then((categories1) => res.json(categories1))
    .catch((err) => { console.log(err) });
  // delete a category by its `id` value
});

module.exports = router;
