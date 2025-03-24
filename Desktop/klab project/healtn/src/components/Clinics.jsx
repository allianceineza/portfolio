import React from "react";
import "../assets/styles/clinics.css";
import { useNavigate } from 'react-router-dom';

export const clinicsData = [
  { id: 1, image: "/imageh/nikubwawe.jpg",
     title: "Nikubwawe Clinic",
      description: "Book now for better health",
       link: "http://www.wiwohospital.com/index.html" 
    },
  { id: 2, 
    image: "/imageh/best care.jpg",
     title: "Best care Clinic", 
     description: "Your health starts here",
      link: "http://www.wiwohospital.com/index.html" 
    },
  { id: 3,
     image: "/imageh/nanuri.jpg",
      title: "Nanuri Clinic", 
      description: "Pharmacy that really delivers", 
      link: "http://www.wiwohospital.com/index.html" 
    },
  { id: 4, 
    image: "/imageh/nyirinkwaya.JPG", 
    title: "HOPITAL LA CROIX DU SUD,Nyirinkwaya Hospital", 
    description: "Book now for better health", 
    link: "https://hopitalcroixdusud.com/" 

},
  { id: 5, 
    image: "/imageh/ubumuntu.jpg",
     title: "Ubumuntu Clinic", 
     description: "Your health starts here",
      link: "http://www.wiwohospital.com/index.html" 
    },
  { id: 6,
     image: "/imageh/wiwo.jpeg",
      title: "Wiwo Pharmacy", 
      description: "Pharmacy that really delivers",
       link: "http://www.wiwohospital.com/index.html" 
    },
    { id: 7,
      image: "/imageh/biennaitre.png",
       title: "clinique bien naitre", 
       description: "clinic that really delivers",
        link: "https://kigalihealth.com/clinique-bien-naitre/" 
     },
     { id: 8,
      image: "/imageh/ada clinic.jpeg",
       title: "ADA Clinic", 
       description: "clinic that really delivers",
        link: "https://rwanda.worldplaces.me/view-place/50604491-ada-clinic.html" 
     },
     { id: 7,
      image: "/imageh/biennaitre.png",
       title: "clinique bien naitre", 
       description: "clinic that really delivers",
        link: "https://kigalihealth.com/clinique-bien-naitre/" 
     },
     { id: 8, 
      image: "/imageh/Optica_TRM.webp",
       title: "OPTICA EYE CENTER ", 
       description: "Your health starts here",
        link: "https://rw.optica.africa/pages/optica-kigali-kigali-heights" 
      },
      { id: 9, 
        image: "/imageh/harmony.jpeg",
         title: "POLYCLINIQUE HARMONY", 
         description: "Your health starts here",
          link: "https://kigalihealth.com/harmony-clinic/" 
        },
        { id: 10, 
          image: "/imageh/dr agwuas.webp",
           title: "DR Agarwals", 
           description: "Your health starts here",
          link: "https://www.dragarwal.com/eye-hospital/kigali/?ref=GMB&utm_source=GMB&utm_medium=Organic&utm_campaign=RWD" 
          },
          { id: 11, 
            image: "/imageh/kigali psycho medical center.jpeg",
             title: "kigali psycho medical center", 
             description: "Your health starts here",
            link: "https://mentalhealthafrica.org/directory/kigali-psycho-medical-centre/" 
            },
            { id: 12, 
              image: "/imageh/polyclinique du carrefour.jpeg",
               title: "polyclinique du carrefour", 
               description: "Your health starts here",
              link: "https://afridoctor.com/search/andrologue/kigali/jean-dieudonne-gatsinga--polyclinique-du-carrefour-" 
              },
              { id: 13, 
                image: "/imageh/POLYCLINIQUE LA MEDICALE BUTARE.jpeg",
                 title: "POLYCLINIQUE LA MEDICALE BUTARE ", 
                 description: "Your health starts here",
                link: "https://rw78025-clinique-medicale-de-huye.contact.page/" 
                },



];

const Clinic = () => {
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/singlecard/${id}`);
  };

  return (
    <>
     <div className="clinic-care">
        <div className="care-goes">
          <h1>Care that goes wherever you go</h1>
        <p>Get 24/7 on-demand virtual care by message or video, included in Membership.<br/> Or, book a one-time virtual visit for a flat fee with Pay-per-visit.</p>
        <div class="button-container">
    <button class="custom-button">Membership</button>
    <button class="custom-button">Pay-per-visit</button>
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
            <p>{post.title}</p>
            <p>{post.description}</p>
            {/* <p>{post.link}</p> */}
            <a href={post.link} target="_blank" rel="noopener noreferrer"  onClick={() => handleNavigate(post.id)}>
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
