import Ember from 'ember';

export default Ember.Component.extend({
  showNewCommentForm: false,
  actions: {
    showForm(){
      this.set('showNewCommentForm', true);
    },
    closeForm(){
      this.set('showNewCommentForm', false);
    },
    saveComment(){
      var params = {
        message: this.get('message'),
        author: this.get('author'),
        date: this.get('date'),
        post: this.get('post')
      };
      this.set('showNewCommentForm', false);
      this.sendAction('saveComment', params)
    }

  }
});
