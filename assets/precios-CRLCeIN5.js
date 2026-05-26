import{O as e,w as t}from"./rutas-DP-LLXJj.js";var n=[{id:`gratis`,color:`#8b9bb4`,name:`Gratis`,desc:`Todo lo básico para capturar tus ideas y organizar tus tareas.`,price:`0`,btn:`Comenzar Gratis`,btnType:`outline`,features:[{t:`Guardado local automático (Offline-First)`,v:!0},{t:`Notas y documentos ilimitados`,v:!0},{t:`1 Pestaña activa (Edición individual)`,v:!0},{t:`Temas Estándar (Oro y Cielo)`,v:!0},{t:`Buscador inteligente Spotlight`,v:!1},{t:`Sincronización en la Nube 0ms (Firestore)`,v:!1}]},{id:`pro`,color:`#0EBEFF`,name:`Pro`,desc:`Para creadores e innovadores que buscan expandir su enfoque.`,price:`4.99`,btn:`Obtener Pro`,btnType:`solid`,destacado:!0,features:[{t:`Todo lo de Gratis, más:`,v:!0},{t:`Sincronización en la Nube automática (Firestore)`,v:!0},{t:`Pestañas dinámicas ilimitadas (Multitarea)`,v:!0},{t:`Buscador Premium Spotlight (Modal en vivo)`,v:!0},{t:`Todos los Temas Premium (Paz, Mora, Dulce, Futuro)`,v:!0},{t:`Guardado seguro anti-conflictos de red`,v:!0},{t:`Soporte prioritario por email`,v:!0}]},{id:`vip`,color:`#7000FF`,name:`Vip`,desc:`El ecosistema creativo definitivo sin límites para profesionales.`,price:`9.99`,btn:`Obtener Plus`,btnType:`outline`,features:[{t:`Todo lo de Pro, más:`,v:!0},{t:`Sincronización multi-dispositivo a velocidad VIP`,v:!0},{t:`Exportación premium (Markdown, PDF, HTML)`,v:!0},{t:`Enlaces públicos encriptados para compartir`,v:!0},{t:`Copias de seguridad diarias automatizadas`,v:!0},{t:`Soporte VIP 24/7 con ingenieros de Zenwii`,v:!0}]}],r=()=>`
<div class="pr_wrap">
  <div class="pr_hero pr_anim" style="--d:0s">
    <div class="pr_badge"><i class="fas fa-tag"></i> Enfoque Máximo y Sin Sorpresas</div>
    <h1 class="pr_title">Precios diseñados <span class="pr_grad">para tu productividad</span></h1>
    <p class="pr_desc">Zenwii te ofrece el espacio ideal para capturar tus ideas. Elige el plan que mejor se adapte a tu ritmo de trabajo.</p>
  </div>
  
  <div class="pr_grid">
    ${n.map((e,t)=>`
      <div class="pr_card wi_fadeUp ${e.destacado?`destacado`:``}" style="--cc:${e.color}; --d:${t*.15}s">
        ${e.destacado?`<div class="pr_popular"><i class="fas fa-star"></i> Más Elegido</div>`:``}
        
        <div class="pr_head">
          <div class="pr_name"><i class="fas fa-circle" style="font-size: .4em;"></i> ${e.name}</div>
          <div class="pr_desc_card">${e.desc}</div>
          <div class="pr_price_wrap">
            <div class="pr_price_sim">$</div>
            <div class="pr_price">${e.price}</div>
            <div class="pr_price_per">USD / mes</div>
          </div>
        </div>
        
        <ul class="pr_features">
          ${e.features.map(e=>`
            <li class="pr_feat ${e.v?``:`no`}">
              <i class="fas ${e.v?`fa-check`:`fa-xmark`}"></i>
              <span>${e.t}</span>
            </li>
          `).join(``)}
        </ul>
        
        <button class="pr_btn pr_btn_${e.btnType} bt_auth ${e.id===`gratis`?`registrar`:`login`}">${e.btn}</button>
      </div>
    `).join(``)}
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
`,i=()=>{t(`.pr_card, .pr_anim`,null,{anim:`pr_anim`,stagger:80}),console.log(`💳 ${e} v11 · Precios OK`)},a=()=>{console.log(`🧹 Precios limpiado`)};export{a as cleanup,i as init,r as render};