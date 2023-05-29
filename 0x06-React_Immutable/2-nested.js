import { fromJS } from 'immutable';

export const accessImmutableObject = (object, array) => {
  const mappedObj = fromJS(object);
  return mappedObj.getIn(array, undefined);
};