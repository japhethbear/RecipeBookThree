import React from 'react'
import Link from 'next/link'

const NewUserPage = () => {
  return (
    <div>
      <h1 style={{ fontSize: '30px'}}>Create New User</h1>
    
    <button className='btn btn-primary' style={{margin: '10px 0px', width: '150px', height: '40px'}}>
        <Link href="/">Home</Link>
    </button>
    </div>
  )


}

export default NewUserPage