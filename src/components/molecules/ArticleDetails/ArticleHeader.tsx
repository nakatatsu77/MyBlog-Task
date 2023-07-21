import { AtomImage } from '@/components/atoms/ArticleListImage/Image'
import { Article } from '@/types/article'

type Props = {
  article: Article
}

// 記事の画像とタイトルを表示
export const MoleculeArticleHeader = ({ article }: Props) => (
  <>
    {article.eye_catch && (
      <AtomImage
        src={article.eye_catch.url}
        width={500}
        height={500}
        priority={true}
      />
    )}
    <div className="mt-2">
      <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500">
        {article.title}
      </div>
    </div>
  </>
)
