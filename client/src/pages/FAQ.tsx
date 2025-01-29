import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';

const FAQ: React.FC = () => {

    return (
        <section id="faq" className="container px-4 py-5">
            <h2 className="pb-2 border-bottom">Frequently Asked Questions</h2>
            <h2 className="text-center text-body-primary">Frequently Asked Questions</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
              <div className="feature col">
                <div className="col d-flex align-items-start">
                  <div>       
                    <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Q: What is the average size of a tiny home built by TinyTopia?</h3>
                    <p>A: Tiny homes come in various sizes, typically ranging from 100 to 400 square feet. At TinyTopia, we customize our designs to fit your needs, so the size can be tailored to your preferences and can accommodate individuals, couples, or small families.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
              <div className="feature col">
                <div className="col d-flex align-items-start">
                  <div>   
                    <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Q: Are tiny homes environmentally friendly? How so?</h3>
                    <p>A: Absolutely! Tiny homes are inherently eco-friendly due to their compact size and efficient design. We at TinyTopia take it a step further by using sustainable materials, implementing energy-efficient appliances, and optimizing natural lighting and ventilation. This reduces the overall carbon footprint and promotes a greener lifestyle.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
              <div className="feature col">
                <div className="col d-flex align-items-start">
                  <div>  
                    <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Q: What are the benefits of living in a tiny home?</h3>
                    <p>A: Living tiny offers numerous advantages! It encourages a minimalist lifestyle, reducing clutter and promoting a more organized and stress-free environment. Tiny homes are often more affordable, energy-efficient, and easier to maintain. They can also provide a sense of freedom and mobility, allowing you to downsize and potentially live mortgage-free.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
              <div className="feature col">
                <div className="col d-flex align-items-start">
                  <div> 
                    <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Q: Can I customize the design and layout of my tiny home?</h3>
                    <p>A: Customization is one of our specialties! We understand that each client has unique needs and tastes. Our design team will work closely with you to incorporate your style and functional requirements. From layout design to material choices, we aim to make your tiny home a personalized sanctuary.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
              <div className="feature col">
                <div className="col d-flex align-items-start">
                  <div>
                    <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">Q: Can I move my tiny home if I want to relocate?</h3>
                    <p>A: One of the advantages of tiny homes is their mobility. Most tiny homes are built with a trailer base, allowing for easy transportation. However, we recommend consulting with our team to ensure your home is travel-ready and to discuss any necessary preparations for a smooth transition to a new location.</p>       
                  </div>
                </div>
              </div>        
            </div>

        </section>
      
    );
};
export default FAQ;