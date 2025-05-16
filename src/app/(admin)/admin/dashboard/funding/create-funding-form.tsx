"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "./create-date-picker"

interface CreateFundingFormProps {
  onSubmit: (formData: FormData) => void
}

export function CreateFundingForm({ onSubmit }: CreateFundingFormProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Name
        </label>
        <Input type="text" name="name" id="name" required />
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
        <Input type="tel" name="phone" id="phone" required />
      </div>
      
      <div>
        <label htmlFor="amount" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Amount
        </label>
        <Input type="number" name="amount" id="amount" required />
      </div>
      
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Notes
        </label>
        <Textarea name="notes" id="notes" rows={3}></Textarea>
      </div>
      
      <div className="flex justify-end">
        <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </Button>
      </div>
    </form>
  )
}