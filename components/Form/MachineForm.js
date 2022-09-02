import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TextField, SelectField } from "./InputField";

function MachineForm() {
  const initialvalues = {
    reg_no: "",
    model_no: "",
    delivery_date: "",
    machine_entry: "",
    option: "",
    status: "",
    note: "",
  };

  const validate = Yup.object({
    reg_no: Yup.string().required("Reg No is required"),
    model_no: Yup.string().required("Model No is required"),
    delivery_date: Yup.string().required("Delivery Date is required"),
    machine_entry: Yup.string().required("Machine Entry is required"),
    option: Yup.string().required("Option is required"),
    status: Yup.string().required("Status is required"),
    note: Yup.string().required("Note is required"),
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
            <h1 className="text-lg font-semibold ">Add New Machine</h1>
            <div className="form">
              <TextField label="Reg No *" name="reg_no" type="text" />
              <SelectField
                label="Model No *"
                name="model_no"
                type="text"
                placeholder="Select Model No"
                options={[
                  "DD112S",
                  "622MA",
                  "700FM",
                  "700F1",
                  "MI-2010",
                  "RC101",
                ]}
              />
              <TextField
                label="Delivery Date *"
                name="delivery_date"
                type="date"
              />
              <SelectField
                label="Machine Entry *"
                name="machine_entry"
                type="text"
                placeholder="Select Machine Entry"
                options={[
                  "Star Cafe Bangladesh Ltd",
                  "The Speed Trade Int.",
                  "Md. Shahria Hossain",
                  "Halim",
                  "F.R Khan",
                ]}
              />
              <SelectField
                label="Option *"
                name="option"
                type="text"
                placeholder="Select Option"
                options={["CASH", "FREE", "FWD", "INST", "N/A"]}
              />
              <SelectField
                label="Status *"
                name="status"
                type="text"
                placeholder="Select Status"
                options={[
                  "RN",
                  "N/A",
                  "WR",
                  "WS",
                  "WRTN",
                  "STOCK",
                  "WF/SALE",
                  "RWD",
                ]}
              />
              <TextField label="Note *" name="note" type="text" />
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

export default MachineForm;
