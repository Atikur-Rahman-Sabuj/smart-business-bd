import React from 'react'
import classnames from 'classnames'

class FlashMessage extends React.Component {
  constructor (props) {
    super(props)
    this.onClick = this.onClick.bind(this)
  }

  onClick () {
    this.props.deleteFlashMessage(this.props.message.id)
  }

  render () {
    const { type, text } = this.props.message
    return (
      <div className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'danger',
        'alert-info' : type ==='info',
        'alert-warning' : type ==='warning',
        'alert-primary' : type ==='primary',
        'alert-light' : type ==='light',
        'alert-dark' : type ==='dark',
      })}>
        <button onClick={this.onClick} className="close"><span>&times;</span></button>
        {text}
      </div>
    )
  }
}

export default FlashMessage