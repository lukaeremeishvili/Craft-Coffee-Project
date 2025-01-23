import './home.css';

const Home = () => {
    return (
        <>
     <div className="main-layout">
  
     <div className="admin">
    <div className="menu1">
      <h1>Admin Console</h1>
      <a href="#" className='btn1'><img src="./coffee.png" alt="coffee.png" />Coffee</a>
      <a href="#" className="btn2"><img src="./grocery.png" alt="grocery.png" />Ingredients</a>
    </div>
  </div>

  <div className="content">
    <header>
      <div className="container">
        <div className="title">
          <h2>Manage Members</h2>
        </div>
        <div className="link">
          <a href="#">+ Add Coffee</a>
        </div>
      </div>
    </header>

    <div className="panel">
      <div className="container2">
        <h2>name</h2>
        <h2>price</h2>
        <h2>description</h2>
        <h2>strength</h2>
        <h2>Status</h2>
        <h2>flavor</h2>
      </div>
      <div className="line"></div>
      <div className="g1"> 
        <h2><img src=".\Frame 1000002834.svg" alt="Frame 1000002834.svg"/>Arabica Blend</h2>
        <h2>$15.99</h2>
        <h2>smooth flavor </h2>
        <h2>Medium</h2>
        <h2>Available</h2>
        <h2>Chocolate, Nutty</h2>
      </div>
      <div className="g1"> 
        <h2><img src=".\Frame 1000002834.svg" alt="Frame 1000002834"/>Arabica Blend</h2>
        <h2>$15.99</h2>
        <h2>smooth flavor </h2>
        <h2>Medium</h2>
        <h2>Available</h2>
        <h2>Chocolate, Nutty</h2>
      </div>
    </div>
  </div>
</div>


        </>
    );
}

export default Home;
