import React from 'react'
import Nav from './Nav'
import Moment from 'react-moment'
import 'moment-timezone'
import axios from 'axios'
import '../style/general.css'

export default class General extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      count: 3,
      thread: []
    }
  }

  componentDidMount() {
    const baseUrl = 'https://nonymi-server.herokuapp.com'
    axios
      .get(baseUrl + '/suggestion/')
      .then(res => {
        this.setState({
          thread: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    const { thread, count } = this.state
    return (
      <div className="container-fluid px-0">
        <div
          className="col-md-12 col-lg-12 col-sm-12 col-xs-12"
          role="navigation"
        >
          <Nav />
        </div>

        <div>
          <div className="col-md-6 offset-md-3 col-lg-6 offset-lg-3 ab">
            {thread.map(data => (
              <div key={data._id} id="cont" className="my-2">
                <div id="comments">
                  <div className="cmmnt px-4">
                    <div className="cmmnt-content">
                      <header>
                        <a href={'/user/' + data._id} className="userlink">
                          {data.title}
                        </a>
                        &nbsp; - &nbsp;
                        <span className="pubdate">
                          <Moment toNow>{data.date}</Moment>
                        </span>
                      </header>
                      <div className="descripton">
                        <a href={'/user/' + data._id}>
                          <p>
                            {data.description
                              .split(' ')
                              .splice(0, 50)
                              .join(' ')}
                          </p>
                        </a>
                      </div>
                      <div className="count text-primary">
                        <i className="far fa-comment"></i> &nbsp;
                        {count}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
