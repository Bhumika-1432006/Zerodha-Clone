import React from "react";

function Brokerage() {
  return(
 <div className="container">
  <div className="row p-5 mt-5 text-center border-top">

    <div className="col-8 p-4" >
      <a href="" className="fs-5" style={{textDecoration:"none" ,lineHeight:"5" }}>Brokerage calculator</a>
      <ul className="fs-0.1 text-muted" style={{textAlign: "left", lineHeight:"2.5", fontSize: "14px"}}>

<li>Call & Trade and RMS auto-squareoff: Additional charges of ₹50 + GST per order.</li>
<li>Digital contract notes will be sent via e-mail.</li>
<li>Physical copies of contract notes, if required, shall be charged *20 per contract note. Courier charges apply.</li>
<li>For NRI account (PIS), 0.5% or ₹200 per executed orderfor equity (whichever is lower).</li>
<li>If the account is in debit balance, any order placed will be charged 40 per executed order instead of 20 per executed order.</li>

</ul>
    </div>

    <div   className="col-4 p-4">
     <a href="" className="fs-5" style={{textDecoration:"none" ,lineHeight:"5" }}>List of Charges</a>
    </div>
  </div>
 </div>
  );
}

export default Brokerage;
