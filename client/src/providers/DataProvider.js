
import axios from "axios";
import React, { useEffect, useState } from "react";

export const DataContext = React.createContext();

export const DataProvider = (props) => {
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    console.log("USEEFFECT IN DATAPROVIDER CALLED");
    getReviewData();
  }, []);

  const addReview = (review) => {
    setReviewData([...reviewData, { review: review }]);
  };


    

  const deleteReview = async (id) => {
    let res = await axios.delete(`/api/reviews/${id}`);
    // filters out the delete monster where the id matches and returns the monsters where the id doesn't match into an array
    const filteredReviews = reviewData.map( rev => {
            // if the monster id does not match the id given, it will return it in an array with the remaining monsters
            if(rev.review.id !== rev.id){
            return rev
        } else {
            // if it does match the id given, it will return the monster and the items were the id does not match the id given
            return {movie: mov.movie, reviews: mon.items.filter(i=> i.id !== id)}
        }
    })

  // function to get all monsterData
  const getReviewData = async (id) => {
    // doing an axios async/await call to get all data from setMonsterData
    let res = await axios.get(`/api/reviews/${params.id}`);
    setReviewData(res.data);
  };
  return (
    // Outputs the data for the DataProvider, the monsterData, addMonster, deleteItem, and deleteMonster function, setting them as child element from the DataProvider
    <DataContext.Provider
      value={{ reviewData, addReview, deleteReview }}
    >
      {props.children}
    </DataContext.Provider>
  );
};

export default DataProvider;
