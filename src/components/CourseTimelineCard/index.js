import {Component} from 'react'
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

class CourseTimelineCard extends Component {
  render() {
    const {courseDetails} = this.props
    const {courseTitle, duration, description, tagsList} = courseDetails

    return (
      <div className="course-details-container">
        <div className="title-duration">
          <h1>{courseTitle}</h1>
          <div className="duration-container">
            <AiFillClockCircle />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="description">{description}</p>
        <div className="name-container">
          {tagsList.map(eachTag => (
            <p className="btns" key={eachTag.id}>
              {eachTag.name}
            </p>
          ))}
        </div>
      </div>
    )
  }
}

export default CourseTimelineCard
