import Ember from 'ember';

export default Ember.Service.extend({
	comments: [],

	add(comment){
  this.get('comments').pushObject(comment);
  },
  remove(comment){
    this.get('comments').removeObject(comment);
  },
  empty(){
    this.get('comments').setObjects([]);
  },
  includes(comment){
    return this.get('comments').includes(comment);
  }
});