import bannerPix from "../assets/images/restaurantfood.jpg";

export default function Main() {
return (
  <main>
    <section className="hero">
      <div>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p>
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button>Reserve a Table</button>
      </div>
      <img src={bannerPix} alt="restaurant pix"></img>
    </section>
  </main>
);
}
