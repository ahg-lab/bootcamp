import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormsFormik = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("First Name is Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(70, "Too Long!")
      .required("Last Name is Required"),
    age: Yup.number().required("Age is Required"),
  });

  const [display, setDisplay] = useState();

  // -- API
  // https://jsonplaceholder.typicode.com/posts
  // -- HTTP methods
  // GET	/posts ->> get data
  // POST	/posts ->> add data
  // PUT	/posts/1 ->> edit one data only
  // PATCH	/posts/1 ->> edit group of data
  // DELETE	/posts/1 ->> delete data

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          age: "",
        }}
        onSubmit={(values) => {
          setDisplay(
            `I'm ${values?.firstName} ${values?.lastName} and I'm ${values?.age} years old`
          );
        }}
        // add reset
        validationSchema={SignupSchema}
      >
        {({ errors, touched, values }) => (
          <Form style={{ color: "blue" }}>
            <label htmlFor="firstName">First Name </label>
            <Field id="firstName" name="firstName" placeholder="First Name" />
            <ErrorMessage style={{ color: "red" }} name="firstName" />
            <br />
            <label htmlFor="lastName">Last Name </label>
            <Field id="lastName" name="lastName" placeholder="Last Name" />
            <ErrorMessage name="lastName" />
            <br />
            {values?.firstName !== "" && (
              <div>
                <label htmlFor="age">Age </label>
                <Field id="age" name="age" placeholder="Age" type="number" />
                <ErrorMessage name="age" />
              </div>
            )}
            <br />
            <br />
            <button type="submit">Submit</button>
            <p>{display}</p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormsFormik;
