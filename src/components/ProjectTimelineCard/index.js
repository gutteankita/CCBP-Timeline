import {Component} from 'react'
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

class ProjectTimelineCard extends Component {
  render() {
    const {projectDetails} = this.props
    console.log(projectDetails)
    const {projectTitle, description, imageUrl, duration, projectUrl} =
      projectDetails

    return (
      <div className="project-details-container">
        <img src={imageUrl} alt="project" className="img" />
        <div className="title-duration">
          <h1>{projectTitle}</h1>
          <div className="duration-container">
            <AiFillCalendar />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="description">{description}</p>
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="visit-link"
        >
          Visit
        </a>
      </div>
    )
  }
}
export default ProjectTimelineCard
