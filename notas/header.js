import $ from 'jquery';
import { wiTip, avatar, wiAuth, superFun } from './widev.js';

export const renderHeader = () => `
  <header class="wd_header">
    <div class="wd_hdr_left">
      <a href="/" target="_blank" class="wd_logo" id="wd_logo_home"><i class="fa-solid fa-feather-pointed"></i> Zenwii</a>
      <button id="wd_btn_toggle_sidebar" class="wd_hdr_btn" title="Mostrar/Ocultar barra lateral"><i class="fas fa-bars"></i></button>
      <div class="wd_tool_sep"></div>
      
      <!-- FORMATTING TOOLS DIRECTLY IN HEADER LEFT -->
      <div class="wd_tools">
        <div class="wd_tool_group">
          <select id="wd_f_fam" class="wd_font_sel" ${wiTip('Fuente', undefined, 'bottom')}>
            <option value="'Segoe UI', system-ui" selected>Segoe UI</option>
            <option value="'Poppins', sans-serif">Poppins</option>
            <option value="'Outfit', sans-serif">Outfit</option>
            <option value="'Rubik', sans-serif">Rubik</option>
            <option value="Arial, sans-serif">Arial</option>
            <option value="'Times New Roman', serif">Times New Roman</option>
            <option value="'Courier New', monospace">Courier New</option>
            <option value="Georgia, serif">Georgia</option>
          </select>
          <div class="wd_tool_sep"></div>
          <input type="text" id="wd_f_sz" class="wd_font_size" value="16" maxlength="2" ${wiTip('Tamaño (Enter)', undefined, 'bottom')} autocomplete="off">
        </div>
        
        <div class="wd_tool_group">
          <button class="wd_btn_tool" data-cmd="bold" ${wiTip('Negrita', undefined, 'bottom')}><i class="fas fa-bold"></i></button>
          <button class="wd_btn_tool" data-cmd="italic" ${wiTip('Cursiva', undefined, 'bottom')}><i class="fas fa-italic"></i></button>
          <button class="wd_btn_tool" data-cmd="underline" ${wiTip('Subrayado', undefined, 'bottom')}><i class="fas fa-underline"></i></button>
          <button class="wd_btn_tool" data-cmd="strikeThrough" ${wiTip('Tachado', undefined, 'bottom')}><i class="fas fa-strikethrough"></i></button>
        </div>

        <div class="wd_tool_group">
          <button class="wd_btn_tool" data-cmd="justifyLeft" ${wiTip('Alinear Izquierda', undefined, 'bottom')}><i class="fas fa-align-left"></i></button>
          <button class="wd_btn_tool" data-cmd="justifyCenter" ${wiTip('Centrar', undefined, 'bottom')}><i class="fas fa-align-center"></i></button>
          <button class="wd_btn_tool" data-cmd="justifyRight" ${wiTip('Alinear Derecha', undefined, 'bottom')}><i class="fas fa-align-right"></i></button>
          <button class="wd_btn_tool" data-cmd="justifyFull" ${wiTip('Justificar', undefined, 'bottom')}><i class="fas fa-align-justify"></i></button>
        </div>
        
        <div class="wd_tool_group">
          <button class="wd_btn_tool" data-cmd="insertUnorderedList" ${wiTip('Viñetas', undefined, 'bottom')}><i class="fas fa-list-ul"></i></button>
          <button class="wd_btn_tool" data-cmd="insertOrderedList" ${wiTip('Numeración', undefined, 'bottom')}><i class="fas fa-list-ol"></i></button>
          <div class="wd_tool_sep"></div>
          <select id="wd_l_ht" class="wd_font_sel" style="width:60px;" ${wiTip('Interlineado', undefined, 'bottom')}>
             <option value="1">1.0</option>
             <option value="1.15">1.15</option>
             <option value="1.5">1.5</option>
             <option value="2">2.0</option>
          </select>
        </div>
        
        <div class="wd_tool_group">
          <div ${wiTip('Color Texto', undefined, 'bottom')} style="display:flex; align-items:center; padding: 0 0.5vh; height: 3.6vh;">
             <i class="fas fa-font" style="color:var(--tx2); margin-right: 0.5vh; font-size:12px;"></i>
             <input type="color" id="wd_c_txt" value="#222222" style="width:2.2vh;height:2.2vh;border:none;background:none;cursor:pointer;padding:0;">
          </div>
          <div class="wd_tool_sep"></div>
          <div ${wiTip('Color Resaltado', undefined, 'bottom')} style="display:flex; align-items:center; padding: 0 0.5vh; height: 3.6vh;">
             <i class="fas fa-highlighter" style="color:var(--tx2); margin-right: 0.5vh; font-size:12px;"></i>
             <input type="color" id="wd_c_bg" value="#ffff00" style="width:2.2vh;height:2.2vh;border:none;background:none;cursor:pointer;padding:0;">
          </div>
        </div>

        <!-- Metadata Ribbon -->
        <div class="wd_tool_sep wd_meta_sep_main" style="display:none"></div>
        <div id="wd_meta" class="wd_tool_group wd_meta_group" style="display:none; padding: 0 1.5vh; gap: 2vh; border: none; background: transparent;">
          <span class="wd_meta_item" id="wd_meta_rel" ${wiTip('Actividad reciente')}><i class="fas fa-clock"></i> <span>—</span></span>
          <span class="wd_meta_item" id="wd_meta_cre" ${wiTip('Fecha de creación')}><i class="fas fa-calendar-plus"></i> <span>—</span></span>
          <span class="wd_meta_item" id="wd_meta_upd" ${wiTip('Última edición')}><i class="fas fa-pen-nib"></i> <span>—</span></span>
        </div>
      </div>
    </div>
    <div class="wd_hdr_right">
      <div id="wd_hdr_auth" class="wd_hdr_auth_container">
        <!-- Auth status loaded here dynamically -->
      </div>
    </div>
  </header>
`;

