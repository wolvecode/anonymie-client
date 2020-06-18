import React from 'react'
import axios from 'axios'
import Nav from './Nav'
import Moment from 'react-moment'
import '../style/style.css'
import 'moment-timezone'
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import { store } from 'react-notifications-component'

export default class UserComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      success: false,
      count: '',
      comment: '',
      SuggestionID: '',
      description: '',
      title: '',
      date: new Date()
    }
  }

  componentDidMount() {
    const {
      match: { params }
    } = this.props
    axios.get(process.env.baseUrl + '/suggestion/' + params.id).then(res => {
      console.log(res.data)
      this.setState({
        title: res.data.title,
        SuggestionID: res.data._id,
        description: res.data.description,
        date: res.data.date
      })
    })
    axios
      .get(process.env.baseUrl + '/commentbysugid/' + params.id)
      .then(res => {
        this.setState({
          count: res.data.length
        })
      })
  }

  handleComment = e => {
    this.setState({
      comment: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const comment = {
      SuggestionID: this.state.SuggestionID,
      comment: this.state.comment
    }

    axios
      .post(process.env.baseUrl + '/comment', comment)
      .then(() => {
        store.addNotification(
          {
            title: 'SUCCESS',
            message: 'Comment added',
            type: 'success',
            container: 'top-center',
            insert: 'top',
            animationIn: ['animated', 'fadeIn'],
            animationOut: ['animated', 'fadeOut'],

            dismiss: {
              duration: 2000,
              pauseOnHover: true,
              onScreen: true,
              showIcon: true
            },
            width: 500
          },
          this.setState({
            comment: ''
          })
        )
      })
      .catch(() => {
        store.addNotification({
          title: 'Error',
          message: 'Comment should be more than character',
          type: 'danger',
          container: 'top-center',
          insert: 'top',
          animationIn: ['animated', 'fadeIn'],
          animationOut: ['animated', 'fadeOut'],

          dismiss: {
            duration: 2000,
            pauseOnHover: true,
            onScreen: true,
            showIcon: true
          },
          width: 500
        })
      })
  }

  render() {
    const { comment } = this.state
    return (
      <div>
        <Nav />
        <ReactNotification />
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
