import React from 'react';
import CourseList from './CourseList';
import { shallow, configure} from 'enzyme';
import {expect, jest, test} from '@jest/globals';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

configure({ adapter: new Adapter() });

describe('<CourseList> renders', () => {
  it ('renders app', () => {
    const Notes = shallow(<CourseList />)
    expect(Notes).toHaveLength(1)
  })
})


describe('<CourseList> renders', () => {
  it ('renders app', () => {
    const Notes = shallow(<CourseList />)
    expect(Notes.find('CourseListRow')).toHaveLength(2)
  })
})

describe('<CourseList> renders', () => {
  it ('renders app', () => {
    const Notes = shallow(<CourseList listCourses={[]} />)
    expect(Notes.find('CourseListRow')).toHaveLength(2)
  })
})

const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40},
]
describe('<CourseList> renders if ', () => {
  it ('renders app', () => {
    const Notes = shallow(<CourseList listCourses={listCourses}/>)
    expect(Notes.find('CourseListRow')).toHaveLength(5)
  })
})


