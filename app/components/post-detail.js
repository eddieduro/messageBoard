import Ember from 'ember';

export default Ember.Component.extend({
 fullPost: Ember.computed('post.title' , 'post.author', 'post.date', function(){
    return this.get('post.title') + ' By: ' + this.get('post.author') + ' Asked On ' + this.get('post.date');
  }),
  actions: {
    deleteComment(comment){
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('deleteComment', comment);
      }
    },
    updatePost(post, params) {
      this.sendAction('updatePost', post, params);
    },
    addToBookmarks(post){
      this.sendAction('addToBookmarks', post);
    }
  }
});
