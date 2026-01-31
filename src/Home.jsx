import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import NewsIten from './NewsIten';
import { useSearchParams } from 'react-router-dom';
import SocialMedia from './SocialMedia';


function Home() {
  let [newsData, setNewsData] = useState([])
  let [searchparam] = useSearchParams();
  let q = searchparam.get('q');
  let language = searchparam.get('language');
  let [error, setError] = useState('');

  useEffect(() => {

    fetch(`https://newsdata.io/api/1/latest?q=${q}&language=${language ? language : 'en'}&apikey=pub_680b3896e7df4311a9d0debc63cf5356`)
      .then((res) => {
        if (!res.ok) {
          setNewsData('');
          console.log(res);
          
          throw new Error('data not found');
        }
        res.json()
          .then((data) => {
            setNewsData(data)
          })
      }).catch((err) => setError(err.message)
      )
  }, [q, language]);



var [letestColor, setletestColor ]= useState('');
setInterval(()=>{
    
    (letestColor === '')? setletestColor('red') :(letestColor === 'red')? setletestColor('green') : setletestColor('') 
},2000)


  return (
    <>
      <Navbar />
      <div className='container'>
        <marquee className='pt-1' behavior='scroll'> <h6 className='row text-success text-center'>{q ? q : 'All'} Article-</h6> </marquee>
        {/* latest news vihavior */}

        <div className='container  mt-1 rounded' style={{color :`${letestColor}`}}>
          <div>
            {newsData.results && <p><i><b className='text-danger'>Latest -</b></i> &nbsp;&nbsp;&nbsp; {newsData.results[0]?.title}. </p> }
          </div>
        </div>
          {newsData.results && <span>'{newsData.results.length}' of total results '{newsData.totalResults}' </span>}

        {error && <p className='text-danger pt-5 text-center'>{error} !!</p>}
        <div className='row pt-1 data' >
          {
            newsData.results?.map((item, index) => {
              return <NewsIten key={index} pic={item.image_url} pub={item.pubDate}
                dis={item.title} source={item.link} />
            })
          }
        </div>
       
      </div>

      <SocialMedia /> {/**social media icon page link--- */}



    </>
  )
}

export default Home
