"use client"

import { cn } from "@/lib/utils"

interface DialogPatternProps {
  title: string
  description: string
  children?: React.ReactNode
  footer?: React.ReactNode
  className?: string
}

export function DialogPattern({
  title,
  description,
  children,
  footer,
  className,
}: DialogPatternProps) {
  return (
    <div
      className={cn(
        "fixed top-1/2 left-1/2 z-50 w-full max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-xl bg-popover p-4 text-popover-foreground ring-1 ring-border",
        className
      )}
    >
      <div className="flex flex-col gap-1">
        <h2 className="font-heading text-base font-medium leading-none">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      {children && <div className="py-4">{children}</div>}

      {footer && (
        <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
          {footer}
        </div>
      )}
    </div>
  )
}