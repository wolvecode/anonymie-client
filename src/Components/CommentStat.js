import React from 'react'
import Sidebar from './Sidebar'

import { Chart } from './Chart'

class CommentStat extends React.Component {
  constructor() {
    super()
  }
  render() {
    return (
      <Sidebar>
        <div className="col-md-8">
          <Chart />
        </div>
      </Sidebar>
    )
  }
}
export default CommentStat
