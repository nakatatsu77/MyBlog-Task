import Link from 'next/link'
import { Article } from '@/types/article'
import { AtomImage } from '@/components/atoms/ArticleListImage/Image'

// 型情報
type Props = {
  article: Article
}

export const MoleculeArticleCard = ({ article }: Props) => (
  <Link
    href={`/article/${article.id}`}
    passHref
    className="rounded overflow-hidden shadow-lg transition-transform hover:scale-105 cursor-pointer"
  >
    {/* hover時にscale変化とカーソル変化を適用 */}
    {article.eye_catch && (
      <AtomImage
        src={article.eye_catch.url}
        width={200}
        height={200}
        priority={true}
      />
    )}
    <div className="px-6 py-4">
      <div> {article.title}</div>
    </div>
    <div className="px-6 pt-4 pb-2">
      {article.tag && (
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{article.tag}
        </span>
      )}
    </div>
  </Link>
)
