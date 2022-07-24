import React, { useState } from "react";
import { Link } from "react-router-dom";
import Prods from "./Prods.json"
import Rodape from "./Rodape";

export default function Home(){

    const items = Prods[0].items
   
    const Mult = []

    const testeSoma = ( val ) => { 
        const divid = val / 100
        const convert = divid.toString()
        const res = convert.replace(".", ",") 
        return res
    }
    const Result = () => {
        const som = Mult.reduce((x, y) =>  x + y )
        const divid = som / 100
        const convert = divid.toString()
        const res = convert.replace(".", ",") 
        return res
    }
    const convertResult = ( val ) =>{
        const rep = val.replace(",", ".") 
        const convertNum = parseFloat(rep)
        return convertNum
    } 

    const ListRender = () => {
        const [list] = useState( items );
         return (
            list.map((item, index) => {
            Mult.push(item.sellingPrice)
            return (
                <div className="product-container" key={index} data-id={index}>
                    <div className="first-element">
                        <figure className="product-figure">
                            <img src={item.imageUrl} className="product-img" alt={item.name} />
                        </figure>
                        <div className="description">
                            <h3 className="product-title">{item.name}</h3>
                            <p className="product-price-orgin">{"R$ " + testeSoma(item.listPrice)}</p>
                            <h6 className="product-price-real">{"R$ " + testeSoma(item.sellingPrice)}</h6>
                        </div>
                    </div>
                  </div>
            )
        })
        )
    }

  
    return (
        <>
            <div id='main'>
                <div id='product-content'>

                    <header className='product-header'>
                        <h1 className="header-title">
                            Meu Carrinho
                        </h1>
                        <div className="screnn-btn">
                            <Link to='/frete'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                    <path fill="#0AC5D4" fillRule="evenodd"
                                        d="M39.1,20L23,3.9c-0.6-0.6-1.5-0.6-2,0l-0.8,0.8c-0.6,0.6-0.6,1.5,0,2L31.4,18H2.3c-0.8,0-1.4,0.7-1.4,1.4v1.2
                        c0,0.8,0.7,1.4,1.4,1.4h29.2L20.2,33.3c-0.6,0.6-0.6,1.5,0,2l0.8,0.8c0.6,0.6,1.5,0.6,2,0L39.1,20L39.1,20z">
                                    </path>
                                </svg>
                            </Link>
                        </div>
                    </header>

                    <div id="product-list">
                        { ListRender() }
                    </div>

                    <div id="result">
                        <div className="total">
                            <h4 id="total-title">Total</h4>
                            <h4 id="total-price">R$  {Result()} </h4>
                        </div>
                        <div className="shipping-content">
                            {convertResult(Result()) >= 10 ? (
                                <div id="shipping-bt">Parabéns, sua compra TEM frete grátis !</div>
                            ) : (
                                <div></div>
                            )}
                        </div>
                    </div>
                    
                    <Rodape />
                </div>
            </div>
        </>
    )
}