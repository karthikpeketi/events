// Write your code here
import './index.css'

const registrationStatusConstants = {
  initial: 'INITIAL',
  yetToRegistration: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}

const ActiveEventRegistrationDetails = props => {
  const {registrationStatusDetails} = props
  console.log(registrationStatusDetails)

  const renderDefault = () => (
    <p className="status-heading">
      Click on an event, to view its registration details
    </p>
  )

  const renderRegistrationsClosed = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="registrations-closed-image"
      />
      <h1 className="registrations-closed-heading">
        Registrations Are Closed Now!
      </h1>
      <p className="registrations-closed-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )

  const renderRegistered = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderYetToRegistration = () => (
    <div className="view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-image"
      />
      <p className="register-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button type="button" className="register-here-button">
        Register Here
      </button>
    </div>
  )

  const renderResultView = () => {
    switch (registrationStatusDetails) {
      case registrationStatusConstants.yetToRegistration:
        return renderYetToRegistration()
      case registrationStatusConstants.registered:
        return renderRegistered()
      case registrationStatusConstants.registrationsClosed:
        return renderRegistrationsClosed()
      default:
        return renderDefault()
    }
  }
  return <div className="active-registration-bg">{renderResultView()}</div>
}

export default ActiveEventRegistrationDetails
