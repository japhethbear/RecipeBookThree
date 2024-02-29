import Link from 'next/link';
import ProductCard from './users/components/ProductCard/ProductCard';
import prisma from '@/prisma/prisma';

async function getPosts() {
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

export default async function Home() {
  
  const posts = await getPosts();
  console.log({posts});
  
  return (
    <main>
      <h1>Hello World</h1>
      <Link href="/users">Users</Link>
      <ProductCard/>
    </main>
  );
}
