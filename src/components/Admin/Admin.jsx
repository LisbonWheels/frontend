import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Admin.css";
import { useNavigate } from "react-router-dom";
import partnerLogos from "../../assets/partners";
import { minWidth } from "@mui/system";
const Admin = () => {
  const [company, setCompany] = useState([]);
  const [available, setAvailable] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/company").then((response) => {
      setCompany(response.data);
    });
  }, []);

  return (
    <div className="company-list-admin">
      {company?.length > 0
        ? company.map((company) => (
            <div
              key={company?.id}
              className="partner-card"
              style={{ height: "250px", minWidth: "350px" }}
            >
              <div className="container-card">
                <img
                  src={company?.company_image}
                  alt={company?.company_name}
                  className="company-photo"
                  style={
                    company?.company_name === "Rentalcars.com"
                      ? { backgroundColor: "#1779CA", marginTop: "30px" }
                      :  { marginTop: "20px" }
                  }
                />
                <div className="car-info-container">
                  <h2 className="company-name">Name: {company?.company_name}</h2>
                  <p className="partner-nb">
                    Partner Number:{company.number_partners}
                  </p>
                  <div className="logo-container">
                    {partnerLogos.map((partner, index) =>
                      index + 1 <= company.number_partners ? (
                        <>
                          <img
                            className="partner-logos"
                            src={partner}
                            alt={partner}
                            height="30px"
                            width="45px"
                          />
                        </>
                      ) : null
                    )}
                  </div>
                  <div className="admin-buttons">
                    <div className="edit-details"> Edit Details</div>
                    <button
                      className="change-availability-admin"
                      onClick={() => navigate("/cars-list")}
                    >
                      {" "}
                      Check Fleet available
                    </button>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          ))
        : navigate("/login")}
    </div>
  );
};

export default Admin;
