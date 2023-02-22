import React, { useEffect, useState } from 'react';
import home from './images/home.png'
import bell from './images/bell.png'
import download from './images/download.png'
import upload from './images/upload.png'
import eye from './images/open-eye.png'
import tag from './images/tag.png'
import user from './images/avatar.png'
import "./gg/property.css"
import { Link, useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { set } from './action/action';
function Property() {
    const store=useSelector((st)=>{
        return st.redu
    })
    const dispatch=useDispatch()
 
    useEffect(() => {
        
    }, [])
    
    return (
        <div className='homepagei'>
            <div className='div1i'>
                <div className='logoi'>Logo</div>
                <div className='left-navbari'>
                    <p className='bluei'><img className='homei' src={home} alt="1" /> Property</p>
                    <p className='greyi'><img className='homei' src={bell} alt="2" /> Assistance</p>
                    <p className='greyi'><img className='homei' src={download} alt="3" /> Recieved Intrest</p>
                    <p className='greyi'><img className='homei' src={upload} alt="4" /> Sent Intrest</p>
                    <p className='greyi'><img className='homei' src={eye} alt="5" /> Property Views</p>
                    <p className='greyi'><img className='homei' src={tag} alt="6" /> Tarrif Plan</p>
                </div>
            </div>
            <div className='div2i'>
                <div className='headeri'>
                    <div className='useridi'><p>USER ID : 06PPD2357</p></div>
                    <div className='useri'>
                        <img src={user} alt="7" />
                        <select>
                            <option selected>{store.data.name}</option>
                            <option>Log out</option>
                        </select>
                    </div>
                </div>
                <div className='linei'></div>
                <div className='aai'>Add new Property</div>
                <div className='bbi'>
                    <div className='t1i'>
                        <div className='t11i'><p id='wi'>1</p></div>
                        <div className='t12i'>Basic Info</div>
                    </div>
                    <div className='t2i'>
                        <div className='t21i'><p id='w2i'>2</p></div>
                        <div className='t22i'>Property  Detail</div>
                    </div>
                    <div className='t3i'>
                        <div className='t31i'><p id='w3i'>3</p></div>
                        <div className='t32i'>General Info</div>
                    </div>
                    <div className='t4i'>
                        <div className='t41i'><p id='w4i'>4</p></div>
                        <div className='t42i'>Location Info</div>
                    </div>
                </div>
                <div className='kk'>
                    <div className='table'>
                        <label className='p1i'>Length</label>
                        <input className='g1i' placeholder='Example: 1000' name='length' onChange={(e) => {  const {name,value}=e.target;
                            dispatch(set(name,value))}}></input>
                        <label className='p2i'>Breadth</label>
                        <input className='g2i' placeholder='Example: 1000' name='breadth' onChange={(e) => { const {name,value}=e.target;
                            dispatch(set(name,value)) }}></input>
                        <label className='p3i'>Total area</label>
                        <input className='g3i' placeholder='Example: 7500' name='totalarea' onChange={(e) => {  const {name,value}=e.target;
                            dispatch(set(name,value)) }}></input>
                        <label className='p4i'> Area unit</label>
                        <select className='g4i' name='areaunit' onChange={(e) => {  const {name,value}=e.target;
                            dispatch(set(name,value))}} >
                            <option selected> si unit</option>
                            <option >mili meter square</option>
                            <option >meter square</option>
                        </select>
                        <label className='p5i'>No of bhk</label>
                        <select className='g5i' name='noofbhk' onChange={(e) => {  const {name,value}=e.target;
                            dispatch(set(name,value))}}>
                            <option selected> no of bhk</option>
                            <option >3</option>
                            <option >5</option>
                        </select>
                        <label className='p6i'>No of floor</label>
                        <select className='g6i' name='nooffloors' onChange={(e) => {  const {name,value}=e.target;
                            dispatch(set(name,value))}} >
                            <option selected> no of floor</option>
                            <option >2</option>
                            <option >3</option>
                        </select>
                        <label className='p7i'>Attached</label>
                        <select className='g7i'name='attached' onChange={(e) => {  const {name,value}=e.target;
                            dispatch(set(name,value)) }}>
                            <option selected>Select  type</option>
                            <option >yes</option>
                            <option >no</option>
                        </select>
                        <label className='p8i'>No of western toilet </label>
                        <select className='g8i' name='westerntoilet' onChange={(e) => {  const {name,value}=e.target;
                            dispatch(set(name,value)) }} >
                            <option selected>Select no</option>
                            <option >4</option>
                            <option >6</option>
                        </select>
                        <label className='p9i'>Furnished </label>
                        <select className='g9i' name='furnished' onChange={(e) => { const {name,value}=e.target;
                            dispatch(set(name,value)) }} >
                            <option selected>Select</option>
                            <option >yes</option>
                            <option >no</option>
                        </select>
                        <label className='p10i'>Car parking </label>
                        <select className='g10i' name='carparking' onChange={(e) => {  const {name,value}=e.target;
                            dispatch(set(name,value)) }}>
                            <option selected>Select </option>
                            <option >yes</option>
                            <option >no</option>
                        </select>
                        <label className='p11i'>Lift </label>
                        <select className='g11i' name='lift' onChange={(e) => {  const {name,value}=e.target;
                            dispatch(set(name,value)) }} >
                            <option selected>Select Lift</option>
                            <option >yes</option>
                            <option >no</option>
                        </select>
                        <label className='p12i'>Electricity</label>
                        <input className='g12i' placeholder='Example: 3 phase' name='electricity' onChange={(e) => { const {name,value}=e.target;
                            dispatch(set(name,value))}}></input>
                        <label className='p13i'>Facing </label>
                        <select className='g13i' name='facing' onChange={(e) => {  const {name,value}=e.target;
                            dispatch(set(name,value)) }} >
                            <option selected>Select Facing</option>
                            <option >east</option>
                            <option >north</option>
                        </select>
                        <Link to="/basicinfo" ><button id='first1'>Previous</button></Link>
                        <Link to="/generalinfo" > <button id='second2'>save & continue</button></Link>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Property;
