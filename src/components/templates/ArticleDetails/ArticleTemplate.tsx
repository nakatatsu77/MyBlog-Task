import { OrganismArticleContent } from '@/components/organisms/ArticleDetails/ArticleContent'
import { Article } from '@/types/article'

type Props = {
  article: Article
}

// 記事のテンプレート。全体のレイアウトを管理
export const ArticleTemplate = ({ article }: Props) => (
  <div className="bg-gray-50">
    <div className="px-10 py-6 mx-auto">
      <div className="max-w-4xl px-10 py-6 mx-auto bg-gray-50">
        <OrganismArticleContent article={article} />
      </div>
    </div>
  </div>
)
