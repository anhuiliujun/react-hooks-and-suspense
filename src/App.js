import React, {useState, Suspense} from 'react';
import demos from './demos'

const INIT_DEMO = 'use-state-hook'

export default function(props){
  const [demo, setDemo] = useState(INIT_DEMO)
  const path = demos[demo]
  const SelectedDemo = React.lazy(() => import(`./demos/${path}`));

  return(
    <>
      <label>Select display demo:</label>
      <select onChange={changeDemo}>
        {
          demoOptions
        }
      </select>
      <hr/>
      <Suspense fallback={<div>loading...</div>}>
        <SelectedDemo />
      </Suspense>
    </>
  )

  function changeDemo(e){
    const {value} = e.target
    setDemo(value)
  }
}

const demoOptions = Object.keys(demos).map(name => {
  return(<option key={name}>{name}</option>)
})