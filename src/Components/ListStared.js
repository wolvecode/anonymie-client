import React from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import '../style/style.css'

export default class ComThread extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      stared: [],
      staredT: [],
      isEmpty: true
    }
  }

  componentDidMount() {
    axios
      .get(process.env.baseUrl + '/commentbysugid/' + this.props.id)
      .then(res => {
        this.setState({
          comments: res.data,
          stared: res.data.filter(stare => stare.stared === true)
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  handleChecked = (id, stared) => {
    this.setState({
      stared: this.state.stared.map(comt =>
        comt._id === id ? { ...comt, stared } : comt
      )
    })
    axios
      .put(process.env.baseUrl + '/comment/stared/' + id, {
        stared: stared
      })
      .then(res => {
        this.setState({
          stared: this.state.stared.filter(el => el._id !== id)
        })
      })
  }

  render() {
    const { comments, stared } = this.state
    return (
      <div>
        <Sidebar>
          <div className="col-md-10 offset-md-2  col-lg-10 offset-lg-2  col-sm-8 offset-2 pt-3">
            <h3>Stared List</h3>
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
                  {this.state.stared.map(stared => (
                    <tr key={stared._id}>
                      <td>{stared._id}</td>
                      <td>{stared.comment}</td>
                      <td>{stared.date.substring(0, 10)}</td>
                      <td>
                        <label className="switch">
                          <input
                            type="checkbox"
                            name="check"
                            checked={stared.stared}
                            onChange={({ target }) =>
                              this.handleChecked(stared._id, target.checked)
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
