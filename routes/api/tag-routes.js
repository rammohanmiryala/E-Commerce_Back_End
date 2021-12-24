const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  Tag.findAll({
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product,
        attributes: ['product_name','price','stock','category_id']
      }
    ]
  })

    .then((tags) => res.json(tags))
    .catch((err) => {
      console.log(err);

    });
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  Tag.findByPk(req.params.id,{
    attributes: ['id', 'tag_name'],
    include: [
      {
        model: Product,
        attributes: ['product_name','price','stock','category_id']
      }
    ]
  })

    .then((tags) => res.json(tags))
    .catch((err) => {
      console.log(err);

    });

  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {

  Tag.create(req.body, {
  })

    .then((tags) => res.json(tags))
    .catch((err) => { console.log(err) });
  

  // create a new tag
});

router.put('/:id', (req, res) => {
  Tag.update(req.body, {
    where: {
      id: req.params.id
    },

  })

    .then((tags) => res.json(tags))
    .catch((err) => { console.log(err) });


  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {

  Tag.destroy({
    where: {
      id: req.params.id
    }
  })

    .then((tags) => res.json(tags))
    .catch((err) => { console.log(err) });
  // delete on tag by its `id` value
});

module.exports = router;
