import React from 'react';
function Stats() {
    return (
    <div className='cintainer p-3'>
        <div className =' row p-5'>
            <div className='col-6 p-5'>
                <h1 className='mb-5 fs-2'>Trust with confidence</h1>
                <h2 className='fs-4'>Customer-first always</h2>
                <p  className='text-muted'>That's why 1.3+ core customers trust Zerodha with &#8377; 3.5+ lakh crores worth of equity investments.</p>

                <h2 className='fs-4'>No spam or gimmicks</h2>
                <p  className='text-muted'>No gimmicks, spam, "gamification, or annoying push notifications. High quality apps that you use at your pace, the way you like."</p>

                <h2 className='fs-4'>The Zerodha universe</h2>
                <p  className='text-muted'>Not just an app, but a whole ecosystem.Our investments in 30+ fintech startups offer you tailored services to your needs</p>

                <h2 className='fs-4'>Do better with money</h2>
                <p  className='text-muted'>With initiatives like Nudge and Kill SWitch , we dont just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-6 p-5'>
                 <img src='media/images/ecosystem.png' style={{width:"75%"}}></img>
                <div className= 'text-center'>
                    <a href='' className='mx-5' style={{textDecoration:"none"}}>Explore our products : &rarr; </a>
                    <a href=''  style={{textDecoration:"none"}}>Try Kite demo</a>
             </div>
            </div>
               
        </div>
    </div>
    );
}

export default Stats;