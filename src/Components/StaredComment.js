import React from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import '../style/style.css'

export default class ComThread extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      stared: false,
      isEmpty: true
    }
    this.handleChecked = this.handleChecked.bind(this)
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/commentbysugid/' + this.props.id)
      .then(res => {
        this.setState({
          comments: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChecked(e) {
    this.setState({
      stared: e.target.checked
    })
  }
  render() {
    const { comments } = this.state
    return (
      <div>
        <Sidebar>
          <div className="col-md-10 offset-md-2  col-lg-10 offset-lg-2  col-sm-8 offset-2 pt-3">
            <h3>Comment List</h3>
            {!comments && isEmpty ? (
              <div>
                <h1>Empty</h1>
              </div>
            ) : (
              <table className="table border">
                <thead className="thead-light">
                  <tr>
                    <th width="100">ID</th>
                    <th width="220">Comment</th>
                    <th width="100">Date</th>
                    <th width="50">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.comments.map(comment => (
                    <tr key={comment._id}>
                      <td>{comment._id}</td>
                      <td>{comment.comment}</td>
                      <td>{comment.date.substring(0, 10)}</td>
                      <td>
                        <label className="switch">
                          <input
                            type="checkbox"
                            name="check"
                            onChange={this.handleChecked}
                            checked={this.state.stared}
                          />
                          <span className="slider round"></span>
                        </label>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </Sidebar>
      </div>
    )
  }
}
