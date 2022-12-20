import { string, number, arrayOf, shape } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from 'redux/contacts/slice';
import { getContacts, getFilter } from 'redux/selectors'
import { ListItems,Button,Text } from './PhoneBookList.styled'


export default function PhoneBookList() {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();


  const getFilterContacts = () => {
    if (!filter) {
      return contacts;
    }

    const normalizedFilter = filter.toLocaleLowerCase();
    const filteredContacts = contacts.filter(({ name, number }) => {
      const normalizedName = name.toLocaleLowerCase();
      const normalizedNumber = number.toLocaleLowerCase();
      const result = normalizedName.includes(normalizedFilter)
        || normalizedNumber.includes(normalizedFilter);
      return result;
    })
    return filteredContacts;
  }

  const filteredContacts = getFilterContacts();


  const elements = filteredContacts.map(({ name, number,id }) => {
    return <ListItems key={id}>
      <Text>{name}: {number}</Text>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </ListItems>
  })

  return (
    <div>{elements}</div>
  )
}


// export default function PhoneBookList({ items,removeContact }) {
//   const elements = items.map(({ name, number,id }) => {
//     return <ListItems key={id}>
//       <Text>{name}: {number}</Text>
//       <Button onClick={() => removeContact(id)}>Delete</Button>
//     </ListItems>
//   })

//   return (
//     <div>{elements}</div>
//   )
// }

PhoneBookList.defaultProps = {
  items: []
}

PhoneBookList.protoTypes = {
  events: arrayOf(
    shape({
      id: string.isRequired,
      name: string.isRequired,
      number: number.isRequired
    })
  ).isRequired,
}
