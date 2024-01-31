import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import {Component} from 'react'
import './index.css'

class TimelineView extends Component {
  renderTimelineCard = item => {
    if (item.categoryId === 'COURSE') {
      return <CourseTimelineCard key={item.id} courseDetails={item} />
    }
    return <ProjectTimelineCard key={item.id} projectDetails={item} />
  }

  render() {
    const {timelineItemsList} = this.props

    return (
      <div className="chrono-container">
        <h1 className="ccbp-heading">MY JOURNEY OF CCBP 4.0</h1>

        <Chrono items={timelineItemsList} mode="VERTICAL_ALTERNATING">
          {timelineItemsList.map(eachItem => this.renderTimelineCard(eachItem))}
        </Chrono>
      </div>
    )
  }
}

export default TimelineView
