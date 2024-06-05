import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

import NewsItem from "./NewsItem";
import { useParams } from "react-router-dom";

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
  }
`;
// 샘플 데이터 렌더링 해보기
// const sampleArticle = {
//   title: '제목', 
//   description: '내용', 
//   url: 'https://google.com', 
//   urlToImage: 'http://via.placeholder.com/640x480'
// };

// API를 요청하고 뉴스 데이터가 들어있는 배열을 리액트 엘리먼트 배열로 변환하여 렌더링하는 컴포넌트
function NewsList() {
  const { category = 'all'} = useParams();
  console.log(category);
  console.log(useParams());
  
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(false); // 로딩을 상태로 관리하여 api요청이 대기중인지 판별
  

  // NewList가 화면에 보이는 시점에 API를 요청
  // => useEffect()를 사용하여 컴포넌트가 처음 렌더링 됐을 때 한번만 요청
  // useEffect() 안썻을 때 문제점? api 요청 + set 함수에 의한 재렌더링 무한 반복

  // useEffect(() => {
  //   const fetchNewsData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=1f2d7672461348209ccc0cb6d06175d4');
  //       setArticle(res.data.articles);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //     setLoading(false);
  //   };
  //   fetchNewsData();
  // }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        // API 호출 시 카테고리 지정하기
        // 카테고리가 ALL 일때는 아무것도 들어가면 안되고, 그외엔 해당 카테고리 값이 들어감
        // 예시:
        // https://newsapi.org/v2/top-headlines?country=kr&apiKey=1f2d7672461348209ccc0cb6d06175d4
        // https://newsapi.org/v2/top-headlines?country=kr&category=sports&apiKey=1f2d7672461348209ccc0cb6d06175d4
        const query = category === 'all' ? '' : `&category=${category}`;
        const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=1f2d7672461348209ccc0cb6d06175d4`);
        setArticle(res.data.articles);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    })();
  }, [category]);

  // article 값이 없을 때 렌더링 막기
  // if (!article) {
  //   return null;
  // };
  // 추천: react-spinners 또는 Lottie Files
  if (loading) {
    return <NewsListBlock>로딩 중...</NewsListBlock>;
  }

  return (
      <NewsListBlock>
        {/* <NewsItem article={sampleArticle}/>
      <NewsItem article={sampleArticle}/>
      <NewsItem article={sampleArticle}/>
      <NewsItem article={sampleArticle}/>
      <NewsItem article={sampleArticle}/>
      <NewsItem article={sampleArticle}/> */}
        {/* {article && article.map(article => {
        return <NewsItem key= {article.url} article={article} />;
      })} */}
        {/* 또는 옵셔널 체이닝 사용 */}
        {article?.map(article => {
          return <NewsItem key={article.url} article={article} />;
        })}
      </NewsListBlock>
      );
};

export default NewsList;