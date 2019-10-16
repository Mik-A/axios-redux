import React, { Fragment, useState } from 'react'
import { connect } from 'react-redux'
import { fetchData, singleData } from './reducers/'
import axios from 'axios'

import './App.css'

const axiosGet = async (url, props) => {
  props.fetchData('loading...')
  try {
    const response = await axios.get(url)
    props.fetchData(response.data)
  } catch (error) {
    console.error(error)
  }
}

const handleSingle = (single, props) => {
  props.singleData(single)
}

const Galleria = props => {
  const { gallery, handleSingle } = props

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(40px, 1fr))',
    gridGap: 4,
    pointer: 'cursor',
    maxWidth: 1000,
    minWidth: 200,
    width: '100%'
  }

  const threeCol = {
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center'
  }
  const splittedArr = []
  const size = 100

  for (let i = 0; i < gallery.length; i += size) {
    splittedArr.push(gallery.slice(i, i + size))
  }

  const dots = splittedArr.length
  const [count, setCount] = useState(0)

  return (
    <Fragment>
      <div>{`${count + 1} / ${dots}`}</div>
      <div style={threeCol}>
        <div
          onClick={() => setCount(count > 0 ? count - 1 : dots - 1)}
          className='pointer'
        >
          &larr;
          {/* left */}
        </div>
        <div style={gridStyle}>
          {splittedArr[count].map((x, i) => (
            <Fragment key={`key-${i}`}>
              <div
                onClick={() => handleSingle(x, props)}
                style={{
                  cursor: 'pointer'
                  // alternatively show thumbs as background images
                  //   backgroundImage: `url(${x.thumbnailUrl})`,
                  //   backgroundRepeat: 'no-repeat',
                  //   backgroundSize: 'cover'
                }}
              >
                {x.id}
                <img src={`${x.thumbnailUrl}`} width='100%' alt=':)' />
              </div>
            </Fragment>
          ))}
        </div>
        <div
          onClick={() => setCount(count < dots - 1 ? count + 1 : 0)}
          className='pointer'
        >
          &rarr;
          {/* right */}
        </div>
      </div>
    </Fragment>
  )
}

const Sinkku = props => {
  const { title, url } = props
  const styles = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <div style={styles}>
      <div>
        <p>{title}</p>
        <img src={url} width='100%' alt='single 4 ever' />
      </div>
    </div>
  )
}

const App = props => {
  const { single, gallery } = props

  const styles = {
    margin: '0 auto',
    padding: 18
  }
  console.log('props', props)
  return (
    <div style={styles}>
      {single ? (
        <button onClick={() => handleSingle(null, props)}>Back</button>
      ) : (
        <button
          onClick={() =>
            axiosGet('https://jsonplaceholder.typicode.com/photos', props)
          }
        >
          {Array.isArray(gallery) ? 'Call API again' : 'Fetch data!'}
        </button>
      )}
      {single ? (
        <Sinkku title={single.title} url={single.url} />
      ) : Array.isArray(gallery) ? (
        <Galleria gallery={gallery} handleSingle={props.singleData} />
      ) : (
        Object.values(gallery)
      )}
    </div>
  )
}
function mapStateToProps(state) {
  return {
    gallery: state.gallery,
    single: state.single
  }
}

const mapDispatchToProps = {
  fetchData,
  singleData
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
