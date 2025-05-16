"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "./create-date-picker"

interface EditFundingFormProps {
  fundingId: number
  onSubmit: (formData: FormData) => void
  initialData?: {
    id: number
    name: string
    date: Date
    phone: string
    amount: number
    notes?: string
  }
}

export function EditFundingForm({ fundingId, onSubmit, initialData }: EditFundingFormProps) {
  const [date, setDate] = useState<Date | undefined>(initialData?.date ? new Date(initialData.date) : undefined)
  const [loading, setLoading] = useState(!initialData)
  const [data, setData] = useState(initialData)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!initialData && fundingId) {
      const fetchFundingData = async () => {
        try {
          setLoading(true)
          const response = await fetch(`/api/funding/${fundingId}`)
          if (response.ok) {
            const fundingData = await response.json()
            setData(fundingData)
            setDate(new Date(fundingData.date))
          }
        } catch (error) {
          console.error("Failed to fetch funding data:", error)
        } finally {
          setLoading(false)
        }
      }

      fetchFundingData()
    }
  }, [fundingId, initialData])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    setIsSubmitting(true)
    try {
      const formData = new FormData(e.currentTarget)
      await onSubmit(formData)
    } catch (error) {
      console.error("Failed to submit form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (loading && !data) {
    return <div className="text-center p-4">Loading...</div>
  }

  return (
    <form id="edit-funding-form" onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="id" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          ID
        </label>
        <Input 
          type="text" 
          name="id-display" 
          id="id-display" 
          value={fundingId} 
          disabled 
          className="bg-gray-100 dark:bg-gray-800 cursor-not-allowed" 
        />
        <input type="hidden" name="id" value={fundingId} />
      </div>
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Name
        </label>
        <Input 
          type="text" 
          name="name" 
          id="name" 
          required 
          defaultValue={data?.name || ""} 
        />
      </div>
      
      <div>
        <label htmlFor="date" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Date
        </label>
        <DatePicker date={date} setDate={setDate} name="date" />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Phone Number
        </label>
        <Input 
          type="tel" 
          name="phone" 
          id="phone" 
          required 
          defaultValue={data?.phone || ""} 
        />
      </div>
      
      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Amount
        </label>
        <Input 
          type="number" 
          name="amount" 
          id="amount" 
          required 
          defaultValue={data?.amount || ""} 
        />
      </div>
      
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Notes
        </label>
        <Textarea 
          name="notes" 
          id="notes" 
          rows={3}
          defaultValue={data?.notes || ""}
        ></Textarea>
      </div>
    </form>
  )
}
