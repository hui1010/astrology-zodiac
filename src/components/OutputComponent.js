import React from 'react'
import { MdClose } from 'react-icons/md'
import { useDispatch } from 'react-redux'

import { hideResult } from '../redux'
import Astrology from './Astrology'
import Zodiac from './Zodiac'
import Advice from './Advice'

function OutputComponent() {

    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(hideResult())
    }

    return (
        <div className="output">
            <button className="close" onClick={handleClick}>
                <MdClose fontSize={20}/>
            </button>
            <div className="output-content">
                <Astrology />
                <Zodiac />
                <Advice />
            </div>
        </div>
    )
}

export default OutputComponent
