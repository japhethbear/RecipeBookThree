'use client'
import { useRouter } from 'next/navigation';

export default function DeletePostButton({postId}) {
    const router = useRouter();

    async function handleClick() {
        try {
            await fetch(`/api/delete-post/${postId}`, {
                method: 'DELETE',
            })
            router.refresh()
        } catch(e) {
            console.error('Error:', e);
        }
    }

  return (
    <button className='btn btn-error' style={{margin: '10px 0px', width: '100px', height: '40px'}}
    onClick={handleClick}>
        Delete Post
    </button>
  )
}
