import React from 'react';
import Link from 'next/link';
import Issue from '../../components/Issue/Issue';
import prisma from '@/prisma/prisma';
import { Issue as IssueType } from '@prisma/client';
import { IssueStatus } from '@prisma/client';

interface IssueWithStatus extends IssueType {
    status: IssueStatus;
}

async function getIssues(): Promise<IssueWithStatus[]> {
    const issues = await prisma.issue.findMany({
    })
    return issues as IssueWithStatus[];
  }

  export const dynamic = 'force-dynamic'

export default async function IssuesPage() {
  const issues = await getIssues();

  return (
    <div style={{ display: 'flex', flexDirection: 'column'}}>
        {
        issues.map((issue) => (
        <Issue 
        key={issue.id} 
        id={issue.id}
        title={issue.title}
        description={issue.description} 
        status={issue.status}/>
         ))}
      
      <button className='btn btn-secondary' style={{margin: '10px 0px', width: '150px', height: '40px'}}>
          <Link href="/issues/new">Create New Issue</Link>
        </button>
      <button className='btn btn-primary' style={{margin: '10px 0px', width: '150px', height: '40px'}}>
        <Link href="/">Home</Link>
      </button>
    </div>
  )
}