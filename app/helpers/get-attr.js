import Ember from 'ember';

export function getAttr(params/*, hash*/) {
  console.log(params[0]._internalModel)
  return params[0]._internalModel._data.title;
}

export default Ember.Helper.helper(getAttr);
