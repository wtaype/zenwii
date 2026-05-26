import './nota.css';
import $ from 'jquery';
import { app, version } from './wii.js';
import { showi, Notificacion, wiAuth, wiTip, wicopy, getls, savels, Saludar, wiFade, wiTiempo, formatearFechaHora, avatar, extraerTextoPlano, abrirModal, cerrarTodos } from './widev.js';
import { renderHeader, renderAuthHeader } from './header.js';
import { renderFooter } from './footer.js';
import { htmlToMarkdown, markdownToHtml } from './convertirMd.js';

// ── CUSTOM WITIP POSITIONING OVERRIDE (without touching widev.js) ──────────
if (!$('#wiTip-custom-css').length) {
  $('head').append(`<style id="wiTip-custom-css">
    /* Bottom tooltips override */
    .wiTip.tipo-bottom::after {
      top: auto !important;
      bottom: 100% !important;
      border-top-color: transparent !important;
      border-bottom-color: inherit !important;
    }
    
    /* Left tooltips override */
    .wiTip.tipo-left::after {
      top: 50% !important;
      left: 100% !important;
      bottom: auto !important;
      margin-left: 0 !important;
      margin-top: -.6vh !important;
      border-top-color: transparent !important;
      border-left-color: inherit !important;
    }
    
    /* Right tooltips override */
    .wiTip.tipo-right::after {
      top: 50% !important;
      right: 100% !important;
      left: auto !important;
      bottom: auto !important;
      margin-left: 0 !important;
      margin-top: -.6vh !important;
      border-top-color: transparent !important;
      border-right-color: inherit !important;
    }
  </style>`);
}

// Intercept and rewrite tooltip rendering on-the-fly
wiTip.ver = (elm, txt, tipo, tiempo) => {
  $('.wiTip').remove();
  
  let pos = 'top';
  let colorKey = tipo;
  
  if (['bottom', 'left', 'right', 'top'].includes(tipo)) {
    pos = tipo;
    colorKey = 'mco';
  }
  
  // Auto-resolve position based on element DOM location if default 'top' or 'mco' is passed
  if (tipo === 'top' || tipo === 'mco' || !tipo) {
    const $elm = $(elm);
    if ($elm.closest('.wd_toolbar').length || $elm.closest('.wd_header').length || $elm.closest('.wd_tabs_bar').length) {
      pos = 'bottom';
    } else if ($elm.closest('.wd_doc_item').length || $elm.closest('.wd_sb_btn').length || $elm.closest('.wd_sb_actions_panel').length) {
      pos = 'left';
    }
  }

  const c = ({success:'var(--success)',error:'var(--error)',warning:'var(--warning)',info:'var(--info)'}[colorKey] || 'var(--mco)');
  
  const $tip = $(`<div class="wiTip tipo-${pos}" style="background:${c}; border-top-color:${pos === 'top' ? c : 'transparent'}; border-bottom-color:${pos === 'bottom' ? c : 'transparent'}; border-left-color:${pos === 'left' ? c : 'transparent'}; border-right-color:${pos === 'right' ? c : 'transparent'}"><span>${txt}</span></div>`).appendTo('body');
  
  const {left, top, width, height} = $(elm)[0].getBoundingClientRect();
  const tipW = $tip.outerWidth();
  const tipH = $tip.outerHeight();
  
  let finalLeft = left + width/2 - tipW/2;
  let finalTop = top - tipH - 8; // Default top
  
  if (pos === 'bottom') {
    finalTop = top + height + 8;
    $tip.css({transform: 'translateY(.3vh)'});
  } else if (pos === 'left') {
    finalLeft = left - tipW - 8;
    finalTop = top + height/2 - tipH/2;
    $tip.css({transform: 'translateX(.3vh)'});
  } else if (pos === 'right') {
    finalLeft = left + width + 8;
    finalTop = top + height/2 - tipH/2;
    $tip.css({transform: 'translateX(-.3vh)'});
  }
  
  finalLeft = Math.max(8, Math.min(finalLeft, innerWidth - tipW - 8));
  
  $tip.css({
    left: finalLeft,
    top: finalTop
  });
  
  requestAnimationFrame(() => {
    $tip.addClass('show');
    if (pos === 'bottom' || pos === 'left' || pos === 'right') {
      $tip.css({transform: 'translateY(0) translateX(0)'});
    }
    if (tiempo > 0) {
      setTimeout(() => {
        $tip.removeClass('show');
        setTimeout(() => $tip.remove(), 200);
      }, tiempo);
    }
  });
};

// ── CONFIG ──────────────────────────────────────────────────
const LS_KEY = 'notas_ls';
const uid    = () => 'wd' + Date.now();
const DEMO = [
  { id: 'ej1', titulo: 'Documento de Ejemplo', contenido: '<p>Este es un documento de ejemplo. <b>Prueba a editar el texto</b> y usar las herramientas de la barra superior para darle estilo.</p>', pin: true, creado: Date.now(), actualizado: Date.now(), synced: false }
];

const ls = {
  get: () => {
    const raw = localStorage.getItem(LS_KEY);
    if (raw === null && !wiAuth.user) return [...DEMO];
    const d = getls(LS_KEY) || (raw?.startsWith('[') ? JSON.parse(raw) : []);
    return d;
  },
  set: (ns) => savels(LS_KEY, ns, 8760) // 1 año
};

