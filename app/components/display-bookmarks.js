import Ember from 'ember';

export default Ember.Component.extend({
	bookMark: Ember.inject.service(),

  actions: {
    remove(post){
      this.get('bookMark').remove(post);
    }
  }
});
