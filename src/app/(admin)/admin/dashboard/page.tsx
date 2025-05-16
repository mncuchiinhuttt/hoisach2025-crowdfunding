import { CheckCircle } from "lucide-react";
import { Metadata } from "next";
import { Progress } from "@/components/ui/progress";
import { prisma } from "@/lib/db";

export const metadata: Metadata = {
  title: "Home | Admin",
  description: "Manage your funding data here.",
};

const FUNDING_GOAL = 40000000;

async function getTotalFunding() {
  'use server'
  const result = await prisma.funding.aggregate({
    _sum: {
      amount: true
    }
  });
  
  return result._sum.amount || 0;
}

function formatCurrency(amount: number) {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
}

export default async function AdminDashboard() {
  const totalFunding = await getTotalFunding();
  
  const progress = Math.min(Math.round((totalFunding / FUNDING_GOAL) * 100), 100);
  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6">
        <h2 className="text-xl font-semibold text-black dark:text-white mb-1">
          Welcome to the Admin Dashboard
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          Manage your funding data here.
        </p>
        
        {/* Funding Progress Bar */}
        <div className="mt-6 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium text-black dark:text-white">Funding Progress</h3>
            <span className="text-sm font-medium text-black dark:text-white">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2 w-full" />
          <div className="flex justify-between text-xs text-zinc-500 dark:text-zinc-400">
            <span>Raised: {formatCurrency(totalFunding)}</span>
            <span>Goal: {formatCurrency(FUNDING_GOAL)}</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800">
          <h3 className="font-medium text-black dark:text-white mb-2">Funding Overview</h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Total funds raised: <span className="font-semibold">{formatCurrency(totalFunding)}</span>
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Remaining to goal: <span className="font-semibold">{formatCurrency(Math.max(FUNDING_GOAL - totalFunding, 0))}</span>
          </p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            Progress: <span className="font-semibold">{progress}%</span>
          </p>
        </div>
        
        <div className="bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800">
          <h3 className="font-medium text-black dark:text-white mb-2">Tasks</h3>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Update funding records</p>
              <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">Ongoing</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Thank donors</p>
              <span className="text-xs px-2 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full">Pending</span>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Plan funding event</p>
              <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full">Completed</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 p-6">
        <h3 className="font-medium text-black dark:text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-500" />
            </div>
            <div>
              <p className="text-sm text-black dark:text-white">Funding progress updated</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">15 May 2025, 15:00</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-500" />
            </div>
            <div>
              <p className="text-sm text-black dark:text-white">New donation received: {formatCurrency(2500000)}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">15 May 2025, 12:30</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="bg-green-100 dark:bg-green-900/30 p-1 rounded-full">
              <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-500" />
            </div>
            <div>
              <p className="text-sm text-black dark:text-white">Funding target set: {formatCurrency(FUNDING_GOAL)}</p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400">14 May 2025, 18:45</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
