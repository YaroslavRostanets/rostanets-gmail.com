const Need = require('../models/Need');

exports.index = async function(req, res) {
  const needs = await Need.getNeeds(10);
  console.log('needs: ', needs);
  res.render('needs', { title: 'Ми потребуємо' });
};
