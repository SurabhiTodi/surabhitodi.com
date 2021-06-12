import Navigation from '../../components/Navigation'
import CHead from '../../components/CHead'
import CFooter from '../../components/CFooter'

export default function Article() {
  return (
    <div className="container">
      <CHead title="How to be Convincing"/>
      <Navigation />
      <main className="article-container">
        <div className="article-meta-data">
          <h3>First Article</h3>
          <span className="article-date">May 2021</span>
        </div>
        <div className="divider"></div>
        Start article here...
        <CFooter />
      </main>
    </div>
  )
}
