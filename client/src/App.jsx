import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Contacts from "./components/contactList";
import ContactForm from "./components/contactForm";
import Nav from "./components/nav";
import Update from "./components/update";

axios.defaults.baseURL = "http://localhost:3000/api";

function App() {
  const [allContacts, setAllContacts] = useState();
  const [search, setSearch] = useState("");
  const [contact, setContact] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    async function fetch(search) {
      const { data } = await axios(`/get?data=${search}`);
      setAllContacts(data);
    }
    fetch(search);
  }, [search]);

  const update = async (id) => {
    const { data } = await axios(`/get/${id}`);
    setContact(data);
    navigate(`/editcontact/${id}`)
  };

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div>
      <Nav handleSearch={handleSearch} allContacts={allContacts} />
      <Routes>
        <Route
          path="/"
          element={<Contacts allContacts={allContacts} update={update} />}
        />
        <Route path="addcontact" element={<ContactForm />} />
        <Route path={"editcontact/:id"} element={<Update contact={contact} />} />
      </Routes>
    </div>
  );
}

export default App;
