import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

CourseListRow.Props ={
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string,
  textSecondCell: PropTypes.string
};



function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const [checkbox, setCheckbox] = useState(false)

  const updateCheck = () => {
    setCheckbox(!checkbox)
  }

  const rowStyle = {
    backgroundColor: '#f5f5f5ab'
  };
  
  const headerStyle = {
    backgroundColor: '#deb5b545'
  };
  
  const tableStyle = isHeader ? headerStyle : rowStyle;
  
  return(
    <tr style={tableStyle}>
      {isHeader ? textSecondCell === null ?
        <th colSpan="2" className={css(rowStyle.Span)}>{textFirstCell}</th>
        :
      <>
      <th className={css(rowStyle.th)}>{textFirstCell}</th>
      <th className={css(rowStyle.th)}>{textSecondCell}</th>
      </>
      :
      <>
      <td className={`${css(rowStyle.td, checkbox ? rowStyle.rowChecked : '')}`}>
        <input type='checkbox' onClick={updateCheck} />{textFirstCell}</td>
      <td className={`${css(rowStyle.td, checkbox ? rowStyle.rowChecked : '')}`}>{textSecondCell}</td>
      </>
      }
    </tr>
  );
}

const rowStyle = StyleSheet.create({
  Span: {
    padding: '0',
    margin: '0',
    borderBottom: '2px solid neutral',
    textAlign: 'center'
  },
  th: {
    padding: '0',
    margin: '0',
    borderBottom: '2px solid neutral',
    textAlign: 'left'
  },
  td: {
    paddingLeft: '3px'
  },
  rowChecked: {backgroundColor: '#e6e4e4'}
});

export default CourseListRow;