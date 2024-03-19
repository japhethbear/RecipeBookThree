import {NextRequest, NextResponse} from "next/server";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const body = await request.json();

  const newIssue = await prisma.issue.create({
    data: { 
      title: body.title, 
      description: body.description }
});

  return NextResponse.json(newIssue, { status: 201 })
};