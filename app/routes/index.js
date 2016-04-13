import Ember from 'ember';

export default Ember.Route.extend({
  bookMark: Ember.inject.service(),
  model(){
    return this.store.findAll('post');
  },
   actions: {
     savePost(params){
       var newPost = this.store.createRecord('post', params);
       newPost.save();
       this.transitionTo('index');
     },
     deletePost(post){
       post.destroyRecord();
       this.transitionTo('post');
     },
   }
});
