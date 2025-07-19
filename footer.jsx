import React, { useEffect } from 'react';

function JobPortalFooter() {
  // Effect to manage the dynamic CSS for the footer
  useEffect(() => {
    const styleId = 'job-portal-footer-styles-dynamic';
    let styleElement = document.getElementById(styleId);

    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    const dynamicCss = `
      .job-footer {
        background-color: #f8f8f8;
        padding: 40px 20px;
        color: #333;
        font-family: Arial, sans-serif;
        border-top: 1px solid #eee;
        margin-top: 50px; /* To separate from content above */
      }

      .job-footer-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        max-width: 1200px;
        margin: 0 auto;
        gap: 20px; /* Space between columns */
      }

      .job-footer-section {
        flex: 1;
        min-width: 200px; /* Minimum width for sections */
        margin-bottom: 20px;
      }

      .job-footer-section h3 {
        color: #007bff;
        margin-bottom: 15px;
        font-size: 1.2em;
        border-bottom: 2px solid #007bff;
        padding-bottom: 5px;
        display: inline-block; /* To make border-bottom only under text */
      }

      .job-footer-section p, .job-footer-section ul {
        font-size: 0.95em;
        line-height: 1.6;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .job-footer-section ul li {
        margin-bottom: 8px;
      }

      .job-footer-section ul li a {
        color: #555;
        text-decoration: none;
        transition: color 0.3s ease;
      }

      .job-footer-section ul li a:hover {
        color: #007bff;
      }

      .job-social-icons {
        margin-top: 15px;
        display: flex;
        gap: 15px;
      }

      .job-social-icons a {
        color: #007bff;
        font-size: 24px;
        transition: color 0.3s ease;
      }

      .job-social-icons a:hover {
        color: #0056b3;
      }

      .job-footer-bottom {
        text-align: center;
        margin-top: 30px;
        padding-top: 20px;
        border-top: 1px solid #eee;
        font-size: 0.85em;
        color: #666;
      }

      /* Responsive adjustments */
      @media (max-width: 768px) {
        .job-footer-container {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .job-footer-section {
          min-width: unset; /* Remove min-width on small screens */
          width: 90%; /* Take more width */
        }

        .job-footer-section h3 {
          margin-left: auto;
          margin-right: auto;
        }

        .job-social-icons {
          justify-content: center;
        }
      }
    `;

    styleElement.textContent = dynamicCss;

    return () => {
      if (styleElement && styleElement.parentNode) {
        styleElement.parentNode.removeChild(styleElement);
      }
    };
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <footer id="footer" className="job-footer">
      <div className="job-footer-container">
        <div className="job-footer-section about">
          <h3>About Us</h3>
          <p>Campus 2 Career connects job seekers with top employers, offering career opportunities across various industries. Your gateway to a successful career!</p>
        </div>
        <div className="job-footer-section categories">
          <h3>Job Categories</h3>
          <ul>
            <li><a href="/jobs/software-development">Freshers</a></li>
            <li><a href="/jobs/digital-marketing">Experience</a></li>
            <li><a href="/jobs/finance-accounting">Non-It</a></li>
            <li><a href="/jobs/data-analytics">It</a></li>
          </ul>
        </div>
        <div className="job-footer-section resources">
          <h3>Job Seeker Resources</h3>
          <ul>
            <li><a href="/resources/resume-tips">Resume Tips</a></li>
            <li><a href="/resources/interview-preparation">Interview Preparation</a></li>
            <li><a href="/resources/career-advice">Career Advice</a></li>
            <li><a href="/job-alerts">Job Alerts</a></li>
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="job-footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@campus2career.com</p>
          <p>Phone: +91 86085 45663</p>
          <p>Address: 131 2nd St, KK Nagar, Chennai-600078</p>
          <div className="job-social-icons">
            {/* Using text for icons as Font Awesome is excluded */}
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="face">FB</a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="x">X</a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="linkedin">LI</a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="insta">IG</a>
          </div>
        </div>
      </div>
      <div className="job-footer-bottom">
        <p>&copy; 2025 Campus 2 Career | All rights reserved.</p>
      </div>
    </footer>
  );
}

export default JobPortalFooter;
