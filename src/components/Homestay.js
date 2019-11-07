import React, { Component } from 'react'
import './Homestay.css'

class Homestays extends Component {
    handleClick = () => {
        this.props.selectHomestay(this.props.homestay);
    }
    render() {
        const judul = `${this.props.homestay.nama} - Rp. ${this.props.homestay.harga} rb`
        const style = { 
                        backgroundImage: `url('${this.props.homestay.fotoUrl}')`
                      };
        return (
            <div className="homestay" onClick={ this.handleClick }>
                <div className="homestay-foto" style={style}></div>
                <div className="homestay-judul">{judul}</div>
            </div>
        )
    }
}

export default Homestays
