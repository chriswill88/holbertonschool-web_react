import React from 'react';
import PropTypes from 'prop-types';
import propTypes from 'prop-types';


export default function CourseListRow ({isHeader=false, textFirstCell, textSecondCell=null}) {
  return (
    <tr>
    {
      isHeader
      ? (
        !textSecondCell
        ? <th colspan={2}>{textFirstCell}</th>
        :
        <>
          <th id="subs" colspan={1}>{textFirstCell}</th>
          <th id="subs" colspan={1}>{textSecondCell}</th>
        </>
        )
      :
      <>
        <td colspan={1}>{textFirstCell}</td>
        <td colspan={1}>{textSecondCell}</td>
      </>
    }
    </tr>
  )
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
}

CourseListRow.propTypes = {
  isHeader: propTypes.bool,
  textFirstCell: propTypes.string.isRequired,
  textSecondCell: propTypes.string,
}

