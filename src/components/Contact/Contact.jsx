import React from 'react'
import "./Contact.css"

import msg_icon from "../../assets/msg-icon.png"
import mail_icon from "../../assets/msg-icon.png"
import phone_icon from "../../assets/phonee-icon.png"
import location_icon from "../../assets/location-icon.png"
import next_icon from "../../assets/next-icon.png"

function Contact() {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "30bc761d-6831-457e-9acd-3ea59ddff385");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  return (
    <div className='contact' id='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>SafeZone est une solution innovante conçue pour assurer la sécurité des enfants en tout temps. Grâce à une technologie de géolocalisation en temps réel, les parents peuvent suivre en permanence la position de leurs enfants. En cas de déplacement dans une zone à risque, des alertes sont envoyées immédiatement pour garantir une réaction rapide. De plus, toutes les données sont cryptées et sécurisées, offrant une tranquillité d’esprit totale aux familles. SafeZone combine la puissance de la technologie et l'importance de la sécurité, assurant ainsi une protection optimale à chaque instant.</p>
            <ul>
                <li> <img src={mail_icon} alt="" /> stefanmouope72@gmail.com</li>
                <li> <img src={phone_icon} alt="" /> 658821355</li>
                <li> <img src={location_icon} alt="" /> Yaounde, Cameroun <br />
                5.034 Melen</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}> 
                <label>Your name</label>
                <input type="text" name='name' placeholder='enter your name'  required/>
                <label>Phone number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number ' required />
                <label>Your email</label>
                <input type="email" name='email' placeholder='enter your email'  required/> 
                <label>Write your suggestion here</label>
                <textarea name="message" rows="6" placeholder='Enter your message' required> </textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={next_icon} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact
