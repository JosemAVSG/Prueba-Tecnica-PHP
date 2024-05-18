<?php

namespace Database\Seeders;


use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
class TipoDocumentSeed extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $tipoDoc =[
            [
           
                'TIP_NOMBRE' => 'Instructivo',
                'TIP_PREFIJO' => 'INS',
            ],
            [
              
                'TIP_NOMBRE' => 'Manual',
                'TIP_PREFIJO' => 'MAN',
            ],
            [
           
                'TIP_NOMBRE' => 'Procedimiento',
                'TIP_PREFIJO' => 'PROC',
            ],
            [
                
                'TIP_NOMBRE' => 'Guía',
                'TIP_PREFIJO' => 'GUI',
            ],
            [
            
                'TIP_NOMBRE' => 'Informe',
                'TIP_PREFIJO' => 'INF',
            ],
        ];
        DB::table('tipo_documentos')->insert($tipoDoc);
    }
}
