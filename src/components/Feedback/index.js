import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedBackSelected: false}

  clickedEmoji = () => {
    this.setState({isFeedBackSelected: true})
  }

  renderEmojiScreen = () => {
    const {resources} = this.props
    const {emojis} = resources
    return (
      <div className="bg-container">
        <div className="feedback-container">
          <h1 className="main-heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="list-container">
            {emojis.map(emoji => (
              <li key={emoji.id}>
                <button
                  type="button"
                  className="button"
                  onClick={this.clickedEmoji}
                >
                  <img
                    className="image"
                    src={emoji.imageUrl}
                    alt={emoji.name}
                  />
                  <br />
                  <span className="emoji-name">{emoji.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  renderThankYouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    return (
      <div className="bg-container">
        <div className="feedback-container">
          <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
          <h1 className="main-heading">Thank You!</h1>
          <p className="feedback-description">
            We will use your feedback to improve our customer support
            performance.
          </p>
        </div>
      </div>
    )
  }

  render() {
    const {isFeedBackSelected} = this.state
    return (
      <div className="bg-container">
        <div className="feedback-container">
          {isFeedBackSelected
            ? this.renderThankYouScreen()
            : this.renderEmojiScreen()}
        </div>
      </div>
    )
  }
}

export default Feedback
