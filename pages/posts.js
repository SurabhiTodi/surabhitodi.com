import Navigation from '../components/Navigation'
import CHead from '../components/CHead'
import CFooter from '../components/CFooter'

export default function Posts() {
  return (
    <div className="container">
      <CHead title="Posts" />
      <Navigation />
      <br /><br /><br />
      <b>Posts</b>
      <ul>
        <li><a href="/posts/how-to-become-convincing1">How To Become Convincing</a></li>
      
      </ul>
      <CFooter />
    </div>
  )
}
