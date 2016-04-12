import Ember from 'ember';

export default Ember.Service.extend({
	comments: [],

	add(comment) {
		for(var i=0; i < length; i++) {
		  if(answer === this.get('comments')[i]) {
			return "already on list";
		  } else {
			this.get('comments').pushObject(answer);
		  }
		}
	}
});
