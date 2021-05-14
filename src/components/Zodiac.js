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
                        <p>{animalsChinese[index]}</p>
                    </div>               
                </div>
            </div>         
            <div className="placeholder"></div>        
            <p className="info">Paintings by <a className="info-link" href="https://baike.baidu.com/item/%E6%9D%8E%E5%B0%A4%E4%BF%8A#reference-[1]-3321755-wrap"> Li Youjun 李尤俊</a></p>
        </div>
    )
}

export default Zodiac
