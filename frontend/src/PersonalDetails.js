import React, { useState } from 'react'
import { db } from './firebase_config'

function PersonalDetails() {
    const [personal, setPersonal] = useState({
        email:"",
        fullname:"",
        dob:"",
        pob:"", //place of birth
        gender:"Male",
        nation:"",
        father:"",
        marital:"",
        mob:"",
        phone:"",
        pemail:"",
        semail:"",
        address:"",
        resspec:"",
        tr:"",//teaching/research
        cc:"",//core courses
        ec:"" //elective courses
    })

    const [fullDetails, setFullDetails] = useState({})

    function updatePersonal(e){
        var newPersonal={...personal}
        newPersonal[e.target.name]=e.target.value
        setPersonal(newPersonal)
    }

    function saveInfoNext(e){
        var newDetails={...fullDetails,...personal}
        setFullDetails(newDetails)
    }

    return (
        <div>
            <form className="flex flex-col">
                <h3 className="font-bold my-5 text-xl text-red-700">Personal Details</h3>
                <h3 className="font-bold my-4">Account Details</h3>
                <div className="form-field">
                    <label htmlFor="email">
                        Account Email
                    </label>
                    <input id="email" name="email" type="email" required onChange={updatePersonal}/>
                </div>
                <h3 className="font-bold my-4">Personal Details</h3>
                <div className="grid gap-3">
                <div className="form-field">
                    <label htmlFor="fullname">
                        Full Name
                    </label>
                    <input id="fullname" name="fullname" type="text" required onChange={updatePersonal}/>
                </div>
                <div className="form-field">
                    <label htmlFor="dob">
                        Date of Birth
                    </label>
                    <input id="dob" name="dob" type="date" required onChange={updatePersonal}/>
                </div>
                <div className="form-field">
                    <label htmlFor="pob">
                        Place of Birth(City,Country)
                    </label>
                    <input id="pob" type="text" name="pob" onChange={updatePersonal}/>
                </div>
                <div className="form-field">
                    <label htmlFor="gender">
                        Gender
                    </label>
                    <select name="gender" id="gender">
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="others">Others</option>
                    </select>
                </div>
                <div className="form-field">
                    <label htmlFor="nation">
                        Nationality
                    </label>
                    <input type="text" id="nation" name="nation" onChange={updatePersonal}/>
                </div>
                <div className="form-field">
                    <label htmlFor="father">
                        Father's Name
                    </label>
                    <input type="text" id="father" name="father" onChange={updatePersonal}/>
                </div>
                <div className="form-field">
                    <label htmlFor="marital">
                        Marital Status     
                    </label>
                <input type="text" id="marital" name="marital" onChange={updatePersonal}/>
                </div>
                </div>

                <h3 className="font-bold my-4">Current Contact Information</h3>
                <div className="grid gap-3">
                <div className="form-field">
                    <label htmlFor="mob">
                        Mobile Number    
                    </label>
                <input type="text" id="mob" name="mob" onChange={updatePersonal}/>
                </div>
                <div className="form-field">
                    <label htmlFor="phone">
                        Phone Number    
                    </label>
                <input type="text" id="phone" name="phone" onChange={updatePersonal}/>
                </div>
                <div className="form-field">
                    <label htmlFor="pemail">
                        Primary Email Address    
                    </label>
                <input type="email" id="pemail" name="pemail" onChange={updatePersonal}/>
                </div>
                <div className="form-field">
                    <label htmlFor="semail">
                        Secondary Email Address    
                    </label>
                <input type="email" id="semail" name="semail" onChange={updatePersonal}/>
                </div>
                <div className="form-field">
                    <label htmlFor="address">
                        Current Address    
                    </label>
                <input type="text" id="address" name="address" onChange={updatePersonal}/>
                </div>
                </div>

                <h3 className="font-bold my-4">Teaching/Research Interests</h3>
                <div className="grid gap-3">
                <div className="form-field">
                    <label htmlFor="resspec">
                        Your Research Specialization   
                    </label>
                <input type="text" id="resspec" name="resspec" onChange={updatePersonal}/>
                </div>
                <div className="form-field">
                    <label htmlFor="tr">
                        Statement of your "Teaching/Research Administration agenda"<br/> for the next 3 years(2-3 sentences)
                    </label>
                <textarea type="text" id="tr" name="tr" onChange={updatePersonal}/>
                </div>
                <div className="form-field">
                    <label htmlFor="cc">
                        Name core of courses you like to teach at MBA level 
                    </label>
                <textarea type="text" id="cc" name="cc" onChange={updatePersonal}/>
                </div>
                <div className="form-field">
                    <label htmlFor="ec">
                        Name any elective course you like to offer (Maximum 3 offers) 
                    </label>
                <textarea type="text" id="ec" name="ec" onChange={updatePersonal}/>
                </div>
                </div>

                <div className="text-right">
                <button className="bg-blue-500 text-white w-20 my-5 p-1 rounded" onClick={saveInfoNext}>
                    Next
                </button>
                </div>
            </form>
        </div>
    )
}
export default PersonalDetails
