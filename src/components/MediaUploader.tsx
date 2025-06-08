import React, { useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import { supabase } from '../lib/supabase'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Upload, X, Image, Video } from 'lucide-react'

interface MediaUploaderProps {
  onUploadComplete?: (url: string) => void
  acceptedTypes?: string[]
  maxSize?: number
}

export function MediaUploader({ 
  onUploadComplete, 
  acceptedTypes = ['image/*', 'video/*'],
  maxSize = 10 * 1024 * 1024 // 10MB
}: MediaUploaderProps) {
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0]
    if (!file) return

    setUploading(true)
    setError(null)
    setUploadProgress(0)

    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${Math.random()}.${fileExt}`
      const filePath = `media/${fileName}`

      // Simulate progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90))
      }, 100)

      const { data, error } = await supabase.storage
        .from('media')
        .upload(filePath, file)

      clearInterval(progressInterval)
      setUploadProgress(100)

      if (error) throw error

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('media')
        .getPublicUrl(filePath)

      // Save to database
      await supabase
        .from('media_items')
        .insert({
          name: file.name,
          url: publicUrl,
          type: file.type.startsWith('image/') ? 'image' : 'video',
          size: file.size
        })

      onUploadComplete?.(publicUrl)
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Upload failed')
    } finally {
      setUploading(false)
      setTimeout(() => setUploadProgress(0), 1000)
    }
  }, [onUploadComplete])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: acceptedTypes.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
    maxSize,
    multiple: false
  })

  return (
    <Card className="bg-black/50 border-gray-800">
      <CardContent className="p-6">
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${
            isDragActive 
              ? 'border-kamalo-red bg-kamalo-red/10' 
              : 'border-gray-600 hover:border-gray-500'
          }`}
        >
          <input {...getInputProps()} />
          
          {uploading ? (
            <div className="space-y-4">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-kamalo-red mx-auto"></div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-kamalo-red h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
              <p className="text-white">Uploading... {uploadProgress}%</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex justify-center space-x-4">
                <Image className="w-8 h-8 text-gray-400" />
                <Video className="w-8 h-8 text-gray-400" />
              </div>
              <div>
                <p className="text-white font-medium">
                  {isDragActive ? 'Drop files here' : 'Drag & drop files here'}
                </p>
                <p className="text-gray-400 text-sm">or click to browse</p>
              </div>
              <Button className="bg-kamalo-red hover:bg-red-600">
                <Upload className="w-4 h-4 mr-2" />
                Choose Files
              </Button>
            </div>
          )}
        </div>

        {error && (
          <div className="mt-4 p-3 bg-red-500/10 border border-red-500 rounded-lg">
            <p className="text-red-400 text-sm">{error}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}