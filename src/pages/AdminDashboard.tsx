import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAdmin } from '../hooks/useAdmin'
import { supabase } from '../lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Users, 
  FileText, 
  Image, 
  BarChart3, 
  Settings, 
  Edit3, 
  Upload, 
  Eye,
  Calendar,
  MessageSquare,
  TrendingUp,
  Clock,
  LogOut
} from 'lucide-react'

export default function AdminDashboard() {
  const { signOut } = useAdmin()
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalReservations: 0,
    totalOrders: 0,
    totalImages: 0
  })

  useEffect(() => {
    loadStats()
  }, [])

  const loadStats = async () => {
    // Mock stats - replace with actual Supabase queries
    setStats({
      totalUsers: 1234,
      totalReservations: 56,
      totalOrders: 89,
      totalImages: 24
    })
  }

  const handleSignOut = async () => {
    await signOut()
  }

  const quickActions = [
    {
      title: 'Edit Homepage',
      description: 'Update hero section, menu highlights',
      icon: Edit3,
      link: '/admin/content?page=home',
      color: 'bg-blue-500'
    },
    {
      title: 'Manage Gallery',
      description: 'Upload, organize, and edit images',
      icon: Image,
      link: '/admin/gallery',
      color: 'bg-green-500'
    },
    {
      title: 'Upload Media',
      description: 'Add new images and videos',
      icon: Upload,
      link: '/admin/media',
      color: 'bg-purple-500'
    },
    {
      title: 'View Site',
      description: 'Preview live website',
      icon: Eye,
      link: '/',
      color: 'bg-orange-500'
    }
  ]

  return (
    <div className="min-h-screen bg-kamalo-dark">
      {/* Header */}
      <div className="bg-black/50 border-b border-gray-800">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
              <p className="text-gray-400">Kamalo City Management</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                <Eye className="w-5 h-5" />
              </Link>
              <Button
                onClick={handleSignOut}
                variant="outline"
                size="sm"
                className="border-gray-700 text-gray-300 hover:bg-gray-800"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-black/50 border border-gray-800">
            <TabsTrigger value="overview" className="data-[state=active]:bg-kamalo-red">
              Overview
            </TabsTrigger>
            <TabsTrigger value="content" className="data-[state=active]:bg-kamalo-red">
              Edit Content
            </TabsTrigger>
            <TabsTrigger value="media" className="data-[state=active]:bg-kamalo-red">
              Media
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-kamalo-red">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-kamalo-red">
              Settings
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-black/50 border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Total Visitors</CardTitle>
                  <Users className="h-4 w-4 text-kamalo-red" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stats.totalUsers.toLocaleString()}</div>
                  <p className="text-xs text-gray-400">+12% from last month</p>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Reservations</CardTitle>
                  <Calendar className="h-4 w-4 text-kamalo-red" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stats.totalReservations}</div>
                  <p className="text-xs text-gray-400">This month</p>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Orders</CardTitle>
                  <MessageSquare className="h-4 w-4 text-kamalo-red" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stats.totalOrders}</div>
                  <p className="text-xs text-gray-400">+8% from last week</p>
                </CardContent>
              </Card>

              <Card className="bg-black/50 border-gray-800">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-400">Media Files</CardTitle>
                  <Image className="h-4 w-4 text-kamalo-red" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{stats.totalImages}</div>
                  <p className="text-xs text-gray-400">Images & Videos</p>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {quickActions.map((action, index) => (
                  <Link key={index} to={action.link}>
                    <Card className="bg-black/50 border-gray-800 hover:border-kamalo-red transition-colors cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg ${action.color}`}>
                            <action.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-white">{action.title}</h3>
                            <p className="text-sm text-gray-400">{action.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <Card className="bg-black/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">Homepage hero section updated</p>
                      <p className="text-gray-400 text-xs">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">New gallery images uploaded</p>
                      <p className="text-gray-400 text-xs">5 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-white text-sm">Menu prices updated</p>
                      <p className="text-gray-400 text-xs">1 day ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content">
            <ContentEditor />
          </TabsContent>

          <TabsContent value="media">
            <MediaManager />
          </TabsContent>

          <TabsContent value="analytics">
            <AnalyticsDashboard />
          </TabsContent>

          <TabsContent value="settings">
            <AdminSettings />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

// Content Editor Component
function ContentEditor() {
  const [selectedPage, setSelectedPage] = useState('home')
  
  const pages = [
    { id: 'home', name: 'Homepage' },
    { id: 'menu', name: 'Menu' },
    { id: 'services', name: 'Services' },
    { id: 'gallery', name: 'Gallery' },
    { id: 'about', name: 'About' },
    { id: 'contact', name: 'Contact' }
  ]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Content Editor</h2>
        <div className="flex space-x-2">
          <Button variant="outline" className="border-gray-700 text-gray-300">
            Preview Changes
          </Button>
          <Button className="bg-kamalo-red hover:bg-red-600">
            Publish Changes
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Page Selector */}
        <Card className="bg-black/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Select Page</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {pages.map((page) => (
                <button
                  key={page.id}
                  onClick={() => setSelectedPage(page.id)}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    selectedPage === page.id
                      ? 'bg-kamalo-red text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {page.name}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Content Blocks */}
        <div className="lg:col-span-3">
          <Card className="bg-black/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-white">Edit {pages.find(p => p.id === selectedPage)?.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border border-gray-700 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Hero Section</h3>
                  <p className="text-gray-400 text-sm mb-3">Main heading and description</p>
                  <Button size="sm" className="bg-kamalo-red hover:bg-red-600">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Content
                  </Button>
                </div>
                
                <div className="p-4 border border-gray-700 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Featured Content</h3>
                  <p className="text-gray-400 text-sm mb-3">Highlighted sections and cards</p>
                  <Button size="sm" className="bg-kamalo-red hover:bg-red-600">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Content
                  </Button>
                </div>

                <div className="p-4 border border-gray-700 rounded-lg">
                  <h3 className="text-white font-semibold mb-2">Gallery Section</h3>
                  <p className="text-gray-400 text-sm mb-3">Image galleries and media</p>
                  <Button size="sm" className="bg-kamalo-red hover:bg-red-600">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Edit Content
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

// Media Manager Component
function MediaManager() {
  const [uploadProgress, setUploadProgress] = useState(0)
  const [isUploading, setIsUploading] = useState(false)

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setIsUploading(true)
    setUploadProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsUploading(false)
          return 100
        }
        return prev + 10
      })
    }, 200)

    // Here you would implement actual Supabase storage upload
    // const { data, error } = await supabase.storage
    //   .from('media')
    //   .upload(`images/${file.name}`, file)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Media Manager</h2>
        <div className="flex space-x-2">
          <input
            type="file"
            accept="image/*,video/*"
            onChange={handleFileUpload}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <Button className="bg-kamalo-red hover:bg-red-600 cursor-pointer">
              <Upload className="w-4 h-4 mr-2" />
              Upload Media
            </Button>
          </label>
        </div>
      </div>

      {isUploading && (
        <Card className="bg-black/50 border-gray-800">
          <CardContent className="p-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <p className="text-white text-sm">Uploading...</p>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div 
                    className="bg-kamalo-red h-2 rounded-full transition-all duration-300"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
              <span className="text-white text-sm">{uploadProgress}%</span>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {/* Sample media items */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <Card key={item} className="bg-black/50 border-gray-800">
            <CardContent className="p-4">
              <div className="aspect-square bg-gray-700 rounded-lg mb-3 flex items-center justify-center">
                <Image className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-white text-sm font-medium">Image {item}.jpg</p>
              <p className="text-gray-400 text-xs">2.4 MB</p>
              <div className="flex space-x-2 mt-3">
                <Button size="sm" variant="outline" className="border-gray-700 text-gray-300">
                  Edit
                </Button>
                <Button size="sm" variant="outline" className="border-red-700 text-red-400">
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Analytics Dashboard Component
function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Analytics Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-black/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-kamalo-red" />
              Page Views
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">12,345</div>
            <p className="text-green-400 text-sm">+15% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-black/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Clock className="w-5 h-5 mr-2 text-kamalo-red" />
              Avg. Session
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">3:42</div>
            <p className="text-green-400 text-sm">+8% from last month</p>
          </CardContent>
        </Card>

        <Card className="bg-black/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white flex items-center">
              <Users className="w-5 h-5 mr-2 text-kamalo-red" />
              Unique Visitors
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">8,901</div>
            <p className="text-green-400 text-sm">+12% from last month</p>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-black/50 border-gray-800">
        <CardHeader>
          <CardTitle className="text-white">Most Popular Pages</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              { page: 'Homepage', views: 4521, percentage: 85 },
              { page: 'Menu', views: 3210, percentage: 60 },
              { page: 'Services', views: 2105, percentage: 40 },
              { page: 'Gallery', views: 1876, percentage: 35 },
              { page: 'Contact', views: 1234, percentage: 25 }
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-white text-sm">{item.page}</span>
                    <span className="text-gray-400 text-sm">{item.views} views</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-kamalo-red h-2 rounded-full"
                      style={{ width: `${item.percentage}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

// Admin Settings Component
function AdminSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Admin Settings</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-black/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Site Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Site Title
              </label>
              <input
                type="text"
                defaultValue="Kamalo City"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Site Description
              </label>
              <textarea
                defaultValue="Authentic African cuisine in Cape Town"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white h-24"
              />
            </div>
            <Button className="bg-kamalo-red hover:bg-red-600">
              Save Settings
            </Button>
          </CardContent>
        </Card>

        <Card className="bg-black/50 border-gray-800">
          <CardHeader>
            <CardTitle className="text-white">Admin Users</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-gray-800 rounded-lg">
                <div>
                  <p className="text-white font-medium">vistasouthafrica@gmail.com</p>
                  <p className="text-gray-400 text-sm">Super Admin</p>
                </div>
                <span className="px-2 py-1 bg-green-500 text-white text-xs rounded">Active</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}