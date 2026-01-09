import './index.css'

function App() {
  return (
    <>
      <div className="background-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <main>
        <div className="profile-card">
          <div className="glass-container">
            <div className="profile-content">
              <span className="badge">Personal Information</span>
              <h1 className="name">Adhil Ahammed PT Aravind</h1>
              <p className="age-label">Age</p>
              <div className="age-display">
                <span className="age-number">23</span>
                <span className="age-suffix">Years Old</span>
              </div>
              <div className="divider"></div>
              <p className="bio">Passionate developer focused on creating premium digital experiences with modern aesthetics.</p>
              <div className="footer-links">
                <a href="#" className="btn-primary">Connect</a>
                <a href="#" className="btn-secondary">Resume</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
