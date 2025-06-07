import React from 'react'
import { Link } from 'react-router-dom'
import { useAdmin } from '../hooks/useAdmin'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Shield, Settings, LogOut, Edit3, Image, BarChart3 } from 'lucide-react'

export function AdminNavbar() {
  const { isAdmin, signOut } = useAdmin()

  if (!isAdmin) return null

  return (
    <div className="fixed top-4 right-4 z-50">
      <DropdownMenu>
        <DropdownMenuTrigger className="bg-kamalo-red hover:bg-red-600 text-white p-3 rounded-full shadow-lg transition-colors">
          <Shield className="w-5 h-5" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-black/95 border-gray-800 text-white">
          <DropdownMenuItem asChild>
            <Link to="/admin" className="flex items-center">
              <Settings className="w-4 h-4 mr-2" />
              Admin Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/admin/content" className="flex items-center">
              <Edit3 className="w-4 h-4 mr-2" />
              Edit Content
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/admin/gallery" className="flex items-center">
              <Image className="w-4 h-4 mr-2" />
              Manage Gallery
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link to="/admin/analytics" className="flex items-center">
              <BarChart3 className="w-4 h-4 mr-2" />
              Analytics
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={signOut} className="text-red-400">
            <LogOut className="w-4 h-4 mr-2" />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}