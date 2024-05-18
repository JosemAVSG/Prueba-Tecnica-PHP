<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Model;

class ProProceso extends Model
{
    protected $table = 'pro_procesos';

    protected $fillable = [
        'PRO_ID',
        'PRO_NOMBRE',
        'PRO_PREFIJO',
    ];
}
