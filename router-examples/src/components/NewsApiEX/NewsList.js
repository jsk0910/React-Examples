import { useState, useEffect } from 'react'
import axios from 'axios';
import styled from "styled-components";

import NewsItem from "./NewsItem";

const NewsListBlock = styled.div`
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }`

const sampleArticle = {
    title: '제목',
    description: '내용',
    url: 'https://google.com',
    urlToImage: 'https://via.placeholder.com/160'
}

const NewsList = ({ category }) => {
    const [articles, setArticles] = useState(null)
    const [loading, setLoading] = useState(null)

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true)
            try {
                const query = category === 'all' ? '' : `&category=${category}`
                const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=ce6d62b92239472fbb2fc228505940e7`)
                setArticles(res.data.articles)
            } catch (e) {
                console.log(e)
            }
            setLoading(false)
        }
        fetchData()
    }, [category])

    if(!articles) return null

    return(
        <NewsListBlock>
            {articles.map(article => (
                <NewsItem key={article.url} article={article} />
            ))}
        </NewsListBlock>
    )
}

export default NewsList