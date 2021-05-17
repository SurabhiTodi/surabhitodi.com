import Navigation from '../../conponents/Navigation'
import CHead from '../../conponents/CHead'

export default function Article() {
  return (
    <div className="container">
      <CHead title="Second Article"/>
      <Navigation />
      <main className="article-container">
        <div className="article-meta-data">
          <h3>Second Article</h3>
          <span className="article-date">May 2021</span>
        </div>
        <div className="divider"></div>
        Start article here...
      </main>
    </div>
  )
}
