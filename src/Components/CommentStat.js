import React from 'react'
import Sidebar from './Sidebar'
import '../style/style.css'
import { Chart } from './Chart'
import { Stat } from './Stat'

class CommentStat extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Sidebar>
        <div className="row p-0  pt-5">
          <div className="col-md-5">
            {' '}
            <Stat />
          </div>
          <div className="col-md-7">
            {' '}
            <Chart />
          </div>
        </div>
      </Sidebar>
    )
  }
}
export default CommentStat
