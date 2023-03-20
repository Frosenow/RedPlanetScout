import React, { Component, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from './card'

 class Form extends Component{

    constructor(props) {
        super(props); 
        this.state = {
            date: new Date().toISOString().substring(0,10),
            rover: 'Curiosity',
            data: [],
            visible: 'hidden'    
        }

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDateChange(event) {
        this.setState({date: event.target.value})
    }

    handleSelectChange(event) {
        this.setState({rover: event.target.value})
    }

    async fetchImages(){
        const response = await fetch(`http://localhost:${process.env.PORT || 5000}/api?rover=${this.state.rover}&date=${this.state.date}`)
        const dataApi = await response.json()
        this.setState({
            data: this.state.data.concat(dataApi.photos),
            visible: dataApi.photos.length === 0 ? 'visible' : 'hidden'
        }, () => console.log(this.state.data))
    }

    async handleSubmit(e){
        e.preventDefault();
        // SetState is async, so to be sure, passed fetch as callback
        this.setState({data: []}, 
        () => this.fetchImages() )
        
    }

    render() {
    return (
        <>
        <form onSubmit={this.handleSubmit}>
            <p>See photos from the selected day provided by Mars Rovers!</p>
            <label htmlFor="date"></label>
            <input type="date" id="date" value={this.state.date} onChange={this.handleDateChange}/>
            <small className="error" style={{visibility: `${this.state.visible}`}}>No photos found on that day</small>
            
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
        {this.state.data.length > 0 ? 
            <div className='images'>
            {this.state.data.map(data => {
              return <Card photo={data} />
            })}  
          </div> : null 
        }
        
        </>
    )
    }
}

export default Form; 