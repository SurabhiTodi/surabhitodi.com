import { faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faCoffee, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Footer() {
  return (
    <>
      <div className="divider"></div>
      <div className="footer">
        <a href="/" style={{ border: "none" }}><FontAwesomeIcon icon={faTwitterSquare} />@surabhitodi</a>
        <a href="/" style={{ border: "none" }}><FontAwesomeIcon icon={faEnvelope} />surabhitodi@gmail.com</a>
        <a href="/" style={{ border: "none" }}><FontAwesomeIcon icon={faLinkedin} />@surabhitodi</a>
      </div>
    </>
  )
}
