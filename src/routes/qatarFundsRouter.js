const express = require('express');
const qatarFundsRouter = express.Router();



  var router = function(nav)
  {
    qatarFundsRouter.route('/').get((req, res) => {
      
        res.render(
            'projects',
            {
              title: 'Projects',
              nav : nav
            }
          );  

         // res.send(' projects page ');

      });
      
      qatarFundsRouter.route('/:id').get((req, res) => {
          const id = req.params.id
        res.send(' project details with ID ' + id);
      });

      return qatarFundsRouter;


  }

  module.exports = router;