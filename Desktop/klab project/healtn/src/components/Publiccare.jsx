import React from "react";
import "../assets/styles/clinics.css";

export const clinicsData = [
  { id: 1, image: "/imageh/CHIK.jpeg", name: "CHIK", description: "Book now for better health", link: "https://chuk.rw/" },
  { id: 2, name: "/imageh/kacyirupolicehospital.jpeg", title: "Kacyiru police hospital", description: "Your health starts here", link: "https://police.gov.rw/media/news-detail/news/a-glance-at-kacyiru-police-hospital-the-quest-to-become-a-referral/" },
  { id: 3, name: "/imageh/kibagabaga hospital.jpeg", title: "Kibagabaga hospital", description: "Pharmacy that really delivers", link: "https://www.kibagabagahospital.gov.rw/1/h" },
  { id: 4, name: "/imageh/rwanda military hospital.jpeg", title: "Rwanda Military Referral and Teaching Hospital", description: "Book now for better health", link: "https://rwandamilitaryhospital.rw/index.php?id=135" },
  { id: 5, name: "/imageh/king faisal.jpeg", title: "King Faisal Hospital", description: "Your health starts here", link: "https://kfh.rw/" },
  { id: 6, name: "/imageh/ndera hospital.jpeg", title: "Ndera hospital", description: "your health start here", link: "https://www.nderahospital.rw/" },
  { id: 7, name: "/imageh/masaka hospital.jpeg", title: "Masaka Hospital", description: "Your health starts here", link: "https://www.masakahospital.gov.rw/" },
  { id: 8, name: "/imageh/ruhengeri hispital.jpeg", title: "Ruhengeri Referral hospital", description: "your health start here", link: "https://www.rrh.gov.rw/" },
  { id: 9, name: "/imageh/butaro hospital.jpeg", title: "Butaro hospital", description: "your health start here", link: "https://www.butarohospital.gov.rw/" },
];

const Clinic = () => {
  

  return (
    <>
      <div className="clinic-care">
        <div className="care-goes">
          <h1>Care that goes wherever you go</h1>
          <p>Get 24/7 on-demand virtual care by message or video, included in Membership.<br /> Or, book a one-time virtual visit for a flat fee with Pay-per-visit.</p>
          <div className="button-container">
            <button className="custom-button">Membership</button>
            <button className="custom-button">Pay-per-visit</button>
          </div>
        </div>
        <div className="caregoes-image">
          <img src="/imageh/onlineservice.webp" alt="Nikubwawe Clinic" />
        </div>
      </div>

      <div className="clinics-container">
        {clinicsData.map((post) => (
          <div key={post.id} className="service">
            <div className="clinics-image">
              <img src={post.image} alt={post.title} />
            </div>
            <div className="descriptions">
              <p>{post.name}</p>
              <p>{post.description}</p>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Clinic;
