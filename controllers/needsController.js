const Need = require('../models/Need');

exports.index = async function(req, res) {
  const needs = await Need.getNeeds(10);
  console.log('needs: ', req.hostname, req.baseUrl);
  res.render('needs', { title: 'Ми потребуємо', needs: needs, req });
};

exports.detail = async function(req, res) {
  const { needId } = req.params;
  const need = await Need.getNeedById(needId);
  console.log('needs: ', need);
  res.render('needs', { title: 'Ми потребуємо', ...need, req });
};

exports.add = async function(req, res) {
  console.log('needs: ', needs);
  res.render('needs', { title: 'Додати потребу' });
};
