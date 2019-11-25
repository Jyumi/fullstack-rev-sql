// Controller here
// complete building out the controller
const helper = require('../db/dbhelpers')

const controller = {
  get: (req, res) => {
    helper.getProductsHelper((err, results) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(200).send(results)
      }
    })

  },

  post: (req, res) => {
    let obj = {};
    obj.item = req.body.item
    obj.min_cost = req.body.min_cost
    obj.curr_bid = req.body.curr_bid
    obj.ends_in = req.body.ends_in
    boj.image = req.body.image

    helper.postProductsHelper(obj, (err, results) => {
      if (err) {
        res.status(400).send(err)
      } else {
        res.status(201).send(results)
      }
    })
  },

  put: (req, res) => {
    if (req.body.curr_bid <= req.body.old_bid){
      res.status(404).send('New bid must be higher')
    } else {
      helper.updateProductHelper(req.params._id, req.body.curr_bid, (err, results) => {
        if(err) {
          res.status(404).send(err)
        } else {
          res.status(200).send(results)
        }
      })
    }
  },

  delete: (req, res) => {
    helper.deleteProductHelper( req.params.id, (err,results) => {
      if(err) {
        res.status(404).send(err)
      } else {
        res.status(200).send(results)
      }
    });
  }
}

module.exports = controller