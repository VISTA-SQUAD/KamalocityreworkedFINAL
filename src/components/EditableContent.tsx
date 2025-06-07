import React, { useState, useRef, useEffect } from 'react'
import { useAdmin } from '../hooks/useAdmin'
import { supabase } from '../lib/supabase'
import { Button } from '@/components/ui/button'
import { Edit3, Save, X } from 'lucide-react'

interface EditableContentProps {
  id: string
  content: string
  type?: 'text' | 'heading' | 'paragraph'
  className?: string
  children?: React.ReactNode
}

export function EditableContent({ 
  id, 
  content, 
  type = 'text', 
  className = '',
  children 
}: EditableContentProps) {
  const { isAdmin } = useAdmin()
  const [isEditing, setIsEditing] = useState(false)
  const [editContent, setEditContent] = useState(content)
  const [isSaving, setIsSaving] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  useEffect(() => {
    if (isEditing && textareaRef.current) {
      textareaRef.current.focus()
      textareaRef.current.select()
    }
  }, [isEditing])

  const handleSave = async () => {
    setIsSaving(true)
    
    try {
      const { error } = await supabase
        .from('content_blocks')
        .upsert({
          id,
          content: editContent,
          updated_at: new Date().toISOString()
        })

      if (error) throw error
      
      setIsEditing(false)
    } catch (error) {
      console.error('Error saving content:', error)
    } finally {
      setIsSaving(false)
    }
  }

  const handleCancel = () => {
    setEditContent(content)
    setIsEditing(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && e.metaKey) {
      handleSave()
    } else if (e.key === 'Escape') {
      handleCancel()
    }
  }

  if (!isAdmin) {
    return children || <span className={className}>{content}</span>
  }

  if (isEditing) {
    return (
      <div className="relative group">
        <textarea
          ref={textareaRef}
          value={editContent}
          onChange={(e) => setEditContent(e.target.value)}
          onKeyDown={handleKeyDown}
          className={`${className} bg-gray-800 border border-kamalo-red rounded p-2 text-white resize-none`}
          rows={type === 'paragraph' ? 4 : 1}
        />
        <div className="absolute -top-10 right-0 flex space-x-2">
          <Button
            size="sm"
            onClick={handleSave}
            disabled={isSaving}
            className="bg-green-600 hover:bg-green-700"
          >
            <Save className="w-3 h-3" />
          </Button>
          <Button
            size="sm"
            onClick={handleCancel}
            variant="outline"
            className="border-gray-600"
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div 
      className="relative group cursor-pointer hover:bg-gray-800/20 rounded p-1 transition-colors"
      onClick={() => setIsEditing(true)}
    >
      {children || <span className={className}>{content}</span>}
      <div className="absolute -top-8 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button size="sm" className="bg-kamalo-red hover:bg-red-600">
          <Edit3 className="w-3 h-3" />
        </Button>
      </div>
    </div>
  )
}