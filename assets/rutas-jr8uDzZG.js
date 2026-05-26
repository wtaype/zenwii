const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/admin-FWOua3Ty.css","assets/sistema-C3OQ-N0f.css","assets/usuarios-BMnNRUe5.css","assets/perfil-BZqPOASC.css","assets/smile-BWbZimzl.css","assets/acerca-rEkuWwpI.css","assets/contacto-C-QNnnsD.css","assets/terminos-CEyXQAUt.css","assets/descubre-Dq_06vmy.css","assets/beneficios-A56dH0PE.css","assets/blog-Pvtd5AbW.css","assets/nuevo-BJdQZpYp.css","assets/post-CaVCZ_Tu.css","assets/chatwil-R1-t4gNv.css","assets/emojis-GLPEIk5R.css","assets/login-CS-GQr1l.css","assets/precios-D3qiin1r.css","assets/registrado-DMFE_p3X.css","assets/verificar-mialvYKy.css"])))=>i.map(i=>d[i]);
import{n as e}from"./rolldown-runtime-QTnfLwEv.js";import{n as t}from"./vendor-BuoCFfzO.js";import{t as n}from"./wii-DQBqtwtl.js";import{C as r,b as i,i as a,r as o,w as s,y as c}from"./widev-DfeMkeQH.js";import{t as l}from"./preload-helper-Dq_6WaEp.js";var u=e({cleanup:()=>b,init:()=>y,render:()=>v}),d=[`Notas al Instante ⚡`,`Sincronización Segura en Segundo Plano ☁️`,`Consumo Mínimo de RAM 🧠`,`Seguridad y Persistencia Offline 🔒`,`Interfaz Minimalista y Elegante 🎨`],f=[{valor:0,label:`Latencia de Guardado`,sufijo:`ms`},{valor:30,label:`Consumo de RAM`,sufijo:`MB`},{valor:100,label:`Disponibilidad Offline`,sufijo:`%`}],p=[{id:`editor`,icon:`fa-feather`,color:`#FF5C69`,nombre:`Editor Sin Distracciones`,desc:`Escribe tus ideas de forma fluida y organizada`,items:[{icon:`fa-clock`,name:`Auto-Guardado en 0ms`,desc:`Cada palabra se almacena en el caché local de forma instantánea`},{icon:`fa-folder-open`,name:`Etiquetas Dinámicas`,desc:`Organiza tus notas por carpetas o tags personalizados`},{icon:`fa-heading`,name:`Formato Sencillo`,desc:`Soporte para jerarquía de títulos y notas estructuradas`}]},{id:`sincronizacion`,icon:`fa-rotate`,color:`#29C72E`,nombre:`Sincronización Inteligente`,desc:`Tus notas disponibles en cualquier parte`,items:[{icon:`fa-cloud-arrow-up`,name:`Sincro en Segundo Plano`,desc:`Los cambios se suben a Firebase silenciosamente`},{icon:`fa-network-wired`,name:`Persistencia Offline`,desc:`Accede, edita y crea notas incluso sin conexión a internet`},{icon:`fa-arrows-spin`,name:`Multi-Dispositivo`,desc:`Mismo contenido en Web, Windows y tu móvil`}]},{id:`optimizacion`,icon:`fa-bolt`,color:`#FFDA34`,nombre:`Rendimiento Extremo`,desc:`Diseñado para cuidar los recursos del sistema`,items:[{icon:`fa-microchip`,name:`Ultra Bajo Consumo`,desc:`Usa menos de 40MB de RAM en tu versión de escritorio`},{icon:`fa-gauge-high`,name:`Inicio en Milisegundos`,desc:`Olvídate de esperas tediosas al abrir la aplicación`},{icon:`fa-shield-halved`,name:`Seguro y Nube Pro`,desc:`Blindado contra XSS y alojado en la infraestructura de Google`}]},{id:`temas`,icon:`fa-palette`,color:`#7000FF`,nombre:`Estética Premium`,desc:`Visuales modernos que inspiran tu creatividad`,items:[{icon:`fa-palette`,name:`6 Temas de Diseño`,desc:`Cambia al instante entre temas adaptables e inspiradores`},{icon:`fa-moon`,name:`Modo Oscuro Integrado`,desc:`Perfecto para trabajar en ambientes de baja iluminación`},{icon:`fa-shapes`,name:`Efecto Glassmorphism`,desc:`Componentes visuales elegantes y semi-transparentes`}]},{id:`acceso`,icon:`fa-square-check`,color:`#0EBEFF`,nombre:`Gestor de Tareas`,desc:`Convierte notas sencillas en planes listos`,items:[{icon:`fa-list-check`,name:`Checklists Rápidos`,desc:`Crea tareas pendientes que puedes tachar al instante`},{icon:`fa-bell`,name:`Alertas en Segundo Plano`,desc:`No olvides tus pendientes con el servicio de alertas internas`},{icon:`fa-star`,name:`Notas Favoritas`,desc:`Fija tus notas más importantes en la barra lateral`}]},{id:`seguridad`,icon:`fa-lock`,color:`#FF8F00`,nombre:`Privacidad Total`,desc:`Tus notas pertenecen únicamente a ti`,items:[{icon:`fa-key`,name:`Autenticación Segura`,desc:`Inicio con Firebase Auth y blindaje estricto de accesos`},{icon:`fa-shield-check`,name:`Cero Rastreadores`,desc:`Sin anuncios ni recopilación de tus datos personales`},{icon:`fa-cloud-lock`,name:`Copia de Seguridad`,desc:`Respaldo en tiempo real para evitar pérdida de notas`}]}],m=[{icon:`fa-gauge-simple-high`,titulo:`Rendimiento Insuperable`,desc:`En 2026, Zenwii rompe los récords de velocidad gracias a su motor nativo ligero sin framework pesado de fondo. Todo carga al instante.`},{icon:`fa-cloud-lock`,titulo:`Firebase & Offline Core`,desc:`Diseñado bajo la filosofía de "Offline-First". Tu base de datos local responde primero, garantizando cero esperas en tu día a día.`},{icon:`fa-desktop`,titulo:`Experiencia Unificada`,desc:`Lleva tus notas contigo en la web, instálalo en tu móvil Android de forma nativa o ejecútalo en Windows en un clic.`}],h=e=>`
  <div class="ini_stat">
    <div class="ini_stat_n" data-target="${e.valor}" data-sufijo="${e.sufijo}">0</div>
    <div class="ini_stat_l">${e.label}</div>
  </div>`,g=e=>`
  <div class="ini_cat_card" style="--cc:${e.color}">
    <div class="ini_cat_bar"></div>
    <div class="ini_cat_top">
      <div class="ini_cat_ico"><i class="fas ${e.icon}"></i></div>
      <div class="ini_cat_info"><h3>${e.nombre}</h3><p>${e.desc}</p></div>
    </div>
    <ul class="ini_cat_tools">
      ${e.items.map(e=>`
        <li><div class="ini_tool_a">
          <i class="fas ${e.icon}"></i>
          <div><strong>${e.name}</strong><span>${e.desc}</span></div>
          <i class="fas fa-check ini_ext" style="color:var(--success)"></i>
        </div></li>`).join(``)}
    </ul>
  </div>`,_=(e,t)=>`
  <div class="ini_about_card" style="--d:${t*.15}s">
    <div class="ini_card_ico"><i class="fas ${e.icon}"></i></div>
    <h3>${e.titulo}</h3>
    <p>${e.desc}</p>
  </div>`,v=()=>`
<div class="ini_wrap">

  <!-- ===== HERO ===== -->
  <section class="ini_hero">
    <div class="ini_hero_content">

      <div class="ini_saludo" style="--d:0s">
        <span>${a()}</span><span class="ini_wave">⚡</span>
      </div>

      <h1 class="ini_titulo" style="--d:.18s">
        Organiza tus ideas al instante con <span class="ini_grad">${n}</span>
      </h1>

      <div class="ini_roles" style="--d:.36s">
        ${d.map((e,t)=>`<span class="ini_role${t===0?` active`:``}">${e}</span>`).join(``)}
      </div>

      <p class="ini_sub" style="--d:.54s">
        El bloc de notas del futuro: ultra rápido, de bajísimo consumo de memoria RAM y totalmente funcional con o sin internet. Diseñado con una interfaz hermosa que potencia tu productividad diaria.
      </p>

      <div class="ini_stats" id="in_stats" style="--d:.72s">
        ${f.map(h).join(``)}
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
            <span style="font-weight: 800; font-size: 0.9rem; color: var(--tx);">${n} Editor</span>
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
      
      <div class="ini_ftech ini_ft1" style="--d:.5s"  ${r(`Editor Veloz`)}><i class="fas fa-feather"></i></div>
      <div class="ini_ftech ini_ft2" style="--d:.65s" ${r(`Guardado en 0ms`)}><i class="fas fa-bolt"></i></div>
      <div class="ini_ftech ini_ft3" style="--d:.8s"  ${r(`Offline Core`)}><i class="fas fa-wifi"></i></div>
      <div class="ini_ftech ini_ft4" style="--d:.95s" ${r(`Temas Adaptativos`)}><i class="fas fa-palette"></i></div>
    </div>
  </section>

  <!-- ===== PILARES FUNCIONALES ===== -->
  <section class="ini_cats_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">Los <span class="ini_grad">6 Pilares</span> de Zenwii</h2>
      <div class="ini_sec_line"></div>
      <p class="ini_sec_desc">Diseñado milimétricamente para ser el bloc de notas más eficiente y amigable</p>
    </div>
    <div class="ini_cats_grid">${p.map(g).join(``)}</div>
  </section>

  <!-- ===== ¿POR QUÉ ZENWII? ===== -->
  <section class="ini_about_sec">
    <div class="ini_sec_head">
      <h2 class="ini_sec_tit">¿Por qué usar <span class="ini_grad">${n}?</span></h2>
      <div class="ini_sec_line"></div>
    </div>
    <div class="ini_about_grid">${m.map(_).join(``)}</div>
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

</div>`,y=()=>{let e=0,r=t(`.ini_role`),i=setInterval(()=>{r.removeClass(`active`),r.eq(e=(e+1)%r.length).addClass(`active`)},2800);s(`#in_stats`,()=>{t(`.ini_stat_n`).each(function(){let e=t(this),n=+e.data(`target`),r=e.data(`sufijo`)||``,i=0,a=setInterval(()=>{i+=Math.max(1,n/40),i>=n?(e.text(n+r),clearInterval(a)):e.text(Math.floor(i))},25)})}),s(`.ini_cat_card`,null,{anim:`wi_fadeUp`,stagger:80}),s(`.ini_about_card`,null,{anim:`wi_fadeUp`,stagger:140});let a;t(`#widget_note_text`).on(`input`,function(){let e=t(this).val(),n=e.trim()?e.trim().split(/\s+/).length:0;t(`#widget_word_count`).text(`${n} ${n===1?`palabra`:`palabras`}`),t(`#save_badge`).text(`Guardando... ⏳`).css({background:`var(--bg4)`,color:`var(--mco)`}),t(`#save_indicator`).css(`opacity`,0),clearTimeout(a),a=setTimeout(()=>{t(`#save_badge`).text(`Sincronizado ✅`).css({background:`var(--success)`,color:`#fff`}),t(`#save_indicator`).css(`opacity`,1),setTimeout(()=>{t(`#save_badge`).text(`Nube Conectada ☁️`).css({background:`var(--bg5)`,color:`var(--mco)`})},2e3)},500)}),t(`#btn_clear_note`).on(`click`,function(){t(`#widget_note_text`).val(``).focus(),t(`#widget_word_count`).text(`0 palabras`),t(`#save_indicator`).css(`opacity`,0),t(`#save_badge`).text(`Nube Conectada ☁️`).css({background:`var(--bg5)`,color:`var(--mco)`})}),window._inicio_timers=[i],console.log(`🚀 ${n} v11 · Inicio Zenwii OK`)},b=()=>{window._inicio_timers&&window._inicio_timers.forEach(e=>clearInterval(e))},x=[{href:`/nota`,page:`nota`,ico:`fa-sticky-note`,txt:`Notas Pro`},{href:`/beneficios`,page:`beneficios`,ico:`fa-gift`,txt:`Beneficios`},{href:`/precios`,page:`precios`,ico:`fa-tags`,txt:`Precios`},{href:`/acerca`,page:`acerca`,ico:`fa-circle-info`,txt:`Acerca`}],S={todos:{nvleft:[{href:`/`,page:`inicio`,ico:`fa-house`,txt:`Bienvenido`},...x],nvright:[{isBtn:!0,cls:`bt_auth registrar`,ico:`fa-user-plus`,txt:`Registrar`},{isBtn:!0,cls:`bt_auth login`,ico:`fa-sign-in-alt`,txt:`Login`}]},smile:{nvleft:[{href:`/smile`,page:`smile`,ico:`fa-smile`,txt:`Smile`},...x],nvright:[{isPerfil:!0},{isSalir:!0}]},editor:{nvleft:[{href:`/nuevo`,page:`nuevo`,ico:`fa-plus-circle`,txt:`Crear Post`},...x],nvright:[{isPerfil:!0},{isSalir:!0}]},gestor:{nvleft:[{href:`/gestor`,page:`gestor`,ico:`fa-chart-pie`,txt:`Dashboard`},...x],nvright:[{isPerfil:!0},{isSalir:!0}]},admin:{nvleft:[{href:`/admin`,page:`admin`,ico:`fa-globe`,txt:`Plataforma`},{href:`/usuarios`,page:`usuarios`,ico:`fa-users`,txt:`Usuarios`},{href:`/sistema`,page:`sistema`,ico:`fa-cogs`,txt:`Sistema`}],nvright:[{href:`/nuevo`,page:`nuevo`,ico:`fa-plus`,txt:`Post`},{isPerfil:!0},{isSalir:!0}]},verificar:{nvleft:[],nvright:[]}},C=[{path:`/inicio`,area:`todos/`},{path:`/login`,area:`todos/`},{path:`/emojis`,area:`todos/`},{path:`/beneficios`,area:`todos/`},{path:`/precios`,area:`todos/`},{path:`/registrado`,area:`todos/`},{path:`/blog`,area:`todos/blog/`},{path:`/post`,area:`todos/blog/`},{path:`/chatwil`,area:`todos/chatwil/`},{path:`/acerca`,area:`todos/acerca/`},{path:`/descubre`,area:`todos/acerca/`},{path:`/terminos`,area:`todos/acerca/`},{path:`/cookies`,area:`todos/acerca/`},{path:`/privacidad`,area:`todos/acerca/`},{path:`/feedback`,area:`todos/acerca/`},{path:`/contacto`,area:`todos/acerca/`},{path:`/smile`,area:`smile/`,roles:[`smile`,`editor`,`gestor`,`admin`]},{path:`/perfil`,area:`smile/`,roles:[`smile`,`editor`,`gestor`,`admin`]},{path:`/nuevo`,area:`todos/blog/`,roles:[`smile`,`editor`,`gestor`,`admin`]},{path:`/gestor`,area:`gestor/`,roles:[`gestor`,`admin`]},{path:`/admin`,area:`admin/`,roles:[`admin`]},{path:`/usuarios`,area:`admin/`,roles:[`admin`]},{path:`/sistema`,area:`admin/`,roles:[`admin`]},{path:`/verificar`,area:`verificar/`,roles:[`admin`]}],w=Object.assign({"./admin/admin.js":()=>l(()=>import(`./admin-DlauV9lC.js`),__vite__mapDeps([0])),"./admin/sistema.js":()=>l(()=>import(`./sistema-Bt5S0Lxg.js`),__vite__mapDeps([1])),"./admin/usuarios.js":()=>l(()=>import(`./usuarios-Bx95xv0k.js`),__vite__mapDeps([2])),"./gestor/gestor.js":()=>l(()=>import(`./gestor-BvRk9kiK.js`),[]),"./smile/perfil.js":()=>l(()=>import(`./perfil-BLqMPPAL.js`),__vite__mapDeps([3])),"./smile/smile.js":()=>l(()=>import(`./smile-DFuRe4ta.js`),__vite__mapDeps([4])),"./todos/404.js":()=>l(()=>import(`./404-LoitVauZ.js`),[]),"./todos/acerca/acerca.js":()=>l(()=>import(`./acerca-DhbkEvk9.js`),__vite__mapDeps([5])),"./todos/acerca/contacto.js":()=>l(()=>import(`./contacto-CipfsG1-.js`),__vite__mapDeps([6,5])),"./todos/acerca/cookies.js":()=>l(()=>import(`./cookies-BO4QQTNq.js`),__vite__mapDeps([5,7])),"./todos/acerca/descubre.js":()=>l(()=>import(`./descubre-DRRziKDS.js`),__vite__mapDeps([8])),"./todos/acerca/feedback.js":()=>l(()=>import(`./feedback-DghHvCHD.js`),__vite__mapDeps([5,7])),"./todos/acerca/privacidad.js":()=>l(()=>import(`./privacidad-D9lhtTSv.js`),__vite__mapDeps([5,7])),"./todos/acerca/terminos.js":()=>l(()=>import(`./terminos-C-P5Jsl_.js`),__vite__mapDeps([5,7])),"./todos/beneficios.js":()=>l(()=>import(`./beneficios-BozY5r6T.js`),__vite__mapDeps([9])),"./todos/blog/blog.js":()=>l(()=>import(`./blog-BSpcvM0f.js`),__vite__mapDeps([10])),"./todos/blog/nuevo.js":()=>l(()=>import(`./nuevo-8UImGn_2.js`),__vite__mapDeps([11])),"./todos/blog/post.js":()=>l(()=>import(`./post-BnleTcyB.js`),__vite__mapDeps([12])),"./todos/blog/woo.js":()=>l(()=>import(`./woo-DNkc3KUT.js`),[]),"./todos/chatwil/chatwil.js":()=>l(()=>import(`./chatwil-C92dct2P.js`),__vite__mapDeps([13])),"./todos/chatwil/config.js":()=>l(()=>import(`./config-B6ZIf1-p.js`),[]),"./todos/chatwil/contexto.js":()=>l(()=>import(`./contexto-DzVGTVU_.js`),[]),"./todos/chatwil/datawii.js":()=>l(()=>import(`./datawii-BvRk9kiK.js`),[]),"./todos/chatwil/waa.js":()=>l(()=>import(`./waa-x-XQcqmB.js`),[]),"./todos/emojis.js":()=>l(()=>import(`./emojis-CsgSQZ2U.js`),__vite__mapDeps([14])),"./todos/login.js":()=>l(()=>import(`./login-DyVePxSX.js`),__vite__mapDeps([15])),"./todos/precios.js":()=>l(()=>import(`./precios-BgFd-cSn.js`),__vite__mapDeps([16])),"./todos/registrado.js":()=>l(()=>import(`./registrado-DTPFNwc3.js`),__vite__mapDeps([17])),"./verificar/verificar.js":()=>l(()=>import(`./verificar-BG8NiX59.js`),__vite__mapDeps([18]))}),T=(e,t)=>w[`./${e}${t}.js`],E=new class{constructor(){this.rutas={},this.cache={"/inicio":u},this.modActual=null,this.cargand=!1,this.HOME=`inicio`,this.main=`#wimain`,this.pathActual=null,this.isFirstLoad=!0}register(e,t){this.rutas[e]=t}inicio(){return Promise.resolve(u)}registerAll(e){let t={},n={};C.forEach(({path:e,area:r,roles:i=null,mod:a})=>{if(e===`/inicio`){t[e]=()=>this.inicio();return}let o=a??e.split(`/`).pop(),s=T(r,o);if(!s){console.warn(`[ruta] no encontrado: ${r}${o}.js`);return}i===null?t[e]=s:(n[e]??=[]).push({roles:i,imp:s})});let r=()=>Promise.resolve({render:()=>``,init:()=>setTimeout(()=>this.navigate(`/login`),0)});new Set([...Object.keys(t),...Object.keys(n)]).forEach(i=>{let a=t[i],o=n[i]||[],s=()=>{let t=e?.()||null;return o.find(e=>e.roles.includes(t))};if(!o.length)return this.register(i,a);if(!a)return this.register(i,()=>{let e=s();return e?e.imp():r()});this.register(i,()=>{let e=s();return e?e.imp():a()})})}async prefetch(e){let t=i.limpiar(e)===`/`?`/${this.HOME}`:i.limpiar(e);if(!(this.cache[t]||!this.rutas[t]))try{this.cache[t]=await this.rutas[t](),console.log(`⚡ Listo ${t.replace(`/`,``)}`)}catch{console.warn(`[ruta] prefetch falló:`,t)}}async navigate(e,n=!0){if(this.cargand)return;this.cargand=!0;let r=i.limpiar(e)===`/`?`/${this.HOME}`:i.limpiar(e);if([`/admin`,`/usuarios`,`/sistema`].includes(r)){let{getls:e}=await l(async()=>{let{getls:e}=await import(`./widev-DegRq8IT.js`);return{getls:e}},[]),t=e(`wiSmile`),n=e=>(this.cargand=!1,this.navigate(e,!0)),r=!t||t.rol!==`admin`?`/`:t.estado===`activo`?sessionStorage.getItem(`vault_unlocked`)?null:`/verificar`:`/registrado`;if(r)return n(r)}try{this.modActual?.cleanup?.();let e=this.rutas[r]?null:r.slice(1),a=e?T(`todos/blog/`,`post`):this.rutas[r]??T(`todos/`,`404`),o=this.cache[r]??await a();e||(this.cache[r]=o);let[s]=await Promise.all([o.render(e)]);document.body.classList.remove(`is-public-profile`),this.marcarNav(r),window.dispatchEvent(new CustomEvent(`winavigate`,{detail:{norm:r}})),this.isFirstLoad&&t(this.main).children().length>0&&!window.__WIREADY__&&r===`/${this.HOME}`?this.isFirstLoad=!1:await c(this.main,s),this.isFirstLoad=!1,window.scrollTo(0,0),o.init?.(e),n&&i.poner(r===`/${this.HOME}`?`/`:r,document.title),this.pathActual=r,this.modActual=o}catch(e){if(e instanceof TypeError&&e.message.includes(`Failed to fetch`))return location.reload();o(`Error en la ruta`),console.error(`[ruta] navigate:`,e)}finally{this.cargand=!1}}marcarNav(e){let n=e.slice(1)||this.HOME;t(`.nv_item`).removeClass(`active`),t(`.nv_item[data-page="${n}"]`).addClass(`active`)}init(){this.marcarNav(i.actual===`/`?`/${this.HOME}`:i.limpiar(i.actual)),t(document).on(`click`,`.nv_item`,e=>{let n=t(e.currentTarget).data(`page`);n!==`nota`&&(e.preventDefault(),this.navigate(n===this.HOME?`/`:`/${n}`))}).on(`mouseenter touchstart`,`.nv_item[data-page]`,e=>{let n=t(e.currentTarget).data(`page`);n!==`nota`&&this.prefetch(n===this.HOME?`/`:`/${n}`)}),window.addEventListener(`popstate`,e=>{let t=e.state?.ruta||i.actual;(i.limpiar(t)===`/`?`/${this.HOME}`:i.limpiar(t))!==this.pathActual&&this.navigate(t,!1)}),this.navigate(i.actual,!1)}};export{C as n,E as r,S as t};