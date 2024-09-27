import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
			<section className="colorlib-work" data-section="projects">
				<div className="colorlib-narrow-content">
					<div className="row">
						<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
							<span className="heading-meta">My Work</span>
							<h2 className="colorlib-heading animate-box">Recent Projects</h2>
						</div>
					</div>
					<div className="row">
						{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
							<div className="project" style={{backgroundImage: 'url(images/work-1.jpeg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="https://aideephealth.com/" target="_blank" rel="noopener noreferrer">AiDeepHealth</a></h3>
										<span>Human Centered HealthCare AI</span>
										<p className="icon">
											<span><a href="https://aideephealth.com/" target="_blank" rel="noopener noreferrer"><i className="icon-social-github" /></a></span>
										</p>
									</div>
								</div>
							</div>
						</div> */}
						<div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
							<div className="project" style={{backgroundImage: 'url(images/work-2.jpeg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="https://www.linkedin.com/posts/siranjeevi-s-70229220b_project-report-activity-6827559157743415296-QYNK" target="_blank" rel="noopener noreferrer">Ai Product Prototyping</a></h3>
										<span>Document</span>
										<p className="icon">
											<span><a href="https://www.linkedin.com/posts/siranjeevi-s-70229220b_project-report-activity-6827559157743415296-QYNK" target="_blank" rel="noopener noreferrer"><i className="icon-social-github" /></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInTop">
							<div className="project" style={{backgroundImage: 'url(images/work-3.jpeg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="https://www.linkedin.com/posts/siranjeevi-s-70229220b_market-segmentation-on-electric-vehicle-activity-6854710967104888832-swli" target="_blank" rel="noopener noreferrer">Market Segmentation</a></h3>
										<span>Document</span>
										<p className="icon">
											<span><a href="https://www.linkedin.com/posts/siranjeevi-s-70229220b_market-segmentation-on-electric-vehicle-activity-6854710967104888832-swli" target="_blank" rel="noopener noreferrer"><i className="icon-social-github" /></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
							<div className="project" style={{backgroundImage: 'url(images/work-4.jpeg)'}}>
								<div className="desc">
									<div className="con">
										<h3><a href="https://github.com/siranjeevi21/chatbot/blob/main/chatbot.py" target="_blank" rel="noopener noreferrer">Chatbot</a></h3>
										<span>GitHub Repository</span>
										<p className="icon">
											<span><a href="https://github.com/siranjeevi21/chatbot/blob/main/chatbot.py" target="_blank" rel="noopener noreferrer"><i className="icon-social-github" /></a></span>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
      </div>
    )
  }
}
