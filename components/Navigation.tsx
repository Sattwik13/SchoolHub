'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { School, Plus, List } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
            <School className="w-6 h-6" />
            SchoolHub
          </Link>
          
          <div className="flex items-center gap-4">
            <Link href="/add-school">
              <Button 
                variant={pathname === '/add-school' ? 'default' : 'ghost'}
                className="flex items-center gap-2"
              >
                <Plus className="w-4 h-4" />
                Add School
              </Button>
            </Link>
            
            <Link href="/schools">
              <Button 
                variant={pathname === '/schools' ? 'default' : 'ghost'}
                className="flex items-center gap-2"
              >
                <List className="w-4 h-4" />
                View Schools
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}