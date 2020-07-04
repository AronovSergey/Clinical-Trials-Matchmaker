import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import Result from './../../components/Result/Result';
import classes from './SearchResults.css';

class SearchResults extends Component {
	state = {
        searchExpression: null,
		trails: [],
        successRateArray: []
	}

    componentDidMount() {
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();   
    }

	loadData() {
        const fields = 'NCTId,OfficialTitle,Gender,MinimumAge,MaximumAge,OverallStatus,BriefSummary,Condition,LocationCountry,EnrollmentCount,StudyFirstSubmitDate';
        if (this.props.searchExpression){
            if (!this.state.searchExpression || this.state.searchExpression !== this.props.searchExpression){
                axios.get('https://clinicaltrials.gov/api/query/study_fields?expr=' + this.props.searchExpression + '&fields=' +  fields +'&min_rnk=1&max_rnk=100&fmt=JSON')
                    .then(response => {
                        const trails = response.data.StudyFieldsResponse.StudyFields;
                        this.setState({
                                        trails: trails,
                                        searchExpression: this.props.searchExpression
                                    })
                    })
                    .then(()=>{this.dataCleaner();})
                    .then(()=>{this.loadSuccessRate();})
            }
        }
    }

    dataCleaner(){
        const trails = this.state.trails.filter(trail => {
            return (
                (this.props.gender === trail.Gender[0] || 
                trail.Gender[0] === 'All') 
                &&
                (trail.OverallStatus[0] === "Not yet recruiting" || 
                trail.OverallStatus[0] === "Recruiting" ||
                trail.OverallStatus[0] === "Enrolling by invitation" ||
                trail.OverallStatus[0] === "Active") 
                &&
                trail.LocationCountry[0] !== undefined && 
                trail.EnrollmentCount[0] !== undefined        
            );
        });
        this.setState({ trails: trails });
    }

