import React from 'react'
import './services.css'
import {BsCheck2Square} from 'react-icons/bs'

const Services = () => {
  return (

    <section id='services'>
        <div className='services__heading'>
        <h5>What We Offer</h5>
      <h2>Our Services</h2>
        </div>
        <div className='container services__container'>
            <div className="row">
                <div className="col-lg-4 mb-5">
                    {/* 1st service */}
        <div className='services'>
          <div className='services__head'>
            <h3>Knowledge Representation</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BsCheck2Square className='services__icon'/>
              <p>Ontologies</p>
            </li>
            <li>
              <BsCheck2Square className='services__icon'/>
              <p>Knowledge Graphs </p>
            </li>
            <li>
              <BsCheck2Square className='services__icon'/>
              <p>Data Visualization</p>
            </li>
            <li>
              <BsCheck2Square className='services__icon'/>
              <p>Database Design</p>
            </li>
          </ul>
        </div>
        {/* end */}
                </div>
                <div className="col-lg-4 mb-5">
                    {/* second service */}
        <div className='services'>
          <div className='services__head'>
            <h3>Research Consulting</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BsCheck2Square className='services__icon'/>
              <p>Help with finding research sources</p>
            </li>
            <li>
              <BsCheck2Square className='services__icon'/>
              <p>Publshing Reviews</p>
            </li>
            <li>
              <BsCheck2Square className='services__icon'/>
              <p>Publshing Reviews</p>
            </li>
          </ul>
        </div>
        {/* end */}
                </div><div className="col-lg-4 mb-5">
                    {/* 3d service */}
        <div className='services'>
          <div className='services__head'>
            <h3>3rd service</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BsCheck2Square className='services__icon'/>
              <p>Publshing Reviews</p>
            </li>
            <li>
              <BsCheck2Square className='services__icon'/>
              <p>Publshing Reviews</p>
            </li>
            <li>
              <BsCheck2Square className='services__icon'/>
              <p>Publshing Reviews</p>
            </li>
          </ul>
        </div>
        {/* end */}
                </div>
            </div>
        </div>
    </section>
  )
}
export default Services