import * as React from 'react'

import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(
	({ className, type, ...props }, ref) => {
		return (
			<input
				type={type}
				className={cn(
					'flex h-10 w-full rounded-[40px] border border-[#fff] bg-[#fff] px-[22px] py-[10px] text-[18px] text-bold   placeholder:text-bold placeholder:text-[#4F4F4F] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm  ',
					className
				)}
				ref={ref}
				{...props}
			/>
		)
	}
)
Input.displayName = 'Input'

export { Input }
