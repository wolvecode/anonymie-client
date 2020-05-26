import React from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component'

export default class EditSuggestion extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      users: []
    }

    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props
    axios
      .get(process.env.baseUrl + '/suggestion/' + params.id)
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
  handleChange = (key, e) => {
    this.setState({
      [key]: e.target.value
    })
  }

  onSubmit = e => {
    const {
      match: { params }
    } = this.props

    e.preventDefault()
    const suggestion = {
      title: this.state.title,
      description: this.state.description
    }

    axios
      .put(process.env.baseUrl + '/suggestion/' + params.id, suggestion)
      .then(() => {
        this.props.history.push('/sug')
      })
  }
  render() {
    return (
      <div>
        <Sidebar>
          <ReactNotification />
          <div className="col-md-8 offset-md-2 border mt-5">
            <h3>Edit Suggestion</h3>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  className="form-control"
                  value={this.state.title}
                  onChange={elm => this.handleChange('title', elm)}
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  className="form-control"
                  value={this.state.description}
                  onChange={elm => this.handleChange('description', elm)}
                  cols="30"
                  rows="5"
                ></textarea>
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
