var HTTP = require('../services/httpservice');

var Reflux = require('reflux');
var Actions = require('./actions.jsx');

var IngredientsStore = Reflux.createStore({
  listenables: [Actions],
  getIngredients: function() {
    HTTP.get('/ingredients')
    .then(function(json) {
        this.ingredients = json;
        this.fireUpdate();
    }.bind(this));
  },
  postIngredient: function(text) {
    fireUpdate();
  },
  fireUpdate: function() {
    this.trigger('change', this.ingredients);
  }
});

module.exports = IngredientsStore
