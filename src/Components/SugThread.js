import React from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import '../style/style.css'

const Suggestion = props => (
  <tr>
    <td>{props.suggestion._id}</td>
    <td>{props.suggestion.title}</td>
    <td>{props.suggestion.date.substring(0, 10)}</td>
    <td>
      <a href={'/edit/' + props.suggestion._id}>Edit</a>|
      <a
        href="#"
        onClick={() => {
          props.deleteSuggestion(props.suggestion._id)
        }}
      >
        delete
      </a>
    </td>
  </tr>
)

export default class SuggestionLog extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestions: []
    }
    this.deleteSuggestion = this.deleteSuggestion.bind(this)
  }
  componentDidMount() {
    axios
      .get('http://localhost:5000/suggestion/')
      .then(res => {
        this.setState({
          suggestions: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteSuggestion(id) {
    axios.delete('http://localhost:5000/suggestion/' + id).then(res => {
      console.log(res.data)
      this.setState({
        suggestions: this.state.suggestions.filter(el => el._id !== id)
      })
    })
  }

  suggestionList() {
    return this.state.suggestions.map(currentsuggestion => {
      return (
        <Suggestion
          suggestion={currentsuggestion}
          deleteSuggestion={this.deleteSuggestion}
          key={currentsuggestion._id}
        />
      )
    })
  }
  render() {
    return (
      <div>
        <Sidebar>
          <div className="col-md-8 offset-md-2 pt-5">
            <h3>Suggestion List</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>{this.suggestionList()}</tbody>
            </table>
          </div>
        </Sidebar>
      </div>
    )
  }
}
