import Ember from 'ember';

export default Ember.Component.extend({
  showNewPostForm: false,
  actions: {
    showForm(){
      this.set('showNewPostForm', true);
    },
    savePost(){
      var params= {
        title: this.get('title'),
        message: this.get('message'),
        author: this.get('author'),
        date: this.get('date'),
        comments: this.get('comments'),
      };
      this.set('showNewPostForm', false);
      this.sendAction("savePost", params)
    }
  }
});
