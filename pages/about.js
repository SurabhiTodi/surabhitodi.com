import Navigation from '../components/Navigation'
import CHead from '../components/CHead'
import CFooter from '../components/CFooter'

export default function About() {
  return (
    <div className="container">
      <CHead title="About" />
      <Navigation />
      <br /><br /><br />
      <b>About me</b>
      <p>I am copying this website template from Daniel Gross.</p>
      <CFooter />
    </div>
  )
}