// ── RENDER HTML ──────────────────────────────────────────────
export const render = () => `
<div class="wd_wrap">
  <!-- DEDICATED CUSTOM HEADER -->
  ${renderHeader()}

  <!-- MAIN WORKSPACE -->
  <div class="wd_workspace">
    <!-- SIDEBAR -->
    <aside id="wd_sidebar" class="wd_sidebar">
      <div class="wd_sb_head">
        <h3 id="wd_saludo">Archivos</h3>
        <div style="display:flex; gap: 5px;">
          <button id="wd_btn_refresh" class="wd_sb_btn" style="display:none" ${wiTip('Actualizar desde la nube')}><i class="fas fa-rotate-right"></i></button>
          <button id="wd_btn_new" class="wd_sb_btn" ${wiTip('Nuevo Documento')}><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <div class="wd_sb_actions_panel">
        <input type="text" id="wd_in_tit" class="wd_doc_title_sb" placeholder="Título del documento..." autocomplete="off">
        <div style="display:flex; gap:1vh; margin-top:1.5vh;">
          <button id="wd_btn_save" class="wd_btn_main" style="flex:1; justify-content:center;"><i class="fas fa-save"></i> Guardar</button>
          <button id="wd_btn_del" class="wd_btn_sec wd_btn_del_doc" ${wiTip('Eliminar permanentemente', undefined, 'error')}><i class="fas fa-trash-can"></i></button>
        </div>
      </div>
      <div id="wd_sb_list" class="wd_sb_list">
        <div class="wd_skeleton"></div><div class="wd_skeleton"></div>
      </div>
    </aside>
    
    <!-- MAIN CONTENT VIEWPORT -->
    <div class="wd_main_content">
      <!-- TABS BAR (STYLE NOTEPAD) -->
      <div id="wd_tabs_bar" class="wd_tabs_bar">
        <!-- Tabs loaded dynamically -->
      </div>

      <!-- CANVAS -->
      <main class="wd_canvas">
        <div class="wd_page">
          <div id="wd_editor" class="wd_editor" contenteditable="true" data-placeholder="Comienza a escribir tus ideas con enfoque máximo..." spellcheck="false"></div>
        </div>
      </main>

      <!-- CUSTOM FOOTER -->
      ${renderFooter()}
    </div>
  </div>

  <!-- FLOATING EXIT BUTTON FOR FOCUS MODE -->
  <button id="wd_btn_exit_focus" class="wd_btn_exit_focus" ${wiTip('Salir de concentración (Esc)')}><i class="fas fa-compress"></i></button>
</div>

<!-- SEARCH MODAL -->
<div id="wd_search_modal" class="wiModal">
  <div class="modalBody wd_search_modal_body">
    <button class="modalX"><i class="fa-solid fa-xmark"></i></button>
    <div class="wd_search_modal_hdr">
      <i class="fa-solid fa-magnifying-glass search_icon"></i>
      <h3>Buscar Notas e Ideas</h3>
    </div>
    <div class="wd_search_modal_content">
      <input type="text" id="wd_modal_search_inp" class="wd_search_modal_inp" placeholder="Escribe el título o contenido de tu nota..." autocomplete="off">
      <div id="wd_search_results" class="wd_search_results_list">
        <!-- Result items loaded dynamically -->
      </div>
    </div>
  </div>
</div>
`;
// ── FIRESTORE ────────────────────────────────────────────────
const getFS = async () => {
  const { db } = await import('./firebase.js');
  return { db, ...await import('firebase/firestore') };
};

const getDocId = (d, wi) => {
  if (!wi?.usuario) return d.id;
  let username = wi.usuario || wi.email || "nota";
  if (username.includes("@")) {
    username = username.split("@")[0];
  }
  const cleanUsername = username.toLowerCase().replace(/[^a-z0-9_-]/g, "");
  const ts = d.creado || Date.now();
  return `${cleanUsername}_${ts}`;
};

const guardarNube = async (d) => {
  const wi = wiAuth.user; if (!wi?.email) return d.id;
  try {
    const { db, doc, setDoc, serverTimestamp } = await getFS();
    const guardadoCreado = d.creado ? new Date(d.creado) : serverTimestamp();
    const guardadoActualizado = d.actualizado ? new Date(d.actualizado) : serverTimestamp();
    const docId = getDocId(d, wi);

    if (d.id && d.id !== docId) {
      try {
        const { deleteDoc } = await import('firebase/firestore');
        await deleteDoc(doc(db, 'notas', d.id));
      } catch (e) {
        console.warn('[delete-old-remote-failed]', e);
      }
    }

    await setDoc(doc(db, 'notas', docId), {
      id: docId,
      usuario: wi.usuario ? wi.usuario.toLowerCase().replace(/[^a-z0-9_-]/g, "") : wi.email.split('@')[0],
      email: wi.email,
      titulo: String(d.titulo || ''),
      contenido: String(d.contenido || ''),
      contenidoMd: htmlToMarkdown(d.contenido || ''),
      pin: !!d.pin,
      creado: guardadoCreado,
      actualizado: guardadoActualizado
    });
    return docId;
  } catch(e) {
    console.error('[notas] guardarNube:', e);
    return d.id;
  }
};

