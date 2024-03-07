import Link from 'next/link';

export default async function Home() {

  
  return (
    <main>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>Next.Js Prisma Postgresql CRUD App</h1>
      <div style={{ display: 'flex', flexDirection: 'column', margin: '10px 0px', justifyContent: 'flex-start'}}>
        <button className="btn btn-secondary" style={{margin: '10px 0px', width: '150px', height: '40px'}}>
          <Link href="/users">View Users</Link>
        </button>
        <button className='btn btn-secondary' style={{margin: '10px 0px', width: '150px', height: '40px'}}>
          <Link href="/users/new">Create New User</Link>
        </button>
        <button className='btn btn-secondary' style={{margin: '10px 0px', width: '150px', height: '40px'}}>
          <Link href="/posts">See Posts</Link>
        </button>
        <button className='btn btn-secondary' style={{margin: '10px 0px', width: '150px', height: '40px'}}>
          <Link href="/posts/new">Create New Post</Link>
        </button>


      </div>
    
    </main>
  );
}
