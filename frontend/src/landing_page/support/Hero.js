import React from 'react';
function Hero() {
    return ( 
       <section className='container-fluid' id="supportHero">
        <div className=' p-5 mt-5 mb-5' id="supportWrapper">
          <h4 className='mt-5'>Support Portal</h4>
          <a href=""  className='mt-5'>Track Tickets</a>
         
        </div>

        <div className="row p-5 mt-5 mb-5">
            <div className="col-6 p-3  mb-5">
            <h1 className='mb-5'>Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder='Eg. how do I activate F&O' /> <br/>
            <a href=""  style={{marginRight:"25px", lineHeight:"2" }}>Track accout opening</a>
            <a href="" style={{marginRight:"25px" ,lineHeight:"2" }}>Track segment activation</a>
            <a href="" style={{marginRight:"25px"  ,lineHeight:"2"}}>Intraday margins</a>
            <a href="" style={{marginRight:"25px"  ,lineHeight:"2"}}>Kite user manual</a>
        </div>

        <div className="col-6 p-3  mb-5">
            <h1 className='mb-5 '    style={{marginLeft: "250px"}}>Featured</h1>
            <a href="" style={{marginRight:"25px", lineHeight:"2"  , marginLeft: "250px" }}>Current Takeovers and Delisting - January 2024</a><br/>
            <a href="" style={{marginRight:"25px", lineHeight:"2" , marginLeft: "250px" }}>Lastest Intraday leverages - Mis & CO</a>

        </div>
        </div>
        
       
       </section>
     );
}

export default Hero;