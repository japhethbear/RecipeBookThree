'use client'

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NewPost = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const router = useRouter();
  
    async function handleSubmit(event: { preventDefault: () => void; }) {
      event.preventDefault();
      
      try {
        const res = await fetch('/api/add-issue', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ title, description })

        })
        router.refresh()
      }
        catch (error) {
          console.error('Error:', error);
        }
        setTitle('');
        setDescription('');
      }
  

    return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}}>
        <h1 style={{ fontSize: '30px'}}>New Issue</h1>
        <form style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center'}} 
        onSubmit={handleSubmit}>
            <div style={{ margin: '10px px'}}>
                <label htmlFor="title">Title: </label>
                <input
                type="text"
                className='textarea-bordered textarea-secondary'
                id="title"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                required
                />
            </div>
            <div style={{ margin: '10px 0px'}}>
                <label htmlFor="content">Description: </label>
                <textarea 
                className='textarea-bordered textarea-secondary'
                id="content"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                required
                />
            </div>
            <button className='btn btn-accent'type="submit">Submit</button>
        </form>

        <button className='btn btn-secondary' style={{margin: '10px 0px', width: '150px', height: '40px'}}>
          <Link href="/issues">See Issues</Link>
        </button>
        <button className='btn btn-primary' style={{margin: '10px 0px', width: '150px', height: '40px'}}>
          <Link href="/">Home</Link>
        </button>

    </div>
  )
};

export default NewPost