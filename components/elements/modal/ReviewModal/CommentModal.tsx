
'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Image, Star, User } from 'lucide-react'
import { motion } from 'framer-motion'
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"

interface CommentModalProps {
    isOpen: boolean
    onClose: () => void
    onSubmit: (comment: { text: string, rating: number }) => void
}

export function CommentModal({ isOpen, onClose, onSubmit }: CommentModalProps) {
    const [comment, setComment] = useState('')
    const [rating, setRating] = useState(0)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        onSubmit({ text: comment, rating })
        setComment('')
        setRating(0)
        onClose() // Close modal after submitting
    }

    const handleBackdropClick = (e: React.MouseEvent) => {
        // Close modal when clicking outside of the modal content
        if (e.target === e.currentTarget) {
            onClose()
        }
    }

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
            role="dialog"
            aria-modal="true"
            onClick={handleBackdropClick} // Close modal on backdrop click
        >
            <div className="bg-white rounded-xl sm:p-5 max-w-xl sm:max-w-2xl w-full mx-2 sm:mx-4 relative">


                <div className="flex flex-col items-center mb-6">
                    <div className="w-18 h-18 rounded-full overflow-hidden mb-2">

                        <Avatar className="w-16 h-16 mb-2">
                            <AvatarImage src="/we/user1.svg" alt="User profile" />
                            <AvatarFallback>JD</AvatarFallback>
                        </Avatar>
                    </div>
                    <span className="text-lg font-bold text-gray-800 ">Robert Fox

</span>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6 p-3">
                    <div className="relative w-full min-h-[200px] bg-gray-100 border-gray-300 rounded-lg shadow-inner focus-within:border-orange-500 focus-within:ring focus-within:ring-orange-200 focus-within:ring-opacity-50">
                        {/* Textarea with no border, outline, or ring */}

                        <Textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            className="w-full p-5 h-full text-gray-600 text-lg bg-transparent border-none focus:outline-none focus:ring-0 resize-none"
                            placeholder="Add a comment..."
                            required
                            style={{
                                outline: 'none', // Removes the default outline when focused
                                border: 'none', // Removes the border when focused
                                boxShadow: 'none' // Ensures no shadow is applied
                            }}
                        />

                        <TooltipProvider>
                            <div className="absolute bottom-2 left-2 flex space-x-2">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <Tooltip key={star}>
                                        <TooltipTrigger asChild>
                                            <motion.button
                                                type="button"
                                                onClick={() => setRating(star)}
                                                whileHover={{ scale: 1.1 }}
                                                whileTap={{ scale: 0.9 }}
                                                className={`focus:outline-none transition-colors duration-200 ${star <= rating ? 'text-accent' : 'text-gray-400'}`}
                                            >
                                                <Star className="w-6 h-6 fill-current" />
                                            </motion.button>
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{star} {star === 1 ? 'Star' : 'Stars'}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                ))}
                            </div>
                        </TooltipProvider>

                        {/* Submit button inside textarea (bottom-right) */}
                        <div className="absolute bottom-2 right-2">
                            <Button
                                type="submit"
                                className="bg-accent from-orange-400 to-pink-600 hover:from-orange-500 hover:to-pink-700 text-white text-sm font-bold py-2 px-6 w-30 rounded-full transition duration-300 ease-in-out transform hover:scale-105 shadow-lg"
                            >
                                Send
                            </Button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
