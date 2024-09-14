export type LayoutProps<T extends string = ""> = Omit<
  {
    children: ReactNode
  } & Record<T, ReactNode>,
  ""
>
