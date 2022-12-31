// Write your code here

import './index.css'

const EventItem = props => {
  const {eventItemDetails, onClickAction} = props
  const {id, imageUrl, name, location} = eventItemDetails
  const onClickImage = () => {
    onClickAction(id)
  }

  return (
    <li className="each-event-container">
      <button onClick={onClickImage} type="button" className="event-button">
        <img className="event-image" src={imageUrl} alt="event" />
      </button>
      <h4 className="event-name">{name}</h4>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
