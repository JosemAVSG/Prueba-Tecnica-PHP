<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TipoDocumento extends Model
{
    use HasFactory;
    protected $table = 'tipo_documentos';

    public $timestamps = false;

    protected $fillable = [
        'TIP_ID',
        'TIP_NOMBRE',
        'TIP_PREFIJO',
    ];

   
}
