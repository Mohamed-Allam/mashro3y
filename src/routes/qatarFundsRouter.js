const express = require('express');
const qatarFundsRouter = express.Router();
var mocks = require("../Mocks/qatarFundsMocks")



  var router = function(nav)
  {
    qatarFundsRouter.route('/').get((req, res) => {
      
        res.render(
            'projects',
            {
              title: 'Projects',
              nav : nav,
              projects : mocks.projects
            }
          );  

         // res.send(' projects page ');

      });

      qatarFundsRouter.route('/causes').get((req, res) => {
      
        res.render(
            'causes-grid',
            {
              title: 'Projects',
              nav : nav,
              projects : mocks.projects
            }
          );  

         // res.send(' projects page ');

      });
      
      qatarFundsRouter.route('/:id').get((req, res) => {
        
        const id = req.params.id
        
          res.render(
            'project-details',
            {
              title: 'Project Details',
              nav : nav,
              projectDetails : mocks.projectDetails
            }
          );  

      });

      

      return qatarFundsRouter;


  }

  module.exports = router;