import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Result from './../../components/Result/Result';
import classes from './SearchResults.css';

import { updateSelectedNCTID } from './../../store/Action'


const SearchResults = ( props ) => {
    const trails =  useSelector(state => state.trails);
    const successRateArray = useSelector(state => state.successRateArray);
    const dispatch = useDispatch(); 

   
    if (trails && successRateArray){
        const resultsArr = trails.map((trail, index) => {
            return  ( 
                <Result 
                    key={index}
                    keyValue={trail.NCTId}
                    path={'/trail/' + trail.NCTId}
                    success_rate={successRateArray[index]}
                    title={trail.OfficialTitle}
                    summary={trail.BriefSummary}
                    clicked={() => {
                        dispatch(updateSelectedNCTID(trail.NCTId));
                        props.history.push(`/trail/${trail.NCTId}`)
                        }
                    }/>
                );   
        });

        return (
    	   <section className={classes.Results}>
    	       {resultsArr}
    	   </section>
    	   );
    }
    return(<div>Write Search Expression first</div>)
};



export default SearchResults;
