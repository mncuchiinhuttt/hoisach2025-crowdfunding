'use client';

import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function AddFundingForm({ createFunding }: { createFunding: (formData: FormData) => Promise<void> }) {
  const formRef = useRef<HTMLFormElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleOpen = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const handleClose = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    await createFunding(formData);
    handleClose();
    formRef.current?.reset();
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
        Add Funding
      </Button>

      <dialog ref={dialogRef} className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-6 backdrop:bg-black backdrop:bg-opacity-50 w-full max-w-md">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-1">Add New Funding</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Fill in the details to add a new funding entry.
          </p>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
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
            <Input type="date" name="date" id="date" required />
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
          
          <div className="flex justify-end gap-2 mt-6">
            <Button type="button" variant="outline" onClick={handleClose}>
              Cancel
            </Button>
            <Button type="submit">
              Submit
            </Button>
          </div>
        </form>
      </dialog>
    </>
  );
}
