import Ember from 'ember';

export default Ember.Controller.extend({
  name: '...You',
  color: 'green',
  colorStyle: Ember.computed('color', function() {
    var color = CSS.escape(this.get('color'));
    return Ember.String.htmlSafe("color: " + color);
  }),
  actions: {
    setName(newName) {
      this.set('name', newName);
    },
    setColor(newColor) {
      this.set('color', newColor);
    }
  }
});
