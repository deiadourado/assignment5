/*Student Name: Andreia Araujo Dourado
Student number: 200560835
E-mail: 200560835@student.georgianc.on.ca*/

import Image from 'next/image';
import '../styles/portfolio.css';

export default function PortfolioPage() {
  return (
    <div className="portfolio-container">
      <h1 className="portfolio-title">My Portfolio</h1>
      <p className="portfolio-description">
      </p>

      <div className="portfolio-grid">
        <div className="portfolio-item">
          <Image
            src="/birthday.png"
            alt="Project 1 - Birthday invite"
            width={400}
            height={300}
            className="portfolio-image"
          />
          <h3 className="portfolio-item-title">Project 1 - Birthday invite</h3>
          <p className="portfolio-item-description">
            
          </p>
        </div>

        <div className="portfolio-item">
          <Image
            src="/pudim.png" 
            alt="Pudim"
            width={300}
            height={200}
            className="portfolio-image"
          />
          <h3 className="portfolio-item-title">Projeto 2 - Brazilian Flan</h3>
          <p className="portfolio-item-description">
            The main page presents the step-by-step recipe for Brazilian Flan, with clear and concise instructions.
            Gallery: A gallery of images presents photos of Brazilian Flan at different stages of preparation and completion.
            Nutritional characteristics: A section dedicated to the nutritional characteristics of Brazilian Flan provides information on calories, protein, carbohydrates, fats, and other important nutrients.
          </p>
        </div>
      </div>
    </div>
  );
}