<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DocDocument extends Model
{
    protected $table = 'DOC_DOCUMENTO';

    protected $fillable = [
        'DOC_ID',
        'DOC_NOMBRE',
        'DOC_CODIGO',
        'DOC_CONTENIDO',
        'DOC_ID_TIPO',
        'DOC_ID_PROCESO'   
    ];

    public function tipo()
    {
        return $this->belongsTo(TipoDocumento::class, 'DOC_ID_TIPO');
    }

    public function proceso()
    {
        return $this->belongsTo(ProProceso::class, 'DOC_ID_PROCESO');
    }
}
