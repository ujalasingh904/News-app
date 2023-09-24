import React, { useEffect, useState } from "react";
import Newsitem from "./newsitem";
import Loading from './load'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";


const news =(props)=>{
  const [articles, setArticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);
  
  const capitialize = (String)=>{
    return String.charAt(0).toUpperCase() + String.slice(1);
  } 
 

  const  UpdateNews = async ()=>{
    props.setprogress(10);
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a40f439092a64ad49a230db5533c95e6&page=${page}&pagesize=${props.pagesize}`;
    
    setloading(true);
    props.setprogress(40);
    let data = await fetch(url);
    props.setprogress(80);
    let parsedData = await data.json();
  
    setArticles(parsedData.articles);
    setloading(false);
    settotalResults(parsedData.totalResults);
    
    props.setprogress(100);
  }

  useEffect(() => {
  document.title =  "News-app  " + `${capitialize(props.category)}`;
  UpdateNews()
}, [])


  // async componentDidMount(){ 
  //   // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a40f439092a64ad49a230db5533c95e6&page=1&pagesize=${props.pagesize}`;
  //   // setState({loading:true})
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
    
   
  //   // setState({articles:parsedData.articles,
  //   //   total:parsedData.totalResults,
  //   //   loading:false
  //   // });  
  // }

  // changetoPrevpage = async ()=>{
  //   // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a40f439092a64ad49a230db5533c95e6&page=${state.page-1}&pagesize=${props.pagesize}`;
  //   // setState({loading:true})
  //   // let data = await fetch(url);
  //   // let parsedData = await data.json();
    
  //   // setState({
  //   //   articles:parsedData.articles,
  //   //   page:state.page - 1,
  //   //   loading:false
  //   // }); 
  //   setState({page:state.page-1}) ;
  //   UpdateNews();
  // }
  
  // changetoNextpage = async ()=>{ 
  //     // let url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a40f439092a64ad49a230db5533c95e6&page=${state.page + 1}&pagesize=${props.pagesize}`;
  //     // setState({loading:true})
  //     // let data = await fetch(url);
      
  //     // let parsedData = await data.json(); 
    
  //     // setState({
  //     //   articles:parsedData.articles,
  //     //   page:state.page+1,
  //     //   loading:false
  //     // });  
  //     setState({page:state.page+1}) ;
  //     UpdateNews();   
  // }

  const fetchMoreData = async()=>{
    
    setpage(page+1)
    const url =`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=a40f439092a64ad49a230db5533c95e6&page=${page}&pagesize=${props.pagesize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
  
    setArticles(articles.concat(parsedData.articles));
    settotalResults(parsedData.totalResults);

  
  }
  
  
 
  
    return (
      <>
        <h1 className="text-center" style={{marginTop:'90px'}}>
          <strong>Top - Headlines of the day - {capitialize(props.category)} </strong>
        </h1>
        {/* { loading && <Loading/>} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length <= totalResults}
          loader={<Loading/>}
        >
        
          <div className="container">

              <div className="row my-5" >
                {articles.map((element,idx)=>{
                  return <div className="col-md-3 my-3" key={idx}>
                  <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):""} imageurl={element.urlToImage?element.urlToImage:"https://images.macrumors.com/t/kFfaa4Izcz3bk4IrhL7-RUc02mY=/1901x/article-new/2023/09/iphone-15-preparing-to-ship.jpg"} newsurl={element.url} author={element.author?element.author:"Unknown"} date={element.publishedAt} source={element.source.name}/>
                </div>
                })}

              </div>
          </div> 
        </InfiniteScroll>
        
        {/* <div className="container d-flex justify-content-between my-5">
        <button disabled={state.page<=1} type="button" className="btn btn-dark" onClick={changetoPrevpage}> &larr; Prev</button>
        <button disabled={state.page+1 > (Math.ceil(state.totalResults/8))} type="button" className="btn btn-dark" onClick={changetoNextpage}>Next &rarr; </button>
        </div> */}

      </>
    );
  
}

news.defaultProps = {
  country:"in",
  pagesize:8,
  category:"general"

 }
 
 news.propTypes = {
  country:PropTypes.string,
  pagesize:PropTypes.number,
  category:PropTypes.string

 }
export default news;

