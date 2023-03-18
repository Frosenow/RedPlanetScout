import React, { Component } from 'react'

 class Form extends Component{

    constructor(props) {
        super(props); 
        this.state = {date: new Date().toISOString().substring(0,10),
                     rover: 'Curiosity'}

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDateChange(event) {
        this.setState({date: event.target.value})
        console.log(this.state.date)
    }

    handleSelectChange(event) {
        this.setState({rover: event.target.value})
    }

    handleSubmit(e){
        e.preventDefault();
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <p>See photos from the selected day provided by Mars Rovers!</p>
            <label htmlFor="date"></label>
            <input type="date" id="date" value={this.state.date} onChange={this.handleDateChange}/>
            <small className="error"></small>
            <label htmlFor="rover"></label>
            <select className="rover" id="rover" value={this.state.rover} onChange={this.handleSelectChange}>
                <option value="curiosity">Curiosity</option>
                <option value="opportunity">Opportunity</option>
                <option value="spirit">Spirit</option>
            </select>
            <small className="error"></small>
            <label htmlFor="submit"></label>
            <input type="submit" id="submit" value="Get Photos" className="button" ></input>
        </form>
    )
    }
}

export default Form; 