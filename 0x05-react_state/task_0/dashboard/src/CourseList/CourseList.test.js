import React from 'react';
import CourseList from './CourseList';
import { shallow } from 'enzyme';

describe('CourseList test', () => {
  it('renders without crashing', () => {
    const check = shallow(<CourseList />);
    expect(check).toBeDefined();
  });
  it('renders five different rows', () => {
    const check = shallow(<CourseList />);
    expect(check.find('CourseListRow')).to.have.lengthOf(5);
  });
});