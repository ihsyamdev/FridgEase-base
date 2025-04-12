import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

export const AccountButton: React.FC = () => {
  return (
    <Link to="/my-profile">
      <AccountCircleIcon sx={{ fontSize: 64 }} />
    </Link>
  )
}
