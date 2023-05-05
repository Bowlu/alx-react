import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from 'enzyme';

describe('CourseListRow test', () => {
  it('renders one cell with colspan', () => {
    const check = shallow(<CourseListRow textFirstCell='cell test1' isHeader={true}/>);
    expect(check.find('th')).toHaveLength(1);
    expect(check.find('th').prop('colSpan')).equals('2');
    expect(check.find('th').text()).equals('cell test1');
  });
  it('renders two cells',() => {
    const check = shallow(<CourseListRow textFirstCell='cell test1' isHeader={true}/>);
    expect(check.find('th')).to.have.lengthOf(2);
    expect(check.find('th').at(0).text()).equals('cell test1');
    expect(check.find('th').at(0).text()).equals('cell test2'); 
  });
  it('renders correctly', () => {
    const check = shallow(<CourseListRow textFirstCell='cell test1' isHeader={false}/>);
    expect(check.find('td')).to.have.lengthOf(2);
    expect(check.find('td').at(0).text()).equals('cell test1');
    expect(check.find('td').at(0).text()).equals('cell test2');
  });
});