import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import Monkey from '../images/zodiac/Monkey.PNG'
import Rooster from '../images/zodiac/Rooster.PNG'
import Dog from '../images/zodiac/Dog.PNG'
import Pig from '../images/zodiac/Pig.PNG'
import Rat from '../images/zodiac/Rat.PNG'
import Ox from '../images/zodiac/Ox.PNG'
import Tiger from '../images/zodiac/Tiger.PNG'
import Rabbit from '../images/zodiac/Rabbit.PNG'
import Dragon from '../images/zodiac/Dragon.PNG'
import Snake from '../images/zodiac/Snake.PNG'
import Horse from '../images/zodiac/Horse.PNG'
import Goat from '../images/zodiac/Goat.PNG'


function Zodiac() {

    const year = useSelector(state => state.year.year)
    const animals = ['Monkey', 'Rooster', 'Dog', 'Pig', 'Rat',' Ox', 'Tiger', 'Rabbit', 'Dragon', 'Snake', 'Horse', 'Goat']
    const animalsChinese = ['猴', '鸡', '狗', '猪', '鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊']
    const personalities = [
        "Entertaining, intelligent, optimistic, sociable, fickle, secretive, unpredictable",
        "Adventurous, charitable, funny, loyal, argumentative, boastful, self-involved",
        "Helpful, honest, trustworthy, unselfish, pessimistic, anxious, timid",
        "Caring, generous, smart, outgoing, fearful, impatient, materialistic",
        "Ambitious, charming, talkative, resourceful, private, frugal, critical",
        "Diligent, gentle, hardworking, reliable, patient, materialistic, stubborn",
        "Confident, brave, magnetic, idealistic, thrill-seeking, arrogant, selfish",
        "Kind, sensitive, artistic, romantic, judgmental, timid, refined",
        "Outspoken, energetic, generous, intelligent, perfectionistic, egocentric, impatient",
        "Clever, curious, alluring, wise, anxious, calculating, jealous",
        "Amusing, enthusiastic, independent, persuasive, irresponsible, moody, opportunistic",
        "Easygoing, empathetic, creative, cheerful, disorganized, impulsive lazy"
    ]
    const index = year%12

    const [image, setImage] = useState()
    useEffect(() => {
        switch(index) {
            case 0: setImage(Monkey)
                    break
            case 1: setImage(Rooster)
                    break
            case 2: setImage(Dog)
                    break
            case 3: setImage(Pig)
                    break
            case 4: setImage(Rat)
                    break
            case 5: setImage(Ox) 
                    break
            case 6: setImage(Tiger)
                    break
            case 7: setImage(Rabbit)
                    break
            case 8: setImage(Dragon)
                    break   
            case 9: setImage(Snake)
                    break
            case 10: setImage(Horse)
                    break
            case 11: setImage(Goat)
                    break
            default: setImage()
                    break
        }
    }, [index])
    
    return (
        <div className="output-content-inner zodiac">
            <p>Your Chinese Zodiac is <strong className="result zodiac-result">{animals[index]}</strong></p>
            <div className="img-char">
                <div className="img-char-inner">
                    <div className="front">
                        <img src={image} alt=""/>
                    </div>
                    <div className="back">
                        <p className="char">{animalsChinese[index]}</p>
                        <p className="personality"> <strong>Personality traits: </strong> {personalities[index]}</p>
                    </div>               
                </div>
            </div>         
            <div className="placeholder"></div>  
            <div className="info">
            <p>Personality from <a className="info-link" href="https://www.oprahdaily.com/life/a35119928/chinese-zodiac-signs/">Oprah Daily</a></p>
            <p>Paintings by <a className="info-link" href="https://baike.baidu.com/item/%E6%9D%8E%E5%B0%A4%E4%BF%8A#reference-[1]-3321755-wrap"> Li Youjun 李尤俊</a></p>
            </div>
        </div>
    )
}

export default Zodiac
