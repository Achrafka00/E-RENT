import React from "react"
import Heading from "../../common/Heading"
import "./Featured.css"
import FeaturedCard from "./FeaturedCard"

const Featured = () => {
  return (
    <>
      <section className='featured'>
        <div className='container'>
          <Heading title='Featured Property Types' subtitle='Explore Premium Properties' />
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Featured
