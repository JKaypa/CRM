import { useEffect, useState } from "react";
import axios from "axios";

function ContactForm({ contact }) {
  
  const [id, setId] = useState('')
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (contact) {
      setFormData({
        name: contact.name,
        lastName: contact.lastName,
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
      });
      setId(contact.id)
    }
  }, [contact]);

  const handleChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (Object.values(formData).some((data) => data === "")) {
      if (!formData.name) alert("Name missing");
      if (!formData.lastName) alert("Last name missing");
      if (!formData.email) alert("Email missing");
      if (!formData.phone) alert("Phone missing");
      if (!formData.address) alert("Address missing");
      return;
    }

    if (contact) {
      
      const {data} = await axios.put(`/update/${id}`, formData)
      return alert(data)
    }
    const { data } = await axios.post("/create", formData);

    setFormData({
      name: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
    });

    alert(data);
  };

  return (
    <div className="w-4/5 mx-auto p-5">
      <form onSubmit={handleSubmit} className="grid gap-4">
        <div>
          <label htmlFor="name" className="text-xl">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="p-3 w-full rounded-full bg-gray-100 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="text-xl">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="p-3 w-full rounded-full bg-gray-100 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xl">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="p-3 w-full rounded-full bg-gray-100 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="phone" className="text-xl">
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="p-3 w-full rounded-full bg-gray-100 focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="address" className="text-xl">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="p-3 w-full rounded-full bg-gray-100 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">
          {contact ? 'Edit' : '+Add'}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
