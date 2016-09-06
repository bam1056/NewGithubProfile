import React, { Component } from 'react'
import { PanelHeader, Panel, Text } from 'rebass'
import contrib from './contributions.svg'

class Contributions extends Component {
  render () {
    return <div className='contributions'>
      <PanelHeader theme='info'>
          Contributions
      </PanelHeader>
      <Panel theme='info'>
        <Text>
          <img src={contrib} alt='contributions' width='680'/>
        </Text>
      </Panel>
    </div>
  }
}
export default Contributions
