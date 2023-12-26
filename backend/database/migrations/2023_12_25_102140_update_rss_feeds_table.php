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
        Schema::table('rss_feeds', function (Blueprint $table) {
            $table->unsignedBigInteger('topic_id')->after('id');
        
            $table->foreign('topic_id')
                ->references('id')
                ->on('topics')
                ->onUpdate('cascade')
                ->onDelete('cascade');
        });    
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('rss_feeds', function (Blueprint $table) {
            $table->dropForeign(['topic_id']);
            $table->dropColumn('topic_id');
        });
    }
};
