import React, { Component } from 'react'
import Contributions from './Contributions'
import RightTabs from './RightTabs'
import PinnedRepos from './PinnedRepos'

class RightContent extends Component {
  static propTypes = {
    userData: React.PropTypes.object.isRequired
  }
  render () {
    return <div className='column three-fourths'>
      <RightTabs />
      <PinnedRepos />
      <Contributions />
    </div>
  }
}
export default RightContent
