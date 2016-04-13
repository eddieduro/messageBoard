import Ember from 'ember';

export default Ember.Service.extend({
	posts: [],

	add(post){
  this.get('posts').pushObject(post);
  },
  remove(post){
    this.get('posts').removeObject(post);
  },
  empty(){
    this.get('posts').setObjects([]);
  },
  includes(post){
    return this.get('posts').includes(post);
  }
});