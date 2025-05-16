import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

interface ListItemProps extends React.HTMLAttributes<HTMLLIElement> {
  href?: string
  title: string
}

export function ListItem({
  className,
  title,
  children,
  href,
  ...props
}: ListItemProps) {
  return (
    <li className={cn("block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground", className)} {...props}>
      {href ? (
        <Link href={href} className="block select-none space-y-1 rounded-md leading-none no-underline outline-none">
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      ) : (
        <>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </>
      )}
    </li>
  )
}
