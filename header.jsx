import React, { useState, useEffect } from 'react';

function JobPortalHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Effect to manage the dynamic CSS for mobile menu and responsiveness
  useEffect(() => {
    const styleId = 'job-portal-header-styles-dynamic';
    let styleElement = document.getElementById(styleId);

    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    // Define core CSS that might need media queries or pseudo-classes
    const dynamicCss = `
      .job-navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        background-color: #ffffff;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        z-index: 1000;
        box-sizing: border-box;
      }

      .job-logo-l img {
        height: 50px; /* Adjust as needed */
      }

      .job-nav-links {
        list-style: none;
        display: flex;
        gap: 25px;
        margin: 0;
        padding: 0;
        align-items: center;
      }

      .job-nav-links li a {
        text-decoration: none;
        color: #333;
        font-weight: 500;
        transition: color 0.3s ease;
      }

      .job-nav-links li a:hover {
        color: #007bff;
      }

      .job-signup-btn, .job-post-job-btn {
        background-color: #007bff;
        color: white;
        padding: 8px 15px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        gap: 8px; /* Space between icon and text */
        transition: background-color 0.3s ease;
        text-decoration: none; /* Ensure links look like buttons */
      }

      .job-post-job-btn {
        background-color: #28a745; /* A different color for post job */
      }

      .job-signup-btn:hover {
        background-color: #0056b3;
      }

      .job-post-job-btn:hover {
        background-color: #218838;
      }

      .job-menu-toggle {
        display: none; /* Hidden by default for desktop */
        font-size: 24px;
        cursor: pointer;
        color: #333;
      }

      /* Responsive adjustments for smaller screens */
      @media (max-width: 768px) {
        .job-nav-links {
          display: ${isMobileMenuOpen ? 'flex' : 'none'};
          flex-direction: column;
          position: absolute;
          top: 70px; /* Below the navbar */
          left: 0;
          width: 100%;
          background-color: #ffffff;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          padding: 20px 0;
          border-top: 1px solid #eee;
          z-index: 999;
          transition: transform 0.3s ease-in-out;
          transform: translateY(${isMobileMenuOpen ? '0' : '-100%'});
        }

        .job-nav-links li {
          width: 100%;
          text-align: center;
          padding: 10px 0;
        }

        .job-menu-toggle {
          display: block; /* Show hamburger icon on mobile */
        }
      }
    `;

    styleElement.textContent = dynamicCss;

    // Cleanup function: remove the style element when component unmounts
    return () => {
      if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className="job-navbar">
      <div className="job-logo-l">
        <a href="/">
          {/* Assuming you have a logo for your job portal */}
          <img src="/static/images/job_portal_logo.png" alt="Job Portal Logo" />
        </a>
      </div>
      <div className="job-menu-toggle" onClick={toggleMobileMenu}>
        &#9776;
      </div>
      <ul className="job-nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/find-jobs">Find Jobs</a></li>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="#contact">Contact Us</a></li>
        <li><a href="/login" className="job-signup-btn">Login / Signup &rarr;</a></li> {/* Combined login/signup */}
      </ul>
    </nav>
  );
}

export default JobPortalHeader;
