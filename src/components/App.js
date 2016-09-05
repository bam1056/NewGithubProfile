import React, { Component } from 'react'
import Header from './Header'
import LeftContent from './LeftContent'
import 'whatwg-fetch'

class App extends Component {

  constructor () {
    super()
    this.state = {
      user: 'bam1056',
      userData: {}
    }
  }

  componentWillMount () {
    window.fetch(`https://api.github.com/users/${this.state.user}?access_token=7b29e64a783cb6e2043f31721d72877e70c049c4`)
      .then((resp) => { return resp.json() })
      .then((data) => {
        this.setState({ userData: data })
      })
  }
  render () {
    const user = this.state.userData
    return <div className='App'>
      <Header logo={user.id} />
      <main>
        <div className='page-content container'>
          <div className='columns profile-cols'>
            <LeftContent userData={this.state.userData} />
          </div>
        </div>
      </main>
    </div>
  }
}

export default App
