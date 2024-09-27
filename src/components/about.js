import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">About Me</span>
                    <h2 className="colorlib-heading">Who Am I?</h2>
                    <p>Enthusiastic, Futuristic, Detail-Oriented, Disciplined, Motivated</p>
  
                    <p>are how I will describe myself.</p>
                    <p>
                    I am fascinated with the world of technology. Ever since I was a young boy, I have always been attracted 
                    to the rapid growth of technology and especially how it functioned. Throwback to the first time I ever 
                    setup a social media account and having my first smartphone, I have determined to be an engineer who 
                    could build new technologies that could contribute to the community. 
                    </p>
                    <p></p>
                    <p>
                    where I now innovate as a Junior Software developer at Enkindle Technologies. 
                    My role involves creating robust web applications, incorporating React, Python, and AWS services, which aligns with
                    my inclination towards functional programming and building scalable solutions.
                    </p>
                    <p></p>
                    <p>
                    Transitioning from healthcare to technology, 
                    I've applied analytical skills and a meticulous approach to my work in software development. The shift from a background as a 
                    pharmacist to a tech professional demonstrates adaptability and a continuous pursuit of growth, with a commitment to enhance 
                    my contributions in the tech space.
                    </p>
                    <p></p>
                    <p>
                    I am currently looking for Job opportunities for 2024 to keep honing my technical skills 
                    and get exposed to solving more real-world problems. Please feel free to drop me a DM or send me an 
                    email if you want to know more about me!
                    </p>
                    <p></p>
                    <p>Skills: React, JavaScript, Python, Java; SQL, HTML, CSS, Material UI, JSON, XML, GIT, AWS Services, Algorithms, Data Structures, Report Design(BIRT), RESTful API</p>
                    <p>Tools: Visual Studio, Pycharm, Jupyter Notebook, PG Admin, Eclipse, Sublime Text</p>
                    <p style={{fontWeight: "bold", color: "#80c0f7", textAlign: "center", fontSize: "1.6rem", fontStyle: "italic"}}> 
                        "Success is no accident. It is hard work, perseverance,
                        learning, studying, sacrifice and most of all, love of what you
                        are doing or learning to do." 
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Technical Skills</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            // <div className="col-md-4 text-center animate-box">
            //     <div className="services color-1">
            //     <span className="icon">
            //         <i className="icon-bulb" />
            //     </span>
            //     <div className="desc">
            //         <h3>Machine Learning</h3>
            //         <p>
            //             I fell in love with developing .
            //             I have experiences in developing using libraries such as Tensorflow, Numpy, Pandas, Scikit-Learn, Matplotlib, Streamlit.
            //             My internship experiences have sparked my interest in creating real world applications using Machine-Learning.
            //         </p>
            //     </div>
            //     </div>
            // </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Software Development</h3>
                    <p>
                        Solving real world problems has always been an interest of mine. I love developing softwares that could contribute
                        to the community. I am aspired to learn Software development which would change the life of us.
                    </p>
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
