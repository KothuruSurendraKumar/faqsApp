// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {
    isClicked: false,
  }

  isButtonClicked = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  showText = () => {
    const {faqDetails} = this.props
    const {answerText} = faqDetails
    const {isClicked} = this.state
    if (isClicked) {
      return (
        <div className="answer-container">
          <hr className="line" />
          <p className="answer">{answerText}</p>
        </div>
      )
    }
    return null
  }

  render() {
    const {faqDetails} = this.props
    const {isClicked} = this.state
    const buttonImage = isClicked
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const buttonAltText = isClicked ? 'minus' : 'plus'
    const {questionText} = faqDetails
    return (
      <li className="list-item">
        <div className="question-container">
          <h1 className="question">{questionText}</h1>
          <button
            className="button"
            type="button"
            onClick={this.isButtonClicked}
          >
            <img src={buttonImage} alt={buttonAltText} className="icon" />
          </button>
        </div>
        {this.showText()}
      </li>
    )
  }
}
export default FaqItem
