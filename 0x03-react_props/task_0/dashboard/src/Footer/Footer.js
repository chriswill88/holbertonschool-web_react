import React from 'react';


export default function Footer({getFullYear, getFooterCopy}) {
  return (
    <>
      <hr />
      <p> Copyright {getFullYear()} - {getFooterCopy(true)} </p>
    </> 
  )
}
