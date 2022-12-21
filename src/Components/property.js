import React from 'react';
import home from './images/home.png'
import bell from './images/bell.png'
import download from './images/download.png'
import upload from './images/upload.png'
import eye from './images/open-eye.png'
import tag from './images/tag.png'
import user from './images/avatar.png'
import "./gg/property.css"
function Property() {
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
                            <option selected>User Name</option>
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
                        <input className='g1i' placeholder='Example: 10000'></input>


                        <label className='p2i'>Breadth</label>

                        <input className='g2i' placeholder='Example: 10000'></input>

                        <label className='p3i'>Total area</label>
                        <input className='g3i' placeholder='Example: 10000'></input>
                        <label className='p4i'> Area unit</label>

                        <select className='g4i' >
                            <option selected>Select property type</option>
                            <option value="1">One</option>
                            <option value="2">g</option>

                        </select>
                        <label className='p5i'>No of bhk</label>

                        <select className='g5i' >
                            <option selected>Select property type</option>
                            <option value="1">One</option>
                            <option value="2">g</option>

                        </select>
                        <label className='p6i'>No of floor</label>

                        <select className='g6i' >
                            <option selected>Select property type</option>
                            <option value="1">One</option>
                            <option value="2">g</option>

                        </select>
                        <label className='p7i'>Attached</label>
                        <select className='g7i' >
                            <option selected>Select property type</option>
                            <option value="1">One</option>
                            <option value="2">g</option>

                        </select>
                        <label className='p8i'>No of western toilet </label>

                        <select className='g8i' >
                            <option selected>Select property type</option>
                            <option value="1">One</option>
                            <option value="2">g</option>

                        </select>

                        <label className='p9i'>Furnished </label>

                        <select className='g9i' >
                            <option selected>Select property type</option>
                            <option value="1">One</option>
                            <option value="2">g</option>

                        </select>
                        <label className='p10i'>Car parking </label>

                        <select className='g10i' >
                            <option selected>Select property type</option>
                            <option value="1">One</option>
                            <option value="2">g</option>

                        </select>
                        <label className='p11i'>Lift </label>

                        <select className='g11i' >
                            <option selected>Select Lift</option>
                            <option value="1">One</option>
                            <option value="2">g</option>

                        </select>


                        <label className='p12i'>Electricity</label>
                        <input className='g12i' placeholder='Example: 3 phase'></input>
                        <label className='p13i'>Facing </label>

                        <select className='g13i' >
                            <option selected>Select Facing</option>
                            <option value="1">One</option>
                            <option value="2">g</option>

                        </select>

                        <button id='first1'>cancel</button>
                        <button id='second2'>continue</button>
                    </div>




                </div>
            </div>
        </div>

    )
}
export default Property;
