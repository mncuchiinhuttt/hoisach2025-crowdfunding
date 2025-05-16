"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { CreateFundingForm } from "./create-funding-form"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export function AddFundingDialog() {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (formData: FormData) => {
    try {
      // Submit the form data to the API
      const name = formData.get('name') as string
      const dateStr = formData.get('date') as string
      const phone = formData.get('phone') as string
      const amount = parseInt(formData.get('amount') as string)
      const notes = formData.get('notes') as string || ''
      
      const response = await fetch('/api/funding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          date: new Date(dateStr),
          phone,
          amount,
          notes,
        }),
      })
      
      if (response.ok) {
        setOpen(false)
        toast.success('Funding entry created successfully', {
          duration: 3000,
          description: 'The funding entry has been added.',
        })
        // Refresh the data instead of reloading the page
        startTransition(() => {
          router.refresh()
        })
      } else {
        const error = await response.json()
        throw new Error(error.message || 'Failed to create funding entry')
      }
    } catch (error) {
      console.error('Error creating funding:', error)
      toast.error('Failed to create funding entry', {
        description: 'An error occurred while creating the funding entry.',
        duration: 3000,
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Funding
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Funding</DialogTitle>
          <DialogDescription>
            Fill in the details to add a new funding entry.
          </DialogDescription>
        </DialogHeader>
        <CreateFundingForm onSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  )
}
