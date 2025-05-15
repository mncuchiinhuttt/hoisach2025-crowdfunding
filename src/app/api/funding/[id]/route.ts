import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function GET(
  req: NextRequest, 
  context: any
) {
  const id = parseInt(context.params.id)

  try {
    const funding = await prisma.funding.findUnique({
      where: { id }
    })

    if (!funding) {
      return NextResponse.json({ error: 'Funding not found' }, { status: 404 })
    }

    return NextResponse.json(funding)
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch funding' }, { status: 500 })
  }
}

export async function DELETE(
  req: NextRequest, 
  context: any
) {
  const id = parseInt(context.params.id)

  try {
    const funding = await prisma.funding.findUnique({
      where: { id }
    })

    if (!funding) {
      return NextResponse.json({ error: 'Funding not found' }, { status: 404 })
    }

    await prisma.funding.delete({
      where: { id }
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete funding' }, { status: 500 })
  }
}
