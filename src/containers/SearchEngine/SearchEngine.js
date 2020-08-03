import React, { useState } from 'react';
import { useHistory } from "react-router";
import { useDispatch } from 'react-redux';
    
import HorizontalStepper from './../../components/HorizontalStepper/HorizontalStepper';
import RedditTextField from './../../components/RedditTextField/RedditTextField';
import GenderSelecter from './../../components/GenderSelecterTextField/GenderSelecterTextField';
import Searchbar from './../../components/Searchbar/Searchbar';
import MenuItem from '@material-ui/core/MenuItem';


import { updateSearchDetails, updateTrailsArr } from './../../store/Action';

const ageRange = [   
    {
        value: '0',
        label: '0'
    },
    {
        value: '1',
        label: '1'
    },
    {
        value: '2',
        label: '2'
    },
    {
        value: '3',
        label: '3'
    },
    {
        value: '4',
        label: '4'
    },
    {
        value: '5',
        label: '5'
    },
    {
        value: '6',
        label: '6'
    },
    {
        value: '7',
        label: '7'
    },
    {
        value: '8',
        label: '8'
    },
    {
        value: '9',
        label: '9'
    },
    {
        value: '10',
        label: '10'
    },
    {
        value: '11',
        label: '11'
    },
    {
        value: '12',
        label: '12'
    },
    {
        value: '13',
        label: '13'
    },
    {
        value: '14',
        label: '14'
    },
    {
        value: '15',
        label: '15'
    },
    {
        value: '16',
        label: '16'
    },
    {
        value: '17',
        label: '17'
    },
    {
        value: '18',
        label: '18'
    },
    {
        value: '19',
        label: '19'
    },
    {
        value: '20',
        label: '20'
    },
    {
        value: '21',
        label: '21'
    },
    {
        value: '22',
        label: '22'
    },
    {
        value: '23',
        label: '23'
    },
    {
        value: '24',
        label: '24'
    },
    {
        value: '25',
        label: '25'
    },
    {
        value: '26',
        label: '26'
    },
    {
        value: '27',
        label: '27'
    },
    {
        value: '28',
        label: '28'
    },
    {
        value: '29',
        label: '29'
    },
    {
        value: '30',
        label: '30'
    },
    {
        value: '31',
        label: '31'
    },
    {
        value: '32',
        label: '32'
    },
    {
        value: '33',
        label: '33'
    },
    {
        value: '34',
        label: '34'
    },
    {
        value: '35',
        label: '35'
    },
    {
        value: '36',
        label: '36'
    },
    {
        value: '37',
        label: '37'
    },
    {
        value: '38',
        label: '38'
    },
    {
        value: '39',
        label: '39'
    },
    {
        value: '40',
        label: '40'
    },
    {
        value: '41',
        label: '41'
    },
    {
        value: '42',
        label: '42'
    },
    {
        value: '43',
        label: '43'
    },
    {
        value: '44',
        label: '44'
    },
    {
        value: '45',
        label: '45'
    },
    {
        value: '46',
        label: '46'
    },
    {
        value: '47',
        label: '47'
    },
    {
        value: '48',
        label: '48'
    },
    {
        value: '49',
        label: '49'
    },
    {
        value: '50',
        label: '50'
    },
    {
        value: '51',
        label: '51'
    },
    {
        value: '52',
        label: '52'
    },
    {
        value: '53',
        label: '53'
    },
    {
        value: '54',
        label: '54'
    },
    {
        value: '55',
        label: '55'
    },
    {
        value: '56',
        label: '56'
    },
    {
        value: '57',
        label: '57'
    },
    {
        value: '58',
        label: '58'
    },
    {
        value: '59',
        label: '59'
    },
    {
        value: '60',
        label: '60'
    },
    {
        value: '61',
        label: '61'
    },
    {
        value: '62',
        label: '62'
    },
    {
        value: '63',
        label: '63'
    },
    {
        value: '64',
        label: '64'
    },
    {
        value: '65',
        label: '65'
    },
    {
        value: '66',
        label: '66'
    },
    {
        value: '67',
        label: '67'
    },
    {
        value: '68',
        label: '68'
    },
    {
        value: '69',
        label: '69'
    },
    {
        value: '70',
        label: '70'
    },
    {
        value: '71',
        label: '71'
    },
    {
        value: '72',
        label: '72'
    },
    {
        value: '73',
        label: '73'
    },
    {
        value: '74',
        label: '74'
    },
    {
        value: '75',
        label: '75'
    },
    {
        value: '76',
        label: '76'
    },
    {
        value: '77',
        label: '77'
    },
    {
        value: '78',
        label: '78'
    },
    {
        value: '79',
        label: '79'
    },
    {
        value: '80',
        label: '80'
    },
    {
        value: '81',
        label: '81'
    },
    {
        value: '82',
        label: '82'
    },
    {
        value: '83',
        label: '83'
    },
    {
        value: '84',
        label: '84'
    },
    {
        value: '85',
        label: '85'
    },
    {
        value: '86',
        label: '86'
    },
    {
        value: '87',
        label: '87'
    },
    {
        value: '88',
        label: '88'
    },
    {
        value: '89',
        label: '89'
    },
    {
        value: '90',
        label: '90'
    },
    {
        value: '91',
        label: '91'
    },
    {
        value: '92',
        label: '92'
    },
    {
        value: '93',
        label: '93'
    },
    {
        value: '94',
        label: '94'
    },
    {
        value: '95',
        label: '95'
    },
    {
        value: '96',
        label: '96'
    },
    {
        value: '97',
        label: '97'
    },
    {
        value: '98',
        label: '98'
    },
    {
        value: '99',
        label: '99'
    },
    {
        value: '100',
        label: '100'
    },
    {
        value: '101',
        label: '101'
    },
    {
        value: '102',
        label: '102'
    },
    {
        value: '103',
        label: '103'
    },
    {
        value: '104',
        label: '104'
    },
    {
        value: '105',
        label: '105'
    },
    {
        value: '106',
        label: '106'
    },
    {
        value: '107',
        label: '107'
    },
    {
        value: '108',
        label: '108'
    },
    {
        value: '109',
        label: '109'
    },
    {
        value: '110',
        label: '110'
    },
    {
        value: '111',
        label: '111'
    },
    {
        value: '112',
        label: '112'
    },
    {
        value: '113',
        label: '113'
    },
    {
        value: '114',
        label: '114'
    },
    {
        value: '115',
        label: '115'
    },
    {
        value: '116',
        label: '116'
    },
    {
        value: '117',
        label: '117'
    },
    {
        value: '118',
        label: '118'
    },
    {
        value: '119',
        label: '119'
    },
    {
        value: '120',
        label: '120'
    },
];

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

    const isEmpty = () => {
        if(activeStep === 0 && name === ''){ console.log("x");return true; }
        else if(activeStep === 1 && age === ''){ return true; }
        else if(activeStep === 3 && searchExpression === ''){ return true; }
        return false;
    }

    const child = () => {
        switch (activeStep) {
            case 0:
                return <RedditTextField
                            id="name"
                            name="name"
                            error={isEmpty()}
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
                            select
                            id="age"
                            name="age"
                            error={isEmpty()}
                            label="Age"
                            value={age}
                            onChange={handleInputChange}
                            onKeyPress={ event => {
                                if (event.key === 'Enter') {
                                  handleNext();
                                }
                              }}  
                             
                        >
                            {ageRange.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                {option.label}
                                </MenuItem>
                            ))}
                        </RedditTextField>
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
            isEmpty={isEmpty}
        >
            {child()}
        </HorizontalStepper>
    );
}

export default SearchEngine;