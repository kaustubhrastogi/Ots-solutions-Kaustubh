import React from 'react'

export default function List(props) {

  return (
    <div>
      <ul>
        {
          props.arr.map((i) => <li key={i}>{i}</li>)
        }
      </ul>
    </div>
  )
}
