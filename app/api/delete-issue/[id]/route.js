import prisma from '@/prisma/prisma';
import { NextResponse } from 'next/server';

export async function DELETE(req, { params }) {
  const id = params.id;

    const issue = await prisma.issue.delete({
        where: {id: parseInt(id)}
    });



  return NextResponse.json(issue)

}