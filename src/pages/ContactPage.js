import React from 'react';
import '../styles/ContactPage.css';
import { Prompt } from 'react-router-dom';

class ContactPage extends React.Component {

  state = {
    value: ""
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({
      value: ''
    })
  }
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    return (
      <div className='contact'>
        <form onSubmit={this.handleSubmit}>
          <h3>Write message</h3>
          <textarea value={this.state.value}
            onChange={this.handleChange}
            placeholder="Your message">
          </textarea>
          <button>Send</button>
        </form>
        <Prompt
          when={this.state.value}
          message="You have a blank form. Do you want to leave this page?"
        />
      </div>
    )
  }

}

export default ContactPage