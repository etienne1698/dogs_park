import React from 'react'

function Icons({icon, url}) {
  return (
    <div>
        <a href={url}>{icon}</a>
    </div>
  )
}

export default Icons