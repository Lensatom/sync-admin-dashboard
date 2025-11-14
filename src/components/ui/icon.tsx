import * as icons from "@/assets/icons"
import Image from "next/image"

export type IIcons = keyof typeof icons

interface Props {
  name: IIcons
  size?: number
  width?: number
  height?: number
  padding?: number
  bg?: boolean | string
}

export const Icon = ({
  name,
  size = 16,
  width,
  height,
  padding = 20,
  bg,
  ...rest
}:Props) => {
  const CustomIcon = icons[name]

  return (
    <div
      style={{
        padding: padding,
        backgroundColor: typeof bg === "string" ? bg : bg ? "#F5F5F5" : "transparent",
      }}
    >
      <Image
        src={CustomIcon}
        alt={String(name)}
        width={width || size}
        {...rest}
      />
    </div>
  )
}