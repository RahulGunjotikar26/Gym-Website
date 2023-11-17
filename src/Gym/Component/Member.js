import React from "react";
import "./Member.css"
import { useState } from "react";

let Member = () => {

    let [name, newName] = useState();
    let [date, newDate] = useState();
    let [num, newNum] = useState();
    let [male, newMale] = useState();
    let [female, newFemale] = useState();
    let [address, newAdd] = useState();

    function changename(event) {
        newName(event.target.value)
    }

    function changedate(event) {
        newDate(event.target.value);
    }

    function changenum(event) {
        newNum(event.target.value);
    }

    function changegen(event) {
        newMale(event.target.value)
    }

    function changegen(event) {
        newFemale(event.target.value)
    }

    function changeadd(event) {
        newAdd(event.target.value)
    }

    function submit(event) {
        event.preventDefault();
        
        newName ("")
        newDate ("")
        newNum ("")
        newMale ("")
        newFemale ("")
        newAdd ("")
    }

    return (

        <center>
            {/* <table> */}
            <h3>Membership Form</h3>
            <form onSubmit={submit}>
                <tr>
                    <td>Name: <input type="text" value={name} onChange={changename} placeholder="Enter Name" /></td>
                </tr><br />

                <tr>
                    <td>Date of Birth:<input type="date" value={date} onChange={changedate} /></td>
                    <td>Mobile No.:<input type="number" value={num} onChange={changenum} /></td>
                </tr><br />

                <tr>
                    <td>Gender:</td>
                    <td><input type="radio" name="Gender" value={male} onChange={changegen} />Male
                        <input type="radio" name="Gender" value={female} onChange={changegen} />Female
                    </td>
                </tr><br />

                <tr>
                    <td>Workout Plan</td>
                    <td>
                        <select>
                            <option>Select</option>
                            <option>Gym</option>
                            <option>Gym + PT</option>
                            <option>Cardio</option>
                            <option>Gym + Cardio + CrossFit</option>
                        </select>
                    </td>
                </tr><br />

                <tr>
                    <td>Plan</td>
                    <td>
                        <select>
                            <option>Select</option>
                            <option>3 Months</option>
                            <option>6 Months</option>
                            <option>12 Months</option>
                        </select>
                    </td>
                </tr><br />

                <tr>
                    <td>Address:</td>
                    <td><input type="textarea" value={address} onChange={changeadd} /></td>
                </tr><br />
                <tr>
                    <td>
                        <button onClick={submit}>Submit</button>
                    </td>
                </tr>
            </form>
            {/* </table> */}
        </center>
    );
}

export default Member;