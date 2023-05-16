import React from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

CourseList.defaultProps = {
  listCourses: []
};

CourseList.PropTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
};

function CourseList() {
  return(
    <table id='CourseList' className={css(courseListStyles.table)}>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow textFirstCell='Course name' textSecondCell='Credit' isHeader={true} />
      </thead>
      <tbody>
        <CourseListRow textFirstCell='ES6' textSecondCell='60' isHeader={false} />
        <CourseListRow textFirstCell='Webpack' textSecondCell='20' isHeader={false} />
        <CourseListRow textFirstCell='React' textSecondCell='40' isHeader={false} />
      </tbody>
    </table>
  );
}

const listStyle = StyleSheet.create({
  table: {
    width: '100%',
    margin: 'auto',
    padding: '0',
    border: '1px solid navajowhite'
  }
})

export default CourseList;