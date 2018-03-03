import React, {Component} from 'react'
import { Redirect } from 'react-router';
import axios from 'axios'
import Results from './Results'


class Home extends Component{
    constructor(){
        super()
        this.state = {
            allBldg = [],
            inputValue: '',
            results: [],
            submitted: false
        }
    }

    getAllBuildings = () => {
        axios
        .get('')
        .then(res => {
            this.setState({
                allBldg: res.data
            })
        })
    }

    userSearch = e => {
        const {allBldg} = this.state
        this.setState({
            inputValue: e.target.value
        })
        let value = e.target.value
    if(value){
        allBldg.forEach(bldg => {
            if(bldg.includes(value)){
                this.setState({
                    results: bldg
                })
            }
        })
    }
        

    }

    submitResults = () => {
        const {results} = this.state
        this.setState({
            inputValue: '',
            submitted: true
        })
        return <Results results={results} />
    }

    render(){
        const {inputValue, submitted} = this.state
        const {userSearch,submitResults} = this

        if(submitted){
            <Redirect to="/results" />
        }

        return(
            <div>
                <form onSubmit={submitResults}>
                {/* <p id="search_title">Search For Borough or Address:</p>  */}
                    <input 
                    id='search_bar'
                    type='text' 
                    value={inputValue}
                    onChange={userSearch}
                    placeholder="Bldng Number, Street Name, Borough"
                    />
                    <input type='submit' />
                </form>
            </div>
        )
    }

}


export default Home;