    async success_rate(LocationCountry, StudyFirstSubmitDate, EnrollmentCount){
            const distance = await this.getDistance(LocationCountry);
            const end = Date.now()
            const elapsed = (end - Date.parse(StudyFirstSubmitDate)) / (1000 * 60 * 60 * 24)
            
            const response = await fetch('http://127.0.0.1:5000/predict', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "LocationCountry": distance, 
                    "Duration": elapsed, 
                    "EnrollmentCount": EnrollmentCount
                }) 
            });

            const res = await response.json();
            return res.success_rate; 
    }



    getDistance = (country) => {
        const distanceArray = [
            {
                name: "Afghanistan",
                distance: 2934.7631135488496
            },
            {
                name: "Albania",
                distance: 2006.9856116196725
            },
            {
                name: "Algeria",
                distance: 2550.229861879467
            },
            {
                name: "American Samoa",
                distance: 3894.0478843249616
            },
            {
                name: "Andorra",
                distance: 1440.5391861173152
            },
            {
                name: "Angola",
                distance: 3889.619826981454
            },
            {
                name: "Antarctica",
                distance: 6568.32829776199
            },
            {
                name: "Argentina",
                distance: 7844.167823578176
            },
            {
                name: "Armenia",
                distance: 4216.452703518062
            },
            {
                name: "Aruba",
                distance: 5862.524075467007
            },
            {
                name: "Australia",
                distance: 7395.356018080555
            },
            {
                name: "Austria",
                distance: 1033.368113542279
            },
            {
                name: "Azerbaijan",
                distance: 4247.255886779596
            },
            {
                name: "Bahamas",
                distance: 5658.740004828749
            },
            {
                name: "Bahrain",
                distance: 3140.133451073604
            },
            {
                name: "Bangladesh",
                distance: 3538.5253700352546
            },
            {
                name: "Barbados",
                distance: 4760.646435035167
            },
            {
                name: "Belarus",
                distance: 2485.950054730848
            },
            {
                name: "Belgium",
                distance: 544.8393049378121
            },
            {
                name: "Belize",
                distance: 7533.542739561836
            },
            {
                name: "Benin",
                distance: 3226.94599715934
            },
            {
                name: "Bhutan",
                distance: 3795.9529202012263
            },
            {
                name: "Bolivia",
                distance: 6561.347595778474
            },
            {
                name: "Bosnia and Herzegovina",
                distance: 1639.634055676648
            },
            {
                name: "Botswana",
                distance: 3891.1457468687518
            },
            {
                name: "Brazil",
                distance: 5983.468766375945
            },
            {
                name: "Brunei Darussalam",
                distance: 6748.562968501651
            },
            {
                name: "Bulgaria",
                distance: 2112.5403917155954
            },
            {
                name: "Burkina Faso",
                distance: 2613.2839818460825
            },
            {
                name: "Burundi",
                distance: 3181.1164221180297
            },
            {
                name: "Cambodia",
                distance: 2300.0260492820707
            },
            {
                name: "Cameroon",
                distance: 4747.233911106623
            },
            {
                name: "Canada",
                distance: 5556.249415580406
            },
            {
                name: "Cayman Islands",
                distance: 6369.956621497365
            },
            {
                name: "Central African Republic",
                distance: 4716.596690747881
            },
            {
                name: "Chad",
                distance: 4343.1161707452375
            },
            {
                name: "Chile",
                distance: 7882.272655954235
            },
            {
                name: "China",
                distance: 1611.7312521062793
            },
            {
                name: "Colombia",
                distance: 6812.709365257135
            },
            {
                name: "Comoros",
                distance: 1437.1600717930635
            },
            {
                name: "Congo",
                distance: 2390.7576851438725
            },
            {
                name: "Congo, The Democratic Republic of the",
                distance: 1691.2521907951736
            },
            {
                name: "Costa Rica",
                distance: 7261.312303544117
            },
            {
                name: "Croatia",
                distance: 1664.6353582652239
            },
            {
                name: "Cuba",
                distance: 7235.110106109127
            },
            {
                name: "Cyprus",
                distance: 3445.3612290632864
            },
            {
                name: "Czech Republic",
                distance: 861.8035194545209
            },
            {
                name: "Czechia",
                distance: 2526.153705329743
            },
            {
                name: "Côte D'Ivoire",
                distance: 4632.561735789455
            },
            {
                name: "Denmark",
                distance: 370.47888468848447
            },
            {
                name: "Dominican Republic",
                distance: 5968.189753364701
            },
            {
                name: "Ecuador",
                distance: 7068.336229748967
            },
            {
                name: "Egypt",
                distance: 4167.88562328773
            },
            {
                name: "El Salvador",
                distance: 7443.330650223016
            },
            {
                name: "Equatorial Guinea",
                distance: 4270.367603017235
            },
            {
                name: "Estonia",
                distance: 1614.00180291793
            },
            {
                name: "Ethiopia",
                distance: 2571.528316292286
            },
            {
                name: "Faroe Islands",
                distance: 1866.1883603778854
            },
            {
                name: "Federated States of Micronesia",
                distance: 4647.362045539327
            },
            {
                name: "Fiji",
                distance: 5035.8712249704195
            },
            {
                name: "Finland",
                distance: 1739.4804446185283
            },
            {
                name: "Former Serbia and Montenegro",
                distance: 3448.6633386626054
            },
            {
                name: "Former Yugoslavia",
                distance: 3448.6633386626054
            },
            {
                name: "France",
                distance: 0
            },
            {
                name: "French Guiana",
                distance: 6391.80323121142
            },
            {
                name: "Gabon",
                distance: 4746.377845003166
            },
            {
                name: "Gambia",
                distance: 1553.4695297178532
            },
            {
                name: "Georgia",
                distance: 4118.226881370857
            },
            {
                name: "Germany",
                distance: 0
            },
            {
                name: "Ghana",
                distance: 3060.6215963910595
            },
            {
                name: "Gibraltar",
                distance: 2461.878359944452
            },
            {
                name: "Greece",
                distance: 2716.2160173577154
            },
            {
                name: "Greenland",
                distance: 4159.55948996966
            },
            {
                name: "Grenada",
                distance: 5002.9336563288525
            },
            {
                name: "Guadeloupe",
                distance: 5532.714799956471
            },
            {
                name: "Guam",
                distance: 2474.8642081905605
            },
            {
                name: "Guatemala",
                distance: 7284.928568271344
            },
            {
                name: "Guinea",
                distance: 2417.996926126519
            },
            {
                name: "Guinea-Bissau",
                distance: 5132.680711454751
            },
            {
                name: "Guyana",
                distance: 5020.692402535814
            },
            {
                name: "Haiti",
                distance: 6134.485747932498
            },
            {
                name: "Holy See (Vatican City State)",
                distance: 2855.7043875033073
            },
            {
                name: "Honduras",
                distance: 7614.85600777376
            },
            {
                name: "Hong Kong",
                distance: 6631.880770377328
            },
            {
                name: "Hungary",
                distance: 1363.610340720433
            },
            {
                name: "Iceland",
                distance: 3246.488089424403
            },
            {
                name: "India",
                distance: 3348.867452247008
            },
            {
                name: "Indonesia",
                distance: 2128.1190334941293
            },
            {
                name: "Iran, Islamic Republic of",
                distance: 2702.10697537322
            },
            {
                name: "Iraq",
                distance: 3667.8122414263808
            },
            {
                name: "Ireland",
                distance: 2044.6499612316368
            },
            {
                name: "Israel",
                distance: 3865.7724552323134
            },
            {
                name: "Italy",
                distance: 1987.7599844279603
            },
            {
                name: "Jamaica",
                distance: 6606.851134694136
            },
            {
                name: "Japan",
                distance: 0
            },
            {
                name: "Jersey",
                distance: 1466.2166889283744
            },
            {
                name: "Jordan",
                distance: 3924.3700086030126
            },
            {
                name: "Kazakhstan",
                distance: 4201.002507208207
            },
            {
                name: "Kenya",
                distance: 2123.1270138286022
            },
            {
                name: "Korea, Republic of",
                distance: 633.5780073732941
            },
            {
                name: "Kosovo",
                distance: 1879.5623428592246
            },
            {
                name: "Kuwait",
                distance: 3513.6472069975994
            },
            {
                name: "Kyrgyzstan",
                distance: 3293.7622896379194
            },
            {
                name: "Lao People's Democratic Republic",
                distance: 5529.489457515571
            },
            {
                name: "Latvia",
                distance: 2029.6371163368553
            },
            {
                name: "Lebanon",
                distance: 3667.2671210440694
            },
            {
                name: "Lesotho",
                distance: 3171.7188532640203
            },
            {
                name: "Liberia",
                distance: 2767.513208283365
            },
            {
                name: "Libyan Arab Jamahiriya",
                distance: 4344.417335274048
            },
            {
                name: "Liechtenstein",
                distance: 738.8862843535156
            },
            {
                name: "Lithuania",
                distance: 1445.9143604175981
            },
            {
                name: "Luxembourg",
                distance: 527.0792408416487
            },
            {
                name: "Macedonia, The Former Yugoslav Republic of",
                distance: 3448.6633386626054
            },
            {
                name: "Madagascar",
                distance: 679.5219069400042
            },
            {
                name: "Malawi",
                distance: 2405.311923640896
            },
            {
                name: "Malaysia",
                distance: 1316.9155093817003
            },
            {
                name: "Mali",
                distance: 2207.1580101150435
            },
            {
                name: "Malta",
                distance: 2063.733249351968
            },
            {
                name: "Martinique",
                distance: 5663.947662819637
            },
            {
                name: "Mauritius",
                distance: 226.12146740946528
            },
            {
                name: "Mexico",
                distance: 7129.540623521132
            },
            {
                name: "Moldova, Republic of",
                distance: 3502.99020954224
            },
            {
                name: "Mongolia",
                distance: 2257.8368729828794
            },
            {
                name: "Montenegro",
                distance: 1770.7867234151806
            },
            {
                name: "Morocco",
                distance: 672.2028832540185
            },
            {
                name: "Mozambique",
                distance: 1762.7068984140344
            },
            {
                name: "Myanmar",
                distance: 2865.129463849659
            },
            {
                name: "Namibia",
                distance: 4197.841213279023
            },
            {
                name: "Nepal",
                distance: 3608.6888671147044
            },
            {
                name: "Netherlands",
                distance: 5683.817656568871
            },
            {
                name: "New Zealand",
                distance: 8079.805809085207
            },
            {
                name: "Nicaragua",
                distance: 7381.100309283126
            },
            {
                name: "Niger",
                distance: 2972.277673335636
            },
            {
                name: "Nigeria",
                distance: 3799.3858924916613
            },
            {
                name: "North Macedonia",
                distance: 3448.6633386626054
            },
            {
                name: "Northern Mariana Islands",
                distance: 3448.6633386626054
            },
            {
                name: "Norway",
                distance: 687.9579822551328
            },
            {
                name: "Oman",
                distance: 2495.624637895721
            },
            {
                name: "Pakistan",
                distance: 2670.6990650288653
            },
            {
                name: "Palestinian Territories, Occupied",
                distance: 3266.4785972028094
            },
            {
                name: "Palestinian Territory, occupied",
                distance: 3266.4785972028094
            },
            {
                name: "Panama",
                distance: 7144.800506609195
            },
            {
                name: "Papua New Guinea",
                distance: 4359.055034337541
            },
            {
                name: "Paraguay",
                distance: 6261.854053329427
            },
            {
                name: "Peru",
                distance: 6579.114126130834
            },
            {
                name: "Philippines",
                distance: 1200.2782947712415
            },
            {
                name: "Poland",
                distance: 1665.4657729622143
            },
            {
                name: "Portugal",
                distance: 539.5127285813994
            },
            {
                name: "Puerto Rico",
                distance: 5493.692935226812
            },
            {
                name: "Qatar",
                distance: 3042.7594358064007
            },
            {
                name: "Romania",
                distance: 2129.686531510992
            },
            {
                name: "Russian Federation",
                distance: 2953.7853529884974
            },
            {
                name: "Rwanda",
                distance: 3251.2010223731972
            },
            {
                name: "Réunion",
                distance: 2926.608448748375
            },
            {
                name: "Saint Kitts and Nevis",
                distance: 5034.46489828761
            },
            {
                name: "Samoa",
                distance: 3938.06200888797
            },
            {
                name: "Saudi Arabia",
                distance: 3109.5158889203612
            },
            {
                name: "Senegal",
                distance: 1633.539996506019
            },
            {
                name: "Serbia",
                distance: 1927.6617183577564
            },
            {
                name: "Saint Kitts and Nevis",
                distance: 5034.46489828761
            },
            {
                name: "Samoa",
                distance: 3938.06200888797
            },
            {
                name: "Saudi Arabia",
                distance: 3109.5158889203612
            },
            {
                name: "Senegal",
                distance: 1633.539996506019
            },
            {
                name: "Sierra Leone",
                distance: 2255.2389039257237
            },
            {
                name: "Singapore",
                distance: 2414.5634869963487
            },
            {
                name: "Slovakia",
                distance: 1234.7408417184881
            },
            {
                name: "Slovenia",
                distance: 1085.9580453052977
            },
            {
                name: "Solomon Islands",
                distance: 5322.517976006298
            },
            {
                name: "Somalia",
                distance: 2101.3632772587525
            },
            {
                name: "South Africa",
                distance: 2749.3756912715407
            },
            {
                name: "Spain",
                distance: 0
            },
            {
                name: "Sri Lanka",
                distance: 2915.4176715220306
            },
            {
                name: "Sudan",
                distance: 4319.128870620571
            },
            {
                name: "Suriname",
                distance: 4773.0119348933395
            },
            {
                name: "Swaziland",
                distance: 2724.8771472936364
            },
            {
                name: "Sweden",
                distance: 972.7931657042035
            },
            {
                name: "Switzerland",
                distance: 867.1239865631513
            },
            {
                name: "Syrian Arab Republic",
                distance: 867.1239865631513
            },
            {
                name: "Taiwan",
                distance: 409.9063643136993
            },
            {
                name: "Tajikistan",
                distance: 3202.744511979968
            },
            {
                name: "Tanzania",
                distance: 2009.6082228478983
            },
            {
                name: "Thailand",
                distance: 2874.826714353918
            },
            {
                name: "Togo",
                distance: 3180.2504414374885
            },
            {
                name: "Trinidad and Tobago",
                distance: 5046.458722656187
            },
            {
                name: "Tunisia",
                distance: 2210.8032423080595
            },
            {
                name: "Turkey",
                distance: 2427.81192264124
            },
            {
                name: "Uganda",
                distance: 3271.15589701051
            },
            {
                name: "Ukraine",
                distance: 2565.4049605521036
            },
            {
                name: "United Arab Emirates",
                distance: 2885.9962366513973
            },
            {
                name: "United Kingdom",
                distance: 1118.0480846547637
            },
            {
                name: "United States",
                distance: 0
            },
            {
                name: "Uruguay",
                distance: 6667.973894731708
            },
            {
                name: "Uzbekistan",
                distance: 3318.09494216416
            },
            {
                name: "Venezuela",
                distance: 5052.845325723247
            },
            {
                name: "Vietnam",
                distance: 2059.5238164436314
            },
            {
                name: "Virgin Islands (U.S.)",
                distance: 5249.087142076435
            },
            {
                name: "Yemen",
                distance: 2161.2639890544315
            },
            {
                name: "Zambia",
                distance: 3296.247844118947
            },
            {
                name: "Zimbabwe",
                distance: 2792.8472877097465
            }
        ]
        return (distanceArray.filter(result =>{
            return result.name === country
        })[0].distance);
    }

    loadSuccessRate(){
        this.state.trails.forEach(trail => {
            this.success_rate(trail.LocationCountry[0], trail.StudyFirstSubmitDate[0], trail.EnrollmentCount[0])
            .then(res => {
                let successRateArray = this.state.successRateArray;
                successRateArray.push(res);
                this.setState({
                        ...this.state,
                        successRateArray: successRateArray,
                    });
            });
        });
    }


    render () {
        if (this.state.searchExpression){
        	const trails = this.state.trails.map((trail, index) =>{
                return  ( 
                    <Result 
                        key={index}
                        keyValue={trail.NCTId}
                        path={'/trail/' + trail.NCTId}
                        success_rate={this.state.successRateArray[index]}
                        title={trail.OfficialTitle}
                        summary={trail.BriefSummary}
                        clicked={() => {
                            this.props.updateSelectedNCTId(trail.NCTId);
                            this.props.history.push(`/trail/${trail.NCTId}`)
                            }
                        }/>
                    );   
        	});

        	return (
    	        <section className={classes.Results}>
    	            {trails}
    	        </section>
    	    );
        }
        return(<div>Write Search Expression first</div>)
	}
};

const mapStateToProps = state => {
    return {
        searchExpression: state.searchExpression,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateSelectedNCTId: (selectedNCTId) => dispatch({type: 'UPDATE_SELECTED_NCTID', NCTId:selectedNCTId})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