const actualizarNube = async (d) => {
  const wi = wiAuth.user; if (!wi?.email) return d.id;
  try {
    const { db, doc, setDoc, serverTimestamp } = await getFS();
    const guardadoActualizado = d.actualizado ? new Date(d.actualizado) : serverTimestamp();
    const docId = getDocId(d, wi);

    if (d.id && d.id !== docId) {
      try {
        const { deleteDoc } = await import('firebase/firestore');
        await deleteDoc(doc(db, 'notas', d.id));
      } catch (e) {
        console.warn('[delete-old-remote-failed]', e);
      }
    }

    await setDoc(doc(db, 'notas', docId), {
      id: docId,
      usuario: wi.usuario ? wi.usuario.toLowerCase().replace(/[^a-z0-9_-]/g, "") : wi.email.split('@')[0],
      email: wi.email,
      titulo: String(d.titulo || ''),
      contenido: String(d.contenido || ''),
      contenidoMd: htmlToMarkdown(d.contenido || ''),
      pin: !!d.pin,
      actualizado: guardadoActualizado
    }, { merge: true });
    return docId;
  } catch(e) {
    console.error('[notas] actualizarNube:', e);
    return d.id;
  }
};

const eliminarNube = async (id) => {
  const wi = wiAuth.user; if (!wi?.email) return;
  try {
    const { db, doc, deleteDoc } = await getFS();
    const docId = getDocId({ id }, wi);
    await deleteDoc(doc(db, 'notas', docId));
    if (docId.includes('_')) {
      const oldDocId = docId.replace('_', '');
      try {
        await deleteDoc(doc(db, 'notas', oldDocId));
      } catch (e) {}
    }
  } catch(e) { console.error('[notas] eliminarNube:', e); }
};

const cargarNube = async () => {
  const wi = wiAuth.user; if (!wi?.email) return null;
  try {
    const { db, collection, getDocs, query, where } = await getFS();
    const snap = await getDocs(query(collection(db, 'notas'), where('email', '==', wi.email)));
    return snap.docs.map(docSnap => {
      const x = docSnap.data();
      return {
        id: x.id || docSnap.id,
        titulo: x.titulo || '',
        contenido: x.contenido || (x.contenidoMd ? markdownToHtml(x.contenidoMd) : ''),
        contenidoMd: x.contenidoMd || '',
        pin: !!x.pin,
        creado: x.creado?.toMillis?.() || x.creado || Date.now(),
        actualizado: x.actualizado?.toMillis?.() || x.actualizado || Date.now(),
        synced: true
      };
    });
  } catch(e) { console.error('[notas] cargarNube:', e); return null; }
};

// ── HELPERS & RENDER ─────────────────────────────────────────

const tplListItem = (d, actId) => {
  const txt = extraerTextoPlano(d.contenido);
  const snippet = txt.length > 50 ? txt.substring(0, 50) + '...' : (txt || 'Sin contenido...');
  const activo = d.id === actId ? 'active' : '';
  const titulo = d.titulo || 'Documento sin título';
  return `
    <div class="wd_doc_item ${activo}${d.pin ? ' wd_pinned' : ''}" data-id="${d.id}">
      <div class="wd_doc_head">
        <h4>${titulo}</h4>
        <div class="wd_doc_acts">
          <button class="wd_act_pin${d.pin ? ' active' : ''}" data-id="${d.id}" ${wiTip(d.pin ? 'Desanclar' : 'Fijar', undefined, 'right')}><i class="fas fa-thumbtack"></i></button>
          <button class="wd_act_del" data-id="${d.id}" ${wiTip('Eliminar permanentemente', undefined, 'right')}><i class="fas fa-trash-can"></i></button>
          <i class="fas ${d.synced ? 'fa-cloud wd_cloud_ok' : 'fa-cloud-arrow-up wd_cloud_pen'}" ${wiTip(d.synced ? 'En la nube' : 'Local (Cambios sin guardar)', undefined, 'right')}></i>
        </div>
      </div>
      <p>${snippet}</p>
    </div>`;
};

// ── INIT ─────────────────────────────────────────────────────
let unsub = null;
let metaTimer = null;
let saveDebounceTimer = null;

