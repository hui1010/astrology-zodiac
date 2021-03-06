import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { random, personalCode } from '../redux'

function Advice() {

    const year = useSelector(state => state.year.year)
    const month = useSelector(state => state.month.month)
    const day = useSelector(state => state.day.day)
    const personalId = year%100 + month + day
    const [personalAdvice, setPersonalAdvice] = useState('')

    const randomState = useSelector(state=>state.random.random)

    const dispatch = useDispatch()

    const [randomId, setRandomId] = useState(1)
    let adviceId = randomState? randomId :personalId
    
    const handleRandomClick = () => {
        dispatch(random())
        setRandomId(Math.round(Math.random()*100)+1)
    }

    const handlePersonalClick = () => {
        dispatch(personalCode())
    }
    
        
    useEffect(() => {
        axios.get(`https://api.adviceslip.com/advice/${adviceId}`)
        .then(data => {
            const content = data.data
            const arr = content?.split('"advice"')
            const advice = arr[1].substring(arr[1].indexOf('"') + 1, arr[1].lastIndexOf('"'))
            setPersonalAdvice(advice)})
        .catch(e=>console.log(e))
    }, [adviceId])
   

    
    return (
        <div className="output-content-inner advice">
            <p>Your {randomState? `random` : `personal`} advice based on your birthday is</p>           
            <p className="result advice-result">{personalAdvice}</p>        
            <button className="advice-button advice-random" onClick={handleRandomClick}>Try a random one</button>
            <button className="advice-button advice-personal" onClick={handlePersonalClick}>Get my personal one</button>
            <div className="info">
            <p>Advice from <a className="info-link" href="https://api.adviceslip.com/">Advice Slip JSON API</a></p>
            </div>
        </div>
    )
}

export default Advice
