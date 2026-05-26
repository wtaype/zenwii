import{n as e}from"./vendor-BuoCFfzO.js";import{t}from"./wii-DQBqtwtl.js";import{E as n}from"./widev-DfeMkeQH.js";/* empty css               *//* empty css                 */var r=[{ico:`fa-users`,color:`#0EBEFF`,num:`01`,tit:`Uso de la app`,body:`<p>${t} es una app para guardar notas, tareas, ideas y proyectos, organizar información en tablas inteligentes y sincronizar datos en tiempo real. Debe usarse con información real, respeto y sin finalidades ilegales.</p>`},{ico:`fa-shield-halved`,color:`#29C72E`,num:`02`,tit:`Cuenta y sincronización`,body:`<p>Puedes iniciar sesión con Google o email. Sincronizamos tu perfil, notas, listas, tablas y ajustes con Firebase para que la app sea rápida, confiable y accesible desde cualquier dispositivo.</p>`},{ico:`fa-globe`,color:`#FF5C69`,num:`03`,tit:`Planes disponibles`,body:`<p>El plan base está disponible como inicio. Planes premium quedan preparados para más capacidad, almacenamiento, colaboración y funciones avanzadas. Los límites pueden actualizarse con aviso razonable.</p>`},{ico:`fa-gavel`,color:`#7000FF`,num:`04`,tit:`Derechos y propiedad intelectual`,body:`<p>${t} es un proyecto desarrollado por Wilder Taype. El diseño, código y funcionalidades pertenecen al proyecto; tus datos personales, notas y contenido guardado siguen siendo tuyos en todo momento.</p>`},{ico:`fa-triangle-exclamation`,color:`#FFDA34`,num:`05`,tit:`Limitación de responsabilidad`,body:`<p>${t} ayuda a organizar información, pero debes revisar que tus datos sean correctos y completos. El servicio puede depender de permisos, conexión a internet, disponibilidad de Firebase y configuración del dispositivo.</p>`},{ico:`fa-arrows-rotate`,color:`#0EBEFF`,num:`06`,tit:`Cambios en los términos`,body:`<p>Podemos actualizar funciones, texto legal y detalles del servicio con el tiempo. El uso continuado de ${t} después de esos cambios implica aceptación de la versión vigente.</p>`}],i=()=>`
<main id="wimain">
<div class="ac_wrap tm_wrap">

  <!-- ══ HERO ══ -->
  <section class="ac_hero tm_hero">
    <div class="ac_hero_orb ac_orb1"></div>
    <div class="ac_hero_orb ac_orb2"></div>
    <div class="ac_hero_orb ac_orb3"></div>
    <div class="ac_hero_body">
      <div class="ac_hero_badge"><i class="fas fa-file-contract"></i> Condiciones de Uso</div>
      <h1 class="ac_hero_tit">Términos y<br><span class="ac_grad">Condiciones</span></h1>
      <p class="ac_hero_sub">
        Reglas claras para usar <strong>${t}</strong>, cuidar tus datos y mantener una experiencia profesional y segura.
      </p>
      <div class="tm_hero_chips">
        <span class="tm_chip"><i class="fas fa-handshake"></i> Confianza</span>
        <span class="tm_chip"><i class="fas fa-shield-halved"></i> Transparencia</span>
        <span class="tm_chip"><i class="fas fa-gavel"></i> Claridad</span>
      </div>
      <div class="tm_last_upd">
        <i class="fas fa-calendar-check"></i>
        Última actualización: ${n()} · Versión v11
      </div>
    </div>
  </section>

  <!-- ══ ÍNDICE RÁPIDO ══ -->
  <div class="tm_index_band">
    ${r.map((e,t)=>`
      <a href="#tm_sec_${t}" class="tm_index_item">
        <i class="fas ${e.ico}" style="color:${e.color}"></i>
        <span>${e.tit}</span>
      </a>`).join(``)}
  </div>

  <!-- ══ SECCIONES ══ -->
  <section class="ac_sec tm_secciones">
    <div class="ac_sec_head">
      <div class="ac_sec_badge"><i class="fas fa-list-check"></i> Acuerdo de Uso</div>
      <h2 class="ac_sec_tit">Reglamento <span class="ac_grad">General</span></h2>
      <p class="ac_sec_sub">Lee con atención. El uso de CumpleWii requiere la aceptación de estas condiciones.</p>
    </div>
    <div class="tm_secs_grid">
      ${r.map((e,t)=>`
        <div class="tm_sec_card wi_fadeUp" id="tm_sec_${t}">
          <div class="tm_sec_header">
            <div class="tm_sec_ico" style="--tc:${e.color}">
              <i class="fas ${e.ico}"></i>
            </div>
            <div>
              <span class="tm_sec_num" style="color:${e.color}">${e.num}</span>
              <h2 class="tm_sec_tit">${e.tit}</h2>
            </div>
          </div>
          <div class="tm_sec_body">${e.body}</div>
        </div>`).join(``)}
    </div>
  </section>

</div></main>
`,a=null,o=()=>{let n=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&e(t.target).addClass(`visible`)})},{threshold:.1});a=n,e(`.wi_fadeUp`).each(function(){n.observe(this)}),e(document).on(`click.terminos`,`.tm_nav`,function(t){t.preventDefault();let{rutas:n}=window._wiRutas??{};n?.navigate?.(e(this).attr(`href`))}),e(document).on(`click.terminos`,`.tm_index_item`,function(t){t.preventDefault();let n=document.querySelector(e(this).attr(`href`));n&&window.scrollTo({top:n.getBoundingClientRect().top+scrollY-90,behavior:`smooth`})}),window.wiInitTips&&window.wiInitTips(),console.log(`📜 ${t} Términos cargados`),window.__WIREADY__=!0},s=()=>{a?.disconnect?.(),a=null,e(document).off(`.terminos`)};export{s as cleanup,o as init,i as render};