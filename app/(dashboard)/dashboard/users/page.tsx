import React from 'react'
import Link from 'next/link'

const Users = () => {
  return (
    <>
        <div>Users</div>
        
        <Link href={'/dashboard/users/1'}>User 1</Link>
        <Link href={'/dashboard/users/2'}>User 2</Link>
    </>
  )
}

export default Users