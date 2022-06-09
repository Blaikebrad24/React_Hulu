import Head from 'next/head'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import Results from '../components/Results'
import requests from '../Utils/requests'



export default function Home( {results}) {
  
  return (
    <div>
      <Head>
        <title>Hulu 2.0</title>
        
        
      </Head>
        <Header/>
        <Navbar/>
        <Results results={results}/>

    </div>
  )
}

// gets rendered on the server first then delivers props
export async function getServerSideProps(context){
  
  // get the genre from url
  // applying genre query param onclick of header elements
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${requests[genre]?.url || 
    requests.fetchTrending.url}`).then(res => res.json());
    // return data as prop

    return {
      props: {
        results: request.results,
      },
    }
}