import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, SelectField } from "./InputField";

function EntryForm() {
  const initialvalues = {
    id: "",
    category: "",
    entry_name: "",
    contact_name: "",
    contact_number: "",
    address: "",
    thana: "",
    city: "",
    product: "",
    rate: "",
    represent: "",
    notes: "",
  };

  const validate = Yup.object({
    id: Yup.string().required("ID is required"),
    category: Yup.string().required("Category is required"),
    entry_name: Yup.string().required("Entry Name is required"),
    contact_name: Yup.string().required("Contact Name is required"),
    contact_number: Yup.string().required("Contact Number is required"),
    address: Yup.string().required("Address is required"),
    thana: Yup.string().required("Thana is required"),
    city: Yup.string().required("City is required"),
    product: Yup.string().required("Product is required"),
    rate: Yup.string().required("Rate is required"),
    represent: Yup.string().required("Represent is required"),
    notes: Yup.string().required("Notes is required"),
  });

  const handleSubmit = (values, formik) => {
    console.log(values);
  };

  return (
    <div className="mt-7">
      <Formik
        initialValues={initialvalues}
        validationSchema={validate}
        onSubmit={handleSubmit}
      >
        {(formik) => (
          <Form>
            <ToastContainer />
            <h1 className="text-lg font-semibold ">
              Add New Customer, Supplier and Other&apos;s
            </h1>
            <div className="form">
              <TextField label="ID *" name="id" type="text" />
              <SelectField
                label="Category *"
                name="category"
                type="text"
                placeholder="Select Category"
                options={[
                  "Customer",
                  "Supplier",
                  "Bank",
                  "Employeer",
                  "Others",
                ]}
              />
              <TextField label="Entry Name *" name="entry_name" type="text" />
              <TextField
                label="Contact Name *"
                name="contact_name"
                type="text"
              />
              <TextField
                label="Contact Number *"
                name="contact_number"
                type="text"
              />
              <TextField label="Address *" name="address" type="text" />
              <TextField label="Thana *" name="thana" type="text" />
              <SelectField
                label="City *"
                name="city"
                type="text"
                placeholder="Select City"
                options={[
                  "Customer",
                  "Supplier",
                  "Bank",
                  "Employeer",
                  "Others",
                ]}
              />
              <SelectField
                label="Product *"
                name="product"
                type="text"
                placeholder="Select Product"
                options={["Max", "Cup 150", "Cup 190", "Sealon", "Mocha"]}
              />
              <TextField label="Rate *" name="rate" type="text" />
              <SelectField
                label="Represent *"
                name="represent"
                type="text"
                placeholder="Select Represent"
                options={["Direct", "Fine", "Feroz", "Joynal", "Nazrul"]}
              />
              <TextField label="Notes *" name="notes" type="text" />
            </div>

            <div className="flex justify-start">
              <button type="submit" className="submit_button">
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EntryForm;
