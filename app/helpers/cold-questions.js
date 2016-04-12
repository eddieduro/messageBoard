import Ember from 'ember';

export function coldQuestions(params) {
  var question = params[0];
  if(question.get('comments').get('length') < 1) {
    return Ember.String.htmlSafe(' <span class="fa fa-question color-blue"></span>')
  } else if(question.get('comments').get('length') > 3) {
    return Ember.String.htmlSafe(' <span class="fa fa-fire color-red"></span>')
  }
}

export default Ember.Helper.helper(coldQuestions);
