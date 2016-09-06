import React, { Component } from 'react'

class RightTabs extends Component {
  render () {
    return <div className='tabnav'>
      <div className='float-right'>
        <a href='/account' className='btn btn-sm'>
          <svg aria-hidden='true' className='octicon octicon-pencil' height='16' version='1.1' viewBox='0 0 14 16' width='14'><path d='M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z' /></svg>
          Edit profile
        </a>
      </div>

      <nav className='tabnav-tabs' role='navigation'>
        <a href='/bam1056' className='tabnav-tab selected' aria-selected='true' role='tab'>
          <svg aria-hidden='true' className='octicon octicon-person' height='16' version='1.1' viewBox='0 0 12 16' width='12'><path d='M12 14.002a.998.998 0 0 1-.998.998H1.001A1 1 0 0 1 0 13.999V13c0-2.633 4-4 4-4s.229-.409 0-1c-.841-.62-.944-1.59-1-4 .173-2.413 1.867-3 3-3s2.827.586 3 3c-.056 2.41-.159 3.38-1 4-.229.59 0 1 0 1s4 1.367 4 4v1.002z' /></svg>  Overview
        </a>
        <a href='/bam1056?tab=repositories' className='tabnav-tab' aria-selected='false' role='tab'>
          <svg aria-hidden='true' className='octicon octicon-repo' height='16' version='1.1' viewBox='0 0 12 16' width='12'><path d='M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z' /></svg>  Repositories
        </a>
        <a href='/bam1056?tab=activity' className='tabnav-tab' aria-selected='false' role='tab'>
          <svg aria-hidden='true' className='octicon octicon-rss' height='16' version='1.1' viewBox='0 0 10 16' width='10'><path d='M2 13H0v-2c1.11 0 2 .89 2 2zM0 3v1a9 9 0 0 1 9 9h1C10 7.48 5.52 3 0 3zm0 4v1c2.75 0 5 2.25 5 5h1c0-3.31-2.69-6-6-6z' /></svg> Public activity
        </a>
      </nav>
    </div>
  }
}
export default RightTabs
