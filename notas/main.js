import $ from 'jquery';
import { wiSmart } from './widev.js';
import { render, init } from './nota.js';
import { rutas } from '../smiles/rutas.js';

// ── INTERCEPCIÓN DEL ENRUTADOR GLOBAL SPA ──────────────────────────
// Redirección directa del navegador para roles especiales (admin/editor) al salir de notas.
rutas.navigate = (ruta) => {
  console.log('[Zenwii Editor] Ruta interceptada:', ruta);
  if (ruta !== '/nota') {
    window.location.href = ruta;
  }
};

// ── INICIALIZACIÓN DEL LIENZO DE ESCRITURA ──────────────────────────
// Inyectamos el maquetado del editor de pantalla completa dentro de nota.html
$('#winota').html(render());

// Arrancamos los listeners, el estado local persistente y el sync reactivo a Firebase
init();

// Carga inteligente diferida de fuentes de texto premium
wiSmart({
  css: [
    'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap',
    'https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap',
    'https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap',
  ],
});
