import Header from "../components/Header";

export default function About() {
  return (
    <div style={{maxWidth: 900, margin: "0 auto", padding: "2rem 1rem"}}>
      <Header />
      <h1 style={{fontSize: "2.2rem", color: "#d35400", fontWeight: 800, marginBottom: 24}}>About Festfud Kecee</h1>
      <p style={{fontSize: "1.1rem", marginBottom: 16}}>
        Festfud Kecee is your go-to fast food store for delicious burgers, crispy fries, and refreshing drinks. We pride ourselves on quick service and quality ingredients.
      </p>
      <p style={{fontSize: "1.1rem"}}>
        Order online, check our menu, or contact us for catering and events!
      </p>
    </div>
  );
}
