import React    from 'react';
import { Route, Redirect, Switch} from 'react-router-dom';
import Paper from '@material-ui/core/Paper';

import AboutUs from './../AboutUsPage/AboutUsPage';
import SearchEngine from './../../containers/SearchEngine/SearchEngine';
import FullTrail from './../../containers/FullTrail/FullTrail';
import SearchResults from './../../containers/SearchResults/SearchResults';


const Blog = () => {
    return (
        <Paper>
            <Switch>
                <Route path="/about-us" exact component={AboutUs}/>
                <Redirect from="/" exact to="/search"/>
                <Route path="/search" component={SearchEngine}/>
                <Route path="/results" component={SearchResults}/>
                <Route path="/trail/:id" exact component={FullTrail}/>
                <Route render={()=><h1>Not found</h1>}/>
            </Switch>   
        </Paper>
    );
}

export default Blog;