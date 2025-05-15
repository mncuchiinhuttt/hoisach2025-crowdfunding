import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="grid grid-rows-[80px_1fr_80px] min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 dark:from-slate-900 dark:to-slate-800 font-[family-name:var(--font-geist-sans)]">
      <header className="flex items-center justify-between px-8 sm:px-16 md:px-20 border-b border-amber-200 dark:border-slate-700">
        <div className="flex items-center gap-2">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="w-8 h-8 text-amber-600 dark:text-amber-400"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
          <h1 className="text-xl font-bold text-amber-800 dark:text-amber-300">HoiSach Festival 2025</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Home</a>
          <a href="#" className="text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Events</a>
          <a href="#" className="text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Authors</a>
          <a href="#" className="text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Schedule</a>
          <a href="#" className="text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Contact</a>
        </nav>
        <Button className="md:hidden bg-amber-600 hover:bg-amber-700 text-white">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="w-5 h-5"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </Button>
      </header>
      
      <main className="flex flex-col items-center justify-center p-8 sm:p-16 md:p-20">
        <div className="flex flex-col items-center gap-8 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-amber-800 dark:text-amber-300">
            Join Us for the Reading Festival of the Year!
          </h2>
          <p className="text-lg sm:text-xl text-amber-700 dark:text-amber-400 max-w-2xl">
            Experience the magic of literature with renowned authors, book signings, 
            interactive workshops, and a vibrant community of book lovers.
          </p>
          
          <div className="flex gap-4 items-center flex-col sm:flex-row mt-4">
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg">
              Register Now
            </Button>
            <Button variant="outline" className="border-amber-600 text-amber-800 dark:text-amber-300 hover:bg-amber-100 dark:hover:bg-amber-900/50 px-8 py-6 text-lg">
              View Program
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full mt-16">
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-amber-100 dark:bg-amber-900/50 rounded-full">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-6 h-6 text-amber-600 dark:text-amber-400"
                >
                  <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-800 dark:text-amber-300">Author Talks</h3>
              <p className="text-amber-700 dark:text-amber-400">
                Listen to captivating stories and insights from bestselling authors from around the world.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-amber-100 dark:bg-amber-900/50 rounded-full">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-6 h-6 text-amber-600 dark:text-amber-400"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 8v8"></path>
                  <path d="M8 12h8"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-800 dark:text-amber-300">Book Fair</h3>
              <p className="text-amber-700 dark:text-amber-400">
                Explore thousands of books from various genres and publishers with special festival discounts.
              </p>
            </div>
            
            <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 mb-4 bg-amber-100 dark:bg-amber-900/50 rounded-full">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-6 h-6 text-amber-600 dark:text-amber-400"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-amber-800 dark:text-amber-300">Workshops</h3>
              <p className="text-amber-700 dark:text-amber-400">
                Participate in creative writing, storytelling, and publishing workshops led by industry experts.
              </p>
            </div>
          </div>
          
          <div className="w-full bg-white dark:bg-slate-800 rounded-xl p-8 mt-16 shadow-md">
            <h3 className="text-2xl font-bold mb-6 text-amber-800 dark:text-amber-300 text-center">Festival Highlights</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p className="text-amber-700 dark:text-amber-400 text-left">50+ renowned authors from across the globe</p>
              </div>
              <div className="flex items-start gap-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p className="text-amber-700 dark:text-amber-400 text-left">Interactive panel discussions on literature trends</p>
              </div>
              <div className="flex items-start gap-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p className="text-amber-700 dark:text-amber-400 text-left">Book signings and meet-and-greet opportunities</p>
              </div>
              <div className="flex items-start gap-3">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-1"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <p className="text-amber-700 dark:text-amber-400 text-left">Children's reading corner with activities</p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <footer className="flex flex-col md:flex-row justify-between items-center px-8 sm:px-16 md:px-20 py-6 border-t border-amber-200 dark:border-slate-700">
        <div className="text-amber-700 dark:text-amber-400 mb-4 md:mb-0">
          © {new Date().getFullYear()} HoiSach Festival. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="#" className="text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          <a href="#" className="text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          <a href="#" className="text-amber-800 dark:text-amber-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="w-5 h-5"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
        </div>
      </footer>
      
      {/* Admin link - small and subtle */}
      <div className="absolute bottom-2 right-2">
        <a href="/admin" className="text-xs text-amber-600/60 hover:text-amber-600 dark:text-amber-400/60 dark:hover:text-amber-400">Admin</a>
      </div>
    </div>
  );
}
