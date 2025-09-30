import 'bootstrap-icons/font/bootstrap-icons.css';
import { FadeInItem, AnimatedList } from '../components/animations/FadeInItem';
import './HomePage.css';
import '../App.css';

function HomePage() {
  return (
    <div>
      <section id="home" className="app-section section-home">
        <h2>Welcome to Imanje Solutions</h2>
        <p>Your trusted partner for cutting-edge IT solutions. We specialize in delivering innovative technology services that drive business success.</p>
        <a href="tel:+14702612528" className="contact-button">
          <div className="home-chat-button"><span>Chat With Us</span></div>
        </a>
      </section>
      <section id="capabilities" className="app-section section-capabilities">
        <h2 className="capabilities-header">What We Can Do For You</h2>
        <p className="capabilities-text">We offer a wide range of IT services to meet your business needs, including software development, mobile app development, and IT consulting.</p>
        <div className="card-home card-1">
          <img src="/images/search-engine-optimization-sml.webp" alt="SEO Services" className='card-img' />
          <h2 className="card-title">Search Engine Optimization (SEO)</h2>
          <AnimatedList items={[
            "Keyword Research",
            "On-Page Optimization",
            "Link Building",
            "Content Strategy",
          ]} />
           
        </div>
        <div className="card-home card-2">
          <img src="/images/laptop-computer-icons-sm.webp" alt="Web Development Services" className='card-img' />
          <h2 className="card-title">Custom Web Design and Development</h2>
          <ul className="card-list">
            <FadeInItem delay={0.1}><li><span className="card-list-item">Custom Website Design</span></li></FadeInItem>
            <FadeInItem delay={0.2}><li><span className="card-list-item">E-commerce Solutions</span></li></FadeInItem>
            <FadeInItem delay={0.3}><li><span className="card-list-item">Content Management Systems (CMS)</span></li></FadeInItem>
            <FadeInItem delay={0.4}><li><span className="card-list-item">Responsive Design</span></li></FadeInItem>
            <FadeInItem delay={0.5}><li><span className="card-list-item">Website Maintenance</span></li></FadeInItem>
          </ul>
        </div>
        <div className="card-home card-3">
          <img src="/images/social-media-marketing-sm.webp" alt="Digital Marketing Services" className='card-img' />
          <h2 className="card-title">Digital Marketing</h2>
          <ul className="card-list">
            <FadeInItem delay={0.1}><li><span className="card-list-item">Social Media Management</span></li></FadeInItem>
            <FadeInItem delay={0.2}><li><span className="card-list-item">Email Marketing</span></li></FadeInItem>
            <FadeInItem delay={0.3}><li><span className="card-list-item">Pay-Per-Click (PPC) Advertising</span></li></FadeInItem>
            <FadeInItem delay={0.4}><li><span className="card-list-item">Content Marketing</span></li></FadeInItem>
            <FadeInItem delay={0.5}><li><span className="card-list-item">Analytics and Reporting</span></li></FadeInItem>
          </ul>
        </div>
        <div> <a href="tel:+14702612528"><button className='get-started-button'>Get Started</button></a></div>
      </section>
      <section id="philosophy" className="app-section section-philosophy">
        <h2>Our Philosophy</h2>
        <p>At Imanje Solutions, we believe in the power of technology to transform businesses. Our mission is to provide innovative IT solutions that help our clients achieve their goals and stay ahead in a competitive market.</p>
        <p className="philosophy-quote">Whatever you do, work at it with all your heart, as working for the Lord, not
        for human masters. - Colossians 3:23</p>
      </section>
      <section id="vision" className="app-section section-vision">
       <div className="vision-card">
        <h2>Let's Make Your Vision a Reality</h2>
        <p>Contact us today to discuss how we can help your business thrive with our expert IT solutions.</p>
        <a href="tel:+14702612528"><button className='contact-button-vision'>Contact Us</button></a>
       </div>
       <div className="vision-image">
        <img src="/images/roundtable.webp" alt="Team Collaboration" className='vision-img' />
       </div>
      </section>
      <section id="blog-posts" className="app-section section-blog-posts">
        <h2>Latest Blog Posts</h2>
        <div className="blog-card">
          <img src="/images/minimal-logo-design-item-sm.webp" alt="Logo Design" className='blog-img' />
          <h4>Why Do All Websites Look the Same?</h4>
          <p className="blog-subtitle">Imanje Solutions Wants to Break the Mold</p>
          <div className="blog-post-container">
            <p className='blog-text truncate-multiline'>In the age of templates, trends, and tech-driven efficiency, the internet
             has become a sea of sameness. Scroll through a dozen startup sites and 
             you’ll likely see the same minimalist layouts, sans-serif fonts, 
             pastel gradients, and generic icons. Logos? A predictable mix of abstract 
             shapes, lowercase typography, and safe color palettes. It’s clean, 
             yes—but also forgettable.</p>
          </div>
            
          <a href="/blog/post-slug"><button className='read-more-button'>Read More</button></a>
        </div>
        <div className="blog-card post-two">
          <img src="/images/different_cultures-sm.webp" alt="Designing for Different Cultures" className='blog-img' />
          <h4>Designing for Different Cultures:</h4>
          <p className="blog-subtitle">Challenges, Tips, and the Role of AI</p>
          <div className="blog-post-container">
            <p className='blog-text truncate-multiline'>In a globalized digital landscape,
            designing for diverse cultures isn’t just a creative challenge—it’s a strategic 
            imperative. Every color, shape, font, and symbol carries cultural weight, 
            and what feels intuitive in one region may be confusing—or even offensive—in 
            another. As brands expand across borders, designers must learn to navigate 
            this complex terrain with empathy, research, and increasingly, artificial 
            intelligence.</p>
          </div>
            
          <a href="/blog/post-slug"><button className='read-more-button'>Read More</button></a>
        </div>
        <div className="blog-card post-three">
          <img src="/images/developers_on_a_couch.webp" alt="Skills AI Can't Replace" className='blog-img' />
          <h4>5 Skills AI Can't Replace</h4>
          <p className="blog-subtitle">And How To Double Down on Them</p>
          <div className="blog-post-container">
            <p className='blog-text truncate-multiline'>In a world where artificial intelligence 
            is rapidly evolving, certain human skills remain irreplaceable. Creativity, 
            emotional intelligence, critical thinking, adaptability, and interpersonal 
            communication are the key skills that AI cannot replicate. By focusing on these 
            areas, individuals can enhance their value in the workforce and ensure they remain 
            indispensable.</p>
          </div>
            
          <a href="/blog/post-slug"><button className='read-more-button'>Read More</button></a>
        </div>
      </section>
    </div>
  );
}
export default HomePage;