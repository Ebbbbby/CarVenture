import React from 'react'
const List = (props) => {
    const {Firstname, Lastname} = props
  return (
    <div>

        <p>Our Employers are {Firstname} {Lastname}</p>
    </div>
  )
}

export default List