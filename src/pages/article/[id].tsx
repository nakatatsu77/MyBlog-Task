import { GetServerSideProps } from 'next'
import type { Article } from '../../types/article'
import { client } from '../../libs/client'
import { ArticleTemplate } from '@/components/templates/ArticleDetails/ArticleTemplate'

type Props = {
  article: Article
}

// 記事の詳細ページ。microCMSから記事データを取得
export default function ArticlePage({ article }: Props) {
  return <ArticleTemplate article={article} />
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // contextからparamsを取り出し、その中のidを取得
  // paramsが存在すればidを取得し、存在しなければundefinedを返す
  const id = ctx.params?.id
  // idが配列ならその最初の要素を取得、そうでなければidをそのまま使用
  const idExceptArray = id instanceof Array ? id[0] : id
  const data = await client.get({
    endpoint: 'articles',
    contentId: idExceptArray,
  })

  return {
    props: {
      article: data,
    },
  }
}
