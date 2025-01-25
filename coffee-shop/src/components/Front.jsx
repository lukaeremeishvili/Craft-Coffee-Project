import './front.css';
const Front = () => {
    const products = [
        {
            name: "Arabica Blend",
            price: "$15.99",
            description: "Smooth flavor",
            strength: "Medium",
            status: "Available",
            flavor: "Chocolate, Nutty",
            image: "cofe12.svg",
            seemore: "see more"
        },
       
      
      
    ];
    const productRows = products.map((product, index) => (
        <div className="product-row" key={index}>
            <div className="product-info">
                <img src={product.image} alt={`${product.name} Icon`} className="product-image" />
                <h2 className="product-name">{product.name}</h2>
            </div>
            <h2 className="product-price">{product.price}</h2>
            <h2 className="product-description">{product.description}</h2>
            <h2 className="product-strength">{product.strength}</h2>
            <h2 className="product-status">{product.status}</h2>
            <h2 className="product-flavor">{product.flavor}</h2>
            <a href="#" className='product-more'>{product.seemore}</a>
            
        </div>
    ));
    return (
        <>
         
            <header>
                <div className="container">
                    <div className="logo">
                    <a href="#first-section1">
                    <h1>Coffee<span>Shop</span></h1>
                    </a>
                       
                    </div>
                    <div className="navbar">
                        <a href="#first-section1">Home</a>
                        <a href="#second-section2">catalog</a>
                        <a href="#third-section">Favorite</a>
                        <a href="#section4">ingredients</a>
                    </div>
                    <div className="hamburger">
                        <input type="checkbox" className="menu" id="menu" />
                        <label htmlFor="menu">
                            <i className="fa-solid fa-bars"></i>
                        </label>
                        <div className="sidebar-menu">
                        <a href="#first-section1">Home</a>
                        <a href="#second-section2">catalog</a>
                        <a href="#third-section">Favorite</a>
                        <a href="#section4">ingredients</a>
                        </div>
                    </div>
                </div>
            </header>
            <section className='first-section1' id='first-section1'>
            <div className="first-section">
            <div className="background container ">
            <h1>Start a great day with a good Coffee</h1>
            <p> At Brew Haven, we believe every cup tells a story. From the rich aroma of freshly ground beans to the warm embrace of your favorite latte, we’re here to make every sip unforgettable. Whether you're here for a quick espresso, a cozy corner to work, or just a moment to unwind, our baristas are ready to serve you with a smile.</p>
            </div>
            </div>
            <div className="second-section">
            <h2>Enjoy our Coffee</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed at adipiscing faucibus lacus tellus euismod. Dictum 
            etiam urna turpis volutpat et nulla.</p>
            <a href="#">Order NOW!</a>
            </div>
            <div className="images">
            <img src="./public/coffe2.jpg" alt="Image1" />
            <img src="./public/coffe3.avif" alt="Image2" />
            </div>
            </section>
            
             
           


           <section className='second-section2' id='second-section2'>
           <div className="wrap">
           <div className="line">
            <h2>Become Club Member for Special Offer!</h2>
            </div>
            <img src="./public/cofe01.svg" alt="" />
            <h1>Free Membership Card !!</h1>
            <div className="line2">
            <h2>Click Here For Registration</h2>
            </div>
           </div>
           </section>
         

             <section className='third-section' id='third-section'>
             <div className="customers-favorite">
            <div className="container3">
            <div className="imgs">
            <img src="./public/coffee4.png" alt="" />
            <img src="./public/cofe5.jpg" alt="" />
            <img src="./public/cofe12.svg" alt="" />
            <img src="./public/cofe02.svg" alt="" />
            </div>
            <div className="column">
            <h2>Customers' Favorites</h2>
            <p>Lorem ipsum dolor sit amet, 
consectetur adipiscing elit. 
Tortor tincidunt sagittis nullam 
vel nec, id sodales elementum.</p>
             <a href="#">See Menu!</a>
            </div>
            </div>
            </div>   
            <div className="size">
            <img src="./public/cofee20.svg" alt="" />
            </div>
             </section>
           <section className='section4' id='section4'>
           <div className="product-panel">
  <div className="header-row">
    <h2 className="header-name">Name</h2>
    <h2 className="header-price">Price</h2>
    <h2 className="header-description">Description</h2>
    <h2 className="header-strength">Strength</h2>
    <h2 className="header-status">Status</h2>
    <h2 className="header-flavor">Flavor</h2>
    <h2 className="header-more">See more</h2>

  </div>
  <div className="divider"></div>
  {productRows}
 </div>
</section>
  


            <footer>
            <div className="footer-container">
            <div className="footer-logo">
            <h1>Coffee<span>Shop</span></h1>
            <p>Your daily dose of energy and joy!</p>
            </div>
            <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#first-section1">Home</a>
            <a href="#second-section2">catalog</a>
            <a href="#third-section">Favorite</a>
            <a href="#section4">ingredients</a>
             </div>
            <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>Email: info@coffeeshop.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Coffee St., Brew City</p>
            </div>
            <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-linkedin"></i></a>
            </div>
        </div>
    </div>
    <div className="footer-bottom">
        <p>© 2025 CoffeeShop. All rights reserved.</p>
    </div>
</footer>

        </>

    );
};

export default Front;
