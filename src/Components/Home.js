import React from 'react'
import Nav from './Nav'
import Moment from 'react-moment'
import 'moment-timezone'
import Loader from 'react-loader-spinner'
import axios from 'axios'
import '../style/general.css'

export default class General extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      thread: [],
      searchTerms: '',
      suggestionSize: ''
    }
    this.updateSearch = this.updateSearch.bind(this)
  }
  componentDidMount() {
    axios
      .get(process.env.baseUrl + '/suggestion/')
      .then(res => {
        this.setState({
          thread: res.data.suggestion,
          suggestionSize: res.data.sugggestionSize
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateSearch(e) {
    let data = {
      searchTerm: this.state.searchTerms
    }
    this.setState({ searchTerms: e.target.value })

    axios
      .post(process.env.baseUrl + '/suggestion/', data)
      .then(res => {
        this.setState({
          thread: res.data.suggestion
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="container-fluid px-0">
        <div
          className="col-md-12 col-lg-12 col-sm-12 col-xs-12"
          role="navigation"
        >
          <Nav refreshFunction={this.updateSearch} />
        </div>

        <div>
          <div className="col-md-6 offset-md-3 col-lg-6 offset-lg-3 ab">
            {this.state.suggestionSize.length === 0 ? (
              <div
                style={{
                  display: 'flex',
                  height: '30rem',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Loader
                  type="Circles"
                  color="grey"
                  height={100}
                  width={100}
                  // timeout={5000} //3 secs
                />
              </div>
            ) : (
              this.state.thread.map(data => (
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
                        {/* Number Of Comment In A Certain Suggestion */}
                        {/* <div className="count text-primary">
                            <i className="far fa-comment"></i> &nbsp;
                          </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    )
  }
}
