import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://sgtrfxckpxamifxnskrq.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNndHJmeGNrcHhhbWlmeG5za3JxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA1Njc5MDgsImV4cCI6MjA0NjE0MzkwOH0.FkxTZGRoKarheQooEHJBzn3EjRqA-ak7Yp3lgq9s7Ow')

var config = {
    type: Phaser.AUTO,
    width: 800, // Largura inicial
    height: 600, // Altura inicial
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: [Load1, Home, Load2, Play, BeginnerQuiz],
    // Passando o supabase para todas as cenas por meio de `data`
    data: supabase
};

// Inicializa o jogo
var game = new Phaser.Game(config);