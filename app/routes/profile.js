import Ember from 'ember';

export default Ember.Route.extend({
  // load the model
  model(){
    return this.store.findRecord('user', 1);
  }
});
