import { GetServerSideProps } from 'next';
import type { Article } from '../../types/article';
import { client } from '../../libs/client';
import Image from 'next/image';

type Props = {
  article: Article;
};

// 記事の詳細ページ
export default function Article({ article }: Props) {
  return (
    <div className="bg-gray-50">
      <div className="px-10 py-6 mx-auto">
        <div className="max-w-6xl px-10 py-6 mx-auto bg-gray-50">
          <Image
            className="object-cover w-full shadow-sm h-full"
            src={article.eye_catch.url}
            alt=""
            width={200}
            height={200}
          />
          <div className="mt-2">
            <div className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-blue-500">
              {article.title}
            </div>
          </div>
          {article.tag && (
            <div className="flex items-center justify-start mt-4 mb-4">
              <div className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg">
                #{article.tag}
              </div>
            </div>
          )}
          <div className="mt-2">
            <div className="text-2xl text-gray-700 mt-4 rounded ">
              {article.body}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  // contextからparamsを取り出し、その中のidを取得
  // paramsが存在すればidを取得し、存在しなければundefinedを返す
  const id = ctx.params?.id;
  // idが配列ならその最初の要素を取得、そうでなければidをそのまま使用
  const idExceptArray = id instanceof Array ? id[0] : id;
  const data = await client.get({
    endpoint: 'articles',
    contentId: idExceptArray,
  });

  return {
    props: {
      article: data,
    },
  };
};