import { ErrorMessage } from "formik";
import PropTypes from 'prop-types';
import { ErrorText } from "./ErrorForm.styled";


export default function ErrorForm({name}) {
  return (
    <ErrorMessage
      name={name}
      render={message => <ErrorText>{message}</ErrorText>}
    />
  )
}

ErrorForm.propTypes = {
  name: PropTypes.string.isRequired,
}
