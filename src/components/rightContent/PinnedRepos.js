import React, { Component } from 'react'
import { PanelHeader, Panel, Text } from 'rebass'

class PinnedRepos extends Component {
  render () {
    return <div>
      <PanelHeader inverted theme='info'>
          Pinned Repositories
      </PanelHeader>
      <Panel theme='info'>
        <Text>
          <div className='pinnedRepoItem'>
            <div className='pinnedRepoName'>
              <svg aria-hidden='true' className='octicon octicon-grabber' height='16' version='1.1' viewBox='0 0 8 16' width='8'><path d='M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z' /></svg><a className='repoLinks' href='#'>BombSweep</a>
            </div>
            <div className='pinnedRepoStars'>
              <span className='stars'>
                0
                <svg aria-label='stars' className='octicon octicon-star' height='16' role='img' version='1.1' viewBox='0 0 14 16' width='14'><path d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z' /></svg>
              </span>
            </div>
          </div>
        </Text>
      </Panel>
      <Panel theme='info'>
        <Text>
          <div className='pinnedRepoItem'>
            <div className='pinnedRepoName'>
              <svg aria-hidden='true' className='octicon octicon-grabber' height='16' version='1.1' viewBox='0 0 8 16' width='8'><path d='M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z' /></svg><a className='repoLinks' href='#'>DesignCo</a>
            </div>
            <div className='pinnedRepoStars'>
              <span className='stars'>
                0
                <svg aria-label='stars' className='octicon octicon-star' height='16' role='img' version='1.1' viewBox='0 0 14 16' width='14'><path d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z' /></svg>
              </span>
            </div>
          </div>
        </Text>
      </Panel>
      <Panel theme='info'>
        <Text>
          <div className='pinnedRepoItem'>
            <div className='pinnedRepoName'>
              <svg aria-hidden='true' className='octicon octicon-grabber' height='16' version='1.1' viewBox='0 0 8 16' width='8'><path d='M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z' /></svg><a className='repoLinks' href='#'>HangManReact2</a>
            </div>
            <div className='pinnedRepoStars'>
              <span className='stars'>
                0
                <svg aria-label='stars' className='octicon octicon-star' height='16' role='img' version='1.1' viewBox='0 0 14 16' width='14'><path d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z' /></svg>
              </span>
            </div>
          </div>
        </Text>
      </Panel>
      <Panel theme='info'>
        <Text>
          <div className='pinnedRepoItem'>
            <div className='pinnedRepoName'>
              <svg aria-hidden='true' className='octicon octicon-grabber' height='16' version='1.1' viewBox='0 0 8 16' width='8'><path d='M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z' /></svg><a className='repoLinks' href='#'>MatchGameReact</a>
            </div>
            <div className='pinnedRepoStars'>
              <span className='stars'>
                0
                <svg aria-label='stars' className='octicon octicon-star' height='16' role='img' version='1.1' viewBox='0 0 14 16' width='14'><path d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z' /></svg>
              </span>
            </div>
          </div>
        </Text>
      </Panel>
      <Panel theme='info'>
        <Text>
          <div className='pinnedRepoItem'>
            <div className='pinnedRepoName'>
              <svg aria-hidden='true' className='octicon octicon-grabber' height='16' version='1.1' viewBox='0 0 8 16' width='8'><path d='M8 4v1H0V4h8zM0 8h8V7H0v1zm0 3h8v-1H0v1z' /></svg><a className='repoLinks' href='#'>GitHubProfile2</a>
            </div>
            <div className='pinnedRepoStars'>
              <span className='stars'>
                0
                <svg aria-label='stars' className='octicon octicon-star' height='16' role='img' version='1.1' viewBox='0 0 14 16' width='14'><path d='M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z' /></svg>
              </span>
            </div>
          </div>
        </Text>
      </Panel>
    </div>
  }
}
export default PinnedRepos
