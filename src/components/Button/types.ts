import { MouseEvent } from "react"
export interface ButtonProps {
  name?: string
  type?: "submit" | "reset" | "button" | undefined
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  isRedFont?: boolean
}
