"use client"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Edit, Trash2 } from "lucide-react"
import { EditFundingForm } from "./edit-funding-form"
import { useEffect, useState, useTransition } from "react"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

interface EditFundingDialogProps {
  fundingId: number
}

export function EditFundingDialog({ fundingId }: EditFundingDialogProps) {
  const [open, setOpen] = useState(false)
  const [initialData, setInitialData] = useState<any>(null)
  const [loading, setLoading] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const router = useRouter()
  const [isPending, startTransition] = useTransition()

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this funding entry? This action cannot be undone.")) {
      return;
    }
    
    setDeleting(true)
    try {
      const response = await fetch(`/api/funding/${fundingId}`, {
        method: 'DELETE',
      })

      if (response.ok) {
        toast.success('Funding entry deleted successfully', {
          duration: 3000,
          description: 'The funding entry has been removed.',
        })
        setOpen(false)
        // Refresh the data instead of reloading the page
        startTransition(() => {
          router.refresh()
        })
      } else {
        const error = await response.json()
        console.error('Failed to delete funding:', error)
        toast.error('Failed to delete funding entry', {
          description: error.message ?? 'An error occurred while deleting the funding entry.',
          duration: 3000,
        })
      }
    } catch (error) {
      console.error('Error deleting funding:', error)
      toast.error('An error occurred while deleting the funding entry', {
        description: 'Please try again later.',
        duration: 3000,
      })
    } finally {
      setDeleting(false)
    }
  }

  useEffect(() => {
    if (open && fundingId && !initialData) {
      const fetchData = async () => {
        setLoading(true)
        try {
          const response = await fetch(`/api/funding/${fundingId}`)
          if (response.ok) {
            const data = await response.json()
            setInitialData(data)
          }
        } catch (error) {
          console.error("Failed to fetch funding data:", error)
        } finally {
          setLoading(false)
        }
      }
      fetchData();
    }
  }, [fundingId, open, initialData])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Funding</DialogTitle>
          <DialogDescription>
            Update the funding details.
          </DialogDescription>
        </DialogHeader>
        
        {loading ? (
          <div className="text-center py-4">Loading funding data...</div>
        ) : (
          <>
            <EditFundingForm 
              fundingId={fundingId} 
              onSubmit={async (formData) => {
                try {
                  const response = await fetch('/api/funding', {
                    method: 'PUT',
                    body: formData
                  });
                  
                  if (response.ok) {
                    setOpen(false);
                    toast.success('Funding entry updated successfully', {
                      duration: 3000,
                      description: 'The funding entry has been updated.',
                    });
                    // Refresh the data instead of reloading the page
                    startTransition(() => {
                      router.refresh()
                    })
                  } else {
                    console.error('Failed to update funding');
                    toast.error('Failed to update funding entry', {
                      description: 'An error occurred while updating the funding entry.',
                      duration: 3000,
                    });
                  }
                } catch (error) {
                  console.error('Error updating funding:', error);
                  toast.error('An error occurred while updating the funding entry', {
                    description: 'An error occurred while updating the funding entry.',
                    duration: 3000,
                  })
                }
              }} 
              initialData={initialData}
            />
            
            <DialogFooter className="mt-6 flex justify-between">
              <Button
                variant="destructive"
                onClick={handleDelete}
                disabled={deleting}
                className="flex items-center"
              >
                <Trash2 className="mr-2 h-4 w-4" />
                {deleting ? "Deleting..." : "Delete"}
              </Button>
              
              <Button type="submit" form="edit-funding-form">
                Save Changes
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  )
}
