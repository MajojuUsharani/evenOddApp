// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncrease = () => {
    const randomNumber = this.getRandomNumber()
    this.setState(prevState => ({count: prevState.count + randomNumber}))
  }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="app-container">
        <h1 className="count">Count {count}</h1>
        <p className="count-type">Count is {displayText}</p>
        <button className="button" type="button" onClick={this.onIncrease}>
          increment
        </button>
        <p className="caption">*increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
