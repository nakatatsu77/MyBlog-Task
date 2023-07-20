import { ArticleListTemplate } from '@/components/templates/ArticleList/HomeTemplate'
import { client } from '../libs/client'
import type { Article } from '../types/article'

// 型情報
type Props = {
  articles: Array<Article> // 記事のリスト
}

export default function Home({ articles }: Props) {
  return <ArticleListTemplate articles={articles} />
}

// 記事の一覧ページをmicroCMSから取得
export const getServerSideProps = async () => {
  const data = await client.get({ endpoint: 'articles' })

  return {
    props: {
      articles: data.contents, // 取得したデータをpropsとして渡す
    },
  }
}
