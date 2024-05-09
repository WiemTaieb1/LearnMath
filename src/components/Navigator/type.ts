import { ReactNode } from "react"

export type NavigatorProps = {
    links: {
        path: string,
        label: string,
        icon: ReactNode
    }[]
}