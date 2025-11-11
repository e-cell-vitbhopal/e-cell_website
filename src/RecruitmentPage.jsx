import React from 'react';
import Navbar from './newecell/Navbar/Navbar';
import Footer from './newecell/Footer/Footer';
import Recruitment from './newecell/Recruitment/Recruitment';
import './newecell.css';

function RecruitmentPage() {
  return (
    <div className="newecell-app-container">
      <div className="newecell-app-content">
        <Navbar />
        <main className="newecell-main" style={{ paddingTop: '80px' }}>
          <Recruitment />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default RecruitmentPage;
