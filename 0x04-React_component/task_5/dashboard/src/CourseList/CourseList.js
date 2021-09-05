import React from 'react';
import PropTypes from 'prop-types';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

export default function CourseList({listCourses=[]}) {
  return (
    <table id='CourseList'>
      <thead>
        <CourseListRow textFirstCell="Available courses" isHeader={true} />
        <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
      </thead>
      {
        <tbody>
          {
            (listCourses.length)
            ?
              listCourses.map((obj) => {
                return <CourseListRow key={obj.id} textFirstCell={obj['name']} textSecondCell={obj['credit']} isHeader={false} />
              })
            :
            <p>No course available yet </p>
          }
        </tbody>
      }
    </table>
  )
}

CourseList.defaultProps = {
  listCourses: []
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape)
}