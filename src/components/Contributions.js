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
          <img src={contrib} alt='contributions' width='680' />
          <div className='contrib-footer'>
            <div className='contrib-text'>
            Summary of pull requests, issues opened, and commits.
              <a href='https://help.github.com/articles/why-are-my-contributions-not-showing-up-on-my-profile'>
               Learn how we count contributions</a>.
            </div>
            <div className='contrib-legend text-small text-gray' title='A summary of pull requests, issues opened, and commits to the default and gh-pages branches.'>
            <div className='stuff'>
              <span>Less</span>
              <ul className='bar'>
                <li className='foo' style={{'backgroundColor': '#eee'}} />
                <li className='foo' style={{'backgroundColor': '#d6e685'}} />
                <li className='foo' style={{'backgroundColor': '#8cc665'}} />
                <li className='foo' style={{'backgroundColor': '#44a340'}} />
                <li className='foo' style={{'backgroundColor': '#1e6823'}} />
              </ul>
              <span>More</span>
              </div>
            </div>
          </div>
        </Text>
      </Panel>
    </div>
  }
}
export default Contributions
