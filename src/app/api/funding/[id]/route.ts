import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(
  request: NextRequest, 
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    
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
  { params }: { params: { id: string } }
) {
  try {
    const id = parseInt(params.id)
    
    // Check if the funding exists
    const funding = await prisma.funding.findUnique({
      where: { id }
    })
    
    if (!funding) {
      return NextResponse.json(
        { error: 'Funding not found' }, 
        { status: 404 }
      )
    }
    
    // Delete the funding
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
