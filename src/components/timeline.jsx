import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Project & Work Experiences</span>
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
                        <h2>Machine Learning Intern <span>July 2021 - Sep 2021</span></h2>
                        <p>
                          I collaborated with a team of 3 members in building Market Segmentation using Machine Learning and DataAnalysis for ElectricVehicles Startup.AI product/service prototyping on Healthcare. AI product/service prototyping on Healthcare.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Grroom<span> July 2021 - Sep 2021</span></h2>
                        <p>
                          Tested Machine-Learning mode accuracy of tiny-yolo model which boosted the downloads around 100+ on Google Play Store.Annotated over 3000 images for training on yolo-model.Labelled over 4000 images for training on yolo-model. Builded the logic for converting image types.

                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Enkindle Technologies Private Limited<span> Mar 2022 - Sep 2024</span></h2>
                        <p>
                          As a full-stack developer, I successfully developed and deployed the Insolvency Case Management System (ICMS) and 
                          eVoting applications using React, Material UI, Python, and AWS services. I contributed to maintaining high code quality through code 
                          review and team collaboration, while demonstrating proficiency in React, Material UI, AWS, Python, and graph databases. My expertise in 
                          these technologies allowed me to create robust and scalable web applications that met project requirements and were delivered on time.
                        </p>
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
