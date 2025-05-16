"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { DatePicker } from "./create-date-picker"

interface CreateFundingFormProps {
  onSubmit: (formData: FormData) => Promise<void>
}

export function CreateFundingForm({ onSubmit }: CreateFundingFormProps) {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <form action={onSubmit} className="space-y-4">
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
        <Button type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}