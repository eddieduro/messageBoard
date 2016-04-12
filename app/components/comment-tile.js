import Ember from 'ember';

export default Ember.Component.extend({
	answerList: Ember.inject.service(),
	actions: {
		addToList(comment) {
			console.log(this.get('comments'));
		  this.get('comments').add(comment);
		},
  }
});
