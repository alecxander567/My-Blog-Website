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
      content: `The first week of classes was a lot of learnings for me we have learned about Physical
        Network Designs like Core, Distribution, and Access Layers. We have understand the different classes of IP Addresses such as Class A, Class B, and Class C and when to use them or implement them depending on the needs of users we also tackled about VLANS and different types of VLANS.
        We also discussed about supernetting/subnettings and how many users can be handled in each subnets. 
        Also we discussed about The History of Information Security just to give us a brief introduction for the
        subject and learned about the enigma machine used by the germans back then ciphering their communications. Base on the introduction of the subjects I pretty much want to learn more about computer networks and security.
        And I also hope that we will survive this school year from projects to exams and activities hopefully everything goes well.`,
      date: new Date().toLocaleString(),
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
        width: '100vw',
        padding: '2rem',
        position: 'relative',
        zIndex: 1,
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
          className="card mb-4 bg-dark text-white border-info blog-card-hover"
          style={{ cursor: 'pointer' }}
          onClick={() => handleOpenModal(blog)}
        >
          <div className="card-body">
            <h5 className="card-title text-info"> <i className="fas fa-file-alt me-2"></i>{blog.title}</h5>
            <p className="text-secondary" style={{ fontSize: '0.9rem' }}>
              <i className="far fa-calendar-alt me-2"></i>{blog.date}
            </p>
            <p className="card-text text-truncate">{blog.content}</p>
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
