import Ember from 'ember';

export function coldQuestions(params) {
  var question = params[0];

  if(question.get('answers').get('length') < 1) {
    return Ember.String.htmlSafe(' <span class="glyphicon glyphicon-question-sign color-blue"></span>')
  } else if(question.get('answers').get('length') > 3) {
    return Ember.String.htmlSafe(' <span class="glyphicon glyphicon-fire color-red"></span>')
  }
}

export default Ember.Helper.helper(coldQuestions);
