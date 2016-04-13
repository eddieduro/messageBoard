import Ember from 'ember';

export default Ember.Component.extend({
	answerList: Ember.inject.service(),
	actions: {
		addToAnswers(comment) {
		  this.get('answerList').add(comment);
		  console.log(this.get('answerList').get('comments'))
		},
  }
});
