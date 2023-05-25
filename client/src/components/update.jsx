import { useEffect, useState } from "react";
import ContactForm from "./contactForm";
import { useParams } from "react-router";
import axios from 'axios'

function Update() {
const {id} = useParams()
const [contact, setContact] = useState()

  useEffect(() => {
    async function contactById () {
      const { data } = await axios(`/get/${id}`);
      setContact(data)
    }
    contactById()
  }, [])

  console.log(contact);
  return (
    <div>
      <ContactForm contact={contact}/>
    </div>
  );
}

export default Update;
