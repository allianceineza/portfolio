import React from "react";
import "../assets/styles/clinics.css";
import { useNavigate } from 'react-router-dom';

export const clinicsData = [
  { id: 1, image: "/imageh/fadhil pharmacy.jpg",
     title: "Fadhil Pharmacy",
      description: "Book now for better health",
       link: "https://keonline.biz/business/222419-fadhil-pharmacy" 
    },
  { id: 2, 
    image: "/imageh/destopher pharmacy.jpg",
     title: "Destopher pharmacy", 
     description: "Your health starts here",
      link: "http://www.wiwohospital.com/index.html" 
    },

      { id: 3,
         image: "/imageh/kipharma.jpg",
          title: "Kipharma Pharmacy", 
          description: "Pharmacy that really delivers", 
          link: "https://www.google.com/maps/dir/-1.9570954,30.0600126/Kipharma+Pharmacy,+Nyarugenge,+KN+74+Street,+Nyarugenge,+Kigali/@-1.9516969,30.0539375,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x19dca424635ca529:0x505be6ca4f00ae5b!2m2!1d30.0571846!2d-1.9462963?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" 
        },
      { id: 4, 
        image: "/imageh/nathanya.jpg", 
        title: "Nathanya Pharmacy", 
        description: "Book now for better health", 
        link: "https://www.google.com/maps/dir/-1.9571001,30.061457/23P6%2B93V+Nathanya+pharmacy+Ltd,+Kigali/@-1.9604364,30.0586523,17z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x19dca5a2e8cc1f7b:0x4f28076371159db6!2m2!1d30.0601851!2d-1.9639874?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" 
    
    },
      { id: 5, 
        image: "/imageh/conseil.jpeg",
         title: "Conseil Pharmacy", 
         description: "Your health starts here",
          link: "https://www.pharmacieconseil.org/" 
        },
      { id: 6,
         image: "/imageh/city.jpg",
          title: "City  Pharmacy", 
          description: "Pharmacy that really delivers",
           link: "https://www.google.com/maps/dir/-1.9570954,30.0600126/City+Pharmacy+Ltd,+KN76ST+Outside,+Kigali+City+Market,+Kigali/@-1.9513346,30.0533402,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x19dca5a1753276d7:0x2ca2198f40af4c07!2m2!1d30.0570584!2d-1.9474321?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" 
        },
        { id: 7,
          image: "/imageh/afia.jpeg",
           title: "clinique bien naitre", 
           description: "clinic that really delivers",
            link: "https://www.google.com/maps/dir/-1.9571001,30.061457/Afia+Pharma,+KK+698+St,+Kigali/@-1.9571827,30.0589559,15z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x19dca7a6cd85b019:0x6efca88b625dba69!2m2!1d30.0772754!2d-1.9691775?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" 
         },
         { id: 8,
          image: "/imageh/dorrie.jpg",
           title: "Dorrie Pharmacy", 
           description: "clinic that really delivers",
            link: "https://www.google.com/maps/dir/-1.9570954,30.0600126/Dorrie+Pharmacy,+KN+20+Ave,+Kigali/@-1.9565329,30.0530776,16z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x19dca5c6821ca5eb:0x82bee57ab6300974!2m2!1d30.0540523!2d-1.9583263!3e2?entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D" 
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
    