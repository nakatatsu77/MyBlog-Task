type Props = {
  tag: string
};

// タグの表示
export const AtomTag = ({ tag }: Props) => (
  <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
    #{tag}
  </div>
);
