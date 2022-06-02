import React from 'react'
import './About.scss'

const About = () => {
  return (
    <div className='about' id ="about">
        <div className='container'>
            <h2>About Us</h2>
            <span className='line'></span>
                    <p><strong>MHB IT SERVICES</strong> was established by an IT enginners to provide IT solutions.
                        The company is obligated to provide a wide range of computer services to 
                        their dedicated customers to enhance technological advancement and ensures
                        effective intergration of ICT for successive operation of their customers.
                    </p>
                    <div className='content'>
                        <div className='card'>
                            <h3>Objective Of MHB IT SERVICES</h3>
                            <ul>
                                <li>To provide secure IT services to all dedicated customers.</li>
                                <li>To develop useful software to fulfil the technological advancement and enhance business competition.</li>
                                <li>To provide solid and genuine computer hardware parts.</li>
                                <li>To Provide ICT education and create awareness to society through cooperation with diffrent
                                    organizations so as to enhance technological advancement.
                                </li>
                            </ul>
                        </div>
                        <div className='card'>
                            <h3>Mission</h3>

                            <p>
                                Enhance technological advancement and ensure effective integration of ICT for successful 
                                operation of the stakeholders.
                            </p>

                        </div>

                        <div className='card'>
                            <h3>VISION</h3>

                            <p>
                                To be a world class ICT solution provider, cooperating with different 
                                ICT oriented organizations to intensity technological excellence.
                            </p>

                        </div>
                    </div>
        </div>
        
    </div>
  )
}

export default About