import React from 'react'
import axios from 'axios'
import Nav from './Nav'
import Moment from 'react-moment'
import '../style/style.css'
import 'moment-timezone'
import { navigate } from '@reach/router'

export default class UserComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: '',
      comment: '',
      SuggestionID: '',
      description: '',
      title: '',
      date: new Date()
    }
    this.handleComment = this.handleComment.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    const baseUrl = 'https://nonymi-server.herokuapp.com'
    axios.get(baseUrl + '/suggestion/' + this.props.id).then(res => {
      this.setState({
        title: res.data.title,
        SuggestionID: res.data._id,
        description: res.data.description,
        date: res.data.date
      })
    })
    axios.get(baseUrl + '/commentbysugid/' + this.props.id).then(res => {
      this.setState({
        count: res.data.length
      })
    })
  }

  handleComment(e) {
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmit(e) {
    const baseUrl = 'https://nonymi-server.herokuapp.com'

    e.preventDefault()
    const comment = {
      SuggestionID: this.state.SuggestionID,
      comment: this.state.comment
    }

    axios.post(baseUrl + '/comment', comment).then(res => {
      navigate('/')
    })
  }

  render() {
    const { comment } = this.state
    return (
      <div>
        <Nav />
        <div className="col-md-6 offset-md-3 col-lg-6 offset-lg-3 ab">
          <div id="cont" className="my-2">
            <div id="comments">
              <div className="cmmnt px-4">
                <div className="cmmnt-content">
                  <header>
                    <a href="#" className="userlink">
                      {this.state.title}
                    </a>
                    &nbsp; - &nbsp;
                    <span className="pubdate">
                      <Moment toNow>{this.state.date}</Moment>
                    </span>
                  </header>

                  <div className="descripton">
                    <a href="#">
                      <p>{this.state.description}</p>
                    </a>
                  </div>
                  <span className="count text-primary">
                    <i className="far fa-comment"></i> {this.state.count}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-3">
            <form onSubmit={this.handleSubmit}>
              <span>Comment</span>
              <div className="form-group user-comment">
                <textarea
                  className="form-control"
                  placeholder="Comment here"
                  value={comment}
                  onChange={this.handleComment}
                  cols="30"
                  rows="5"
                  required
                ></textarea>
                <button
                  type="submit"
                  className="d-flex float-right text-center"
                  type="submit"
                >
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
