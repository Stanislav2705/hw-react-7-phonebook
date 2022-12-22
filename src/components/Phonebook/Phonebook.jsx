import FormPhoneBook from "./FormPhoneBook/FormPhoneBook";
import PhoneBookList from "./PhoneBookList/PhoneBookList";
import BlockPhone from "./BlockPhone/BlockPhone";
import Filter from "./Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { selectError, selectFilter, selectIsLoading, selectVisibleContacts } from "redux/selectors";
import { useEffect } from "react";
import { fetchContacts } from "redux/requests";
import { Error, Message } from "./Phonebook.styled";
import Loader from "shared/Loader/Loader";

export default function Phonebook() {
  const dispatch = useDispatch();

  const contacts = useSelector(selectVisibleContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
        <BlockPhone title='Phonebook'>
        <FormPhoneBook />
        </BlockPhone>
        <BlockPhone title="Contacts">
        <Filter />
        {isLoading && <Loader />}
        {error && <Error>Something goes wrong. {error}.</Error>}
        {contacts.length > 0 && <PhoneBookList />}
        {(filter !== "" && contacts.length === 0) && <Message>This name was not found</Message>}
        </BlockPhone>
    </div>
  )
}



