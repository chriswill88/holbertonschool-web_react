import React from 'react';

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