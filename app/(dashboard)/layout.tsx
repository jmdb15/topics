import React from 'react'

const DashboardLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <div>
      <h1>DashboardLayout Fashbiar</h1>
      {children}
    </div>
  )
}

export default DashboardLayout