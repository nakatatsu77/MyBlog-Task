import Image from 'next/image';

type Props = {
  src: string,
  width: number,
  height: number
};

// 記事の詳細ページの画像を表示
export const AtomImage = ({ src, width, height }: Props) => (
  <Image
    className="object-cover w-full shadow-sm h-full"
    src={src}
    alt=""
    width={width}
    height={height}
  />
);
