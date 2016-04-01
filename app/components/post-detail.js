import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    deleteComment(comment){
      if (confirm('Are you sure you want to delete this comment?')) {
        this.sendAction('deleteComment', comment);
      }
    },
    updatePost(post, params) {
      this.sendAction('updatePost', post, params);
    },
  }
});
