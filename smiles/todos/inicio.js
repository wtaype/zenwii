import $ from 'jquery';
import { app, version, by, linkme } from '../wii.js';
import { wiVista, year, wiTip, Saludar } from '../widev.js';

// ── DATA ──────────────────────────────────────────────────────
const roles = [
  'Notas al Instante ⚡',
  'Sincronización Segura en Segundo Plano ☁️',
  'Consumo Mínimo de RAM 🧠',
  'Seguridad y Persistencia Offline 🔒',
  'Interfaz Minimalista y Elegante 🎨'
];

const stats = [
  { valor:0,   label: 'Latencia de Guardado', sufijo: 'ms' },
  { valor:30,  label: 'Consumo de RAM',      sufijo: 'MB' },
  { valor:100, label: 'Disponibilidad Offline', sufijo: '%' }
];

const features = [
  { id:'editor', icon:'fa-feather', color:'#FF5C69', nombre:'Editor Sin Distracciones', desc:'Escribe tus ideas de forma fluida y organizada',
    items:[{icon:'fa-clock',name:'Auto-Guardado en 0ms',desc:'Cada palabra se almacena en el caché local de forma instantánea'},{icon:'fa-folder-open',name:'Etiquetas Dinámicas',desc:'Organiza tus notas por carpetas o tags personalizados'},{icon:'fa-heading',name:'Formato Sencillo',desc:'Soporte para jerarquía de títulos y notas estructuradas'}]},
  { id:'sincronizacion', icon:'fa-rotate', color:'#29C72E', nombre:'Sincronización Inteligente', desc:'Tus notas disponibles en cualquier parte',
    items:[{icon:'fa-cloud-arrow-up',name:'Sincro en Segundo Plano',desc:'Los cambios se suben a Firebase silenciosamente'},{icon:'fa-network-wired',name:'Persistencia Offline',desc:'Accede, edita y crea notas incluso sin conexión a internet'},{icon:'fa-arrows-spin',name:'Multi-Dispositivo',desc:'Mismo contenido en Web, Windows y tu móvil'}]},
  { id:'optimizacion', icon:'fa-bolt', color:'#FFDA34', nombre:'Rendimiento Extremo', desc:'Diseñado para cuidar los recursos del sistema',
    items:[{icon:'fa-microchip',name:'Ultra Bajo Consumo',desc:'Usa menos de 40MB de RAM en tu versión de escritorio'},{icon:'fa-gauge-high',name:'Inicio en Milisegundos',desc:'Olvídate de esperas tediosas al abrir la aplicación'},{icon:'fa-shield-halved',name:'Seguro y Nube Pro',desc:'Blindado contra XSS y alojado en la infraestructura de Google'}]},
  { id:'temas', icon:'fa-palette', color:'#7000FF', nombre:'Estética Premium', desc:'Visuales modernos que inspiran tu creatividad',
    items:[{icon:'fa-palette',name:'6 Temas de Diseño',desc:'Cambia al instante entre temas adaptables e inspiradores'},{icon:'fa-moon',name:'Modo Oscuro Integrado',desc:'Perfecto para trabajar en ambientes de baja iluminación'},{icon:'fa-shapes',name:'Efecto Glassmorphism',desc:'Componentes visuales elegantes y semi-transparentes'}]},
  { id:'acceso', icon:'fa-square-check', color:'#0EBEFF', nombre:'Gestor de Tareas', desc:'Convierte notas sencillas en planes listos',
    items:[{icon:'fa-list-check',name:'Checklists Rápidos',desc:'Crea tareas pendientes que puedes tachar al instante'},{icon:'fa-bell',name:'Alertas en Segundo Plano',desc:'No olvides tus pendientes con el servicio de alertas internas'},{icon:'fa-star',name:'Notas Favoritas',desc:'Fija tus notas más importantes en la barra lateral'}]},
  { id:'seguridad', icon:'fa-lock', color:'#FF8F00', nombre:'Privacidad Total', desc:'Tus notas pertenecen únicamente a ti',
    items:[{icon:'fa-key',name:'Autenticación Segura',desc:'Inicio con Firebase Auth y blindaje estricto de accesos'},{icon:'fa-shield-check',name:'Cero Rastreadores',desc:'Sin anuncios ni recopilación de tus datos personales'},{icon:'fa-cloud-lock',name:'Copia de Seguridad',desc:'Respaldo en tiempo real para evitar pérdida de notas'}]},
];

const beneficios = [
  { icon:'fa-gauge-simple-high', titulo:'Rendimiento Insuperable', desc:'En 2026, Zenwii rompe los récords de velocidad gracias a su motor nativo ligero sin framework pesado de fondo. Todo carga al instante.' },
  { icon:'fa-cloud-lock', titulo:'Firebase & Offline Core', desc:'Diseñado bajo la filosofía de "Offline-First". Tu base de datos local responde primero, garantizando cero esperas en tu día a día.' },
  { icon:'fa-desktop', titulo:'Experiencia Unificada', desc:'Lleva tus notas contigo en la web, instálalo en tu móvil Android de forma nativa o ejecútalo en Windows en un clic.' },
];

