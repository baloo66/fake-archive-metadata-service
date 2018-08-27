'use strict';
module.exports = function(app) {
  var service = require('../controllers/metadataController');

  // metadata Routes

  app.route('/doc').post(service.deleteDocLogical);

  app.route('/meta/:dokid').get(service.retrieveMetadata);

  app.route('/meta').post(service.writeMetadata)
                    .get(service.searchByMetadata);

};

