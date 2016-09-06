import React, { Component } from 'react'
import Header from './Header'
import LeftContent from './leftContent/LeftContent'
import RightContent from './rightContent/RightContent'
import myCustomColors from 'rebass'
import 'whatwg-fetch'

class App extends Component {
  static childContextTypes = {
    rebass: React.PropTypes.object
  }
  constructor () {
    super()
    this.state = {
      user: 'bam1056',
      userData: {}
    }
  }

  getChildContext () {
    return {
      rebass: {
        colors: myCustomColors,
        fontSizes: [ 64, 48, 24, 18, 16, 14, 12 ],
        PanelHeader: {
          backgroundColor: '#F5F5F5',
          border: '1px solid #D8D6D6',
          margin: '10px 0 0 0',
          padding: '7px 10px'
        },
        Panel: {
          border: '1px solid #D8D6D6',
          margin: '0 auto'
        }
      }
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
    const { userData } = this.state
    return <div className='App'>
      <Header logo={userData.id} />
      <main>
        <div className='page-content container'>
          <div className='columns profile-cols'>
            <LeftContent userData={userData} />
            <RightContent userData={userData} />
          </div>
        </div>
      </main>
    </div>
  }
}

export default App
