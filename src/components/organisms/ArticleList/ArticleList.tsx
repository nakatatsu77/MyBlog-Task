import { MoleculeArticleCard } from '@/components/molecules/ArticleListCard/ArticleCard'
import { Article } from '@/types/article'

type Props = {
  articles: Array<Article>,
}

// 記事一覧のレイアウト
export const OrganismArticleList = ({ articles }: Props) => (
  <div className="container mx-auto p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
    {articles.map((article) => (
      <MoleculeArticleCard key={article.id} article={article} />
    ))}
  </div>
)
