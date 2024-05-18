<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('doc_documents', function (Blueprint $table) {
            $table->id();
            $table->string('DOC_NOMBRE');
            $table->string('DOC_CODIGO')->unique();
            $table->text('DOC_CONTENIDO');
            $table->unsignedBigInteger('DOC_ID_TIPO');
            $table->foreign('DOC_ID_TIPO')->references('id')->on('tipo_documentos');
            $table->unsignedBigInteger('DOC_ID_PROCESO');
            $table->foreign('DOC_ID_PROCESO')->references('id')->on('pro_procesos');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('doc_documents');
    }
};
