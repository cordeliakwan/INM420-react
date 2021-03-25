
export default function Burgers() {
  return (
    <div className="Burger">
      <div className="banner-div">
        <div className="menu-category-div">
          <h1 className="menu-category">Burger</h1>
        </div>
      </div>
      <div className="menu-div">
        <div className="menu-row">
          <div className="menu-item">
            <h3>Cheeseburger</h3>
            <p>Two-grilled quarter-pound patties, topped with cheddar, lettuce, tomatoes, red onions, pickles, and our signature cactus dip, on a brioche bun.</p>
            <h4>$10.00</h4>
          </div>
          <div className="menu-item">
            <h3>The Big Dipper</h3>
            <p>Sliced steak, roasted red peppers, pizza mozzarella, and panko crusted onion rings. Served with horseradish mayo and au jus.</p>
            <h4>$12.00</h4>
          </div>
          <div className="menu-item">
            <h3>Grilled Chicken Clubhouse</h3>
            <p>Garlic cheese baked baguette layered with chicken breast, bacon, lettuce and fresh tomato, drizzled with our secret sauce.</p>
            <h4>$12.00</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
