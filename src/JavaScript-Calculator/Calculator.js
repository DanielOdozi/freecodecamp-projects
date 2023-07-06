import React, {useEffect} from 'react'
import './Calculator.css'

function Calculator(){
    useEffect(() => {
        document.title = 'Calculator';
      }, []);
    return(
        <div className='maincontainer'>
            <div className='container'>
                <p className='display'>0</p>
                <section className='sec1'>
                    <button className='buttonac'>AC</button>
                    <button className='buttonnumbersdivide'>/</button>
                </section>
                <section className='sec'>
                    <button className='buttonnumbers'>7</button>
                    <button className='buttonnumbers'>8</button>
                    <button className='buttonnumbers'>9</button>
                    <button className='buttonplus'>x</button>
                    <button className='buttonnumbers'>4</button>
                    <button className='buttonnumbers'>5</button>
                    <button className='buttonnumbers'>6</button>
                    <button className='buttonplus'>-</button>
                    <button className='buttonnumbers'>1</button>
                    <button className='buttonnumbers'>2</button>
                    <button className='buttonnumbers'>3</button>
                    <button className='buttonplus'>+</button>
                    <button className='button0'>0</button>
                    <button className='buttondot'>.</button>
                    <button className='buttonequal'>=</button>
                </section>
            </div>
        </div>
    )
}

export default Calculator