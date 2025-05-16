import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import type { Metadata } from 'next'
import { prisma } from "@/lib/db"
import { AddFundingDialog } from "./add-funding-dialog"
import { EditFundingDialog } from "./edit-funding-dialog"
import { revalidatePath } from 'next/cache';

export const metadata: Metadata = {
  title: 'Funding Overview | Admin',
  description: 'Manage your funding data here.',
}

async function getFundingData() {
  'use server'
  const fundingData = await prisma.funding.findMany({
    orderBy: {
      date: 'desc'
    }
  });
  return fundingData;
}

async function getFundingById(id: number) {
  'use server'
  const funding = await prisma.funding.findUnique({
    where: {
      id: id
    }
  });
  return funding;
}

async function updateFunding(data: FormData) {
  'use server'
  try {
    const id = parseInt(data.get('id') as string);
    const name = data.get('name') as string;
    const dateStr = data.get('date') as string;
    const phone = data.get('phone') as string;
    const amount = parseInt(data.get('amount') as string);
    const notes = data.get('notes') as string || '';
    
    await prisma.funding.update({
      where: { id },
      data: {
        name,
        date: new Date(dateStr),
        phone,
        amount,
        notes,
      },
    });
  } catch (error) {
    console.error('Error updating funding:', error);
    throw new Error('Failed to update funding entry');
  } finally {
    revalidatePath('/admin/dashboard/funding');
  }
}

async function deleteFunding(id: number) {
  'use server'
  try {
    await prisma.funding.delete({
      where: { id }
    });
  } catch (error) {
    console.error('Error deleting funding:', error);
    throw new Error('Failed to delete funding entry');
  } finally {
    revalidatePath('/admin/dashboard/funding');
  }
}

function displayAmount(amount: number) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
}

async function createFunding(data: FormData) {
  'use server'
  try {
    const name = data.get('name') as string;
    const dateStr = data.get('date') as string;
    const phone = data.get('phone') as string;
    const amount = parseInt(data.get('amount') as string);
    const notes = data.get('notes') as string || '';
    const date = new Date(dateStr);
    
    await prisma.funding.create({
      data: {
        name,
        date,
        phone,
        amount,
        notes,
      },
    });
  } catch (error) {
    console.error('Error creating funding:', error);
    throw new Error('Failed to create funding entry');
  } finally {
    revalidatePath('/admin/dashboard/funding');
  }
}

export default async function Funding() {
  const fundingData = await getFundingData();
  
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-black dark:text-white mb-1">
              Funding Overview
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400">
              Manage your funding data here.
            </p>
          </div>
          <AddFundingDialog />
        </div>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Phone Number</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Note</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
        {fundingData.map((funding) => (
          <TableRow key={funding.id}>
            <TableCell className="font-medium text-black dark:text-white">
              {funding.id}
            </TableCell>
            <TableCell>{funding.name}</TableCell>
            <TableCell>{new Date(funding.date).toLocaleDateString('vi-VN')}</TableCell>
            <TableCell>{funding.phone}</TableCell>
            <TableCell>{displayAmount(funding.amount)}</TableCell>
            <TableCell>{funding.notes}</TableCell>
            <TableCell>
              <EditFundingDialog fundingId={funding.id} />
            </TableCell>
          </TableRow>
        ))}
        </TableBody>
      </Table>
    </div>
  )
}