import React, {useEffect} from 'react'
import {useState} from 'react'
import './Calculator.css'

function Calculator(){
    useEffect(() => {
        document.title = 'Calculator';
      }, []);
      
      const [numbers, setnumbers] = useState('0')
      const handleclicknum = (input) => {
        setnumbers((prevNumber) => (prevNumber === "0" ? input : prevNumber + input))
      }
      const reset = () => {
        setnumbers('0')
      }
    return(
        <div className='maincontainer'>
            <div className='calculator'>
                <section className='sec'>
                    <p className='formulaScreen'>{numbers}</p>
                    <p className='outputScreen'>{numbers}</p>
                    <button className='buttoncal ac' onClick={reset}>AC</button>
                    <button className='buttoncal symbols'>/</button>
                    <button className='buttoncal symbols'>x</button>
                    <button className='buttoncal' onClick={() => handleclicknum('7')}>7</button>
                    <button className='buttoncal' onClick={() => handleclicknum('8')}>8</button>
                    <button className='buttoncal' onClick={() => handleclicknum('9')}>9</button>
                    <button className='buttoncal symbols'>-</button>
                    <button className='buttoncal' onClick={() => handleclicknum('4')}>4</button>
                    <button className='buttoncal'  onClick={() => handleclicknum('5')}>5</button>
                    <button className='buttoncal' onClick={() => handleclicknum('6')}>6</button>
                    <button className='buttoncal symbols'>+</button>
                    <button className='buttoncal' onClick={() => handleclicknum('1')}>1</button>
                    <button className='buttoncal' onClick={() => handleclicknum('2')}>2</button>
                    <button className='buttoncal' onClick={() => handleclicknum('3')}>3</button>
                    <button className='buttoncal button0' onClick={() => handleclicknum('0')}>0</button>
                    <button className='buttoncal' onClick={() => handleclicknum('.')}>.</button>
                    <button className='buttoncal buttonequal'>=</button>
                </section>
            </div>
        </div>
    )
}

export default Calculator