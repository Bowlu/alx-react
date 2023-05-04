import React from 'react';
import PropTypes from 'prop-types';

CourseListRow.Props ={
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.string
};

const rowStyle = {
  backgroundColor: '#f5f5f5ab'
};

const headerStyle = {
  backgroundColor: '#deb5b545'
};

const tableStyle = isHeader ? headerStyle : rowStyle;


function CourseListRow({ isHeader=false, textFirstCell, textSecondCell=null}) {
  return(
    <tr style={tableStyle}>
      {isHeader ? textSecondCell === null ?
        <th colSpan="2">{textFirstCell}</th>
        :
      <>
      <th>{textFirstCell}</th>
      <th>{textSecondCell}</th>
      </>
      :
      <>
      <td>{textFirstCell}</td>
      <td>{textSecondCell}</td>
      </>
      }
    </tr>
  );
}

export default CourseListRow;