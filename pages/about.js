import Navigation from '../conponents/Navigation'
import CHead from '../conponents/CHead'

export default function About() {
  return (
    <div className="container">
      <CHead title="About" />
      <Navigation />
      <br /><br /><br />
      <b>About me</b>
      <p>I am copying this website template from Daniel Gross.</p>
    </div>
  )
}
