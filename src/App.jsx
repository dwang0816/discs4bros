import { useState } from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: Add backend functionality later
    console.log('Form submitted:', formData)
    alert(`Thanks ${formData.name}! You're now part of the Bros crew!`)
    setFormData({ name: '', email: '' })
  }

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <span className="logo-text">Discs4Bros</span>
            <span className="logo-accent">.com</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              The <span className="highlight">Ultimate</span> Drop is Coming
            </h1>
            <p className="hero-subtitle">
              Exclusive special edition discs for the most dedicated bros in the game. 
              Be the first to know when we launch something epic.
            </p>
            
            <div className="hero-visual">
              <div className="disc-placeholder">
                <div className="disc-ring outer"></div>
                <div className="disc-ring middle"></div>
                <div className="disc-ring inner"></div>
                <div className="disc-center">🥏</div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">Join the Bros</h2>
            <p className="cta-subtitle">
              Get exclusive access to limited drops, pro tips, and the sickest discs before anyone else.
            </p>
            
            <form className="signup-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                />
              </div>
              <button type="submit" className="submit-btn">
                <span>Join the Crew</span>
                <span className="btn-accent">🚀</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Discs4Bros.com - For Bros, By Bros</p>
          <p>Contact us: <a href="mailto:bros@discs4bros.com">bros@discs4bros.com</a></p>
        </div>
      </footer>
    </div>
  )
}

export default App
