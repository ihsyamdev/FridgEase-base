import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export const Account: React.FC = () => {
  return (
    <Router>
      <Link to="/account">
        <AccountCircleIcon />
      </Link>
    </Router>
  )
}
