import { Formik, Field, Form } from "formik"
import * as Yup from "yup"
import Header from "../src/components/Header"
import AppContext from "../src/components/AppContext"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import React, { useCallback, useContext } from "react"

const displayErrorMes = Yup.object().shape({
  amount: Yup.number()
    .typeError("Le montant doit être un nombre")
    .test(
      "Amount equal to 0 ?",
      "Le montant ne doit pas être égal à 0",
      (amount) => amount != 0
    )
    .required("Le champ est requis"),
  description: Yup.string().required("Le champ est requis"),
})

const Entry = () => {
  const { addDatas } = useContext(AppContext)

  const showToastMessage = () => {
    toast.success("Entré ajoutée !", {
      position: toast.POSITION.TOP_RIGHT,
    })
  }

  const handleFormSubmit = useCallback(
    (values, { resetForm }) => {
      addDatas({
        amount: Number(values.amount),
        description: values.description,
      })
      resetForm()
      showToastMessage()

      return true
    },
    [addDatas]
  )

  return (
    <div className="w-3/4 mx-auto">
      <Header pageTitle="Add New Entry" />
      <Formik
        initialValues={{ amount: "0", description: "" }}
        onSubmit={handleFormSubmit}
        className="w-full mx-auto border-2 p-11"
        validationSchema={displayErrorMes}
      >
        {({ errors, touched }) => (
          <Form className="border-4 p-10 rounded-xl bg-gray-100">
            <Field
              className="w-full border-2 border-gray-300 p-3 mb-2 rounded-xl"
              id="amount"
              name="amount"
              placeholder="Ajouter Une Valeur"
            ></Field>
            {touched.amount && errors.amount && (
              <div className="errorField w-full p-2 bg-red-200 text-red-500 rounded-xl">
                {errors.amount}
              </div>
            )}
            <Field
              as="textarea"
              className="w-full border-2 border-gray-300 p-2 mt-11 rounded-xl h-32"
              name="description"
              id="description"
              placeholder="Ajouter une description"
            ></Field>
            {touched.description && errors.description && (
              <div className="errorField w-full p-2 bg-red-200 text-red-500 rounded-xl">
                {errors.description}
              </div>
            )}
            <button
              className="w-full p-2 text-white bg-green-400 hover:bg-green-500 mt-11 rounded-xl"
              type="submit"
            >
              <ToastContainer />
              Ajouter La Section
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default Entry
