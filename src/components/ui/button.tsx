import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import Link from 'next/link'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        default: "bg-orange text-white hover:bg-orange/90",
        secondary: "bg-navy text-white hover:bg-navy/90",
        outline: "border border-navy text-navy hover:bg-navy/10",
        ghost: "text-navy hover:bg-navy/10",
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
}

const Button = ({
  className,
  variant,
  size,
  href,
  ...props
}: ButtonProps) => {
  if (href) {
    return (
      <Link
        href={href}
        className={cn(buttonVariants({ variant, size }), className)}
      >
        {props.children}
      </Link>
    )
  }
  
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

export { Button, buttonVariants }