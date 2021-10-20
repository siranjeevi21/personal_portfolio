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
                        <h2>Grroom<span>July 2021 - Sep 2021</span></h2>
                        <p>
                          Tested Machine-Learning mode accuracy of tiny-yolo model which boosted the downloads around 100+ on Google Play Store.Annotated over 3000 images for training on yolo-model.Labelled over 4000 images for training on yolo-model. Builded the logic for converting image types.

                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Information Technology Assistant at HUSKERTECH <span>June 2019 - Feb 2020</span></h2>
                        <p>
                          I worked as an IT assistant at Huskertech which was the main Information Technology service provider for University of Nebraska-Lincoln. I assisted students and UNL faculty to diagnose and troubleshoot various software application, computer hardware, operating systems, and network connection
                          issues by utilizing my knowledge in the aspect of software and hardware. I helped them with technology questions while establishing proper communication and customer service skills by providing in-depth, step-by-step guidance over the phone call, support tickets online, and walk-in appointments.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-1">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>International Welcome Team at UNL New Student Enrollment Office <span>August 2019 - March 2020</span></h2>
                        <p>
                          I was very proud to be chosen as an International Welcome Team member after a tough selection process competing with approximately 180 talented candidates. This role required us to always be a role model for the incoming international students and made them feel at home. I had to
                          demonstrate flexibility working with my fellow peers to ensure to ensure 450 students’ needs are met during international orientation and welcome week. It had been a crazy and amazing journey working for this job and the most rewarding part from this job was the valuable friendships
                          that all of us held dearly.
                        </p>
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
