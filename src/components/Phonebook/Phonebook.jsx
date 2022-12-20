import FormPhoneBook from "./FormPhoneBook/FormPhoneBook";
import PhoneBookList from "./PhoneBookList/PhoneBookList";
import BlockPhone from "./BlockPhone/BlockPhone";
import Filter from "./Filter/Filter";

export default function Phonebook() {
  return (
    <div>
        <BlockPhone title='Phonebook'>
          <FormPhoneBook />
        </BlockPhone>
        <BlockPhone title="Contacts">
          <Filter />
          <PhoneBookList />
        </BlockPhone>
    </div>
  )
}


// export default function Phonebook() {
//   const [contacts, setContacts] = useState(() => {
//         const value = JSON.parse(localStorage.getItem("contacts"));
//         return value ?? [];
//     }
//   );
//   const [filter, setFilter] = useState("");


//   useEffect(() => {
//     localStorage.setItem('contacts', JSON.stringify(contacts))
//   },[contacts])

//   useEffect(() => {
//     return () => {
//       localStorage.removeItem("contacts")
//     }
//   }, [])

//     const addContacts = (contact) => {
//     if (isDuplicate(contact)) {
//       return alert(`${contact.name} - ${contact.number} is already in contacts.`)
//     }
//     setContacts((prev) => {
//       const newContact = {
//         id: nanoid(),
//         ...contact,
//       }
//       return  [...prev,newContact]

//     })
//     }

//     const removeContact = (id) => {
//       setContacts((prev) => {
//         const newContacts = prev.filter((item) => item.id !== id);

//         return newContacts

//       })
//     }


//     const handleChange = (e) => {
//     const { value } = e.target;
//     setFilter(value)
//   }

//   const isDuplicate = ({name, number}) => {
//     const result = contacts.find((item) => item.name === name
//       && item.number === number);
//     return result;
//   }

//     const getFilterContacts = () => {
//     if (!filter) {
//       return contacts;
//     }

//     const normalizedFilter = filter.toLocaleLowerCase();
//     const filteredContacts = contacts.filter(({ name, number }) => {
//       const normalizedName = name.toLocaleLowerCase();
//       const normalizedNumber = number.toLocaleLowerCase();
//       const result = normalizedName.includes(normalizedFilter)
//         || normalizedNumber.includes(normalizedFilter);
//       return result;
//     })
//     return filteredContacts;
//   }

//   const filteredContacts = getFilterContacts();

//   return (
//     <div>
//         <BlockPhone title='Phonebook'>
//           <FormPhoneBook onSubmit={addContacts} />
//         </BlockPhone>
//         <BlockPhone title="Contacts">
//           <Label htmlFor="filter"><Text></Text></Label>
//           <Input
//             type="text"
//             name="filter"
//             value={filter}
//             onChange={handleChange}
//             placeholder="Find contacts by name"
//           />
//           <PhoneBookList items={filteredContacts} removeContact={removeContact} />
//         </BlockPhone>
//     </div>
//   )
// }



