<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class ProProceso extends Model
{
    protected $table = 'PRO_PROCESO';

    protected $fillable = [
        'PRO_ID',
        'PRO_NOMBRE',
        'PRO_PREFIJO',
    ];
}
