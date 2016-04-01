import Ember from 'ember';

export default Ember.Component.extend({
  showNewPostForm: false,
  actions: {
    showForm(){
      this.set('showNewPostForm', true);
    },
    closeForm(){
      this.set('showNewPostForm', false);
    },
    savePost(){
      var params= {
        title: this.get('title') ? this.get('title') : "",
        message: this.get('message') ? this.get('message') : "",
        author: this.get('author') ? this.get('author') : "",
        date: this.get('date') ? this.get('date') : ""
      };
      this.set('showNewPostForm', false);
      this.sendAction("savePost", params)
    }
  }
});
