import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

type ContainerProps = {
  children: ReactNode
  className?: string
  as?: 'div' | 'section'
  id?: string
}

export function Container({
  children,
  className,
  as: Tag = 'div',
  id,
}: ContainerProps) {
  return (
    <Tag
      id={id}
      className={cn('mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8', className)}
    >
      {children}
    </Tag>
  )
}
