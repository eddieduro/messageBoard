import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  message: DS.attr(),
  author: DS.attr(),
  date: DS.attr(),
  comments: DS.hasMany('comment', { async: true })  
});
