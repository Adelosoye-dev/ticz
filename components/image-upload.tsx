"use client"

import { useState, useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { ImageIcon } from "lucide-react"
import Image from "next/image"

interface ImageUploadProps {
  onImageUpload: (url: string) => void
  value?: string
}

export function ImageUpload({ onImageUpload, value }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(value || null)
  const [isUploading, setIsUploading] = useState(false)

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const file = acceptedFiles[0]
      if (!file) return

      // Create a preview
      const objectUrl = URL.createObjectURL(file)
      setPreview(objectUrl)
      setIsUploading(true)

      try {
        const formData = new FormData()
        formData.append("file", file)
        formData.append("upload_preset", "testing") // Replace with your Cloudinary upload preset

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/dfxu5hvrw/image/upload`, // Replace with your Cloudinary cloud name
          {
            method: "POST",
            body: formData,
          },
        )

        if (!response.ok) {
          throw new Error("Upload failed")
        }

        const data = await response.json()
        onImageUpload(data.secure_url)
        setPreview(data.secure_url)
      } catch (error) {
        console.error("Upload failed:", error)
      } finally {
        setIsUploading(false)
      }
    },
    [onImageUpload],
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif"],
    },
    maxFiles: 1,
  })

  return (
    <div
      {...getRootProps()}
      className={`
         w-full py-8 text-center cursor-pointer
        transition-colors relative duration-200 ease-in-out 
        ${isDragActive ? "border-primary bg-primary/10" : "border-muted"}
        ${isUploading ? "opacity-50" : ""}
      `}
    >
      <input {...getInputProps()} />
      <div className="flex justify-center w-full isolate items-center relative">
        <div className={`h-[200px] w-full absolute -z-10 ${preview ? "bg-transparent" : "bg-black"}`} />
        {preview ? (
          <div className="relative w-32 h-32 z-10 mx-auto ">
        <Image
          src={preview || "/placeholder.svg"}
          alt="Preview"
          className="w-full h-full object-cover rounded-lg"
          width={100}
          height={100}
        />
          </div>
        ) : (
          <div className="flex flex-col justify-center relative items-center bg-[#0E464F] w-[240px] h-[240px] p-4 rounded-2xl border border-[#197686]">
        <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center">
          <ImageIcon className="w-8 h-8 text-muted-foreground" />
        </div>
        <div className="space-y-2 ">
          <p className="text-sm font-medium">
            {isDragActive ? "Drop your image here" : "Drag & drop your profile photo"}
          </p>
          <p className="text-xs text-muted-foreground">or click to select a file</p>
        </div>
          </div>
        )}
      </div>
      {isUploading && (
        <div className="absolute inset-0 flex items-center justify-center bg-background/50 rounded-lg">
          <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent" />
        </div>
      )}
    </div>
  )
}