export const init = async () => {
  let docs = ls.get();
  let act  = null;
  let savedRange = null;
  let openTabs = [];

  // ── FUNCIÓN DE ELIMINACIÓN AUTOMÁTICA REUTILIZABLE ───────
  const eliminarNotaDoc = (id) => {
    docs = docs.filter(x => x.id !== id);
    openTabs = openTabs.filter(x => x !== id);
    localStorage.setItem('open_tabs', JSON.stringify(openTabs));
    ls.set(docs);
    
    if (wiAuth.user) {
      eliminarNube(id);
    }
    
    Notificacion('Nota eliminada permanentemente', 'success');

    if (act?.id === id) {
      if (openTabs.length > 0) {
        const nextDoc = docs.find(x => x.id === openTabs[0]);
        if (nextDoc) cargarDocUI(nextDoc);
      } else if (docs.length > 0) {
        cargarDocUI(sorted()[0]);
      } else {
        crearNuevo();
      }
    } else {
      renderLista();
    }
  };

  // Intentar cargar pestañas previamente guardadas en caché
  try {
    const cachedTabs = localStorage.getItem('open_tabs');
    if (cachedTabs) openTabs = JSON.parse(cachedTabs);
  } catch {}


  // ── Renderizado Dinámico de Pestañas (Style Notepad) ──────
  const renderTabs = () => {
    const $bar = $('#wd_tabs_bar');
    if (!$bar.length) return;

    // Asegurar que las pestañas tengan documentos válidos
    openTabs = openTabs.filter(id => docs.some(x => x.id === id));
    
    // Si no hay pestañas abiertas pero hay documentos, inyectar el activo
    if (openTabs.length === 0 && act) {
      openTabs.push(act.id);
    }
    localStorage.setItem('open_tabs', JSON.stringify(openTabs));

    if (openTabs.length === 0) {
      $bar.html('');
      return;
    }

    const arrowBtn = `<button id="wd_btn_tab_search" class="wd_tab_search_btn" ${wiTip('Buscar nota por título', undefined, 'bottom')}><i class="fas fa-magnifying-glass"></i></button>`;

    const html = arrowBtn + openTabs.map(id => {
      const docItem = docs.find(x => x.id === id);
      if (!docItem) return '';
      const active = docItem.id === act?.id ? 'active' : '';
      const titulo = docItem.titulo || 'Sin título';
      return `
        <div class="wd_tab ${active}" data-id="${docItem.id}">
          <i class="fa-solid fa-file-lines wd_tab_favicon"></i>
          <span>${titulo}</span>
          <button class="wd_tab_close" data-id="${docItem.id}" title="Cerrar pestaña">&times;</button>
        </div>`;
    }).join('') + 
    `<div class="wd_tab_sep_new"></div>` +
    `<button id="wd_btn_new_tab" class="wd_tab_new_btn" ${wiTip('Nuevo Documento', undefined, 'bottom')}><i class="fas fa-plus"></i></button>`;

    $bar.html(html);
  };

  // ── Gestión de Metadatos Premium ──────────────────────────
  const updateMeta = (d) => {
    if (!wiAuth.user || !d) { $('#wd_meta, .wd_meta_sep_main').hide(); return; }
    $('#wd_meta, .wd_meta_sep_main').css('display', 'flex');
    $('#wd_meta_rel span').text(wiTiempo(d.actualizado || d.creado));
    $('#wd_meta_cre span').text(formatearFechaHora(d.creado));
    $('#wd_meta_upd span').text(formatearFechaHora(d.actualizado));
  };

  const startMetaTimer = (d) => {
    clearInterval(metaTimer);
    if (!wiAuth.user || !d) return;
    metaTimer = setInterval(() => {
      $('#wd_meta_rel span').text(wiTiempo(d.actualizado || d.creado));
    }, 60000);
  };

  const skeleton = () => {
    const sk = `
      <div class="wd_skeleton_item">
        <div class="wd_skeleton wd_sk_title"></div>
        <div class="wd_skeleton wd_sk_body"></div>
      </div>
    `;
    $('#wd_sb_list').html(sk.repeat(3));
  };

  const sorted = () => [...docs].sort((a,b) => {
    if (a.pin && !b.pin) return -1;
    if (!a.pin && b.pin) return 1;
    return (b.actualizado||0) - (a.actualizado||0);
  });

  const renderLista = async () => {
    const lista = sorted();
    await wiFade('#wd_sb_list', lista.length 
      ? lista.map(d => tplListItem(d, act?.id)).join('') 
      : '<div class="wd_empty">No tienes documentos. Crea uno nuevo.</div>', 80);
    renderTabs();
  };

  const cargarDocUI = (d) => {
    act = d;
    $('#wd_in_tit').val(d.titulo || '');
    $('#wd_editor').html(d.contenido || '');
    
    // Sincronizar con pestañas
    if (!openTabs.includes(d.id)) {
      openTabs.push(d.id);
    }
    localStorage.setItem('open_tabs', JSON.stringify(openTabs));

    renderLista();
    updateMeta(d);
    startMetaTimer(d);
    renderAuthHeader(wiAuth.user, act);
  };

  const crearNuevo = () => {
    docs = docs.filter(n => !(n.id.startsWith('ej') && (n.titulo === 'Documento de Ejemplo' || n.titulo === ''))); 
    const n = { id: uid(), titulo: '', contenido: '', contenidoMd: '', pin: false, creado: Date.now(), actualizado: Date.now(), synced: false };
    docs.unshift(n);
    ls.set(docs);
    
    cargarDocUI(n);
    setTimeout(() => { 
      $('#wd_in_tit').val('').focus(); 
      document.execCommand('fontName', false, "'Segoe UI', system-ui"); 
    }, 50);
  };

  const renderSearchResults = (query = '') => {
    const q = query.trim().toLowerCase();
    let filtered = [];
    if (!q) {
      filtered = sorted().slice(0, 5);
    } else {
      filtered = docs.filter(x => {
        const titleMatch = (x.titulo || '').toLowerCase().includes(q);
        const textMatch = extraerTextoPlano(x.contenido || '').toLowerCase().includes(q);
        return titleMatch || textMatch;
      });
    }

    const $list = $('#wd_search_results');
    if (filtered.length === 0) {
      $list.html('<div class="wd_search_no_results">No se encontraron notas que coincidan con la búsqueda.</div>');
      return;
    }

    const html = filtered.map(d => {
      const active = act && act.id === d.id ? 'active' : '';
      const pinIcon = d.pin ? '<i class="fas fa-thumbtack wd_search_result_icon pinned"></i>' : '<i class="fa-solid fa-file-lines wd_search_result_icon"></i>';
      const title = d.titulo || 'Sin título';
      const text = extraerTextoPlano(d.contenido);
      const snippet = text.length > 80 ? text.substring(0, 80) + '...' : (text || 'Sin contenido...');
      const dateStr = wiTiempo(d.actualizado || d.creado);
      
      return `
        <div class="wd_search_result_item ${active}" data-id="${d.id}">
          ${pinIcon}
          <div class="wd_search_result_info">
            <h4 class="wd_search_result_title">${title}</h4>
            <p class="wd_search_result_snippet">${snippet}</p>
            <div class="wd_search_result_meta">
              <span><i class="fas fa-clock"></i> ${dateStr}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');

    $list.html(html);
  };

  // Autoguardado debounced (2.5s) en segundo plano
  const queueDebouncedSave = () => {
    if (!wiAuth.user || !act) return;
    clearTimeout(saveDebounceTimer);
    saveDebounceTimer = setTimeout(() => {
      if (!act) return;
      
      const docToSave = act;
      const hasData = docToSave.titulo || extraerTextoPlano(docToSave.contenido).trim().length > 0;
      if (hasData) {
        // Poner la nube de la cabecera y el sidebar en modo sincronizando silenciosamente
        const $sbCloud = $(`#wd_sb_list .wd_doc_item[data-id="${docToSave.id}"] .fa-cloud-arrow-up, #wd_sb_list .wd_doc_item[data-id="${docToSave.id}"] .fa-cloud`);
        $sbCloud.removeClass('fa-cloud wd_cloud_ok fa-cloud-arrow-up wd_cloud_pen')
                .addClass('fa-arrows-rotate wd_spin')
                .attr('data-witip', 'Sincronizando con la nube...');
        
        const $hdrCloud = $('#wd_hdr_auth .fa-cloud, #wd_hdr_auth .fa-cloud-arrow-up');
        if ($hdrCloud.length) {
          $hdrCloud.removeClass('fa-cloud wd_cloud_ok fa-cloud-arrow-up wd_cloud_pen')
                    .addClass('fa-arrows-rotate wd_spin')
                    .attr('data-witip', 'Sincronizando con la nube...');
        }

        // Sincronizar silenciosamente
        const op = docToSave.synced ? actualizarNube(docToSave) : guardarNube(docToSave);
        op.then((syncedId) => {
          const oldId = docToSave.id;
          if (syncedId && syncedId !== oldId) {
            docToSave.id = syncedId;
            openTabs = openTabs.map(tid => tid === oldId ? syncedId : tid);
            localStorage.setItem('open_tabs', JSON.stringify(openTabs));
            if (act && act.id === oldId) {
              act.id = syncedId;
            }
            renderLista();
          }
          docToSave.synced = true;
          docToSave.actualizado = Date.now();
          ls.set(docs);
          
          // Cambiar a verde
          const $itemCloud = $(`#wd_sb_list .wd_doc_item[data-id="${docToSave.id}"] .fa-arrows-rotate`);
          if ($itemCloud.length) {
            $itemCloud.removeClass('fa-arrows-rotate wd_spin')
                      .addClass('fa-cloud wd_cloud_ok')
                      .attr('data-witip', 'Sincronizado en la nube ☁️');
          }
          
          const $hdrCloudNew = $('#wd_hdr_auth .fa-arrows-rotate');
          if ($hdrCloudNew.length) {
            $hdrCloudNew.removeClass('fa-arrows-rotate wd_spin')
                        .addClass('fa-cloud wd_cloud_ok')
                        .attr('data-witip', 'Todos los cambios sincronizados');
          }
          
          if (act && act.id === docToSave.id) {
            updateMeta(act);
          }
        }).catch(() => {
          const $itemCloud = $(`#wd_sb_list .wd_doc_item[data-id="${docToSave.id}"] .fa-arrows-rotate`);
          $itemCloud.removeClass('fa-arrows-rotate wd_spin')
                    .addClass('fa-cloud-arrow-up wd_cloud_pen')
                    .attr('data-witip', 'Error de conexión. Guardado en local.');
        });
      }
    }, 2500);
  };

  // Autoguardado local con actualización de UI a 0ms sin parpadeos
  const triggerSave = () => {
    if (!act) return;
    act.titulo = $('#wd_in_tit').val().trim();
    act.contenido = $('#wd_editor').html();
    act.contenidoMd = htmlToMarkdown(act.contenido);
    act.actualizado = Date.now();
    ls.set(docs);
    
    // Actualizar dinámicamente la pestaña activa
    $(`.wd_tab[data-id="${act.id}"] span`).text(act.titulo || 'Sin título');

    // Actualizar sidebar item
    const $item = $(`#wd_sb_list .wd_doc_item[data-id="${act.id}"]`);
    if ($item.length) {
      $item.find('h4').text(act.titulo || 'Documento sin título');
      const txt = extraerTextoPlano(act.contenido);
      $item.find('p').text(txt.length > 50 ? txt.substring(0, 50) + '...' : (txt || 'Sin contenido...'));
      
      $item.find('.fa-cloud.wd_cloud_ok')
        .removeClass('fa-cloud wd_cloud_ok')
        .addClass('fa-cloud-arrow-up wd_cloud_pen')
        .attr('data-witip', 'Local (Cambios sin guardar)');
    }
    
    // Cola de autoguardado en segundo plano
    queueDebouncedSave();
  };

  const revisarTools = () => {
    $('.wd_btn_tool[data-cmd]').each(function() {
      try { $(this).toggleClass('active', document.queryCommandState($(this).data('cmd'))); } catch {}
    });
    try {
      const s = window.getSelection(); if (!s.anchorNode) return;
      const el = s.anchorNode.nodeType === 3 ? s.anchorNode.parentNode : s.anchorNode;
      if ($(el).closest('.wd_editor').length) {
        const css = window.getComputedStyle(el);
        if (css.fontSize) $('#wd_f_sz').val(parseInt(css.fontSize));
        if (css.fontFamily) {
          const fam = css.fontFamily.split(',')[0].replace(/['"]/g, '');
          $('#wd_f_fam option').filter(function(){ return $(this).text() === fam || $(this).val().includes(fam); }).prop('selected', true);
        }
        const block = $(el).closest('p, div, h1, h2, h3, h4, h5, h6, li');
        if (block.length && block[0].style.lineHeight) $('#wd_l_ht').val(block[0].style.lineHeight);
      }
    } catch {}
  };

  // ── MODO CONCENTRACIÓN FADE IN/OUT ────────────────────────
  const toggleFocusMode = () => {
    $('.wd_wrap').toggleClass('wd_focus_active');
    const hasFocus = $('.wd_wrap').hasClass('wd_focus_active');
    if (hasFocus) {
      Notificacion('Modo Concentración Activo 🧘. Presiona Esc para salir.', 'info');
      $('#wd_editor').focus();
    } else {
      Notificacion('Modo Concentración Desactivado', 'info');
    }
  };

  // Cargar tema inicial en la cabecera/footer circles
  const savedTheme = localStorage.wiTema || 'Oro|#FFC107';
  const [themeName] = savedTheme.split('|');
  $('.wd_ft_themes .tema').removeClass('mtha');
  $(`.wd_ft_themes .tema[data-ths^="${themeName}"]`).addClass('mtha');

  // ── EVENTOS DELEGADOS ────────────────────────────────────
  $(document)
    .on('click.wd', '#wd_btn_toggle_sidebar', () => $('#wd_sidebar').toggleClass('closed'))
    .on('click.wd', '#wd_btn_new, #wd_btn_new_tab', crearNuevo)
    .on('click.wd', '#wd_btn_refresh', async function() {
      const $i = $(this).find('i'); if ($i.hasClass('wd_spin')) return;
      $i.addClass('wd_spin');
      const remotos = await cargarNube();
      if (remotos) {
        docs = remotos;
        ls.set(docs);
        if (docs.length) cargarDocUI(sorted()[0]); else crearNuevo();
        Notificacion('Sincronizado con la Nube ✓', 'success');
      }
      $i.removeClass('wd_spin');
    })
    .on('click.wd', '.wd_doc_item', function(e) {
      if ($(e.target).closest('.wd_doc_acts').length) return;
      const d = docs.find(x => x.id === $(this).data('id'));
      if (d) cargarDocUI(d);
    })
    .on('click.wd', '.wd_btn_del_doc', function() {
      if (act) eliminarNotaDoc(act.id);
    })
    .on('click.wd', '.wd_act_del', function(e) {
      e.stopPropagation();
      eliminarNotaDoc($(this).data('id'));
    })
    .on('click.wd', '#wd_btn_tab_search', () => {
      $('#wd_modal_search_inp').val('');
      renderSearchResults('');
      abrirModal('wd_search_modal');
    })
    .on('input.wd', '#wd_modal_search_inp', function() {
      renderSearchResults($(this).val());
    })
    .on('keydown.wd', '#wd_modal_search_inp', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        const $first = $('#wd_search_results .wd_search_result_item').first();
        if ($first.length) {
          $first.click();
        }
      }
    })
    .on('click.wd', '.wd_search_result_item', function() {
      const id = $(this).data('id');
      const found = docs.find(x => x.id === id);
      if (found) {
        cargarDocUI(found);
        cerrarTodos();
      }
    })
    .on('keydown.wd', '#wd_in_tit', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        $('#wd_editor').focus();
      }
    })
    .on('click.wd', '#wd_btn_save', function() {
      if (!act) return;
      triggerSave();
      
      const docToSave = act; // Capture document being saved in closure
      const hasData = docToSave.titulo || extraerTextoPlano(docToSave.contenido).trim().length > 0;
      if (wiAuth.user && hasData) {
        // Actualizar instantáneamente la UI a estado "Sincronizando..."
        const $sbCloud = $(`#wd_sb_list .wd_doc_item[data-id="${docToSave.id}"] .fa-cloud-arrow-up, #wd_sb_list .wd_doc_item[data-id="${docToSave.id}"] .fa-cloud`);
        $sbCloud.removeClass('fa-cloud wd_cloud_ok fa-cloud-arrow-up wd_cloud_pen')
                .addClass('fa-arrows-rotate wd_spin')
                .attr('data-witip', 'Sincronizando con la nube...');
        
        const $hdrCloud = $('#wd_hdr_auth .fa-cloud, #wd_hdr_auth .fa-cloud-arrow-up');
        if ($hdrCloud.length) {
          $hdrCloud.removeClass('fa-cloud wd_cloud_ok fa-cloud-arrow-up wd_cloud_pen')
                    .addClass('fa-arrows-rotate wd_spin')
                    .attr('data-witip', 'Sincronizando con la nube...');
        }
        
        // Micro-interacción instantánea "Guardado" en el botón
        const $btn = $(this);
        const origHtml = $btn.html();
        $btn.html('<i class="fas fa-circle-check"></i> Guardado').addClass('wd_saved_success');
        setTimeout(() => $btn.html(origHtml).removeClass('wd_saved_success'), 1200);

        // Guardado real en segundo plano
        const op = docToSave.synced ? actualizarNube(docToSave) : guardarNube(docToSave);

        op.then((syncedId) => {
          const oldId = docToSave.id;
          if (syncedId && syncedId !== oldId) {
            docToSave.id = syncedId;
            openTabs = openTabs.map(tid => tid === oldId ? syncedId : tid);
            localStorage.setItem('open_tabs', JSON.stringify(openTabs));
            if (act && act.id === oldId) {
              act.id = syncedId;
            }
            renderLista();
          }
          docToSave.synced = true;
          docToSave.actualizado = Date.now();
          ls.set(docs);

          // Cambiar silenciosamente a verde en segundo plano
          const $itemCloud = $(`#wd_sb_list .wd_doc_item[data-id="${docToSave.id}"] .fa-arrows-rotate`);
          if ($itemCloud.length) {
            $itemCloud.removeClass('fa-arrows-rotate wd_spin')
                      .addClass('fa-cloud wd_cloud_ok')
                      .attr('data-witip', 'Sincronizado en la nube ☁️');
          }

          if (act && act.id === docToSave.id) {
            updateMeta(act);
            renderAuthHeader(wiAuth.user, act);
          }
        }).catch((e) => {
          console.error("Error al guardar en la nube (background):", e);
          const $itemCloud = $(`#wd_sb_list .wd_doc_item[data-id="${docToSave.id}"] .fa-arrows-rotate`);
          $itemCloud.removeClass('fa-arrows-rotate wd_spin')
                    .addClass('fa-cloud-arrow-up wd_cloud_pen')
                    .attr('data-witip', 'Error de conexión. Cambios locales guardados.');
          
          if (act && act.id === docToSave.id) {
            renderAuthHeader(wiAuth.user, act);
          }
        });
      } else if (wiAuth.user && !hasData) {
        Notificacion('Agrega un título o contenido primero', 'warning');
      } else {
        // Modo invitado - Guardado local instantáneo
        const $btn = $(this);
        const origHtml = $btn.html();
        $btn.html('<i class="fas fa-circle-check"></i> Guardado local').addClass('wd_saved_success');
        setTimeout(() => $btn.html(origHtml).removeClass('wd_saved_success'), 1200);
        Notificacion('Guardado en local ✓', 'success');
      }
    })
    .on('click.wd', '.wd_act_pin', function(e) {
      e.stopPropagation();
      const id = $(this).data('id');
      const d = docs.find(x => x.id === id); if (!d) return;
      d.pin = !d.pin;
      ls.set(docs); renderLista();
      if (wiAuth.user && d.synced) actualizarNube(d);
    })
    // ── EVENTOS DE LAS PESTAÑAS ──
    .on('click.wd', '.wd_tab', function(e) {
      if ($(e.target).closest('.wd_tab_close').length) return;
      const id = $(this).data('id');
      const d = docs.find(x => x.id === id);
      if (d && d.id !== act?.id) cargarDocUI(d);
    })
    .on('click.wd', '.wd_tab_close', function(e) {
      e.stopPropagation();
      eliminarNotaDoc($(this).data('id'));
    })
    // ── MODO CONCENTRACIÓN Y TEMAS ──
    .on('click.wd', '#wd_btn_focus, #wd_btn_exit_focus', toggleFocusMode)
    .on('click.wd', '.wd_ft_themes .tema', function() {
      const th = $(this).data('ths');
      if (!th) return;
      const [n, c] = th.split('|');
      document.documentElement.dataset.theme = n;

      let metaTheme = document.querySelector('meta[name="theme-color"]');
      if (!metaTheme) {
        metaTheme = document.createElement('meta');
        metaTheme.name = 'theme-color';
        document.head.appendChild(metaTheme);
      }
      metaTheme.content = c;

      localStorage.wiTema = th;
      $('.wd_ft_themes .tema').removeClass('mtha');
      $(this).addClass('mtha');

      // Si está logueado, sincronizar el tema de notas con su perfil
      const wi = wiAuth.user;
      if (wi?.usuario) {
        getFS().then(({ db, doc, setDoc, serverTimestamp }) => {
          setDoc(doc(db, 'smiles', wi.usuario), { tema: th, actualizado: serverTimestamp() }, { merge: true });
          savels('wiSmile', { ...wi, tema: th }, 7);
        }).catch(console.error);
      }
    })
    // Editor inputs
    .on('input.wd', '#wd_editor', () => { revisarTools(); triggerSave(); })
    .on('input.wd', '#wd_in_tit', triggerSave)
    .on('mouseup.wd keyup.wd', '#wd_editor', function() {
      revisarTools();
      const s = window.getSelection();
      if (s.rangeCount > 0) savedRange = s.getRangeAt(0);
    })
    // Ribbon Tools
    .on('click.wd', '.wd_btn_tool[data-cmd]', function(e) {
      e.preventDefault();
      document.execCommand($(this).data('cmd'), false, null);
      revisarTools(); $('#wd_editor').focus();
    })
    .on('change.wd', '#wd_f_fam', function() {
      if (savedRange) { const s = window.getSelection(); s.removeAllRanges(); s.addRange(savedRange); }
      document.execCommand('styleWithCSS', false, true);
      document.execCommand('fontName', false, $(this).val());
      $('#wd_editor').focus().trigger('input');
    })
    .on('keydown.wd', '#wd_f_sz', function(e) {
      if (e.key !== 'Enter') return;
      e.preventDefault();
      const v = Math.max(8, Math.min(100, parseInt($(this).val()) || 16));
      $(this).val(v);
      if (savedRange) { const s = window.getSelection(); s.removeAllRanges(); s.addRange(savedRange); }
      document.execCommand('styleWithCSS', false, true);
      document.execCommand('fontSize', false, '7');
      $('.wd_editor font[size="7"], .wd_editor span[style*="xxx-large"]').removeAttr('size').css('font-size', v + 'px');
      $('#wd_editor').focus().trigger('input');
    })
    .on('change.wd', '#wd_l_ht', function() {
      if (savedRange) { const s = window.getSelection(); s.removeAllRanges(); s.addRange(savedRange); }
      const s = window.getSelection();
      if (s.rangeCount) {
        const r = s.getRangeAt(0); const c = r.commonAncestorContainer; const n = c.nodeType === 3 ? c.parentNode : c;
        let b = $(n).hasClass('wd_editor') ? $(n).children().filter(function() { return s.containsNode(this, true); }) : $(n).closest('p, div, h1, h2, h3, h4, h5, h6, li');
        if (!b.length && $(n).hasClass('wd_editor')) b = $(n);
        b.css('line-height', $(this).val());
      }
      $('#wd_editor').focus().trigger('input');
    })
    .on('input.wd', '#wd_c_txt', function() { document.execCommand('foreColor', false, $(this).val()); $('#wd_editor').focus(); })
    .on('input.wd', '#wd_c_bg',  function() { document.execCommand('hiliteColor', false, $(this).val()); $('#wd_editor').focus(); })
    
    // Auth dynamic modals
    .on('click.wd', '.bt_auth', async function () {
      const { abrirLogin } = await import('../smiles/todos/login.js');
      abrirLogin($(this).hasClass('registrar') ? 'registrar' : 'login');
    })
    .on('click.wd', '.bt_salir', async () => {
      const { salir } = await import('../smiles/todos/login.js');
      salir(['wiTema', 'wiSmart', 'open_tabs']);
    });

  // Salir de concentración al pulsar Escape
  $(window).on('keydown.wd', function(e) {
    if (e.key === 'Escape' && $('.wd_wrap').hasClass('wd_focus_active')) {
      toggleFocusMode();
    }
  });

  showi(['.wd_header', '.wd_sidebar', '.wd_tabs_bar', '.wd_ribbon', '.wd_page', '.wd_footer'], 50);
  if (docs.length) cargarDocUI(sorted()[0]); else crearNuevo();

  // Auth signals reactivas
  unsub = wiAuth.on(async wi => {
    renderAuthHeader(wi, act);
    $('#wd_btn_refresh').toggle(!!wi);
    
    if (wi) {
      $('#wd_saludo').text(`${Saludar()}${wi.nombre || wi.usuario}`);
      
      // Mostrar skeleton siempre al iniciar sesión mientras cargamos la nube
      skeleton();
      
      const remotos = await cargarNube();
      docs = remotos || [];
      ls.set(docs);
      
      openTabs = openTabs.filter(id => docs.some(x => x.id === id));
      localStorage.setItem('open_tabs', JSON.stringify(openTabs));

      if (docs.length) cargarDocUI(sorted()[0]); else crearNuevo();
    } else {
      $('#wd_saludo').text('Mis Archivos');
      localStorage.removeItem(LS_KEY); docs = ls.get();
      
      openTabs = openTabs.filter(id => docs.some(x => x.id === id));
      localStorage.setItem('open_tabs', JSON.stringify(openTabs));

      if (docs.length) cargarDocUI(sorted()[0]); else crearNuevo();
    }
  });

  console.log(`📝 ${app} ${version} · Notas Offline-First con Pestañas OK`);
};

export const cleanup = () => {
  $(document).off('.wd');
  $(window).off('.wd');
  clearInterval(metaTimer);
  clearTimeout(saveDebounceTimer);
  unsub?.();
};
