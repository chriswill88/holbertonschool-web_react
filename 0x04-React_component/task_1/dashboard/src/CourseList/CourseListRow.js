import React from 'react';
import PropTypes from 'prop-types';


export default function CourseListRow ({isHeader=false, textFirstCell, textSecondCell=null}) {
  return (
    <tr>
    {
      isHeader
      ? (
        !textSecondCell
        ? <th colSpan={2}>{textFirstCell}</th>
        :
        <>
          <th id="subs" colSpan={1}>{textFirstCell}</th>
          <th id="subs" colSpan={1}>{textSecondCell}</th>
        </>
        )
      :
      <>
        <td colSpan={1}>{textFirstCell}</td>
        <td colSpan={1}>{textSecondCell}</td>
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
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

