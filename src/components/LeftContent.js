import React, { Component } from 'react'

class LeftContent extends Component {
  static propTypes = {
    userData: React.PropTypes.object.isRequired
  }
  render () {
    const { userData } = this.props
    return <div className='column one-fourth'>
      <img className='avatar rounded-2' src={userData.avatar_url} alt='avatar' height='230' width='230' />
      <h1 className='vcard-names my-3'>
        <div className='vcard-fullname'>{userData.name}</div>
        <div className='vcard-username'>{userData.login}</div>
      </h1>
      <div className='user-profile-bio'>
        <div>{userData.bio}</div>
      </div>
      <ul className='vcard-details border-top border-gray-light py-3'>
        <li aria-label='Organization' className='vcard-detail py-1 css-truncate css-truncate-target' itemProp='worksFor'><svg aria-hidden='true' className='octicon octicon-organization' height='16' version='1.1' viewBox='0 0 16 16' width='16'><path d='M16 12.999c0 .439-.45 1-1 1H7.995c-.539 0-.994-.447-.995-.999H1c-.54 0-1-.561-1-1 0-2.634 3-4 3-4s.229-.409 0-1c-.841-.621-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.442.58 2.5 3c.058 2.41-.159 2.379-1 3-.229.59 0 1 0 1s1.549.711 2.42 2.088C9.196 9.369 10 8.999 10 8.999s.229-.409 0-1c-.841-.62-1.058-.59-1-3 .058-2.419 1.367-3 2.5-3s2.437.581 2.495 3c.059 2.41-.158 2.38-1 3-.229.59 0 1 0 1s3.005 1.366 3.005 4' /></svg>{userData.company}</li>

        <li aria-label='Home location' className='vcard-detail py-1 css-truncate css-truncate-target' itemProp='homeLocation' title='Tampa Bay Area'><svg aria-hidden='true' className='octicon octicon-location' height='16' version='1.1' viewBox='0 0 12 16' width='12'><path d='M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z' /></svg>{userData.location}</li>

        <li aria-label='Email' className='vcard-detail py-1 css-truncate css-truncate-target' itemProp='email'><svg aria-hidden='true' className='octicon octicon-mail' height='16' version='1.1' viewBox='0 0 14 16' width='14'><path d='M0 4v8c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1zm13 0L7 9 1 4h12zM1 5.5l4 3-4 3v-6zM2 12l3.5-3L7 10.5 8.5 9l3.5 3H2zm11-.5l-4-3 4-3v6z' /></svg><a href='mailto:bam03584@aol.com'>{userData.email}</a></li>

        <li aria-label='Member since' className='vcard-detail py-1 css-truncate css-truncate-target'><svg aria-hidden='true' className='octicon octicon-clock' height='16' version='1.1' viewBox='0 0 14 16' width='14'><path d='M8 8h3v2H7c-.55 0-1-.45-1-1V4h2v4zM7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7z' /></svg><span className='join-label'>Joined on </span><local-time className='join-date' datetime='2016-07-01T17:00:44Z' day='numeric' month='short' year='numeric' title='Jul 1, 2016, 1:00 PM EDT'>Jul 1, 2016</local-time></li>
      </ul>
      <div className='vcard-stats border-top border-bottom border-gray-light mb-3 py-3'>
        <a className='vcard-stat' href='/bam1056/followers'>
          <strong className='vcard-stat-count d-block'>{userData.followers}</strong>
          <span className='text-gray'>Followers</span>
        </a>
        <a className='vcard-stat' href='/stars'>
          <strong className='vcard-stat-count d-block'>3</strong>
          <span className='text-gray'>Starred</span>
        </a>
        <a className='vcard-stat' href='/bam1056/following'>
          <strong className='vcard-stat-count d-block'>{userData.following}</strong>
          <span className='text-gray'>Following</span>
        </a>
      </div>
      <hr style={{opacity: '0.25'}} />
      <div className='clearfix'>
        <h3>Organizations</h3>
        <a href='/tiy-tpa-fee' aria-label='tiy-tpa-fee' className='tooltipped tooltipped-n avatar-group-item' itemProp='follows'><img alt='@tiy-tpa-fee' className='avatar' height='42' src='https://avatars2.githubusercontent.com/u/13334739?v=3&amp;s=84' width='42' /></a>
      </div>
    </div>
  }
}
export default LeftContent
