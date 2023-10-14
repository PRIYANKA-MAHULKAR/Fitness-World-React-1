
import { useState } from "react"
import SectionHead from "./SectionHead"
import {ImQuotesLeft} from 'react-icons/im'
import Card from "../UI/Card"
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from 'react-icons/io'
import { testimonials } from "../data"





const Testimonials = () => {
    const[index, setIndex] = useState(0)
    const {name, quote,job, avatar} = testimonials[index];


    
  return (
    <section className="testimonials">
        <div className="container testimonials__container">
            <SectionHead icon={<ImQuotesLeft/>} title="Testimonials"/>
            <Card className="testimonial">
                <div className="testimonial__avatar">
                    <img src={avatar} alt={name} />
                </div>

            </Card>
        </div>
    </section>
  )
}

export default Testimonials