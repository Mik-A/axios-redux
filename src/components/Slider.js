import React, { Fragment, useState } from 'react'
import '../styles/slider.css'

const Slider = props => {
  const { background } = props
  const propsStyle = {
    background: background
  }
  const sliderContent = {
    display: 'flex',
    justifyContent: 'center',
    propsStyle
  }

  const splittedArr = []
  const size = 100

  for (let i = 0; i < props.children.length; i += size) {
    splittedArr.push(props.children.slice(i, i + size))
  }

  const dots = splittedArr.length

  const [count, setCount] = useState(0)
  console.log('count', count)
  console.log('splittedArr', splittedArr[0])
  console.log('props.children', props.children)
  const Block = () =>
    splittedArr[count].map((x, i) => (
      <div
        className='corner-borders'
        style={{ padding: 50, minWidth: '50vw' }}
        key={i}
      >
        {x}
      </div>
    ))
  return (
    <Fragment>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '4rem',
          textTransform: 'uppercase',
          marginBottom: -0.5
        }}
      >
        <span className='tabs' style={{ width: 68 }}></span>
        {new Array(dots).fill(' ').map((x, i) => (
          <span
            key={`key-${i}`}
            style={Object.assign(
              {},
              { padding: '1em 2em', cursor: 'pointer' },
              count !== i && { color: 'silver' },
              count === i && {
                border: '0.5px royalblue solid',
                borderBottom: 0,
                zIndex: 10
              }
            )}
            className={'s'}
            onClick={() => setCount(i)}
          />
        ))}
        <span className='tabs' style={{ width: 48 }}></span>
      </div>
      <div style={sliderContent}>
        <Block />
      </div>
    </Fragment>
  )
}

export default Slider