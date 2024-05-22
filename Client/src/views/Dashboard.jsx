import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteDocumentRequest, getDocumentsRequest } from "../redux/slices/documentSlice";
import DataTable from "react-data-table-component";
const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const documents = useSelector((state) => state.document.documents);
  const loading = useSelector((state) => state.document.loading);
  const dispatch = useDispatch();
  const navigation = useNavigate();
  const [documentos, setDocumentos] = useState([]);
  useEffect(() => {
    if (user) {
      dispatch(getDocumentsRequest());
    } else {
      navigation("/login");
    }
  }, [dispatch]);

  useEffect(() => {
    if (!documents) {
      return;
    }
    setDocumentos(documents);
  }, [documents]);

  const deleteDocument = (id) => {
    dispatch(deleteDocumentRequest(id));
  };

  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
    },
    {
      name: "Nombre",
      selector: (row) => row.DOC_NOMBRE,
    },
    {
      name: "Codigo",
      selector: (row) => row.DOC_CODIGO,
    },
    {
      name: "Contenido",
      selector: (row) => row.DOC_CONTENIDO,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <Link to={`/editDocument/${row.id}`}>Editar</Link>)

    },
    {
      name: "Acciones",
      cell: (row) => (
        <button onClick={() => deleteDocument(row.id)}>Eliminar</button>)
    }
  ];


  return (
    <div className="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 h-screen flex flex-col justify-center items-center">
    { loading && <div className="text-center text-blue-500 font-bold text-2xl animate-pulse ease-in-out">Loading...</div>}
    <div className="mb-4 text-center py-3 px-3 hover:pointer text-white bg-blue-950 hover:bg-blue-800 rounded-2xl "><Link to='/createDocument'>Crear Documento</Link> </div> 
      <h1 className="text-3xl font-bold">Bienvenido {user && user.name}</h1>
      {documentos.length > 0 ? (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-3/4">
          <h2>Tus Documentos</h2>
         
       
            <div className="rounded">

             <DataTable
              title="Documents"
              columns={columns}
              data={documentos}
              pagination
              highlightOnHover
              responsive
            />
            </div>
          
        </div>
      ) : (
        <h2>No tienes Documentos</h2>
      )}
      {}
    </div>
  );
};

export default Dashboard;
