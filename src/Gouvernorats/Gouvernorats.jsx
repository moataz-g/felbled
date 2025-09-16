import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './gouvernorats.css'; 
import Footer from "../Footer";
import Search from "./Search";
import { useTranslation } from 'react-i18next';

const gouvernorats = [
  {
    "Ariana": {
      "image_url": "/gouvernorats/Ariena.jpg",
      "delegations": [
        "Ariana Ville", "La Soukra", "Ettadhamen", "Raoued", "Mnihla", 
        "Kalâat el-Andalous", "Sidi Thabet"
      ]
    }
  },
  {
    "Béja": {
      "image_url": "/gouvernorats/Béja.jpg",
      "delegations": [
        "Béja Nord", "Nefza", "Medjez el-Bab", "Béja Sud", "Testour", 
        "Téboursouk", "Amdoun", "Goubellat", "Thibar"
      ]
    }
  },
  {
    "Ben Arous": {
      "image_url": "/gouvernorats/Ben Arous.jpg",
      "delegations": [
        "El Mourouj", "Fouchana", "Mornag", "Mohamedia", "Radès", 
        "Medina Jedida", "Hammam Lif", "Ben Arous", "Ezzahra", 
        "Bou Mhel el-Bassatine", "Hammam Chott", "Mégrine"
      ]
    }
  },
  {
    "Bizerte": {
      "image_url": "/gouvernorats/bizerte.webp",
      "delegations": [
        "Bizerte Nord", "Menzel Bourguiba", "Ras Jebel", "Mateur", 
        "Bizerte Sud", "Sejnane", "Menzel Jemil", "Joumine", 
        "Ghezala", "El Alia", "Jarzouna", "Tinja", "Ghar El Melh", "Utique"
      ],
      "video_url": "/videos/video bizerte.mp4" 
    }
  },
  {
    "Gabès": {
      "image_url": "/gouvernorats/Gabes.jpg",
      "delegations": [
        "El Hamma", "Gabès Sud", "Mareth", "Gabès Médina", "Gabès Ouest", 
        "Métouia", "Ghannouch", "Nouvelle Matmata", "Menzel El Habib", "Matmata"
      ]
    }
  },
  {
    "Gafsa": {
      "image_url": "/gouvernorats/gafsa.jpg",
      "delegations": [
        "Gafsa Sud", "Métlaoui", "Sened", "El Ksar", "Moularès", "Redeyef", 
        "El Guettar", "Belkhir", "Mdhilla", "Gafsa Nord", "Sidi Aïch"
      ]
    }
  },
  {
    "Jendouba": {
      "image_url": "/gouvernorats/Jendouba.jpg",
      "delegations": [
        "Jendouba Sud", "Ghardimaou", "Fernana", "Tabarka", "Jendouba Nord", 
        "Balta-Bou Aouane", "Aïn Draham", "Bou Salem", "Oued Meliz"
      ]
    }
  },
  {
    "Kairouan": {
      "image_url": "/gouvernorats/Kairouan.jpg",
      "delegations": [
        "Kairouan Nord", "Kairouan Sud", "Bou Hajla", "Sbikha", "Haffouz", 
        "Nasrallah", "Oueslatia", "Hajeb El Ayoun", "Chebika", "El Alâa", 
        "Echrarda"
      ]
    }
  },
  {
    "Kasserine": {
      "image_url": "/gouvernorats/Kasserine.jpg",
      "delegations": [
        "Sbeïtla", "Kasserine Nord", "Fériana", "Sbiba", "Foussana", "Thala", 
        "Majel Bel Abbès", "Kasserine Sud", "Ezzouhour", "El Ayoun", 
        "Hassi El Ferid", "Jedelienne", "Haïdra"
      ]
    }
  },
  {
    "Kébili": {
      "image_url": "/gouvernorats/Kebili.jpg",
      "delegations": [
        "Kébili Sud", "Kébili Nord", "Souk Lahad", "Douz Nord", "Douz Sud", 
        "Faouar"
      ]
    }
  },
  {
    "Manouba": {
      "image_url": "/gouvernorats/Mannouba.jpg",
      "delegations": [
        "Douar Hicher", "Oued Ellil", "La Manouba", "Tebourba", "Djedeida", 
        "Mornaguia", "El Batan", "Borj El Amri"
      ]
    }
  },
  {
    "Mahdia": {
      "image_url": "/gouvernorats/Mahdia.jpeg",
      "delegations": [
        "Mahdia", "Ksour Essef", "Essouassi", "El Jem", "Sidi Alouane", 
        "Bou Merdes", "Chorbane", "Chebba", "Ouled Chamekh", "Melloulèche", 
        "Hebira"
      ]
    }
  },
  {
    "Médenine": {
      "image_url": "/gouvernorats/Medenine.jpg",
      "delegations": [
        "Zarzis", "Ben Gardane", "Djerba - Houmt Souk", "Djerba - Midoun", 
        "Médenine Nord", "Médenine Sud", "Beni Khedache", "Djerba - Ajim", 
        "Sidi Makhlouf"
      ]
    }
  },
  {
    "Monastir": {
      "image_url": "/gouvernorats/monastir.jpg",
      "delegations": [
        "Monastir", "Moknine", "Jemmal", "Ksar Hellal", "Téboulba", 
        "Ksibet el-Médiouni", "Bembla", "Zéramdine", 
        "Sayada-Lamta-Bou Hajar", "Sahline", "Ouerdanine", "Bekalta", "Beni Hassen"
      ]
    }
  },
  {
    "Nabeul": {
      "image_url": "/gouvernorats/Nabeul.jpg",
      "delegations": [
        "Hammamet", "Korba", "Nabeul", "Menzel Temime", "Grombalia", "Kélibia", 
        "Soliman", "Dar Chaâbane El Fehri", "El Haouaria", "Béni Khiar", 
        "Béni Khalled", "Menzel Bouzelfa", "Bou Argoub", "El Mida", "Takelsa", 
        "Hammam Ghezèze"
      ]
    }
  },
  {
    "Sfax": {
      "image_url": "/gouvernorats/Sfax.jpg",
      "delegations": [
        "Sfax Ville", "Sfax Ouest", "Sfax Sud", "Sakiet Eddaïer", "Sakiet Ezzit", 
        "Bir Ali Ben Khalifa", "Thyna", "Jebiniana", "El Hencha", "Agareb", 
        "Menzel Chaker", "Mahrès", "Skhira", "El Amra", "Graïba", "Kerkennah"
      ]
    }
  },
  {
    "Sidi Bouzid": {
      "image_url": "/gouvernorats/sidibouzid.jpeg",
      "delegations": [
        "Sidi Bouzid Ouest", "Regueb", "Sidi Bouzid Est", "Jilma", "Bir El Hafey", 
        "Sidi Ali Ben Aoun", "Menzel Bouzaiane", "Mezzouna", "Meknassy", 
        "Ouled Haffouz", "Souk Jedid", "Cebbala Ouled Asker"
      ]
    }
  },
  {
    "Siliana": {
      "image_url": "/gouvernorats/siliana.jpg",
      "delegations": [
        "Makthar", "Rouhia", "Siliana Sud", "Siliana Nord", "El Krib", 
        "Bou Arada", "Gaâfour", "Kesra", "Sidi Bou Rouis", "Bargou", "El Aroussa"
      ]
    }
  },
  {
    "Sousse": {
      "image_url": "/gouvernorats/Sousse.jpeg",
      "delegations": [
        "M'saken", "Sousse Riadh", "Sousse Jawhara", "Kalâa Kebira", 
        "Sousse Sidi Abdelhamid", "Enfida", "Hammam Sousse", "Sousse Médina", 
        "Kalâa Seghira", "Akouda", "Bouficha", "Sidi Bou Ali", "Kondar", 
        "Sidi El Hani", "Hergla"
      ]
    }
  },
  {
    "Tataouine": {
      "image_url": "/gouvernorats/Tataouine.jpg",
      "delegations": [
        "Tataouine Nord", "Tataouine Sud", "Ghomrassen", "Smâr", "Remada", 
        "Bir Lahmar", "Dehiba"
      ]
    }
  },
  {
    "Tozeur": {
      "image_url": "/gouvernorats/Touzeur.jpg",
      "delegations": [
        "Tozeur", "Degache", "Nefta", "Tameghza", "Hazoua"
      ]
    }
  },
  {
    "Tunis": {
      "image_url": "/gouvernorats/Tunis.jpg",
      "delegations": [
        "Hraïria", "El Kabaria", "Sidi Hassine", "La Marsa", "Le Bardo", 
        "El Omrane supérieur", "Le Kram", "El Menzah", "El Omrane", "Ezzouhour", 
        "Bab El Bhar", "Cité El Khadra", "Séjoumi", "El Ouardia", "Bab Souika", 
        "Sidi El Béchir", "La Goulette", "Médina", "Djebel Jelloud", "Ettahrir", 
        "Carthage"
      ]
    }
  },
  {
    "Zaghouan": {
      "image_url": "/gouvernorats/Zaghouane.jpg",
      "delegations": [
        "El Fahs", "Zaghouan", "Nadhour", "Bir Mcherga", "Zriba", 
        "Saouaf"
      ]
    }
  },
  {
    "Kef": {
      "image_url": "/gouvernorats/Kef.jpg",
      "delegations": [
        "Kef Est", "Dahmani", "Tajerouine", "Kef Ouest", "Nebeur", "Sers", 
        "Sakiet Sidi Youssef", "El Ksour", "Kalaat Senan", "Jérissa", 
        "Kalâat Khasba"
      ]
    }
  }
]

