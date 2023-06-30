import React from 'react';
import {useEffect} from 'react';
import "./Drummachine.css"

function Drummachine(){
    useEffect(() => {
        document.title = 'Drum-Machine';
      }, []);
    return(
        <div className="drummachine">
            <section className='sections'>
                <div className='buttons'>
                    <div className='container1'>
                        <button className="button-key">Q</button>
                        <button className="button-key">W</button>
                        <button className="button-key">E</button>
                    </div>
                    <div className='container2'>
                        <button className="button-key">A</button>
                        <button className="button-key">S</button>
                        <button className="button-key">D</button>
                    </div>
                    <div className='container3'>
                        <button className="button-key">Z</button>
                        <button className="button-key">X</button>
                        <button className="button-key">C</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Drummachine