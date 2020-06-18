import React from 'react'
import Sidebar from './Sidebar'
import Modal from './Modal'
import axios from 'axios'

const Suggestion = props => (
  <tr className="table-row border">
    <td with="100" className="p-3 m-2">
      {props.suggestion._id}
    </td>
    <td with="220" className="el-style">
      {props.suggestion.title}
    </td>
    <td with="100" className="el-style">
      {props.suggestion.date.substring(0, 10)}
    </td>
    <td with="50" className="el-style">
      <a href={'/edit/' + props.suggestion._id}>Edit</a> &nbsp; | &nbsp;
      <a href={'/stared/' + props.suggestion._id}>Stared</a> &nbsp; | &nbsp;
      <a href={'/suggestion/comment/' + props.suggestion._id}>Comment</a>{' '}
      &nbsp;| &nbsp;
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
      .post(process.env.baseUrl + '/suggestion/')
      .then(res => {
        this.setState({
          suggestions: res.data.suggestion
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteSuggestion(id) {
    axios.delete(process.env.baseUrl + '/suggestion/' + id).then(res => {
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
          <div className="col-md-10 col-sm-10  offset-sm-2 offset-md-2 pt-3">
            <h3 className="sug-header">Suggestion List</h3>
            <table className="table ">
              <thead className="table-head thead-light">
                <tr>
                  <th className="el-style">ID</th>
                  <th className="el-style">Title</th>
                  <th className="el-style">Date</th>
                  <th className="el-style">Actions</th>
                </tr>
              </thead>
              <tbody>{this.suggestionList()}</tbody>
            </table>
            <Modal />
          </div>
        </Sidebar>
      </div>
    )
  }
}
