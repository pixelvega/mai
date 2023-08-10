import { ReactNode } from "react"

import css from "./Layout.module.scss"

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return <main className={css.main}>{children}</main>
}

export default Layout
