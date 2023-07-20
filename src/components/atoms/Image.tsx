import Image from 'next/image'

type Props = {
  src: string,
  width: number,
  height: number,
  priority: boolean,
}

// 画像を表示
export const AtomImage = ({ src, width, height, priority }: Props) => (
  <Image
    className="w-full"
    src={src}
    alt=""
    width={width}
    height={height}
    priority={priority}
  />
)
