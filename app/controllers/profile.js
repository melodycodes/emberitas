import Ember from 'ember';

export default Ember.Controller.extend({
  name: '...You',
  // ember computed macro
  color: Ember.computed.readOnly('model.color'),
  colorStyle: Ember.computed('color', function() {
    let color = CSS.escape(this.get('color'));
    return Ember.String.htmlSafe("color: " + color);
  }),
  actions: {
    saveModel(){
      this.get('model').save()
      .then(()=> { // happy path
        console.log('Promise Fulfilled - The model was saved.');
      }).catch(()=> { // rejected request
        console.log('Promise Rejected - The model was NOT saved.');
      }).finally(()=> { // always executes
        console.log(this.get('model.currentState.stateName'));
      });
    },
    setName(newName) {
      this.set('model.name', newName);
      // makes a patch request to the "server"
      this.send('saveModel');
    },
    setColor(newColor) {
      this.set('model.color', newColor);
      // makes a patch request to the "server"
      this.send('saveModel');
    }
  }
});
