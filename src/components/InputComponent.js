import React,{ useState } from 'react'
import { useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { showResult, saveYear, saveMonth, saveDay, personalCode } from '../redux'

function InputComponent() {

    const dispatch = useDispatch()

    const [year, setYear] = useState()
    const [month, setMonth] = useState()
    const [day, setDay] = useState()

    const handleYearChange = e => {       
        setYear(e.target.value)
    }

    const handleMonthChange = e => {
        setMonth(e.target.value)
    }

    const handleDayChange = e => {
        setDay(e.target.value)
    }

    const handleYearBlur = e => {
        const val = e.target.value
        if(val) {
            if(val < 0 || !Number.isInteger(Number(val))) {
                toast("Please fill in a valid year.")
            }
        }        
    }

    const handleMonthBlur = e => {
        const val = e.target.value
        if(val) {
            if(val < 1 || val > 12 || !Number.isInteger(Number(val))) {
                toast("Please fill in a valid month.")
            }
        }
    }

    const handleDayBlur = e => {
        const val = e.target.value
        if(val) {
            if(val < 1 || val > 31 || !Number.isInteger(Number(val))) {
                toast("Please fill in a valid day.")
            }
        }
    }


    const handleClick = e => {
        e.preventDefault()

        if(!(year&&month&&day)){
            toast("All the fields need to be filed.")
            return
        }

        // if(year < 0 ) {
        //     toast("Please fill in a valid year.")
        //     return
        // }

        // // if(month > 12 || month < 1) {
        // //     toast("Please fill in a vaaaaaaalid month.")
        // //     return
        // // }

        // if(day > 31 || day < 1) {
        //     toast("Please fill in a valid day.")
        //     return
        // }

        dispatch(personalCode())
        dispatch(saveYear(year))
        dispatch(saveMonth(month))
        dispatch(saveDay(day))
        dispatch(showResult())
    }


    return (
        <div className="input">
            <p className="input-head">Enter your birthday</p> 
            <form className="input-form"> 
                <div className="input-data">
                    <label> Year </label>
                    <input type="number" value={year} onChange={e => handleYearChange(e)} onBlur={e=>handleYearBlur(e)} required placeholder="yyyy"/>
                </div>          
                <div className="input-data">
                    <label>Month </label>
                    <input type="number" value={month} onChange={e => handleMonthChange(e)} onBlur={e=>handleMonthBlur(e)} required placeholder="m/mm"/>
                </div>      
                <div className="input-data">
                    <label> Day </label>
                    <input type="number" value={day} onChange={e => handleDayChange(e)} onBlur={e=>handleDayBlur(e)} required placeholder="d/dd"/> 
                </div>                 
                <div className="input-data">
                    <button className="button-submit" onClick={e => handleClick(e)}>Go</button>           
                </div>    
            </form>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                pauseOnHover/>
        </div>
    )
}

export default InputComponent
