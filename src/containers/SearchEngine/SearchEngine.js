import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from "react-router";
import HorizontalStepper from './../../components/HorizontalStepper/HorizontalStepper';
import RedditTextField from './../../components/RedditTextField/RedditTextField';
import GenderSelecter from './../../components/GenderSelecterTextField/GenderSelecterTextField';
import Searchbar from './../../components/Searchbar/Searchbar';

class SearchEngine extends Component {
    state = {
        name: null,
        age: null,
        gender: "Male",
        searchExpression: null,
        activeStep: 0
    }

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    };

    handleAgeChange = (event) => {
        this.setState({age: event.target.value});
    };

    handleGenderChange = (gender) => {
        this.setState({gender: gender});
    };

    handleSearchExpressionChange = (expression) => {
        this.setState({searchExpression: expression});
    };

    handleFinish = () => {
        this.props.updateStore(this.state);
        this.props.history.push('/results');
    };

    handleNext = () => {
        const step = this.state.activeStep + 1;
        this.setState({activeStep: step});
    };

    handleBack = () => {
        const step = this.state.activeStep - 1;
        this.setState({activeStep: step});
    };

    render() {
        const child = () => {
            switch (this.state.activeStep) {
                case 0:
                    return <RedditTextField
                                id="name"
                                label="Name"
                                variant="filled"
                                onChange={this.handleNameChange}
                                onKeyPress={ event => {
                                    if (event.key === 'Enter') {
                                      this.handleNext();
                                    }
                                  }}
                            />
                case 1:
                    return <RedditTextField
                                id="age"
                                label="Age"
                                type="number"
                                InputLabelProps={{shrink: true,}}
                                variant="filled"
                                onChange={this.handleAgeChange}
                                onKeyPress={ event => {
                                    if (event.key === 'Enter') {
                                      this.handleNext();
                                    }
                                  }}
                            />
                case 2:
                    return <GenderSelecter
                                updateChange={this.handleGenderChange}
                                gender={this.state.gender}
                                handleNext={this.handleNext}/>;
                case 3:
                    return <Searchbar
                                updateChange={this.handleSearchExpressionChange}
                                handleFinish={this.handleFinish}/>; 
                default:
                    return <h1>Unknown stepIndex</h1>;}}
        return ( 
            <HorizontalStepper
                step={this.state.activeStep}
                handleFinish={this.handleFinish} 
                handleNext={this.handleNext}
                handleBack={this.handleBack}
                updateActiveComponent={this.updateActiveStep}
                name={this.state.name}
            >
                {child()}
            </HorizontalStepper>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateStore: (state) => dispatch({type: 'UPDATE_SEARCH_DATA', props: state}),
    }
}
export default withRouter(connect(null, mapDispatchToProps)(SearchEngine));
