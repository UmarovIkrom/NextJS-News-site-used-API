
import idStyles from '../../styles/id.module.css'
import Link from 'next/link'

const News = ({article}) => {
   
    return (
        <div className={idStyles.idContainer}>
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <img src={article.urlToImage}/>
            <h3>{`Author: ${article.author}`}</h3>
            <Link href='/news'> ← Go Back</Link>
        </div>
    )
};

export const getStaticPaths = async () => {
    const res = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25d62f8127394e5faa3aa941ac71134b`);
    let {articles} = await res.json();
    articles = articles.map((article, index) => ({...article, key: index}));
    let paths = articles.map(article => ({params: {id: `${article.key}`}}));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const apiResponse = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25d62f8127394e5faa3aa941ac71134b`)
    const apiJson = await apiResponse.json();
    const {articles} = apiJson;
    const currentArticle = articles[params.id];

    return {
        props: {
            article: currentArticle
        }
    }

}

export default News;