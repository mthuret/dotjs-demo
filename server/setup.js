const algoliasearch = require('algoliasearch');
const _ = require('lodash');

const client = algoliasearch('AP2QL7H7SN', '799cb4d71fafaaa3ae9f175fed1f0b57');
const index = client.initIndex('dotjs-demo');

const records = require('./records.json');
const settings = require('./settings.json');

const chunks = _.chunk(records, 1000);

chunks.map(function(batch) {
  return index.addObjects(batch);
});

index.setSettings(settings);
