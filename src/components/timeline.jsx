import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Solstice<br/><span>Technical Analyst ( July 2018 - Present )</span></h2>
                        <ul>
                          <li>Use and mandate best practices in software development, including MVC pattern, Dependency Injection, and RESTful Web Services.</li>
                          <li>Working with Spring Boot and Spring Cloud with Microservice architecture by performing Test Driven development practice (XP).</li>
                          <li>CI/CD with Jenkins on variety of cloud platforms such as AWS, GCP, Heroku and PCF.</li>
                          <li>Utilizing frontend framework like Angular and React.</li>
                          <li>Modernizing existing Monolithic Legacy apps to Microservices for Financial Organizations with improved performance and scalability.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Chicago State University<br/><span>Full Stack Java Developer ( June 2017 - May 2018 )</span></h2>
                        <ul>
                          <li>Provided continued maintenance and development of bug fixes and patch sets for existing web applications.</li>
                          <li>Utilized programming capabilities in Java with Spring Boot, SQL and JavaScript and other front-end libraries as needed.</li>
                          <li>Improved performance of parking management system by 40%.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Chicago State University<br/><span>Master's degree, Computer Science· (2016 - 2018)</span></h2>
                        <p>I am pursuing my under-graduation studies with major in I.C.T.(Information & Communication Technology). I have taken courses like DSA, OOPs, Computer Networks, IOT, Web-Data Management over the years and have better understanding of these subjects.I have also been part of S.B.G.(Student Body Govenance) scince my first year of college.</p>
                      </div>
                    </div>
                  </article>

                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Fastrack Dealcomm Private Limited<br/><span>Product Design Engineer ( May 2014 - March 2015 )</span></h2>
                        <p>Designined parts of Injection molding and looms machinery. Performed Stress/Strain analysis with product design via CAD/CAM software.</p>
                      </div>
                    </div>
                  </article>


                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Windsor Machines Ltd<br/><span>Mechanical Engineering Intern August 2013 - April 2014 (9 months)</span></h2>
                        <p>Productivity improvement and quality control</p>
                        <ul>
                        <li>Identify the constraint and material flow</li>
                        <li>Use productivity tools such as six sigma, lean manufacturing</li>
                        <li>Eliminate additional movements</li>
                        <li>Managing enhancement of productivity</li>
                        </ul>



                        <p>Optimization of injection molding machine process parameters using Taguchi method</p>
                        <ul>
                          <li>Parameters selection for optimization</li>
                          <li>Taguchi methodology</li>
                          <li>S/N ratio with respect to process parameters</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Kalol Insiture Of Technology & Research Center<br/><span>Bachelor of Engineering - BE, Mechanical Engineering · (2010 - 2014)</span></h2>
                        <p>I have completed my beachlor of engineering with major of Mechanical Engineering. I have learned Power Plant Engineering, Engineering Design, Physics, Mechanics of Solid, Theory of Machines, Fluid Power Engineering, Material Science & Metallurgy, Heat & Mass Transfer, Machine Design and Calculus.</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
