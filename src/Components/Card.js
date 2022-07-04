import React from 'react';
import './CSS/Footer.css';
import cardStyle from './CSS/Card.module.css'
import axios from 'axios';  


class Card extends React.Component {
    constructor(props){
        super(props)
        this.props = props;
        
    }

    // componentDidMount() {  
    //     axios.get(`https://api.themoviedb.org/3/genre/tv/list
    //     ?api_key=d359d62719c2c51849c3d70c9687f9e3`)  
    //       .then(res => {  
    //         const animals = res;  
    //         this.setState({ movie_genere : animals });  
    //       })  
    //   }  

    render() {
        console.log(this.props);
        return <div className='col-md-4'>
            <div className={`card ${cardStyle.footerBorder}`}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    }
}

export default Card;