import React from 'react';

function Pricing() {
    return (
        <div className='container my-5'>
            <div className='row align-items-center'>

                {/* Left Column: Text */}
           
                <div className='col-md-6 '>
                    <h1 className='mb-3 fs-2'>Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price <br></br>transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <a href='#' style={{ textDecoration: 'none' }}>
                        See pricing &rarr;
                    </a>
                </div>

                {/* Right Column: Pricing Cards */}
             
                <div className='col-md-6 p-2'>
                    <div className='row text-center'>
                        <div className='col-6 border p-2'>
                            <h1 className='mb-3'>&#8377; 0</h1>
                            <p className='text-muted'>
                                Free equity delivery and <br/> direct mutual funds
                            </p>
                        </div>
                        <div className='col-6 border p-4'>
                            <h1  className='mb-3'>&#8377; 20</h1>
                            <p className='text-muted'>Intraday and F&O</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Pricing;
