import React, { useState } from 'react';
import {useEffect} from 'react';
import "./Drummachine.css"

function Drummachine(){
    useEffect(() => {
        document.title = 'Drum-Machine';
      }, []);
      //button Names Heater
      const [buttonname, setbuttonname] = useState("Heater Kit");
      const click = (id) => {
        if (id === 'key1'){
            setbuttonname('Heater 1')
            handleClickButton1();
        }else if (id === 'key2') {
            setbuttonname('Heater 2')
            handleClickButton2();
        }else if (id === 'key3') {
            setbuttonname('Heater 3')
            handleClickButton3();
        }else if (id === 'key4') {
            setbuttonname('Heater 4')
            handleClickButton4();
        }else if (id === 'key5') {
            setbuttonname('Clap')
            handleClickButton5();
        }else if (id === 'key6') {
            setbuttonname('Open HH')
            handleClickButton6();
        }else if (id === 'key7') {
            setbuttonname("Kick n' Hat")
            handleClickButton7();
        }else if (id === 'key8') {
            setbuttonname('Kick')
            handleClickButton8();
        }else if (id === 'key9') {
            setbuttonname('Closed HH')
            handleClickButton9();
        }
      }

      //button colors
      const [button1Clicked, setButton1Clicked] = useState(false);
      const [button2Clicked, setButton2Clicked] = useState(false);
      const [button3Clicked, setButton3Clicked] = useState(false);
      const [button4Clicked, setButton4Clicked] = useState(false);
      const [button5Clicked, setButton5Clicked] = useState(false);
      const [button6Clicked, setButton6Clicked] = useState(false);
      const [button7Clicked, setButton7Clicked] = useState(false);
      const [button8Clicked, setButton8Clicked] = useState(false);
      const [button9Clicked, setButton9Clicked] = useState(false);
      const handleClickButton1 = () => {
        setButton1Clicked(true);
        setTimeout(() => {
          setButton1Clicked(false);
        }, 200);
      };
      const handleClickButton2 = () => {
        setButton2Clicked(true);
        setTimeout(() => {
          setButton2Clicked(false);
        }, 200);
      };
      const handleClickButton3 = () => {
        setButton3Clicked(true);
        setTimeout(() => {
          setButton3Clicked(false);
        }, 200);
      };
      const handleClickButton4 = () => {
        setButton4Clicked(true);
        setTimeout(() => {
          setButton4Clicked(false);
        }, 200);
      };
      const handleClickButton5 = () => {
        setButton5Clicked(true);
        setTimeout(() => {
          setButton5Clicked(false);
        }, 200);
      };
      const handleClickButton6 = () => {
        setButton6Clicked(true);
        setTimeout(() => {
          setButton6Clicked(false);
        }, 200);
      };
      const handleClickButton7 = () => {
        setButton7Clicked(true);
        setTimeout(() => {
          setButton7Clicked(false);
        }, 200);
      };
      const handleClickButton8 = () => {
        setButton8Clicked(true);
        setTimeout(() => {
          setButton8Clicked(false);
        }, 200);
      };
      const handleClickButton9 = () => {
        setButton9Clicked(true);
        setTimeout(() => {
          setButton9Clicked(false);
        }, 200);
      };


      //jsx
    return(
        <div className="drummachine">
            <section className='sections'>
                <div className='buttons'>
                    <div className='container1'>
                        <button  className={`button-key ${button1Clicked ? "clicked1" : "" }`} onClick={() => click("key1")} id='key1'>Q</button>
                        <button className={`button-key ${button2Clicked ? "clicked2" : "" }`} onClick={() => click("key2")} id='key2'>W</button>
                        <button className={`button-key ${button3Clicked ? "clicked3" : "" }`} onClick={() => click("key3")} id='key3'>E</button>
                    </div>
                    <div className='container2'>
                        <button className={`button-key ${button4Clicked ? "clicked4" : "" }`} onClick={() => click("key4")} id='key4'>A</button>
                        <button className={`button-key ${button5Clicked ? "clicked5" : "" }`} onClick={() => click("key5")} id='key5'>S</button>
                        <button className={`button-key ${button6Clicked ? "clicked6" : "" }`} onClick={() => click("key6")} id='key6'>D</button>
                    </div>
                    <div className='container3'>
                        <button className={`button-key ${button7Clicked ? "clicked7" : "" }`} onClick={() => click("key7")} id='key7'>Z</button>
                        <button className={`button-key ${button8Clicked ? "clicked8" : "" }`} onClick={() => click("key8")} id='key8'>X</button>
                        <button className={`button-key ${button9Clicked ? "clicked9" : "" }`} onClick={() => click("key9")} id='key9'>C</button>
                    </div>
                </div>
                <div className="rightside">
                        <p className='rightside1'>{buttonname}</p>
                </div>
            </section>
        </div>
    )
}

export default Drummachine