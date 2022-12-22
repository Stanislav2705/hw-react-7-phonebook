import { Formik, Form } from "formik";
import * as yup from 'yup';
import { LabelForm, Input, Block, Text, Button,Container } from "./FormPhoneBook.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "redux/selectors";
import { Notify } from 'notiflix';
import { addContact } from 'redux/requests';
import ErrorForm from "../ErrorForm/ErrorForm";

const initialState = {
  name: '',
  number: '',
}

const validation = yup.object().shape({
  name: yup.string().matches(/^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/, 'Name may contain only letters, apostrophe, dash and spaces.').required('Please fill in the name'),
  number: yup.string().matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, 'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +').required('Please fill in the number'),
});


export default function FormPhoneBook() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

    const handleSubmit = (values,{resetForm}) => {
      function isDublicateName(values) {
        return contacts.find(
          contact => contact.name.toLowerCase() === values.name.toLowerCase()
        )
      }

      if (isDublicateName(values)) {
        return Notify.info(`${values.name} is already in contacts.`)
      }

      dispatch(addContact(values));
      resetForm()
    }



  return (
    <Formik
      initialValues={initialState}
      validationSchema={validation}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <Container>
          <Block>
            <LabelForm><Text>Name</Text>
              <Input
                name="name"
                type="text"
              />
            </LabelForm>
            <ErrorForm name='name'/>
          </Block>
          <Block>
            <LabelForm><Text>Number</Text>
              <Input
                type="tel"
                name="number"
              />
            </LabelForm>
            <ErrorForm name='number'/>
          </Block>
        </Container>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  )
}


