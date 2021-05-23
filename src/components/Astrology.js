import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import aquarius from '../images/astrology/aquarius.jpg'
import aries from '../images/astrology/aries.jpg'
import cancer from '../images/astrology/cancer.jpg'
import capricorn from '../images/astrology/capricorn.jpg'
import gemini from '../images/astrology/gemini.jpg'
import leo from '../images/astrology/leo.jpg'
import libra from '../images/astrology/libra.jpg'
import pisces from '../images/astrology/pisces.jpg'
import sagittarius from '../images/astrology/sagittarius.jpg'
import scorpio from '../images/astrology/scorpio.jpg'
import taurus from '../images/astrology/taurus.jpg'
import virgo from '../images/astrology/virgo.jpg'


function Astrology() {

    const month = useSelector(state=>state.month.month)
    const day = useSelector(state=>state.day.day)

    const dayTwoDigits = String(day).length > 1 ? String(day) :  0 + String(day)
    const monthDayNumber = Number(month + dayTwoDigits)     

    const [astrology, setAstrology] = useState('')
    const [element, setElement] = useState('')
    const [summary, setSummary] = useState('')
    const [image, setImage] = useState('')

    useEffect(() => {
        if (monthDayNumber >= 101 && monthDayNumber <= 1231) {
            if (monthDayNumber >= 120 && monthDayNumber <= 218) {
                setAstrology('Aquarius (Water bearer)')
                setElement('Air')
                setImage(aquarius)
                setSummary('Aquarius people are original, idealistic, rebellious, independent, inventors, open minded and honest.')
            } else if (monthDayNumber >= 219 && monthDayNumber <= 320) {
                setAstrology('Pisces (Fish)')
                setElement('Water')
                setImage(pisces)
                setSummary('Pisceans are dreamy, erratic, creative, romantic, compassionate, elusive, imaginative, sensitive and kind people.')
            } else if (monthDayNumber >= 321 && monthDayNumber <= 419) {
                setAstrology('Aries (Ram)')
                setElement('Fire')
                setImage(aries)
                setSummary('The Aries people are willful, feisty, self-centered, courageous, bold, foolhardy, independent and straightforward.')
            } else if (monthDayNumber >= 420 && monthDayNumber <= 520) {
                setAstrology('Taurus (Bull)')
                setElement('Earth')
                setImage(taurus)
                setSummary('The Taurus people are practical, creative, loyal, possessive, temperamental, sensually indulgent, down-to-earth, dependable, persistent and practical.')
            } else if (monthDayNumber >= 521 && monthDayNumber <= 621) {
                setAstrology('Gemini (Twins)')
                setElement('Air')
                setImage(gemini)
                setSummary('The Gemini people are curious, elusive, unpredictable, changeable, versatile, childlike, romantic, playful, friendly, talkative and have a keen intellect.')
            } else if (monthDayNumber >= 622 && monthDayNumber <= 722) {
                setAstrology('Cancer (Crab)')
                setElement('Water')
                setImage(cancer)
                setSummary('The Cancer people are cautious, protective, nurturing, secretive, instinctive, needy, sensitive, funny, empathetic and deeply complex people.')
            } else if (monthDayNumber >=723 && monthDayNumber <= 822) {
                setAstrology('Leo (Lion)')
                setElement('Fire')
                setImage(leo)
                setSummary('The Leos are distinctive, provocative, demanding, goal-oriented, flamboyant, self-made, warm, outgoing, sincere and loyal people.')
            } else if (monthDayNumber >= 823 && monthDayNumber <= 922) {
                setAstrology('Virgo (Virgin)')
                setElement('Earth')
                setImage(virgo)
                setSummary('The Virgos are obsessive, realistic, analytical, reliable, self-contained, knowledgeable, predictable, street-smart, detailed and modest people.')
            } else if (monthDayNumber >= 923 && monthDayNumber <= 1023) {
                setAstrology('Libra (Balance)')
                setElement('Air')
                setImage(libra)
                setSummary('Librans are harmonious, civilized, intellectual, sophisticated, seductive, elegant, creative, witty, balanced, sociable and people who maintain their status quo.')
            } else if (monthDayNumber >= 1024 && monthDayNumber <= 1121) {
                setAstrology('Scorpio (Scorpion)')
                setElement('Water')
                setImage(scorpio)
                setSummary('The Scorpio people are intense, magnetic, erotic, challenging, secretive, powerful, broody, passionate, immovable and penetrating.')
            } else if (monthDayNumber >= 1122 && monthDayNumber <= 1221) {
                setAstrology('Sagittarius (Archer)')
                setElement('Fire')
                setImage(sagittarius)
                setSummary('The Sagittarius are adventurous, hilarious, extrovert, romantics, spirited, unstoppable, generous, happy and open-minded.')
            } else {
                setAstrology('Capricorn (Goat)')
                setElement('Earth')
                setImage(capricorn)
                setSummary('The Capricorn people are organized, respectful, devoted, classy, materialistic, serious, staid, ambitious and practical.')
            }                 
        } else {
            setAstrology("Please make sure you fill in valid date.")
        }
    }, [monthDayNumber])

    return (
        <div  className="output-content-inner astrology">
            <p>Your astrology is <strong className="result astrology-result">{astrology}</strong> </p>
            <p>Your element is <strong className="result astrology-result">{element}</strong> </p>
            <img className="astrology-img" src={image} alt=""/>
            <p className="astrology-summary">{summary}</p>
            <div className="info">
            <p>Information from <a className="info-link" href="https://astrologybay.com/zodiac-characteristics">AstrologyBay</a></p>
            </div>
        </div>
    )
}

export default Astrology
