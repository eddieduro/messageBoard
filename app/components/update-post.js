import Ember from 'ember';

export default Ember.Component.extend({
  showUpdatePostForm: false,
  actions: {
    updatePostForm(){
      this.set('showUpdatePostForm', true);
    },
    closeForm(){
      this.set('showUpdatePostForm', false);
    },
    updatePost(post){
      var params = {
        title: this.get('title') ? this.get('title') : "",
        message: this.get('message') ? this.get('message') : "",
        author: this.get('author') ? this.get('author') : "",
        date: this.get('date') ? this.get('date') : ""
      };
      this.set('showUpdatePostForm', false);
      this.sendAction('updatePost', post, params);
    }
  }
});
