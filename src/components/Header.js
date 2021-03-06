import React, { Component } from 'react'

class Header extends Component {
  static propTypes = {
    logo: React.PropTypes.number
  }
  render () {
    return <div className='Header'>
      <div className='headContainer'>
        <div className='headerLogo'>
          <img src='http://vectorlogofree.com/wp-content/uploads/2014/02/25231-github-cat-in-a-circle-icon-vector-icon-vector-eps.png'
            width='47' height='33' alt='octocat' />
        </div>
        <div className='headerSearch'>
          <form action='search'>
            <div style={{margin: 0, padding: 0, display: 'inline'}}>
              <input type='search' size='60' placeholder='Search GitHub' />
            </div>
          </form>
        </div>
        <ul className='header-nav float-left'>
          <li className='header-nav-item'><a className='header-nav-link' href='#'>Pull Requests</a></li>
          <li className='header-nav-item'><a className='header-nav-link' href='#'>Issues</a></li>
          <li className='header-nav-item'><a className='header-nav-link' href='#'>Gist</a></li>
        </ul>
        <ul className='header-nav user-nav float-right' id='user-links'>
          <li className='header-nav-item' />
          <li className='header-nav-item'><a className='header-nav-link' href='#'>+</a></li>
          <li className='header-nav-item'><a className='header-nav-link' href='#'><img src={`https://avatars.githubusercontent.com/u/${this.props.logo}?v=3`} height='20' width='20' alt='little avatar' /></a></li>
        </ul>
      </div>
    </div>
  }
}

export default Header
