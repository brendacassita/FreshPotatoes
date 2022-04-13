import useAxios from 'axios-hooks'

const Categories = () =>{
  const[{data: movies, loading, error}] = useAxios('/api/movies')
  
  
  
  
  
  
  
  return(
    <div>
      <h1>Categories</h1>
      {JSON.stringify(movies)}
    </div>
  )
}

export default Categories