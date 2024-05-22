import { useSelector, useDispatch } from "react-redux";
import {  updateDocumentRequest } from "../redux/slices/documentSlice";
import {  Formik } from "formik";
import { Link, useParams } from "react-router-dom";
const EditForm = () => {
  const tipoDoc = useSelector((state) => state.document.tipoDocumento);
  const proceso = useSelector((state) => state.document.procesoDocument);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.document.loading);
  const {id} = useParams();
 
  return (
    <div className="h-screen flex justify-center items-center flex-col bg-gradient-to-b from-blue-200 via-blue-300 to-blue-400">
      {
        loading && <div className="text-center text-blue-500 font-bold text-2xl animate-pulse ease-in-out">Loading...</div>
      }
      <Link to="/dashboard" className="text-blue-500 font-bold text-2xl mb-4 flex self-start mx-10 underline" >Regresar</Link>
      <h1 className="text-3xl font-bold mb-4">Document Edit Form</h1>
      <p>Formulario para editar un documento</p>

      <Formik
        initialValues={{
          nombre: "",
          contenido: "",
          tipo_documento_id: "",
          proceso_id: "",
        }}
        
        validate={(values) => {
          const errors = {};
          if (!values.nombre) {
            errors.nombre = "Required";
          }
          if (!values.contenido) {
            errors.contenido = "Required";
          }
          if (!values.tipo_documento_id) {
            errors.tipo_documento_id= "Required";
          }
          if (!values.proceso_id) {
            errors.proceso_id = "Required";
          }
          return errors;
        }}
        onSubmit={(values) => {
          dispatch(updateDocumentRequest(id, values));
        }}
    
      >

        {({
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
        }) => (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-1/3  border border-black  p-4 rounded-lg" >
            <label htmlFor="nombre">Titulo</label>
            <input
              type="text"
              name="nombre"
              minLength={5}
              value={values.nombre}
              onChange={handleChange}
              onBlur={handleBlur}
              className="mb-2"
            />
            {errors.nombre && touched.nombre && <p>{errors.nombre}</p>}
            <label htmlFor="contenido">Descripcion</label>
            <textarea type="text" name="contenido"  placeholder="Escribe aquí..."
                rows="5"
                cols="50"  className=" rounded-xl mb-4 " onChange={handleChange} value={values.contenido} />
            {errors.contenido && touched.contenido && (
              <p>{errors.contenido}</p>
            )}
            
            {tipoDoc && (
              <select
                name="tipo_documento_id"
                onChange={handleChange}
                value={values.tipo_documento_id}
                onBlur={handleBlur}
                className="mb-2"
              >
                {tipoDoc.map((tipo_documento_id) => (
                  <option key={tipo_documento_id.id} value={tipo_documento_id.id}>
                    {tipo_documento_id.TIP_NOMBRE}
                  </option>
                ))}
              </select>
            )}
            {errors.tipo_documento_id && touched.tipo_documento_id && <p>{errors.tipo_documento_id}</p>}
            {proceso && (
              <select
                name="proceso_id"
                onChange={handleChange}
                value={values.proceso_id}
                onBlur={handleBlur}
                className="mb-2"
              >
                {proceso.map((procesos) => (
                  <option key={procesos.id} value={procesos.id}>
                    {procesos.PRO_NOMBRE}
                  </option>
                ))}
              </select>
            )}
            {errors.proceso_id && touched.proceso_id && <p>{errors.proceso_id}</p>}
            <button className="bg-blue-500 text-white rounded-lg py-2 hover:bg-blue-600" type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default EditForm;
