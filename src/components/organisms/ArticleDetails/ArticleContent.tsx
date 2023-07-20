import { AtomTag } from '@/components/atoms/Tag/Tag'
import { MoleculeArticleHeader } from '@/components/molecules/ArticleDetails/ArticleHeader'
import { Article } from '@/types/article'

type Props = {
  article: Article
}

// 記事のコンテンツを表示
export const OrganismArticleContent = ({ article }: Props) => (
  <>
    <MoleculeArticleHeader article={article} />
    {article.tag && (
      <div className="flex items-center justify-start mt-4 mb-4">
        <AtomTag tag={article.tag} />
      </div>
    )}
    <div className="mt-2">
      <div className="text-2xl text-gray-700 mt-4 rounded ">{article.body}</div>
    </div>
  </>
)