// ── PLANTILLAS ────────────────────────────────────────────────
const tplStat = s => `
  <div class="ini_stat">
    <div class="ini_stat_n" data-target="${s.valor}" data-sufijo="${s.sufijo}">0</div>
    <div class="ini_stat_l">${s.label}</div>
  </div>`;

const tplFeature = f => `
  <div class="ini_cat_card" style="--cc:${f.color}">
    <div class="ini_cat_bar"></div>
    <div class="ini_cat_top">
      <div class="ini_cat_ico"><i class="fas ${f.icon}"></i></div>
      <div class="ini_cat_info"><h3>${f.nombre}</h3><p>${f.desc}</p></div>
    </div>
    <ul class="ini_cat_tools">
      ${f.items.map(it=>`
        <li><div class="ini_tool_a">
          <i class="fas ${it.icon}"></i>
          <div><strong>${it.name}</strong><span>${it.desc}</span></div>
          <i class="fas fa-check ini_ext" style="color:var(--success)"></i>
        </div></li>`).join('')}
    </ul>
  </div>`;

const tplBeneficio = (b,i) => `
  <div class="ini_about_card" style="--d:${i*.15}s">
    <div class="ini_card_ico"><i class="fas ${b.icon}"></i></div>
    <h3>${b.titulo}</h3>
    <p>${b.desc}</p>
  </div>`;

let timerInterval;

// ── RENDER ────────────────────────────────────────────────────
export const render = () => `
<div class="ini_wrap">

  <!-- ===== HERO ===== -->
  <section class="ini_hero">
    <div class="ini_hero_content">

      <div class="ini_saludo" style="--d:0s">
        <span>${Saludar()}</span><span class="ini_wave">⚡</span>
      </div>

      <h1 class="ini_titulo" style="--d:.18s">
        Organiza tus ideas al instante con <span class="ini_grad">${app}</span>
      </h1>

      <div class="ini_roles" style="--d:.36s">
        ${roles.map((r,i)=>`<span class="ini_role${i===0?' active':''}">${r}</span>`).join('')}
      </div>

      <p class="ini_sub" style="--d:.54s">
        El bloc de notas del futuro: ultra rápido, de bajísimo consumo de memoria RAM y totalmente funcional con o sin internet. Diseñado con una interfaz hermosa que potencia tu productividad diaria.
      </p>

      <div class="ini_stats" id="in_stats" style="--d:.72s">
        ${stats.map(tplStat).join('')}
      </div>

      <div class="ini_btns" style="--d:.9s">
        <a href="/login" class="ini_btn_p"><i class="fas fa-feather"></i> Empezar a Escribir</a>
      </div>

    </div>

    <!-- Derecha: Simulador de Bloc de Notas Interactivo -->
    <div class="ini_hero_visual">
      <div class="ini_nw_preview" style="--d:.3s; padding: 2.5vh; max-width: 350px; height: auto;">
        
        <div class="ini_nw_head" style="height: auto; padding: 1vh 0; display: flex; justify-content: space-between; border-bottom: 2px solid var(--brd); background: transparent;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <i class="fas fa-feather" style="color: var(--mco); font-size: 1.2rem;"></i>
            <span style="font-weight: 800; font-size: 0.9rem; color: var(--tx);">${app} Editor</span>
          </div>
          <div id="save_badge" style="font-size: 0.65rem; font-weight: 700; background: var(--bg5); color: var(--mco); padding: 2px 8px; border-radius: 20px; transition: all 0.3s;">
            Nube Conectada ☁️
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 2vh; padding: 2.5vh 0 1vh;">
          <div class="txc">
            <span style="font-size: 0.7rem; font-weight: 600; color: var(--tx3); text-transform: uppercase; letter-spacing: 0.5px;">Caché Local Offline (0ms)</span>
            <h3 id="widget_nombre" style="font-size: 1.1rem; font-weight: 800; color: var(--mco); margin-top: 0.5vh;">📝 Mi Primera Nota</h3>
          </div>
          
          <div style="position: relative;">
            <textarea id="widget_note_text" placeholder="Escribe ideas rápidas aquí, amigo..." style="width: 100%; min-height: 110px; border-radius: 8px; border: 1px solid var(--brd); padding: 1.2vh; font-size: 0.85rem; line-height: 1.5; resize: none; background: var(--inp); color: var(--tx); outline: none;"></textarea>
            <div id="save_indicator" style="position: absolute; right: 10px; bottom: 8px; font-size: 0.65rem; color: var(--success); font-weight: 700; opacity: 0; transition: opacity 0.3s; pointer-events: none;">
              <i class="fas fa-circle-check"></i> Guardado 0ms
            </div>
          </div>
          
          <div style="border-top: 1px solid var(--brd); padding-top: 1.5vh; display: flex; justify-content: space-between; align-items: center;">
            <span id="widget_word_count" style="font-size: 0.75rem; font-weight: 600; color: var(--tx3);">0 palabras</span>
            <button id="btn_clear_note" class="bt_auth" style="padding: 0.5vh 1.2vh; font-size: 0.7rem; border-radius: 6px; display: flex; align-items: center; gap: 4px; border: 1px solid var(--brd);">
              <i class="fas fa-trash-can" style="color: var(--error);"></i> Limpiar
            </button>
          </div>
        </div>
      </div>
      
      <div class="ini_ftech ini_ft1" style="--d:.5s"  ${wiTip('Editor Veloz')}><i class="fas fa-feather"></i></div>
      <div class="ini_ftech ini_ft2" style="--d:.65s" ${wiTip('Guardado en 0ms')}><i class="fas fa-bolt"></i></div>
      <div class="ini_ftech ini_ft3" style="--d:.8s"  ${wiTip('Offline Core')}><i class="fas fa-wifi"></i></div>
      <div class="ini_ftech ini_ft4" style="--d:.95s" ${wiTip('Temas Adaptativos')}><i class="fas fa-palette"></i></div>
    </div>
  </section>

  <!-- ===== PILARES FUNCIONALES ===== -->
  <section class="ini_cats_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">Los <span class="ini_grad">6 Pilares</span> de Zenwii</h2>
      <div class="ini_sec_line"></div>
      <p class="ini_sec_desc">Diseñado milimétricamente para ser el bloc de notas más eficiente y amigable</p>
    </div>
    <div class="ini_cats_grid">${features.map(tplFeature).join('')}</div>
  </section>

  <!-- ===== ¿POR QUÉ ZENWII? ===== -->
  <section class="ini_about_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">¿Por qué usar <span class="ini_grad">${app}?</span></h2>
      <div class="ini_sec_line"></div>
    </div>
    <div class="ini_about_grid">${beneficios.map(tplBeneficio).join('')}</div>
  </section>

  <!-- ===== CTA FINAL ===== -->
  <section class="ini_cta_sec">
    <div class="ini_cta_wrap">
      <i class="fas fa-feather ini_cta_ico"></i>
      <h2>Comienza a escribir tus mejores ideas hoy</h2>
      <p>Accede de forma gratuita y experimenta lo que es guardar notas a la velocidad de la luz.</p>
      <div class="ini_cta_chips">
        <a href="/login" class="ini_btn_p"><i class="fas fa-arrow-right-to-bracket"></i> Empezar Gratis</a>
      </div>
    </div>
  </section>

</div>`;

