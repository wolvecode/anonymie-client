import React from 'react'
import { navigate, redirectTo } from '@reach/router'
import axios from 'axios'
import '../style/style.css'

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(key, e) {
    this.setState({
      [key]: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    const suggestion = {
      title: this.state.title,
      description: this.state.description
    }
    axios.post('http://localhost:5000/suggestion/', suggestion).then(res => {
      navigate('/')
    })
  }

  render() {
    const { title, description } = this.state
    return (
      <div>
        <button
          type="button"
          className="float-right text-center position-fixed fixed-bottom b-p"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          <i className="fas fa-plus"></i>
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          // tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3>Add suggestion</h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  {/* <span aria-hidden="true">&times;</span> */}
                </button>
              </div>
              <div className="modal-body">
                <div className="form-group">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <label> Enter Title</label>
                      <input
                        onChange={elm => this.handleChange('title', elm)}
                        value={title}
                        className="form-control"
                        type="text"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        onChange={elm => this.handleChange('description', elm)}
                        value={description}
                        className="form-control"
                        id=""
                        cols="50"
                        rows="5"
                        required
                      ></textarea>
                    </div>

                    <button type="submit" className="btn d-flex float-right">
                      Add Changes
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
