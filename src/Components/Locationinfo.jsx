import React from 'react';
import home from './images/home.png'
import bell from './images/bell.png'
import download from './images/download.png'
import upload from './images/upload.png'
import eye from './images/open-eye.png'
import tag from './images/tag.png'
import user from './images/avatar.png'
import { Link } from 'react-router-dom';
import "./Locationinfo.css"
function Basicinfo() {

    
    return (
        <div className='o'>
             <div className='homepagej'>
            <div className='div1j'>
                <div className='logoj'>Logo</div>
                <div className='left-navbarj'>
                    <p className='bluej'><img className='homej' src={home} alt="1" /> Property</p>
                    <p className='greyj'><img className='homej' src={bell} alt="2" /> Assistance</p>
                    <p className='greyj'><img className='homej' src={download} alt="3" /> Recieved Intrest</p>
                    <p className='greyj'><img className='homej' src={upload} alt="4" /> Sent Intrest</p>
                    <p className='greyj'><img className='homej' src={eye} alt="5" /> Property Views</p>
                    <p className='greyj'><img className='homej' src={tag} alt="6" /> Tarrif Plan</p>
                </div>
            </div>
            <div className='div2j'>
                <div className='headerj'>
                    <div className='useridj'><p>USER ID : 06PPD2357</p></div>
                    <div className='userj'>
                        <img src={user} alt="7" />
                        <select>
                            <option selected>User Name</option>
                            <option>Log out</option>
                        </select>
                    </div>
                </div>
                <div className='linej'></div>
                <div className='aaj'>Add new Property</div>
                <div className='bbj'>
                    <div className='t1j'>
                        <div className='t11j'><p id='w'>1</p></div>
                        <div className='t12j'>Basic Info</div>
                    </div>
                    <div className='t2j'>
                        <div className='t21j'><p id='w2'>2</p></div>
                        <div className='t22j'>Property  Detail</div>
                    </div>
                    <div className='t3j'>
                        <div className='t31j'><p id='w3'>3</p></div>
                        <div className='t32j'>General Info</div>
                    </div>
                    <div className='t4j'>
                        <div className='t41j'><p id='w4'>4</p></div>
                        <div className='t42j'>Location Info</div>
                    </div>
                </div>
                <div className='kkj'>
                    <div className='tablej'>


                        <label className='p1j'>Email</label>

                        <input type='email'  className='g1j' placeholder='Email'></input>
                            

                        <label className='p2j'>City</label>

                        <select className='g2j' >
                            <option selected>delhi</option>
                            <option value="1">banglore</option>
                            <option value="2">mumbai</option>

                        </select>
                        <label className='p4j'> Area</label>

                            <select className='g4j' >
                                <option selected>Select Area</option>
                                <option value="1">urban</option>
                                <option value="2">rural</option>

                            </select>
                        <label className='p5j'>Address</label>
                        <input className='g5j' placeholder='Example: adrress'></input>
                       
                        <label className='p3j'>Pincode</label>

                        <select className='g3j' >
                            <option selected>Select Pincode</option>
                            <option value="1">571231</option>
                            <option value="2">577221</option>

                        </select>
                        <label className='p6j'>Landmark</label>

                        <input type="text" className='g6j'  placeholder='Landmark'/>
                        <label className='p7j'>Latitude</label>
                        <input type="Number" className='g7j' placeholder='Latitude' ></input>
                        <label className='p8j'>Longitude </label>

                        <input type="text" className='g8j' placeholder='Longitude' />
                       





                    </div>
                </div>


            </div>
            
           
           <Link to="/generalinfo"> <button className='previ'>Previous</button></Link>      
           <Link to="/homepage">   <button className='ad'>Add Property</button></Link>    
           
        </div>
        </div>
       
    )
}
export default Basicinfo;