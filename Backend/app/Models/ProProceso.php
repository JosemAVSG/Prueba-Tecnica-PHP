<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProProceso extends Model
{
    use HasFactory;
    protected $table = 'pro_procesos';
    public $timestamps = false;

    protected $fillable = [
        'PRO_ID',
        'PRO_NOMBRE',
        'PRO_PREFIJO',
    ];
}
