import { string, number, arrayOf, shape } from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'
import { deleteContact } from 'redux/requests';
import { selectVisibleContacts } from 'redux/selectors'
import { ListItems,Button,Text } from './PhoneBookList.styled'


export default function PhoneBookList() {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();


  const elements = contacts.map(({ name, number,id }) => (
     <ListItems key={id}>
      <Text>{name}: {number}</Text>
      <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
    </ListItems>
  ))

  return (
    <div>{elements}</div>
  )
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
