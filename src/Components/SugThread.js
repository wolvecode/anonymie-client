import React from 'react'
import Sidebar from './Sidebar'

// const Exercise = props => (
//   <tr>
//     <td>{props.exercise.username}</td>
//     <td>{props.exercise.description}</td>
//     <td>{props.exercise.duration}</td>
//     <td>{props.exercise.date.substring(0, 10)}</td>
//     <td>
//       <a href={'/edit/' + props.exercise._id}>Edit</a>|
//       <a
//         href="#"
//         onClick={() => {
//           props.deleteExercise(props.exercise._id)
//         }}
//       >
//         delete
//       </a>
//     </td>
//   </tr>
// )

export default class SuggestionList extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     exercises: []
  //   }
  //   this.deleteExercise = this.deleteExercise.bind(this)
  // }
  // componentDidMount() {
  //   axios
  //     .get('http://localhost:5555/exercise')
  //     .then(res => {
  //       this.setState({
  //         exercises: res.data
  //       })
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // deleteExercise(id) {
  //   axios.delete('http://localhost:5555/exercise' + id).then(res => {
  //     console.log(res.data)
  //     this.setState({
  //       exercises: this.state.exercises.filter(el => el._id !== id)
  //     })
  //   })
  // }

  // exerciseList() {
  //   return this.state.exercises.map(currentexercise => {
  //     return (
  //       <Exercise
  //         exercise={currentexercise}
  //         deleteExercise={this.deleteExercise}
  //         key={currentexercise._id}
  //       />
  //     )
  //   })
  // }
  render() {
    return (
      <Sidebar>
        <div className="col-md-8 offset-md-2 pt-5">
          <h3>Suggestion List</h3>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            {/* <tbody>{this.exerciseList()}</tbody> */}
          </table>
        </div>
      </Sidebar>
    )
  }
}
