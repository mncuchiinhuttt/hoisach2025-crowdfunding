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

interface AddFundingDialogProps {
  createFunding: (formData: FormData) => Promise<void>
}

export function AddFundingDialog({ createFunding }: AddFundingDialogProps) {
  return (
    <Dialog>
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
        <CreateFundingForm onSubmit={createFunding} />
      </DialogContent>
    </Dialog>
  )
}
