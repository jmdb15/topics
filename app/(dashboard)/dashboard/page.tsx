import React from 'react'
import Link from 'next/link'

const Dashboard = () => {
  return (
    <>
        <div>Dashboard</div>
        <Link href={'/dashboard/users'}>Users</Link>
        <Link href={'/dashboard/analytics'}>Analytics</Link>
    </>
  )
}

export default Dashboard