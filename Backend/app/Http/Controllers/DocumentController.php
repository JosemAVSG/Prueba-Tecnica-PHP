<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\DocDocument;
use App\Models\ProProceso;
use App\Models\TipoDocumento;

class DocumentController extends Controller
{
    //
    public function index()
    {
   
        $documents = DocDocument::all();
        return response()->json($documents);
    }

    public function createDocument(Request $request)
    {

        $nombreDocumento = $request->input('nombre');
        $contenidoDocumento = $request->input('contenido');
        $tipoDocumentoId = $request->input('tipo_documento_id');
        $procesoId = $request->input('proceso_id');
        $tipoDocumento = TipoDocumento::find($tipoDocumentoId);
        $proceso = ProProceso::find($procesoId);

        $prefijoCodigo = $tipoDocumento->TIP_PREFIJO . "-" . $proceso->PRO_PREFIJO;

        $totalDocumentos = DocDocument::where('DOC_CODIGO', 'like', $prefijoCodigo . '-%')
            ->count();
        if ($totalDocumentos > 0) {

            $nuevoConsecutivo = $totalDocumentos + 1;
        } else {

            $nuevoConsecutivo = 1;
        }

        $codigoDocumento = $prefijoCodigo . "-" . $nuevoConsecutivo;


        $documento = new DocDocument;
        $documento->DOC_NOMBRE = $nombreDocumento;
        $documento->DOC_CODIGO = $codigoDocumento;
        $documento->DOC_CONTENIDO = $contenidoDocumento;
        $documento->DOC_ID_TIPO = $tipoDocumento->id;
        $documento->DOC_ID_PROCESO = $proceso->id;

        $documento->save();
        return response()->json($documento, 201);
    }

    public function updateDocument(Request $request, $id)
    {
        $document = DocDocument::find($id);
        $document->update($request->all());
        return response()->json($document, 200);
    }

    public function getDocumentbyId($id)
    {
        $document = DocDocument::find($id);
        return response()->json($document, 200);
    }

    public function deleteDocument($id)
    {
        $document = DocDocument::find($id);
        $document->delete();
        return response()->json('Eliminado correctamente', 204);
    }

}
