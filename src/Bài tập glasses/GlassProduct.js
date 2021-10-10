import React, { Component } from 'react'

export default class GlassProduct extends Component {
    // render() {
    //     let {sp,tryGlass} = this.props;
    //     return sp.map((item, index) => {
    //         return <img className="ml-2 p-2  glass" key={index} src={item.url} onClick={() => {
    //             tryGlass(item);
    //         }} />
    //     });
    // }
    render() {
        let {sp,index,tryGlass} = this.props;
        return (
            <img className="ml-2 p-2  glass" key={index} src={sp.url} onClick={() => {
                tryGlass(sp);
            }} />
        )
    }
}
