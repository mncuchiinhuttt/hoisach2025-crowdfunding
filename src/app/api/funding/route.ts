import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function PUT(request: NextRequest) {
  try {
    const formData = await request.formData();
    const id = parseInt(formData.get('id') as string);
    const name = formData.get('name') as string;
    const dateStr = formData.get('date') as string;
    const phone = formData.get('phone') as string;
    const amount = parseInt(formData.get('amount') as string);
    const notes = formData.get('notes') as string || '';
    
    // Update the funding
    const updatedFunding = await prisma.funding.update({
      where: { id },
      data: {
        name,
        date: new Date(dateStr),
        phone,
        amount,
        notes,
      },
    });
    
    return NextResponse.json(updatedFunding);
  } catch (error) {
    console.error('Error updating funding:', error);
    return NextResponse.json(
      { error: 'Failed to update funding' }, 
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, date, phone, amount, notes } = body
    
    // Create new funding
    const newFunding = await prisma.funding.create({
      data: {
        name,
        date,
        phone,
        amount,
        notes,
      },
    })
    
    return NextResponse.json(newFunding)
  } catch (error) {
    console.error('Error creating funding:', error)
    return NextResponse.json(
      { error: 'Failed to create funding' }, 
      { status: 500 }
    )
  }
}
