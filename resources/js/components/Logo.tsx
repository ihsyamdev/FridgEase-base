import React from "react"
import logo from "../../images/logo.png"
import { BrowserRouter as Router, Link } from "react-router-dom"

export const Logo: React.FC = () => {
  return (
    <Router>
      <Link to="/">
        <img src={ logo } alt="logo" />
      </Link>
    </Router>
  )
}
