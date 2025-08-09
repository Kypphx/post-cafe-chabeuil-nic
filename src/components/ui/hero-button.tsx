import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const heroButtonVariants = cva(
  "inline-flex items-center justify-center rounded-lg text-base font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-gradient-to-r from-cafe-brown to-cafe-warm text-cafe-cream hover:shadow-lg hover:scale-105 border border-cafe-gold/20",
        secondary: "bg-cafe-cream text-cafe-brown border-2 border-cafe-brown hover:bg-cafe-light-brown hover:scale-105",
        ghost: "text-cafe-cream hover:bg-cafe-cream/10 hover:text-cafe-gold",
      },
      size: {
        default: "h-12 px-8 py-3",
        lg: "h-14 px-10 py-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

export interface HeroButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof heroButtonVariants> {
  asChild?: boolean
}

const HeroButton = React.forwardRef<HTMLButtonElement, HeroButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(heroButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
HeroButton.displayName = "HeroButton"

export { HeroButton, heroButtonVariants }