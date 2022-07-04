import React from 'react';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        console.log(props);
    }
    changeThemeMode(){
        if (this.props.themeMode.background == 'light'){
            this.props.setThemeMode({
                'background': 'dark',
                'color': 'light',
            });
        }
        else{
            this.props.setThemeMode({
                'background': 'light',
                'color': 'dark',
            }); 
        }
    }
    secondaryMode(){
        this.props.setThemeMode({
            'background': 'secondary',
            'color': 'dark',
        }); 
    }
    sucessMode(){
        this.props.setThemeMode({
            'background': 'danger',
            'color': 'dark',
        }); 
    }
    render() {
        return <div>
            <nav className={`navbar navbar-expand-lg bg-${this.props.themeMode.background} text-${this.props.themeMode.color}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                        <button className='btn btn-primary' onClick={() => this.changeThemeMode()}>Dark Mode</button>
                        <button className='btn btn-primary' onClick={() => this.secondaryMode()}>Secondary Mode</button>
                        <button className='btn btn-primary' onClick={() => this.sucessMode()}>Sucess Mode</button>
                        {/* <button className='btn btn-primary' onClick={this.changeThemeMode()}>Dark Mode</button> */}
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    }
}
export default Navbar;