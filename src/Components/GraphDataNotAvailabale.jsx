import React from 'react'
import graphNotAvaiableIcon from '../assets/graph-not-available-icon.png'

const GraphDataNotAvailabale = () => {
  return (
    <div className='graph-data-not-available'>
            <div className='left'><img src={graphNotAvaiableIcon} /> </div>
            <div className="right">
                <p>Missing chart data</p>
                <p>Unable to display historical data for
                the current token.</p>
            </div>
            </div>
  )
}

export default GraphDataNotAvailabale