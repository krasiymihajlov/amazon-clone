import React from 'react'
import './Home.css';
import Product from './Product.js'

function Home() {
    return(
        <div className='home'>
           <div className='home__container'>
               <img className='home__image' src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="" />
                <div className="home__row">
                    <Product id= '123123' title='The lean startup asd asd asd asd asda sd asdas dasdasdasdas dasdasdasd' price={29.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={5}/> 
                    <Product id= '12312' title='Startup' price={12.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={2}/> 
                </div>

                <div className="home__row">
                    <Product id= '232' title='The lean startup' price={34.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={1}/> 
                    <Product id= '3123' title='Startup' price={1.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={3}/> 
                    <Product id= '4123312' title='Startup' price={120.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={4}/> 
                </div>

                <div className="home__row">
                  <Product id= '5123123' title='The lean startup' price={0.99} image='https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg' rating={5}/> 

                </div>
           </div>
        </div>
    )
}

export default Home