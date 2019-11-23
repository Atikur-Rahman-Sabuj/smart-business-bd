import React from 'react'
import FlashMessage from './flashMessage'
import { connect } from 'react-redux'
import { deleteFlashMessage } from '../../actions'

class FlashMessagesList extends React.Component {
  render () {
      let messages= "";
      if(this.props.messages){
        messages = this.props.messages.map(message =>
            <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
            )
        }
    return (
      <div className="sa-flash-message-container">{messages}</div>
    )
  }
}


function mapStateToProps (state) {
  return {
    messages: state.flashMessage
  }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessagesList)