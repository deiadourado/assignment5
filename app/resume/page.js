/*Student Name: Andreia Araujo Dourado
Student number: 200560835
E-mail: 200560835@student.georgianc.on.ca*/

import Head from 'next/head';
import '../styles/resume.css';

export default function ResumePage() {
  return (
    <>
      <Head>
        <title>Resume - Andreia's Portfolio</title>
        <meta
          name="description"
          content="Explore Andreia's professional resume, showcasing her skills, education, and experience."
        />
        <link rel="icon" href="favicon.ico" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fleur+De+Leah&family=Sour+Gummy:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="resume-container">
        <h1 className="resume-title">Resume</h1>
        <div className="resume-section">
          <h2>Andreia Dourado</h2>
          <p>Toronto, ON | +647-834-7995 | <a href="mailto:andydourado@hotmail.com">andydourado@hotmail.com</a></p>
          <p>
            <a href="https://www.linkedin.com/in/andreiaadourado/" target="_blank" rel="noopener noreferrer">
              LinkedIn Profile
            </a>
          </p>
        </div>

        <div className="resume-section">
          <h3>Objective</h3>
          <p>
            To obtain a Data Analyst position in an innovative company where I can leverage my analytical expertise,
            technical proficiency, and passion for actionable insights to drive strategic decision-making and propel business growth.
          </p>
        </div>

        <div className="resume-section">
          <h3>Education</h3>
          <ul>
            <li>
              <strong>Diploma - Computer Programming</strong>, Georgian College at ILAC, Toronto, ON (May 2023 - Expected Graduation: December 2024)
            </li>
            <li>
              <strong>Bachelor’s Degree - Agricultural Engineering</strong>, Federal Institute of Education, Science and Technology of Triângulo Mineiro (IFTM), Uberaba, Brazil (February 2011 - July 2016)
            </li>
            <li>
              <strong>Diploma - Pedagogy (Early Childhood Education)</strong>, UniBrasilia College, Minas Gerais, Brazil (February 2019 - December 2019)
            </li>
          </ul>
        </div>

        <div className="resume-section">
          <h3>Highlights of Qualifications</h3>
          <ul>
            <li>Programming Languages: Python, Java, C++, JavaScript</li>
            <li>Analytics Tools: Power BI, Metabase</li>
            <li>Database: MySQL, SQL Server</li>
            <li>Software: ERP Systems (MV Systems, TOTVS, Protheus)</li>
            <li>Productivity Tools: Microsoft Office, Google Docs, Slack, Teams</li>
            <li>Languages: English (Advanced), French (Beginner), Portuguese (Native)</li>
          </ul>
        </div>

        <div className="resume-section">
          <h3>Experience</h3>
          <h4>Administrative Assistant</h4>
          <p>Mario Palmerio University Hospital, Uberaba, Brazil (2018 - 2020)</p>
          <ul>
            <li>Financial Analysis and Cash Flow Control</li>
            <li>
              Development of Scripts and Process Automation using Python: Utilized Python to automate financial tasks, reducing time spent on repetitive processes and minimizing errors
            </li>
            <li>
              Data Collection, Analysis, and Visualization: Conducted financial data surveys to prepare bi-weekly reports on private hospital services
            </li>
            <li>Training of new employees and development of Standard Operating Procedures (SOPs)</li>
            <li>
              Data Analysis and Implementation of Solutions: Verified active debts since 2015, successfully reducing more than R$20,000.00 in unpaid accounts
            </li>
          </ul>

          <h4>Research Assistant</h4>
          <p>Coffee Growing Research Center, Federal Institute of Education, Science and Technology of Triângulo Mineiro (2012 - 2016)</p>
          <ul>
            <li>
              Data Analysis and Results Communication: Conducted data analysis to present collected results in documents and presentations at events and conferences
            </li>
            <li>
              Event Organization and Communication: Organized bi-weekly events on Coffee Cultivation for the student community
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
