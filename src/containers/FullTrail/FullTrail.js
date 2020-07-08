import React, {Component} from 'react';
import axios from 'axios';

import Aux from '../../hoc/Aux';
import Backdrop from '../../UI/Backdrop/Backdrop';
import RegistrationPopUp from '../RegistrationPopUp/RegistrationPopUp' 

import classes from './FullTrail.css';

class FullTrail extends Component {
    state = {
        timer: 5,
        loadedTrail: null,
        showTheRegistrationOption: false
    }

    componentDidMount() {
        this.myInterval = setInterval (() => {
            if (this.state.timer === 0){
                    this.openRegistrationHandler();
                }
            this.setState({
                timer: this.state.timer - 1
            })
        },1000)
        this.loadData();
    }

    componentDidUpdate() {
        this.loadData();   
    }

    loadData() {
        const fields = 'NCTId,OfficialTitle,Gender,MinimumAge,MaximumAge,OverallStatus,BriefSummary,Condition,LocationCountry,EnrollmentCount';
        if (this.props.match.params.id) {
            if (!this.state.loadedTrail || this.state.loadedTrail.NCTId[0] !== this.props.match.params.id){
                axios.get('https://clinicaltrials.gov/api/query/study_fields?expr=' + this.props.match.params.id + '&fields=' + fields + '&field=NCTId&fmt=JSON')
                    .then(response => {
                        this.setState({loadedTrail: response.data.StudyFieldsResponse.StudyFields[0]})
                    });
            }
        }
    }

    registrationCancelHandler = () => {
        this.setState({showTheRegistrationOption: false});
    }

    openRegistrationHandler = () => {
        this.setState({showTheRegistrationOption: true});
    }

    render() {
        if (this.state.loadedTrail) {
            return (
                <Aux>
                    <Backdrop 
                        show={this.state.showTheRegistrationOption} 
                        clicked={this.registrationCancelHandler}
                    />
                    <RegistrationPopUp
                        ID={this.state.loadedTrail.NCTId[0]}
                        open={this.state.showTheRegistrationOption}
                        handleClose={this.registrationCancelHandler}
                    />
                    <div className={classes.FullTrail}>
                        <h1 className={classes.CenturiesText}>{this.state.loadedTrail.OfficialTitle}</h1>
                        <h4>{this.state.loadedTrail.BriefSummary}</h4>
                        <h3>{'NCTID  :  ' + this.state.loadedTrail.NCTId}</h3>
                        <h3>{'Gender  :  ' + this.state.loadedTrail.Gender}</h3>
                        <h3>{'MinimumAge  :  ' + this.state.loadedTrail.MinimumAge}</h3>
                        <h3>{'MaximumAge  :  ' + this.state.loadedTrail.MaximumAge}</h3>
                        <h3>{'Recruitment Status  :  ' + this.state.loadedTrail.OverallStatus}</h3>
                        <h3>{'Condition  :  ' + this.state.loadedTrail.Condition}</h3>
                        <h3>{'Location-Country  :  ' + this.state.loadedTrail.LocationCountry}</h3>
                        <h3>{'EnrollmentCount  :  ' + this.state.loadedTrail.EnrollmentCount} </h3>
                        <a
                            href={'https://clinicaltrials.gov/show/' + this.state.loadedTrail.NCTId} ><h2>
                            Link to trail official page</h2></a>
                    </div>
                </Aux>
            );
        }
        return <div></div>;
    }
}

export default FullTrail;