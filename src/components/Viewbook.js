import React from 'react'
import Navbar1 from './Navbar1'

const Viewbook = () => {
    var booklist=[
        {
        "title":"Wings of fire",
        "price":"200",
        "author":"APJ"
    },
    {
        "title":"xyz",
        "price":"200",
        "author":"AP"   
    },
    {
        "title":"sss",
        "price":"200",
        "author":"xx"
    }
]

  return (
    <div> 
        <Navbar1/>
    <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                {booklist.map((value,key)=>{
             return <div className='col col-12 col-sm-6 col-lg-4 col-md-4 col-xl-4 col-xxl-4'>
                <div class="card" >
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">BOOK:{value.title}</h5>
    <p class="card-text">AUTHOR:{value.author}</p>
    <p class="card-text">PRICE:{value.price}</p>
    <a href="#" class="btn btn-primary">BUY</a>
  </div>
</div>
                </div>
            })}
                
               
            </div>
        </div>
    </div>
</div>

   </div>
  )
}

export default Viewbook