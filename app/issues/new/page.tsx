'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const NewIssue = () => {

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
      });
      router.refresh();
    }
    catch (error) {
      console.error('Error:', error);
    }
    setTitle('');
    setDescription('');
  }


  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '30px' }}>New Issue</h1>

      <form style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}
        onSubmit={handleSubmit}>
        <div style={{ margin: '10px px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label htmlFor="title" style={{ fontSize: '20px'}}>Title</label>
          <input
            type="text"
            placeholder=' Title...'
            className='textarea-bordered textarea-secondary'
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required />
        </div>
        <div style={{ margin: '10px 0px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <label htmlFor="description" style={{ fontSize: '20px'}}>Description</label>
          <textarea
            className='textarea-bordered textarea-secondary'
            style={{ paddingRight: '10px', marginLeft: '3px', width: '100%', height: '125px'}}
            id="description"
            placeholder=' Description...'
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required />
        </div>
        <button className='btn btn-accent' type="submit">Submit New Issue</button>
      </form>

      <button className='btn btn-secondary' style={{ margin: '10px 0px', width: '150px', height: '40px' }}>
        <Link href="/issues">See Issues</Link>
      </button>
      <button className='btn btn-primary' style={{ margin: '10px 0px', width: '150px', height: '40px' }}>
        <Link href="/">Home</Link>
      </button>

    </div>
  );
};

export default NewIssue;