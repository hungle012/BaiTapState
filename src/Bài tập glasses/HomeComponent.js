import React, { Component } from 'react'
import GlassProduct from './GlassProduct'
import './HomePage.css'

export default class HomeComponent extends Component {
    productGlass = [
        {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./img/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            id: 2,
            price: 50,
            name: "GUCCI G8759H",
            url: "./img/v2.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            id: 3,
            price: 30,
            name: "DIOR D6700HQ",
            url: "./img/v3.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            id: 4,
            price: 70,
            name: "DIOR D6005U",
            url: "./img/v4.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            id: 5,
            price: 40,
            name: "PRADA P8750",
            url: "./img/v5.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            id: 6,
            price: 60,
            name: "PRADA P9700",
            url: "./img/v6.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            id: 7,
            price: 80,
            name: "FENDI F8750",
            url: "./img/v7.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            id: 8,
            price: 100,
            name: "FENDI F8500",
            url: "./img/v8.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        },
        {
            id: 9,
            price: 60,
            name: "FENDI F4300",
            url: "./img/v9.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        }
    ]

    state = {
        glassDetail: {
            id: 1,
            price: 30,
            name: "GUCCI G8850U",
            url: "./img/v1.png",
            desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip."
        }
    }

    renderGlassList = () => {
        return this.productGlass.map((item, index) => {
            return <GlassProduct sp={item} index={index} tryGlass={this.tryGlass}/> 
        });
    }
    

    tryGlass = (glass) => {
        this.setState({
            glassDetail: glass
        })
    }
    
    render() {
        let {glassDetail} = this.state;
        return (
            <div className="bground" style={{ backgroundImage: 'url("./img/background.jpg")' }}>
                <div className="header">
                    <h3 className="text-center text-light p-5" style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}>TRY GLASSES APP ONLINE
                    </h3>
                    <div className="container">
                        <div className="row mt-5 text-center">
                            <div className="col-6">
                                <div className="position-relative"><img className="position-absolute" src="./img/model.jpg" alt="model.jpg" style={{ width: 250 }} />
                                    <img className="position-absolute glassesStyle" src={glassDetail.url} />
                                    <div className="position-relative product">
                                        <span className="font-weight-bold pr-name">{glassDetail.name}</span>
                                        <br />
                                        <span className="contact">{glassDetail.desc}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <img src="./img/model.jpg" alt="model.jpg" style={{ width: 250 }} />
                            </div>
                        </div>
                        <div className="bg-light container text-center mt-5 d-flex justify-content-center p-5">
                            {/* <GlassProduct sp={this.productGlass} tryGlass={this.tryGlass}/> */}
                            {this.renderGlassList()}
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
