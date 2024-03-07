import React from 'react'
import prisma from '@/prisma/prisma';
import Post from '../../components/Post/Post';
import Link from 'next/link';
import { Post as PostType } from '@prisma/client';

interface PostWithAuthor extends PostType {
  author: {
    name: string;
  }
}

async function getPosts(): Promise<PostWithAuthor[]> {
    const posts = await prisma.post.findMany({
      where: { published: true}, 
      include: { 
        author: {
          select: {name: true}
        }
      }
    })
    return posts;
  }

export default async function Posts() {
    const posts = await getPosts();
  
    return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
        {
        posts.map((post) => (
        <Post 
        key={post.id} 
        id={post.id}
        title={post.title}
        content={post.content} 
        authorId={post.authorId}
        authorName={post.author.name}/>
         ))}
      
      <button className='btn btn-secondary' style={{margin: '10px 0px', width: '150px', height: '40px'}}>
          <Link href="/posts/new">Create New Post</Link>
        </button>
      <button className='btn btn-primary' style={{margin: '10px 0px', width: '150px', height: '40px'}}>
        <Link href="/">Home</Link>
      </button>
    </div>
    
  )
};