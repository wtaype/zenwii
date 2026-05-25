import './precios.css';
import { app, version } from '../wii.js';
import { wiVista } from '../widev.js';

const planes = [
  {
    id: 'gratis', color: '#8b9bb4', name: 'Gratis', desc: 'Todo lo básico para capturar tus ideas y organizar tus tareas.', price: '0',
    btn: 'Comenzar Gratis', btnType: 'outline',
    features: [
      { t: 'Guardado local automático (Offline-First)', v: true },
      { t: 'Notas y documentos ilimitados', v: true },
      { t: '1 Pestaña activa (Edición individual)', v: true },
      { t: 'Temas Estándar (Oro y Cielo)', v: true },
      { t: 'Buscador inteligente Spotlight', v: false },
      { t: 'Sincronización en la Nube 0ms (Firestore)', v: false }
    ]
  },
  {
    id: 'pro', color: '#0EBEFF', name: 'Pro', desc: 'Para creadores e innovadores que buscan expandir su enfoque.', price: '4.99',
    btn: 'Obtener Pro', btnType: 'solid', destacado: true,
    features: [
      { t: 'Todo lo de Gratis, más:', v: true },
      { t: 'Sincronización en la Nube automática (Firestore)', v: true },
      { t: 'Pestañas dinámicas ilimitadas (Multitarea)', v: true },
      { t: 'Buscador Premium Spotlight (Modal en vivo)', v: true },
      { t: 'Todos los Temas Premium (Paz, Mora, Dulce, Futuro)', v: true },
      { t: 'Guardado seguro anti-conflictos de red', v: true },
      { t: 'Soporte prioritario por email', v: true }
    ]
  },
  {
    id: 'vip', color: '#7000FF', name: 'Vip', desc: 'El ecosistema creativo definitivo sin límites para profesionales.', price: '9.99',
    btn: 'Obtener Plus', btnType: 'outline',
    features: [
      { t: 'Todo lo de Pro, más:', v: true },
      { t: 'Sincronización multi-dispositivo a velocidad VIP', v: true },
      { t: 'Exportación premium (Markdown, PDF, HTML)', v: true },
      { t: 'Enlaces públicos encriptados para compartir', v: true },
      { t: 'Copias de seguridad diarias automatizadas', v: true },
      { t: 'Soporte VIP 24/7 con ingenieros de Zenwii', v: true }
    ]
  }
];

export const render = () => `
<div class="pr_wrap">
  <div class="pr_hero pr_anim" style="--d:0s">
    <div class="pr_badge"><i class="fas fa-tag"></i> Enfoque Máximo y Sin Sorpresas</div>
    <h1 class="pr_title">Precios diseñados <span class="pr_grad">para tu productividad</span></h1>
    <p class="pr_desc">Zenwii te ofrece el espacio ideal para capturar tus ideas. Elige el plan que mejor se adapte a tu ritmo de trabajo.</p>
  </div>
  
  <div class="pr_grid">
    ${planes.map((p, i) => `
      <div class="pr_card wi_fadeUp ${p.destacado ? 'destacado' : ''}" style="--cc:${p.color}; --d:${i * 0.15}s">
        ${p.destacado ? `<div class="pr_popular"><i class="fas fa-star"></i> Más Elegido</div>` : ''}
        
        <div class="pr_head">
          <div class="pr_name"><i class="fas fa-circle" style="font-size: .4em;"></i> ${p.name}</div>
          <div class="pr_desc_card">${p.desc}</div>
          <div class="pr_price_wrap">
            <div class="pr_price_sim">$</div>
            <div class="pr_price">${p.price}</div>
            <div class="pr_price_per">USD / mes</div>
          </div>
        </div>
        
        <ul class="pr_features">
          ${p.features.map(f => `
            <li class="pr_feat ${f.v ? '' : 'no'}">
              <i class="fas ${f.v ? 'fa-check' : 'fa-xmark'}"></i>
              <span>${f.t}</span>
            </li>
          `).join('')}
        </ul>
        
        <button class="pr_btn pr_btn_${p.btnType} bt_auth ${p.id === 'gratis' ? 'registrar' : 'login'}">${p.btn}</button>
      </div>
    `).join('')}
  </div>

  <!-- SECCIÓN COMPROMISO / VENTAS -->
  <div class="pr_trust_sec">
    <div class="pr_trust_head pr_anim" style="--d:0.2s">
      <h2>¿Por qué elegir la Interfaz de <span>Zenwii</span>?</h2>
      <p>Creemos en una web limpia y en herramientas que respeten tu tiempo y tu mente. Estos son los pilares sobre los que construimos tu nuevo espacio de trabajo digital.</p>
    </div>
    <div class="pr_trust_grid">
      <div class="pr_trust_card pr_anim" style="--d:0.3s">
        <i class="fas fa-eye-slash"></i>
        <h3>Enfoque Absoluto (Zero Ads)</h3>
        <p>No lucramos con tus datos. No verás anuncios molestos ni rastreadores. Tu suscripción financia directamente una infraestructura en la nube ultra-segura.</p>
      </div>
      <div class="pr_trust_card pr_anim" style="--d:0.4s">
        <i class="fas fa-bolt"></i>
        <h3>Offline-First a 0ms</h3>
        <p>Nuestra interfaz responde de manera instantánea porque procesa todo localmente. Tus notas nunca se perderán ni se congelarán por problemas de conexión.</p>
      </div>
      <div class="pr_trust_card pr_anim" style="--d:0.5s">
        <i class="fas fa-window-restore"></i>
        <h3>Productividad Multitarea</h3>
        <p>Disfruta de pestañas dinámicas estilo navegador, atajos de teclado de salida rápida (Esc) y un buscador inteligente Spotlight sin levantar las manos del teclado.</p>
      </div>
    </div>
  </div>

</div>
`;

export const init = () => {
  wiVista('.pr_card, .pr_anim', null, { anim: 'pr_anim', stagger: 80 });
  console.log(`💳 ${app} ${version} · Precios OK`);
};

export const cleanup = () => {
  console.log('🧹 Precios limpiado');
};
