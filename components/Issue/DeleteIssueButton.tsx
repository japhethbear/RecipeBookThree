'use client'
import { useRouter } from 'next/navigation';

interface DeleteIssueButtonProps {
    id: number;
};

export default function DeleteIssueButton({ id }: DeleteIssueButtonProps) {
    const router = useRouter();

    async function handleClick() {
        try {
            await fetch(`/api/delete-issue/${id}`, {
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
        Delete Issue
    </button>
  )
}
