import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(
  request: NextRequest, 
  context: { params: { id: string } }
) {
  try {
    const id = parseInt(context.params.id)
    
    const funding = await prisma.funding.findUnique({
      where: { id }
    })
    
    if (!funding) {
      return NextResponse.json(
        { error: 'Funding not found' }, 
        { status: 404 }
      )
    }
    
    return NextResponse.json(funding)
  } catch (error) {
    console.error('Error fetching funding:', error)
    return NextResponse.json(
      { error: 'Failed to fetch funding' }, 
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  context: { params: { id: string } }
) {
  try {
    const id = parseInt(context.params.id)
    
    const funding = await prisma.funding.findUnique({
      where: { id }
    })
    
    if (!funding) {
      return NextResponse.json(
        { error: 'Funding not found' }, 
        { status: 404 }
      )
    }
    
    await prisma.funding.delete({
      where: { id }
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting funding:', error)
    return NextResponse.json(
      { error: 'Failed to delete funding' }, 
      { status: 500 }
    )
  }
}
