import React from 'react'
import './App.js'

export const stake = () => {
  return (
    <div>
        <form className="form1">
        <input id="t" class="des"  name="stake" placeholder="GUF" type="text"></input>
        <button className="btn1" onclick="depositToken()" name="depositToken">Stake</button> 
        <input id="m"  class="design" name="unstake" placeholder="GUF" type="text"></input>
        <button className="btn2" onclick="Unstake()" name="Unstake">Unstake</button>   
        </form>
    </div>
    
  )
};


  