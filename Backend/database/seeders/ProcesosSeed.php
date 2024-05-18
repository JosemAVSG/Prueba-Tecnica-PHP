<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
 

class ProcesosSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('pro_procesos')->insert([
            [
                'PRO_ID'=>1,
                'PRO_NOMBRE'=>'Ingeneria',
                'PRO_PREFIJO'=>'ING',
            ],
            [
                'PRO_ID'=>2,
                'PRO_Nombre'=>'Recursos Humanos',
                'PRO_PREFIJO'=>'RRHH',
            ],
            [
                'PRO_ID'=>3,
                'PRO_Nombre'=>'Ventas',
                'PRO_PREFIJO'=>'VEN',
            ],
            [
                'PRO_ID'=>4,
                'PRO_Nombre'=>'Marketing',
                'PRO_PREFIJO'=>'MAR',
            ],
            [
                'PRO_ID'=>5,
                'PRO_Nombre'=>'Informatica',
                'PRO_PREFIJO'=>'INF',
            ],


        ]);
    }
}
