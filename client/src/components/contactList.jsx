import { MdDelete } from "react-icons/md";
import { RiEdit2Fill } from "react-icons/ri";
import axios from "axios";

function Contacts({ allContacts, update }) {

  

  const remove = async (id) => {
    const { data } = await axios.delete(`/delete/${id}`);
    alert(data);
  };

  return (
    <div className="w-4/5 mx-auto p-5">
      <h1 className="py-5 text-center text-4xl text-blue-800 font-semibold">
        Contact List
      </h1>
      <div className="grid gap-4">
        {allContacts?.map((contact) => {
          return (
            <div
              key={contact.id}
              className="bg-gray-300 p-4 rounded-lg flex items-center justify-between">
              <div className="flex flex-col">
                <div className="flex gap-2 text-3xl">
                  <span>{contact.name}</span>
                  <span>{contact.lastName}</span>
                </div>
                <div className="text-blue-800 text-xl">{contact.phone}</div>
              </div>
              <div className="flex gap-6">
                <button onClick={() => update(contact.id)}>
                  <RiEdit2Fill className="text-green-600 text-3xl hover:text-green-500 hover:text-4xl duration-75" />
                </button>
                <button onClick={() => remove(contact.id)}>
                  <MdDelete className="text-red-600 text-3xl hover:text-red-500 hover:text-4xl duration-75" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Contacts;
