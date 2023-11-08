import { useEffect, useState } from "react";
import "./serviecs.css";

const ServicesPage = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    // Simulate fetching data from an API or database
    // You should replace this with an actual API call
    const fetchData = async () => {
      try {
        // Replace with your API endpoint
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const data = await response.json();
        console.log(data);
        setServices(data);
      } catch (error) {
        console.error("Error fetching services: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Our Services</h1>

      {services.length === 0 ? (
        <p>Loading services...</p>
      ) : (
        <div className="services">
          {services.map((service) => (
            <div className="ServicesItem" key={service.id}>
              <h2> Userid {service.id} </h2>
              <h3> {service.title} </h3>
              <p>{service.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesPage;
