var React = require('react');
var ListItem = require('./ListItem.jsx');
var Reflux = require('reflux');
var Actions = require('../model/actions.jsx');
var IngredientsStore = require('../model/ingredients-store.jsx');

var List = React.createClass({
    mixins: [Reflux.listenTo(IngredientsStore, 'onChange')],

    getInitialState: function() {
      return {ingredients:[]};
    },
    onChange: function(event, ingredients) {
      this.setState({ingredients: ingredients});
    },
    componentWillMount: function() {
      Actions.getIngredients();
    },
    render: function() {
        var listItems = this.state.ingredients.map(function(item) {
            return <ListItem key={item.id} ingredient={item.text} />;
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;
