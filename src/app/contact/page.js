import Header from "../components/Header";

export default function Contact() {
  return (
    <div style={{maxWidth: 900, margin: "0 auto", padding: "2rem 1rem"}}>
      <Header />
      <h1 style={{fontSize: "2.2rem", color: "#d35400", fontWeight: 800, marginBottom: 24}}>Contact Festfud Kecee</h1>
      <p style={{fontSize: "1.1rem", marginBottom: 8}}>Email: <a href="mailto:support@festfudkecee.com" style={{color: "#d35400", textDecoration: "underline"}}>support@festfudkecee.com</a></p>
      <p style={{fontSize: "1.1rem", marginBottom: 8}}>Phone: <a href="tel:0812FESTKECEE" style={{color: "#d35400", textDecoration: "underline"}}>0812-FEST-KECEE</a></p>
      <p style={{fontSize: "1.1rem"}}>Address: Jl. Cepat Saji No. 1, Jakarta</p>
    </div>
  );
}