const Gouvernorats = () => {

  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
   

  const handleGouvernoratClick = (gouvernoratName, gouvernoratData) => {
    navigate(`/tunisie/${gouvernoratName.toLowerCase()}`, { state: { gouvernoratData, gouvernoratName } });
  };

  return (
    <div className="gouvernorats-container">
      {/* Header with an image */}
      
      
     
      
      <div className="header-gouv">
       <img className="gouv-image-desktop" src="/tunisie_desktop.jpeg" alt="tunisie" />
       <img className="gouv-image-mobile" src="/tunisie_mobile.jpeg" alt="tunisie" />
      </div>
     
      <div className="container-gouv">
     
      {/* Main container */}
        <div className="ad-container-left-gouv">
       
        </div>
        <div className="list-container-gouv">
          {gouvernorats.map((gouvernorat, index) => {
            const gouvernoratName = Object.keys(gouvernorat)[0];
            const gouvernoratData = gouvernorat[gouvernoratName];
            const imageUrl = gouvernoratData.image_url;

            return (
              <div 
                key={index} 
                className="item-container-gouv"
                onClick={() => handleGouvernoratClick(gouvernoratName, gouvernoratData)} 
              >
                <div className="image-container-gouv cursor-pointer">
                  <img src={imageUrl} alt={gouvernoratName} className="image-gouv" />
                  <div className="overlay-gouv">
                    <div className="overlay1-gouv">

                      <span className="gouvernorat-name-gouv">{t(gouvernoratName)}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="ad-container-right-gouv"></div>
      </div>
     
      <Footer />
    </div>
  );
};

export default Gouvernorats;