import '../styles/Portfolio.css'
import '../styles/Home.css'
// Specified project values are passed to the Project component
export default function Portfolio() {

  return (
    <section className="portfolioSection">
      <p>
        Welcome to Tim's portfolio! The entire portfolio is under renovation. Also, the portfolio is being used as a way to implement, learn, refine, and apply coding concepts and tools.
      </p>
      <p>
        R&D - new routing. Updating from BrowserRouter to HashRouter. ~80% complete.
      </p>
      <p>
        Refractored file organization and syntax.
      </p>
      <p>
        Implemented a one stop shop page containing resume and business information. Problem addressed: needed a static link to share resume/business card that does not change when the documents are updated.
      </p>
      <p>
        Add Top 2 Projects, Add accolades
      </p>
    </section>
  );
}