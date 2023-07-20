import { Article } from "@/types/article"
import { OrganismArticleList } from "../organisms/ArticleList/ArticleList"

type Props = {
  articles: Array<Article>
}

// 記事一覧ページのレイアウト
export const ArticleListTemplate = ({ articles }: Props) => (
  <>
    <h1 className="container mx-auto px-10 pt-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
      記事一覧
    </h1>
    <OrganismArticleList articles={articles} />
  </>
)
