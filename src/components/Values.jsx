import Image from '../images/values.jpg'
import SectionHead from './SectionHead'
import {GiCutDiamond} from 'react-icons/gi'
import { values } from '../data'
import Card from '../UI/Card'

const Values = () => {
  return (
    <section className='values'>
        <div className="container values__container">
            <div className="values__left">
                <div className="values-image">
                    <img src={Image} alt="Values Image" />
                </div>
            </div>
            <div className="values__right">
                <SectionHead icon={<GiCutDiamond/>} title="Values"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, architecto!</p>
                <div className="values__wrapper">
                    {
                        values.map(({id, icon, title, desc})=>
                        {
                            
                        })
                    }
                </div>
            </div>
        </div>

    </section>
  )
}

export default Values