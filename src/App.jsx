import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { emailConfig } from './emailConfig'
import './App.css'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear status when user starts typing again
    if (submitStatus) {
      setSubmitStatus(null)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        to_email: 'bros@discs4bros.com',
        message: `New signup from ${formData.name} (${formData.email}) for Discs4Bros exclusive access!`
      }

      await emailjs.send(
        emailConfig.serviceId, 
        emailConfig.templateId, 
        templateParams, 
        emailConfig.publicKey
      )
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '' })
    } catch (error) {
      console.error('Email send failed:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
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
                  disabled={isSubmitting}
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
                  disabled={isSubmitting}
                  className="form-input"
                />
              </div>
              
              {submitStatus === 'success' && (
                <div className="status-message success">
                  🎉 Welcome to the Bros crew! You'll be the first to know about our epic drops!
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="status-message error">
                  😕 Oops! Something went wrong. Please try again or email us directly at bros@discs4bros.com
                </div>
              )}
              
              <button type="submit" className="submit-btn" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <span>Joining the Crew...</span>
                    <span className="btn-accent">⏳</span>
                  </>
                ) : (
                  <>
                    <span>Join the Crew</span>
                    <span className="btn-accent">🚀</span>
                  </>
                )}
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
