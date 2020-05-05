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
      thread: []
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/suggestion/')
      .then(res => {
        console.log(res.data)
        this.setState({
          thread: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="container-fluid px-0">
        <div className="col-md-12 col-lg-12">
          <Nav />
        </div>

        <div>
          <div className="col-md-6 offset-md-3 col-lg-6 offset-lg-3 ab">
            {this.state.thread.map(data => (
              <div key={data._id} id="cont" className="my-2">
                <div id="comments">
                  <div className="cmmnt px-4">
                    <div className="cmmnt-content">
                      <header>
                        <a href="#" className="userlink">
                          {data.title}
                        </a>{' '}
                        &nbsp; - &nbsp;
                        <span className="pubdate">
                          <Moment toNow>{data.date}</Moment>
                        </span>
                      </header>
                      <p>{data.description}</p>
                      <span className="count text-primary">
                        <i className="far fa-comment"></i> 80
                      </span>
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
