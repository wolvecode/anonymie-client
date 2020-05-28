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
    const {
      match: { params }
    } = this.props
    axios
      .get(process.env.baseUrl + '/commentbysugid/' + params.id)
      .then(res => {
        this.setState({
          comments: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChecked = (id, stared) => {
    this.setState({
      comments: this.state.comments.map(comt =>
        comt._id === id ? { ...comt, stared } : comt
      )
    })
    axios.put(process.env.baseUrl + '/comment/stared/' + id, {
      stared: stared
    })
  }
  render() {
    const { comments } = this.state
    return (
      <div>
        <Sidebar>
          <div className="col-md-10 offset-md-2  col-lg-10 offset-lg-2  col-sm-8 offset-2 pt-3">
            <div>
              <h3>Comment List</h3>
            </div>
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
                            checked={comment.stared}
                            onChange={({ target }) =>
                              this.handleChecked(comment._id, target.checked)
                            }
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