// ── INIT ──────────────────────────────────────────────────────
export const init = () => {
  // Roles rotantes
  let ri = 0;
  const $r = $('.ini_role');
  const roleInterval = setInterval(() => { 
    $r.removeClass('active'); 
    $r.eq(ri = (ri+1) % $r.length).addClass('active'); 
  }, 2800);

  // Stats contador — al entrar en viewport
  wiVista('#in_stats', () => {
    $('.ini_stat_n').each(function() {
      const $n = $(this), obj = +$n.data('target'), suf = $n.data('sufijo') || '';
      let v = 0;
      const t = setInterval(() => {
        v += Math.max(1, obj / 40);
        if (v >= obj) { $n.text(obj + suf); clearInterval(t); }
        else $n.text(Math.floor(v));
      }, 25);
    });
  });

  // Scroll animations
  wiVista('.ini_cat_card',   null, { anim:'wi_fadeUp', stagger:80  });
  wiVista('.ini_about_card', null, { anim:'wi_fadeUp', stagger:140 });

  // --- WIDGET PLANNER INTERACTIVO (MINI NOTAS) ---
  let saveTimeout;
  
  $('#widget_note_text').on('input', function() {
    const text = $(this).val();
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    
    // Actualizar conteo de palabras
    $('#widget_word_count').text(`${words} ${words === 1 ? 'palabra' : 'palabras'}`);
    
    // Cambiar estados del badge de sincronización para simular guardado en segundo plano
    $('#save_badge').text('Guardando... ⏳').css({ background: 'var(--bg4)', color: 'var(--mco)' });
    $('#save_indicator').css('opacity', 0);
    
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
      $('#save_badge').text('Sincronizado ✅').css({ background: 'var(--success)', color: '#fff' });
      $('#save_indicator').css('opacity', 1);
      
      // Regresar al estado pasivo después de unos segundos
      setTimeout(() => {
        $('#save_badge').text('Nube Conectada ☁️').css({ background: 'var(--bg5)', color: 'var(--mco)' });
      }, 2000);
    }, 500);
  });

  $('#btn_clear_note').on('click', function() {
    $('#widget_note_text').val('').focus();
    $('#widget_word_count').text('0 palabras');
    $('#save_indicator').css('opacity', 0);
    $('#save_badge').text('Nube Conectada ☁️').css({ background: 'var(--bg5)', color: 'var(--mco)' });
  });

  // Guardar intervalos
  window._inicio_timers = [roleInterval];
  console.log(`🚀 ${app} ${version} · Inicio Zenwii OK`);
};

export const cleanup = () => {
  if (window._inicio_timers) {
    window._inicio_timers.forEach(t => clearInterval(t));
  }
};