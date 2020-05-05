import React from 'react'
import Sidebar from './Sidebar'
import axios from 'axios'
import '../style/style.css'
import empty from './IMG/empty.png'

const Empty = () => (
  <div>
    <img src={empty} alt="icon" className="float-right pt-5" />
  </div>
)

// const Comment = props => (
//   <tr>
//     <td>{props.comment._id}</td>
//     <td>{props.comment.comment}</td>
//     <td>{props.comment.date.substring(0, 10)}</td>
//     <td>
//       <label className="switch">
//         <input
//           onChange={() => {
//             props.staredComment(props.comment._id)
//           }}
//           type="checkbox"
//         />
//         <span className="slider round"></span>
//       </label>
//     </td>
//   </tr>
// )

export default class ComThread extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: [],
      stared: false,
      isEmpty: true
    }
    // this.staredComment = this.staredComment.bind(this)
    this.handleChecked = this.handleChecked.bind(this)
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/commentbysugid/' + this.props.id)
      .then(res => {
        console.log(res.data)
        this.setState({
          comments: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  // staredComment(id) {
  //   const comment = {
  //     stared: this.state.stared
  //   }
  //   axios
  //     .put('http://localhost:5000/comment/stared/' + id, comment)
  //     .then(res => {
  //       console.log(res.data)
  //       this.setState({
  //         comments: this.state.comments.filter(el => el._id !== id)
  //       })
  //     })
  // }

  // CommentList() {
  //   return this.state.comments.map(currentComment => {
  //     return (
  //       <Comment
  //         comment={currentComment}
  //         staredComment={this.staredComment}
  //         key={currentComment._id}
  //       />
  //     )
  //   })
  // }

  handleChecked(e) {
    const { comments } = this.state

    let checked = e.target.checked
    this.setState(
      comments.map(data => {
        if (data._id) {
          console.log(data._id)
          console.log(data)
          stared: e.target.checked
          data.stared = checked
        }
        return data
      })
    )
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
                    <th>ID</th>
                    <th>Comment</th>
                    <th>Date</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                {/* <tbody>{this.CommentList()}</tbody> */}
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
                            onChange={e => {
                              let checked = e.target.checked
                              this.setState(
                                comments.map(data => {
                                  if (comment._id == data._id) {
                                    console.log(data._id)
                                    stared : this.state.suggestions.filter(el => el._id !== id)
                                  }
                                })
                              )
                            }}
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