export const renderAuthHeader = (wi, act) => {
  const $container = $('#wd_hdr_auth');
  if (!$container.length) return;

  if (wi) {
    // Real-time sync toggle state (persisted in localStorage)
    const rtSyncOn = localStorage.getItem('wd_realtime_sync') !== 'off';
    const cloudState = act?.synced ? 'ok' : (act ? 'pen' : 'ok');
    const cloudTip = rtSyncOn ? 'Sincronización en tiempo real: ON — haz clic para pausar' : 'Sincronización en tiempo real: OFF — haz clic para activar';
    const avatarUrl = wi.avatar || `${import.meta.env.BASE_URL || '/'}smile.avif`;

    $container.html(`
      <div class="wd_hdr_user_info" style="display:flex; gap:1.5vh; align-items:center;">
        <label class="wd_rt_toggle" ${wiTip(cloudTip, undefined, 'bottom')} title="${cloudTip}">
          <input type="checkbox" id="wd_rt_sync_toggle" ${rtSyncOn ? 'checked' : ''} />
          <span class="wd_rt_track">
            <i class="fas ${rtSyncOn ? 'fa-cloud' : 'fa-cloud-arrow-up'} wd_rt_icon"></i>
          </span>
        </label>
        <a href="/perfil" target="_blank" class="nv_item" ${wiTip('Ver mi perfil', undefined, 'bottom')}>
          <img src="${avatarUrl}" alt="${wi.nombre || wi.usuario}">
          <span>${wi.nombre || wi.usuario}</span>
        </a>
        <button class="nv_item bt_salir" ${wiTip('Cerrar sesión', undefined, 'bottom')}>
          <i class="fa-solid fa-sign-out-alt" style="color:#fe413b;"></i>
          <span>Salir</span>
        </button>
      </div>
    `);

    // Wire toggle change
    const toggle = document.getElementById('wd_rt_sync_toggle');
    if (toggle) {
      toggle.addEventListener('change', () => {
        const on = toggle.checked;
        localStorage.setItem('wd_realtime_sync', on ? 'on' : 'off');
        const icon = toggle.closest('.wd_rt_toggle')?.querySelector('.wd_rt_icon');
        if (icon) {
          icon.className = `fas ${on ? 'fa-cloud' : 'fa-cloud-arrow-up'} wd_rt_icon`;
        }
        const tip = on ? 'Sincronización en tiempo real: ON — haz clic para pausar' : 'Sincronización en tiempo real: OFF — haz clic para activar';
        toggle.closest('.wd_rt_toggle')?.setAttribute('title', tip);
        // Notify the app about the change
        window.dispatchEvent(new CustomEvent('wd_rt_sync_changed', { detail: { on } }));
      });
    }
  } else {
    $container.html(`
      <div class="wd_hdr_auth_buttons" style="display:flex; gap:1.5vh; align-items:center;">
        <button class="nv_item bt_auth login"><i class="fa-solid fa-arrow-right-to-bracket"></i> Ingresar</button>
        <button class="nv_item bt_auth registrar"><i class="fa-solid fa-user-plus"></i> Registrarse</button>
      </div>
    `);
  }
};

const salir = () => !window.isRel && (window.isRel = 1) && 
  import('../smiles/todos/login.js').then(m => 
    m.salir(['wiTema', 'wiSmart', 'cookiesPrivacidad', 'superFun']).then(() => location.reload()));


superFun(async () => {
  const [{ auth }, { onAuthStateChanged }] = await Promise.all([import('./firebase.js'), import('firebase/auth')]);
  onAuthStateChanged(auth, u => !u && wiAuth.user && salir());
});

window.addEventListener('storage', e => (!e.key || e.key === 'wiSmile') && location.reload());




