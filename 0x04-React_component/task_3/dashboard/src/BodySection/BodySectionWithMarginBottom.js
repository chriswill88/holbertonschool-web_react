import PropTypes from 'prop-types';
import BodySection from "./BodySection"
import React from "react"


export default function BodySectionWithMarginBottom({title}) {
  return (
    <div className='bodySectionWithMargin'>
      <BodySection title={title} />
    </div>
  )
}

BodySectionWithMarginBottom.prototype = {
}