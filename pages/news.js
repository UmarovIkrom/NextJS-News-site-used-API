import React from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/news.module.css'

const News = ({articles}) => {
    const router = useRouter();
    console.log("articles", articles);

    const onRedirect = (path) => {
        router.push(`/news/${path}`);
    }

    return (
        <div style={{paddingTop: "5rem"}}>
            
            <div className={styles.main}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.post} onClick={() => onRedirect(article.key)}>
                        <h1>{article.title}</h1>
                        <p>{article.content}</p>
                        {!!article.urlToImage && <img src={article.urlToImage}/>}
                        <h5>{article.author}</h5>
                    </div>
                ))}
            </div>
            
        </div>
    );
};


export async function getStaticProps() {
    const apiResponse = await fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=25d62f8127394e5faa3aa941ac71134b")
    const apiJson = await apiResponse.json();
    let {articles} = apiJson;
    articles = articles.map((article, index) => ({...article, key: index}))

    return {
        props: {
            articles,
        }
    }
}

export default News;