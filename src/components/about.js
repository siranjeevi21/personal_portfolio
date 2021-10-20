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
                    The moment I got exposed to Machine Learning and Software Development, I have aspired to be a software engineer in the future. I 
                    enjoy developing backend applications/ Machine learing models. I 
                    am so fortunate to gain some real-life experience from working in an agile development with a team of 
                    knowledgeable senior engineers. Their mentorship and valuable tips have helped me to improve my 
                    technical skills drastically. These past few years of experiences have molded me into a detailed-
                    oriented, responsible and committed future engineer with a "get it done" mentality who always ensure 
                    high quality production and code delivery.
                    </p>
                    <p></p>
                    <p>
                    "Jarvis" in Iron Man has expanded my vision on the world of technologies which eventually stir up my 
                    curiosity in Artificial Intelligence. I have done bachelor degree in Pharmacy. I have dreamt of building my own AI 
                    machine in the future which could make a huge impact to the society.
                    </p>
                    <p></p>
                    <p>
                    I am currently looking for internship opportunities for 2022 to keep honing my technical skills 
                    and get exposed to solving more real-world problems. Please feel free to drop me a DM or send me an 
                    email if you want to know more about me!
                    </p>
                    <p></p>
                    <p>Programming Languages: Python3</p>
                    <p>Libraries:  Tensorflow, Scikit-Learn, Matplotlib, Numpy, Pandas, Streamlit</p>
                    <p>Tools: Anaconda, Sublime-Text, Pycharm, Google-Collab</p>
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
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Machine Learning</h3>
                    <p>
                        I fell in love with developing Machine-Learing model.
                        I have experiences in developing using libraries such as Tensorflow, Numpy, Pandas, Scikit-Learns, Matplotlib, Streamlit.
                        My internship experiences have sparked my interest in creating real world applications using Machine-Learning.
                    </p>
                </div>
                </div>
            </div>
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
