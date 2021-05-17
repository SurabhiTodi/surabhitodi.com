import Navigation from '../conponents/Navigation'
import CHead from '../conponents/CHead'

export default function Posts() {
  return (
    <div className="container">
      <CHead title="Posts" />
      <Navigation />
      <br /><br /><br />
      <b>Posts</b>
      <ul>
        <li><a href="/posts/first-article">First article</a></li>
        <li><a href="/posts/second-article">Second article</a></li>
      </ul>
    </div>
  )
}
