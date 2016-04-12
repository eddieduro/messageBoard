import Ember from 'ember';

export default Ember.Component.extend({
	actions: {
		addToList(comment) {
			console.log(answerList);
		  this.get('answerList').add(comment);
		},
  }
});
