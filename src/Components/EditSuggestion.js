import React from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import { navigate, useParams } from '@reach/router'

export default class EditSuggestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      users: []
    }
    this.onChangeTitle = this.onChangeTitle.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/suggestion/' + this.props.id)
      .then(res => {
        this.setState({
          title: res.data.title,
          description: res.data.description,
          date: res.data.date
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault()

    const suggestion = {
      title: this.state.title,
      description: this.state.description,
      date: this.state.date
    }

    axios
      .put('http://localhost:5000/suggestion/' + this.props.id, suggestion)
      .then(res => {
        navigate('/sug')
      })
  }
  render() {
    return (
      <div>
        <Sidebar>
          <div className="col-md-8 offset-md-2 border mt-5">
            <h3>Edit Suggestion</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={this.onChangeTitle}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.description}
                  onChange={this.onChangeDescription}
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Edit Suggestion"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </Sidebar>
      </div>
    )
  }
}
