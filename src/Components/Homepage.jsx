import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../css/Homepage.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';

function Homepage() {
  const navigate = useNavigate();

  const goToLandingPage = () => navigate('/');

  // Blog data
  const blogData = [
    {
      title: "Week 1 NET102 & IAS101",
      content: `The first week of classes was full of learning for me. We learned about Physical Network Designs, such as the Core, Distribution, and Access Layers.

  We also understood the different classes of IP addresses—Class A, Class B, and Class C—and when to use them depending on user needs. Additionally, we discussed VLANs and the different types of VLANs.

  Subnetting and supernetting were covered as well, including how many users can be handled within each subnet.

  In IAS101, we explored the history of Information Security as an introduction to the subject. We even learned about the Enigma machine used by the Germans during the war to cipher their communications.

  Based on these introductions, I’m excited to learn more about computer networks and security. I also hope we survive this school year—from projects to exams and activities—hopefully, everything goes well.`,
      date: "04/07/2025",
    },
    {
      title: "Week 2 NET102 & IAS101",
      content: `During the second week of NET102, we started learning how to configure VLANs. It was my first time trying to set up ports and assign IP addresses, and I honestly found it quite challenging. At first, I was confused about which ports to assign and how the IP addresses should be arranged properly. It took me some time to understand how everything connects, but step by step, I started to get the idea.

Even though I struggled, I realized that configuring VLANs is really important for organizing and securing a network. It's not just plugging in cables — there’s logic behind how devices are grouped and how they communicate.

In IAS101, we discussed the Top-Down and Bottom-Up approaches in protecting software systems. What I understood is that:

The Top-Down approach starts from the management or organization level. It focuses on planning, creating policies, and setting rules for how systems should be protected.

The Bottom-Up approach, on the other hand, starts from the technical side — like developers or IT staff working on specific parts of the system to keep it secure.

These two approaches helped me see that security isn't just about technology — it's also about how an organization thinks and plans.

Overall, this week was a bit difficult for me, but I know that struggling is part of learning. I'm slowly building my understanding, and I look forward to improving more in the next lessons.`,
      date: "14/07/2025"
    },
    {
      title: "Week 3 NET102 & IAS101",
      content: `This week in NET102, we focused on configuring VLANs—and to be honest, it was a struggle at first. I found it confusing trying to understand how devices are grouped and how the configuration actually works. I kept messing up the commands and second-guessing if I was doing things right. But after a lot of trial and error, and asking for help, I slowly started to get the hang of it. It’s not easy, but it feels rewarding when you finally see it work the way it should.

In IAS101, we talked about the need for security, which really made me think. We learned about software attacks and how both hardware and software can fail unexpectedly. It was a bit overwhelming hearing about all the ways systems can break or be attacked, but at the same time, it made me realize how important cybersecurity really is. It’s not just about having a strong password—it’s about being prepared for all kinds of threats.

Overall, this week wasn’t easy, but it was full of learning. Even if VLANs gave me a hard time, I know it’s part of the process. Both subjects are teaching me how to not just set things up, but also how to protect and maintain them—and that’s something I really need as a future IT professional.`,
      date: "19/07/2025"
    },
    {
      title: "Week 4 NET102 & IAS101",
      content: `This week in NET102, we focused on learning about routers, IP addresses, routing tables, and the difference between logical and physical addresses. At first, the terms were kind of confusing, but as we went through the discussions and examples, I started to understand how devices communicate in a network. What stood out to me the most was learning how the gateway address works—it’s basically the door for a device to reach other networks. I also found the topic of IPv4 structure really interesting, especially when we started discussing binary basics and how each IP address is formed. It made me realize how important even the smallest detail is when it comes to networking.

In IAS, we had a quiz about "The Need for Security", and it honestly opened my eyes more to how vulnerable our data can be. The quiz made me review things like why security is important, the possible threats in systems, and what can happen if we take it lightly. It made me more conscious about online habits like reusing passwords or clicking unknown links. Even though it was just a quiz, it reminded me that cybersecurity is not just a topic we study—it’s something we need to practice in real life too.

Overall, this week was really informative for both subjects. I feel like I’m slowly building a stronger foundation in networking and becoming more aware of the role of security in IT. Even though some parts were a bit challenging, I enjoyed the process of learning and connecting the concepts to real-world situations.`,
      date: "26/07/25"
    }
  ];

  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedBlog(null);
  };

  return (
    <div
      className="homepage-wrapper d-flex flex-column"
      style={{
          backgroundColor: '#121212',
          color: 'white',
          minHeight: '100vh',
          width: '100%', 
          padding: '2rem',
          position: 'relative',
          zIndex: 1,
          overflowX: 'hidden',
      }}

    >
      <div className="background-icons">
        <i className="fas fa-network-wired icon network"></i>
        <i className="fas fa-shield-alt icon shield"></i>
        <i className="fas fa-lock icon lock"></i>
        <i className="fas fa-server icon server"></i>
      </div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-info m-0">
          <i className="fas fa-blog"></i> My Blogs
        </h2>
        <button className="btn btn-outline-info" onClick={goToLandingPage}>
          <i className="fas fa-arrow-left me-2"></i> Back
        </button>
      </div>
      {blogData.map((blog, index) => (
        <div
          key={index}
          className="card mb-4 bg-dark text-white blog-card-hover"
          style={{
            cursor: 'pointer',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
            border: 'none',
            transition: 'transform 0.2s',
          }}
          onClick={() => handleOpenModal(blog)}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          <div className="card-body">
            <h5 className="card-title text-info">
              <i className="fas fa-file-alt me-2"></i>{blog.title}
            </h5>
            <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
              <i className="far fa-calendar-alt me-2"></i>{blog.date}
            </p>
            <p className="card-text text-truncate">{blog.content}</p>
            <div className="d-flex justify-content-end mt-3">
              <button
                className="btn btn-outline-info btn-md"
                onClick={(e) => {
                  e.stopPropagation(); // Prevents modal trigger when button is clicked
                  handleOpenModal(blog);
                }}
              >
                Read Blog
              </button>
            </div>
          </div>
        </div>
      ))}
      {showModal && selectedBlog && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.8)' }}
          onClick={handleCloseModal}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content bg-dark text-white border-info">
              <div className="modal-header">
                <h5 className="modal-title text-info"> <i className="fas fa-file-alt me-2"></i>{selectedBlog.title}</h5>
                <button type="button" className="btn-close btn-close-white" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
                  <i className="far fa-calendar-alt me-2"></i>{selectedBlog.date}
                </p>
                <p style={{ whiteSpace: 'pre-line' }}>{selectedBlog.content}</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-outline-info" onClick={handleCloseModal}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
