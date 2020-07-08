import React, { useState } from 'react';
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux';

import HorizontalStepper from './../../components/HorizontalStepper/HorizontalStepper';
import RedditTextField from './../../components/RedditTextField/RedditTextField';
import GenderSelecter from './../../components/GenderSelecterTextField/GenderSelecterTextField';
import Searchbar from './../../components/Searchbar/Searchbar';


import { updateSearchDetails, updateTrailsArr } from './../../store/Action';

const SearchEngine = props => {
    const history = useHistory();
    const dispatch = useDispatch();  

    const [searchDetails, setSearchDetails] = useState({
                                                    name: '',
                                                    age: '',
                                                    gender: "Male",
                                                    searchExpression: ''
                                                });

    const { name, age, gender, searchExpression } = searchDetails;

    const [activeStep, setActiveStep] = useState(0);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setSearchDetails((prevSearchDetails) => {
            return {
                ...prevSearchDetails,
                [name] : value
            }
        });
    }

    const handleFinish = () => {
        dispatch(updateSearchDetails(searchDetails));
        dispatch(updateTrailsArr());
        history.push('/results');
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const child = () => {
        switch (activeStep) {
            case 0:
                return <RedditTextField
                            id="name"
                            name="name"
                            label="Name"
                            value={name}
                            variant="filled"
                            onChange={handleInputChange}
                            onKeyPress={ event => {
                            if (event.key === 'Enter') {
                                  handleNext();
                                }
                              }}
                        />
            case 1:
                return <RedditTextField
                            id="age"
                            name="age"
                            label="Age"
                            value={age}
                            type="number"
                            InputLabelProps={{shrink: true,}}
                            variant="filled"
                            onChange={handleInputChange}
                            onKeyPress={ event => {
                                if (event.key === 'Enter') {
                                  handleNext();
                                }
                              }}
                        />
            case 2:
                return <GenderSelecter
                            updateChange={handleInputChange}
                            gender={gender}
                            handleNext={handleNext}/>;
            case 3:
                return <Searchbar
                            updateChange={handleInputChange}
                            searchExpression={searchExpression}
                            handleFinish={handleFinish}/>; 
            default:
                return <h1>Unknown stepIndex</h1>;
        }
    };

    return ( 
        <HorizontalStepper
            step={activeStep}
            handleFinish={handleFinish} 
            handleNext={handleNext}
            handleBack={handleBack}
            name={name}
        >
            {child()}
        </HorizontalStepper>
    );
}

export default SearchEngine;