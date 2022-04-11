import React from 'react'
import { Link } from 'react-router-dom'
const About = () => {
  return (
    <div>
        <h4>version 1.0.0</h4>
        {/* avoids reloading on clicking about */}
        <Link to="/">Home Page</Link>
    </div>
  )
}

export default About