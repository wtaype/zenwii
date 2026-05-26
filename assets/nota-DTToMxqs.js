const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/login-CS-GQr1l.css"])))=>i.map(i=>d[i]);
import{n as e}from"./vendor-BuoCFfzO.js";import{r as t}from"./rutas-jr8uDzZG.js";import{t as n}from"./preload-helper-Dq_6WaEp.js";import{t as r}from"./wii-CjU0lHmj.js";(()=>{let t=0;return(n=`[data-herowi]`,r=45)=>{t||=(e(`head`).append(`<style>
        @keyframes hwi_fade {
          from { opacity: 0; transform: translateY(3vh); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hwi { animation: hwi_fade 0.8s cubic-bezier(0.4, 0, 0.2, 1) backwards; }
      </style>`),1),(typeof n==`string`?[...document.querySelectorAll(n)]:[].concat(n).flatMap(e=>typeof e==`string`?[...document.querySelectorAll(e)]:[e])).forEach(e=>{let t=(e.hasAttribute(`data-herowi`)&&e.children.length?[...e.children]:[e]).filter(e=>!e.dataset.hi);if(t.length){let n=parseInt(e.dataset.herowi)||r;t.forEach((e,t)=>{let r=Math.min(t*n,800);e.style.animationDelay=`${r}ms`,e.classList.add(`hwi`),e.dataset.hi=1})}})}})();var i=(()=>{let t=0;return(n=`[data-showi]`,r=45)=>{t||=(e(`head`).append(`<style>.swi{opacity:0;transform:translateY(3vh);transition:all .7s cubic-bezier(.4,0,.2,1)}</style>`),1);let i=0,a,o=new IntersectionObserver(e=>{e.filter(e=>e.isIntersecting).forEach(e=>{let t=e.target;o.unobserve(t),setTimeout(()=>{t.style.opacity=1,t.style.transform=`translateY(0)`,setTimeout(()=>{t.classList.remove(`swi`),t.style.opacity=t.style.transform=``},750)},i++*(t.dataset.st||r))}),clearTimeout(a),a=setTimeout(()=>i=0,100)});[].concat(n).flatMap(e=>typeof e==`string`?[...document.querySelectorAll(e)]:e).forEach(e=>{(e.hasAttribute(`data-showi`)&&e.children.length?[...e.children]:[e]).filter(e=>!e.dataset.i).forEach(t=>{t.dataset.i=1,t.dataset.st=parseInt(e.dataset?.showi)||r,t.classList.add(`swi`),o.observe(t)})})}})(),a=window.__wiAuthBus__=window.__wiAuthBus__||new Set,o={get user(){return d(`wiSmile`)},on(e){a.add(e);let t=this.user;return t&&e(t),()=>a.delete(e)},emit(e){a.forEach(t=>{try{t(e)}catch(e){console.error(`wiAuth:`,e)}})},login(e,t=144,n=[]){f.except([`wiTema`,...n]),u(`wiSmile`,e,t),this.emit(e)},logout(e=[]){f.except([`wiTema`,...e]),this.emit(null)}},s=(()=>{let t=new Set,n=d(`wiSmart`),r=n=>{Object.entries(n).forEach(([n,r])=>[].concat(r).forEach(r=>{let i=`${n}:${r}`;t.has(i)||(t.add(i),n===`css`?!e(`link[href="${r}"]`).length&&e(`<link>`,{rel:`stylesheet`,href:r}).appendTo(`head`):n===`js`&&typeof r==`string`?!e(`script[src="${r}"]`).length&&e(`<script>`,{src:r,async:!0,crossOrigin:`anonymous`}).appendTo(`head`):typeof r==`function`&&r().catch?.(e=>console.error(`wiSmart:`,e)))})),u(`wiSmart`,1)};return t=>n?r(t):e(document).one(`touchstart scroll click mousemove`,()=>r(t))})(),c=()=>{let e=new Date().getHours();return e>=5&&e<12?`Buenos días, `:e>=12&&e<18?`Buenas tardes, `:`Buenas noches, `};function l(t,n=`error`,r=3e3){let i={success:`fa-check-circle`,error:`fa-times-circle`,warning:`fa-exclamation-triangle`,info:`fa-info-circle`}[n];e(`#notificationsContainer`).length||e(`body`).append(`<div id="notificationsContainer" style="position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;"></div>`);let a=e(`<div class="notification notif-${n}" style="background:var(--F);border-left:4px solid var(--${n});box-shadow:0 4px 12px rgba(0,0,0,.1);border-radius:8px;padding:1rem;display:flex;align-items:center;gap:.5rem;opacity:0;transform:translateX(20px);transition:all .3s ease;"><i class="fas ${i}" style="color:var(--${n});"></i><span style="flex:1;color:var(--tx);">${t}</span><button style="background:none;border:none;font-size:1.2rem;cursor:pointer;color:var(--tx);">&times;</button></div>`);e(`#notificationsContainer`).append(a),requestAnimationFrame(()=>a.css({opacity:1,transform:`translateX(0)`}));let o=()=>{a.css({opacity:0,transform:`translateX(20px)`}),setTimeout(()=>a.remove(),300)};a.find(`button`).on(`click`,o),setTimeout(o,r)}function u(e,t,n=24){try{return!e||typeof e!=`string`?!1:(localStorage.setItem(e,JSON.stringify({value:t,expiry:Date.now()+n*36e5})),!0)}catch(e){return console.error(`esv:`,e),!1}}function d(e){try{if(!e||typeof e!=`string`)return null;let t=localStorage.getItem(e);if(!t)return null;let n=JSON.parse(t);return!n||Date.now()>n.expiry?(localStorage.removeItem(e),null):n.value}catch(t){return console.error(`egt:`,t),localStorage.removeItem(e),null}}function f(...e){e.flat().flatMap(e=>typeof e==`string`?e.split(/[,\s]+/).filter(Boolean):e).forEach(e=>localStorage.removeItem(e))}f.except=(e=[])=>{let t=e.map(e=>[e,localStorage.getItem(e)]);localStorage.clear(),t.forEach(([e,t])=>t!==null&&localStorage.setItem(e,t))};function p(t,n,r=`top`,i=1800){if(!p.CSS){e(`head`).append(`<style id="wiTip-css">.wiTip{position:fixed;color:var(--txa);z-index:99999;padding:.8vh 1.2vh;border-radius:.6vh;font-size:var(--fz_s4);font-weight:500;max-width:25vh;box-shadow:0 .4vh 1.2vh rgba(0,0,0,.2);opacity:0;transform:translateY(-.3vh);transition:all .2s cubic-bezier(.4,0,.2,1);pointer-events:none;backdrop-filter:blur(.4vh)}.wiTip.show{opacity:1;transform:translateY(0)}.wiTip::after{content:"";position:absolute;top:100%;left:50%;margin-left:-.6vh;border:.6vh solid transparent;border-top-color:inherit}</style>`);let t;e(document).on(`mouseenter.wiTip`,`[data-witip]`,function(){clearTimeout(t),p.ver(this,e(this).data(`witip`),e(this).data(`wtipo`)||`top`,e(this).data(`wtiempo`)||1800)}).on(`mouseleave.wiTip`,`[data-witip]`,()=>{e(`.wiTip`).removeClass(`show`),clearTimeout(t),t=setTimeout(()=>e(`.wiTip`).remove(),200)}),p.CSS=!0}return typeof t==`string`&&!n?`data-witip="${t}" data-wtipo="${r}" data-wtiempo="${i}"`:(p.ver(t,n,r,i),e(t))}p.ver=(t,n,r,i)=>{e(`.wiTip`).remove();let a={success:`var(--success)`,error:`var(--error)`,warning:`var(--warning)`,info:`var(--info)`}[r]||`var(--mco)`,o=e(`<div class="wiTip" style="background:${a};border-top-color:${a}"><span>${n}</span></div>`).appendTo(`body`),{left:s,top:c,width:l}=e(t)[0].getBoundingClientRect(),u=o.outerWidth(),d=o.outerHeight();o.css({left:Math.max(8,Math.min(s+l/2-u/2,innerWidth-u-8)),top:c-d-8}),requestAnimationFrame(()=>{o.addClass(`show`),i>0&&setTimeout(()=>{o.removeClass(`show`),setTimeout(()=>o.remove(),200)},i)})};var m=t=>{let n=e(`#${t}`);if(!n.length)return console.warn(`Modal #${t} no existe`);n.addClass(`active`),e(`body`).addClass(`modal-open`),setTimeout(()=>n.find(`input,select,textarea,button`).filter(`:visible:first`).trigger(`focus`),20)},h=()=>{e(`.wiModal`).removeClass(`active`),e(`body`).removeClass(`modal-open`)};e(`.wiModalCss`).length?e(`.wiModalCss`).text(`.wiModal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:10000;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.wiModal.active{display:flex}@keyframes mf{from{opacity:0}to{opacity:1}}.wiModal{animation:mf .25s ease}body.modal-open{overflow:hidden}.modalBody{position:relative;border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mp .22s ease;z-index:10001}@keyframes mp{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.modalX{z-index:10002;background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15);position:absolute;top:12px;right:12px}.modalX:hover{transform:scale(1.08);opacity:.95}`):e(`head`).append(`<style class="wiModalCss">.wiModal{display:none;position:fixed;inset:0;background:rgba(0,0,0,.45);z-index:10000;justify-content:center;align-items:center;backdrop-filter:saturate(120%) blur(2px)}.wiModal.active{display:flex}@keyframes mf{from{opacity:0}to{opacity:1}}.wiModal{animation:mf .25s ease}body.modal-open{overflow:hidden}.modalBody{position:relative;border-radius:1vh;box-shadow:var(--bsh);width:92%;max-width:600px;max-height:90vh;overflow:auto;animation:mp .22s ease;z-index:10001}@keyframes mp{from{transform:translateY(10px) scale(.98);opacity:.6}to{transform:translateY(0) scale(1);opacity:1}}.modalX{z-index:10002;background:0 0;border:0;color:var(--mco);font-size:1.4rem;cursor:pointer;transition:transform .15s,opacity .15s;text-shadow:0 1px 2px rgba(0,0,0,.15);position:absolute;top:12px;right:12px}.modalX:hover{transform:scale(1.08);opacity:.95}</style>`),e(document).on(`click`,`.modalX`,h).on(`click`,`.wiModal.active`,function(e){e.target===this&&h()}).on(`keydown`,t=>{t.key===`Escape`&&e(`.wiModal.active`).length&&h()});var g=async(t,n,r=50)=>{let i=e(t)[0];i&&(i.style.willChange=`opacity`,i.style.transition=`opacity ${r}ms ease`,i.style.opacity=0,await new Promise(e=>setTimeout(e,r)),i.innerHTML=n,i.style.opacity=1,await new Promise(e=>setTimeout(e,r)),i.style.transition=``,i.style.willChange=``)},_=e=>{if(!e)return`—`;let t=e?.seconds?new Date(e.seconds*1e3):new Date(e);return t.toLocaleDateString(`es-PE`,{day:`2-digit`,month:`short`,year:`numeric`})+` `+t.toLocaleTimeString(`es-PE`,{hour:`2-digit`,minute:`2-digit`})},v=e=>{if(!e)return`—`;let t=Date.now()-(e?.seconds?e.seconds*1e3:e),n=Math.floor(t/1e3);if(n<60)return`Hace un momento`;let r=Math.floor(n/60);if(r<60)return`Hace ${r} min`;let i=Math.floor(r/60);if(i<24)return`Hace ${i}h`;let a=Math.floor(i/24);return a<7?`Hace ${a}d`:_(e)},y=e=>{let t=document.createElement(`div`);return t.innerHTML=e||``,t.textContent||t.innerText||``};(()=>{let t=d(`superFun`),n=e=>{try{e()}catch(e){console.error(`superFun:`,e)}u(`superFun`,1)};return r=>t?n(r):e(document).one(`touchstart scroll click mousemove`,()=>n(r))})();var b=()=>`
  <header class="wd_header">
    <div class="wd_hdr_left">
      <a href="/" target="_blank" class="wd_logo" id="wd_logo_home"><i class="fa-solid fa-feather-pointed"></i> Zenwii</a>
      <button id="wd_btn_toggle_sidebar" class="wd_hdr_btn" title="Mostrar/Ocultar barra lateral"><i class="fas fa-bars"></i></button>
      <div class="wd_tool_sep"></div>
      
      <!-- FORMATTING TOOLS DIRECTLY IN HEADER LEFT -->
      <div class="wd_tools">
        <div class="wd_tool_group">
          <select id="wd_f_fam" class="wd_font_sel" ${p(`Fuente`,void 0,`bottom`)}>
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
          <input type="text" id="wd_f_sz" class="wd_font_size" value="16" maxlength="2" ${p(`Tamaño (Enter)`,void 0,`bottom`)} autocomplete="off">
        </div>
        
        <div class="wd_tool_group">
          <button class="wd_btn_tool" data-cmd="bold" ${p(`Negrita`,void 0,`bottom`)}><i class="fas fa-bold"></i></button>
          <button class="wd_btn_tool" data-cmd="italic" ${p(`Cursiva`,void 0,`bottom`)}><i class="fas fa-italic"></i></button>
          <button class="wd_btn_tool" data-cmd="underline" ${p(`Subrayado`,void 0,`bottom`)}><i class="fas fa-underline"></i></button>
          <button class="wd_btn_tool" data-cmd="strikeThrough" ${p(`Tachado`,void 0,`bottom`)}><i class="fas fa-strikethrough"></i></button>
        </div>

        <div class="wd_tool_group">
          <button class="wd_btn_tool" data-cmd="justifyLeft" ${p(`Alinear Izquierda`,void 0,`bottom`)}><i class="fas fa-align-left"></i></button>
          <button class="wd_btn_tool" data-cmd="justifyCenter" ${p(`Centrar`,void 0,`bottom`)}><i class="fas fa-align-center"></i></button>
          <button class="wd_btn_tool" data-cmd="justifyRight" ${p(`Alinear Derecha`,void 0,`bottom`)}><i class="fas fa-align-right"></i></button>
          <button class="wd_btn_tool" data-cmd="justifyFull" ${p(`Justificar`,void 0,`bottom`)}><i class="fas fa-align-justify"></i></button>
        </div>
        
        <div class="wd_tool_group">
          <button class="wd_btn_tool" data-cmd="insertUnorderedList" ${p(`Viñetas`,void 0,`bottom`)}><i class="fas fa-list-ul"></i></button>
          <button class="wd_btn_tool" data-cmd="insertOrderedList" ${p(`Numeración`,void 0,`bottom`)}><i class="fas fa-list-ol"></i></button>
          <div class="wd_tool_sep"></div>
          <select id="wd_l_ht" class="wd_font_sel" style="width:60px;" ${p(`Interlineado`,void 0,`bottom`)}>
             <option value="1">1.0</option>
             <option value="1.15">1.15</option>
             <option value="1.5">1.5</option>
             <option value="2">2.0</option>
          </select>
        </div>
        
        <div class="wd_tool_group">
          <div ${p(`Color Texto`,void 0,`bottom`)} style="display:flex; align-items:center; padding: 0 0.5vh; height: 3.6vh;">
             <i class="fas fa-font" style="color:var(--tx2); margin-right: 0.5vh; font-size:12px;"></i>
             <input type="color" id="wd_c_txt" value="#222222" style="width:2.2vh;height:2.2vh;border:none;background:none;cursor:pointer;padding:0;">
          </div>
          <div class="wd_tool_sep"></div>
          <div ${p(`Color Resaltado`,void 0,`bottom`)} style="display:flex; align-items:center; padding: 0 0.5vh; height: 3.6vh;">
             <i class="fas fa-highlighter" style="color:var(--tx2); margin-right: 0.5vh; font-size:12px;"></i>
             <input type="color" id="wd_c_bg" value="#ffff00" style="width:2.2vh;height:2.2vh;border:none;background:none;cursor:pointer;padding:0;">
          </div>
        </div>

        <!-- Metadata Ribbon -->
        <div class="wd_tool_sep wd_meta_sep_main" style="display:none"></div>
        <div id="wd_meta" class="wd_tool_group wd_meta_group" style="display:none; padding: 0 1.5vh; gap: 2vh; border: none; background: transparent;">
          <span class="wd_meta_item" id="wd_meta_rel" ${p(`Actividad reciente`)}><i class="fas fa-clock"></i> <span>—</span></span>
          <span class="wd_meta_item" id="wd_meta_cre" ${p(`Fecha de creación`)}><i class="fas fa-calendar-plus"></i> <span>—</span></span>
          <span class="wd_meta_item" id="wd_meta_upd" ${p(`Última edición`)}><i class="fas fa-pen-nib"></i> <span>—</span></span>
        </div>
      </div>
    </div>
    <div class="wd_hdr_right">
      <div id="wd_hdr_auth" class="wd_hdr_auth_container">
        <!-- Auth status loaded here dynamically -->
      </div>
    </div>
  </header>
`,x=(t,n)=>{let r=e(`#wd_hdr_auth`);if(r.length)if(t){let e=n?.synced?`<i class="fas fa-cloud wd_cloud_ok" style="margin-right: 1.5vh;" ${p(`Todos los cambios sincronizados`,void 0,`bottom`)}></i>`:n?`<i class="fas fa-cloud-arrow-up wd_cloud_pen" style="margin-right: 1.5vh;" ${p(`Cambios locales sin subir`,void 0,`bottom`)}></i>`:``,i=t.avatar||`/zenwii/smile.avif`;r.html(`
      <div class="wd_hdr_user_info" style="display:flex; gap:1.5vh; align-items:center;">
        ${e}
        <a href="/perfil" target="_blank" class="nv_item" ${p(`Ver mi perfil`,void 0,`bottom`)}>
          <img src="${i}" alt="${t.nombre||t.usuario}">
          <span>${t.nombre||t.usuario}</span>
        </a>
        <button class="nv_item bt_salir" ${p(`Cerrar sesión`,void 0,`bottom`)}>
          <i class="fa-solid fa-sign-out-alt" style="color:#fe413b;"></i>
          <span>Salir</span>
        </button>
      </div>
    `)}else r.html(`
      <div class="wd_hdr_auth_buttons" style="display:flex; gap:1.5vh; align-items:center;">
        <button class="nv_item bt_auth login"><i class="fa-solid fa-arrow-right-to-bracket"></i> Ingresar</button>
        <button class="nv_item bt_auth registrar"><i class="fa-solid fa-user-plus"></i> Registrarse</button>
      </div>
    `)},S=()=>`
  <footer class="wd_footer">
    <div class="wd_ft_left">
      <button id="wd_btn_focus" class="wd_ft_btn" ${p(`Concentración total sin distracciones`)}><i class="fas fa-expand"></i> <span>Modo Concentración</span></button>
    </div>
    <div class="wd_ft_center">
      <div class="wd_ft_themes">
        <span class="wd_ft_theme_lbl">Tema:</span>
        <div class="tema" data-ths="Cielo|#0EBEFF" ${p(`Cielo`,void 0,`info`)}></div>
        <div class="tema" data-ths="Dulce|#FF5C69" ${p(`Dulce`,void 0,`error`)}></div>
        <div class="tema" data-ths="Paz|#29C72E" ${p(`Paz`,void 0,`success`)}></div>
        <div class="tema mtha" data-ths="Oro|#FFC107" ${p(`Oro`,void 0,`warning`)}></div>
        <div class="tema" data-ths="Mora|#7000FF" ${p(`Mora`,void 0,`mco`)}></div>
        <div class="tema" data-ths="Futuro|#21273B" ${p(`Futuro`,void 0,`info`)}></div>
      </div>
    </div>
    <div class="wd_ft_right">
      <span class="wd_ft_ver"><a href="/" target="_blank">Zenwii v10· Hecho con ❤️ </a> </span>
    </div>
  </footer>
`;function C(e=``){if(!e)return``;let t=e;return t=t.replace(/\r/g,``),t=t.replace(/<h1[^>]*>(.*?)<\/h1>/gi,`# $1

`),t=t.replace(/<h2[^>]*>(.*?)<\/h2>/gi,`## $1

`),t=t.replace(/<h3[^>]*>(.*?)<\/h3>/gi,`### $1

`),t=t.replace(/<h4[^>]*>(.*?)<\/h4>/gi,`#### $1

`),t=t.replace(/<h5[^>]*>(.*?)<\/h5>/gi,`##### $1

`),t=t.replace(/<h6[^>]*>(.*?)<\/h6>/gi,`###### $1

`),t=t.replace(/<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/gi,`[$2]($1)`),t=t.replace(/<(strong|b)[^>]*>(.*?)<\/ \1>/gi,`**$2**`),t=t.replace(/<(strong|b)[^>]*>(.*?)<\/\1>/gi,`**$2**`),t=t.replace(/<(em|i)[^>]*>(.*?)<\/\1>/gi,`*$2*`),t=t.replace(/<(ins|u)[^>]*>(.*?)<\/\1>/gi,`__$2__`),t=t.replace(/<(strike|del|s)[^>]*>(.*?)<\/\1>/gi,`~~$2~~`),t=t.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi,`- $1
`),t=t.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi,(e,t)=>{let n=1;return t.replace(/^\s*-\s+(.*?)\n/gm,()=>`${n++}. $1\n`)}),t=t.replace(/<ul[^>]*>/gi,``).replace(/<\/ul>/gi,`
`),t=t.replace(/<ol[^>]*>/gi,``).replace(/<\/ol>/gi,`
`),t=t.replace(/<p[^>]*>(.*?)<\/p>/gi,`$1

`),t=t.replace(/<br\s*\/?>/gi,`
`),t=t.replace(/<[^>]+>/g,``),t=t.replace(/&nbsp;/gi,` `).replace(/&amp;/g,`&`).replace(/&lt;/g,`<`).replace(/&gt;/g,`>`).replace(/&quot;/g,`"`).replace(/&#39;/g,`'`),t=t.replace(/\n{3,}/g,`

`),t.trim()}function w(e=``){if(!e)return``;let t=e;return t=t.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`),t=t.replace(/^###### (.*?)$/gm,`<h6>$1</h6>`),t=t.replace(/^##### (.*?)$/gm,`<h5>$1</h5>`),t=t.replace(/^#### (.*?)$/gm,`<h4>$1</h4>`),t=t.replace(/^### (.*?)$/gm,`<h3>$1</h3>`),t=t.replace(/^## (.*?)$/gm,`<h2>$1</h2>`),t=t.replace(/^# (.*?)$/gm,`<h1>$1</h1>`),t=t.replace(/\[([^\]]+)\]\(([^)]+)\)/g,`<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>`),t=t.replace(/\*\*(.*?)\*\*/g,`<b>$1</b>`),t=t.replace(/\*(.*?)\*/g,`<i>$1</i>`),t=t.replace(/__(.*?)__/g,`<u>$1</u>`),t=t.replace(/~~(.*?)~~/g,`<strike>$1</strike>`),t=t.replace(/^\s*-\s+(.*?)$/gm,`<li>$1</li>`),t=t.replace(/((?:<li>.*?<\/li>\s*)+)/g,e=>`<ul>${e.trim()}</ul>`),t=t.replace(/^\s*\d+\.\s+(.*?)$/gm,`<li class="ordered-item">$1</li>`),t=t.replace(/((?:<li class="ordered-item">.*?<\/li>\s*)+)/g,e=>`<ol>${e.replace(/class="ordered-item"/g,``).trim()}</ol>`),t=t.replace(/\n/g,`<br>`),t=t.replace(/<\/li><br><li>/g,`</li><li>`),t=t.replace(/<ul><br>/g,`<ul>`),t=t.replace(/<\/ul><br>/g,`</ul>`),t=t.replace(/<ol><br>/g,`<ol>`),t=t.replace(/<\/ol><br>/g,`</ol>`),t=t.replace(/<li><br>/g,`<li>`),t=t.replace(/<br><\/li>/g,`</li>`),t.trim()}e(`#wiTip-custom-css`).length||e(`head`).append(`<style id="wiTip-custom-css">
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
  </style>`),p.ver=(t,n,r,i)=>{e(`.wiTip`).remove();let a=`top`,o=r;if([`bottom`,`left`,`right`,`top`].includes(r)&&(a=r,o=`mco`),r===`top`||r===`mco`||!r){let n=e(t);n.closest(`.wd_toolbar`).length||n.closest(`.wd_header`).length||n.closest(`.wd_tabs_bar`).length?a=`bottom`:(n.closest(`.wd_doc_item`).length||n.closest(`.wd_sb_btn`).length||n.closest(`.wd_sb_actions_panel`).length)&&(a=`left`)}let s={success:`var(--success)`,error:`var(--error)`,warning:`var(--warning)`,info:`var(--info)`}[o]||`var(--mco)`,c=e(`<div class="wiTip tipo-${a}" style="background:${s}; border-top-color:${a===`top`?s:`transparent`}; border-bottom-color:${a===`bottom`?s:`transparent`}; border-left-color:${a===`left`?s:`transparent`}; border-right-color:${a===`right`?s:`transparent`}"><span>${n}</span></div>`).appendTo(`body`),{left:l,top:u,width:d,height:f}=e(t)[0].getBoundingClientRect(),p=c.outerWidth(),m=c.outerHeight(),h=l+d/2-p/2,g=u-m-8;a===`bottom`?(g=u+f+8,c.css({transform:`translateY(.3vh)`})):a===`left`?(h=l-p-8,g=u+f/2-m/2,c.css({transform:`translateX(.3vh)`})):a===`right`&&(h=l+d+8,g=u+f/2-m/2,c.css({transform:`translateX(-.3vh)`})),h=Math.max(8,Math.min(h,innerWidth-p-8)),c.css({left:h,top:g}),requestAnimationFrame(()=>{c.addClass(`show`),(a===`bottom`||a===`left`||a===`right`)&&c.css({transform:`translateY(0) translateX(0)`}),i>0&&setTimeout(()=>{c.removeClass(`show`),setTimeout(()=>c.remove(),200)},i)})};var T=`notas_ls`,E=()=>`wd`+Date.now(),D=[{id:`ej1`,titulo:`Documento de Ejemplo`,contenido:`<p>Este es un documento de ejemplo. <b>Prueba a editar el texto</b> y usar las herramientas de la barra superior para darle estilo.</p>`,pin:!0,creado:Date.now(),actualizado:Date.now(),synced:!1}],O={get:()=>{let e=localStorage.getItem(T);return e===null&&!o.user?[...D]:d(T)||(e?.startsWith(`[`)?JSON.parse(e):[])},set:e=>u(T,e,8760)},k=()=>`
<div class="wd_wrap">
  <!-- DEDICATED CUSTOM HEADER -->
  ${b()}

  <!-- MAIN WORKSPACE -->
  <div class="wd_workspace">
    <!-- SIDEBAR -->
    <aside id="wd_sidebar" class="wd_sidebar">
      <div class="wd_sb_head">
        <h3 id="wd_saludo">Archivos</h3>
        <div style="display:flex; gap: 5px;">
          <button id="wd_btn_refresh" class="wd_sb_btn" style="display:none" ${p(`Actualizar desde la nube`)}><i class="fas fa-rotate-right"></i></button>
          <button id="wd_btn_new" class="wd_sb_btn" ${p(`Nuevo Documento`)}><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <div class="wd_sb_actions_panel">
        <input type="text" id="wd_in_tit" class="wd_doc_title_sb" placeholder="Título del documento..." autocomplete="off">
        <div style="display:flex; gap:1vh; margin-top:1.5vh;">
          <button id="wd_btn_save" class="wd_btn_main" style="flex:1; justify-content:center;"><i class="fas fa-save"></i> Guardar</button>
          <button id="wd_btn_del" class="wd_btn_sec wd_btn_del_doc" ${p(`Eliminar permanentemente`,void 0,`error`)}><i class="fas fa-trash-can"></i></button>
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
      ${S()}
    </div>
  </div>

  <!-- FLOATING EXIT BUTTON FOR FOCUS MODE -->
  <button id="wd_btn_exit_focus" class="wd_btn_exit_focus" ${p(`Salir de concentración (Esc)`)}><i class="fas fa-compress"></i></button>
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
`,A=async()=>{let{db:e}=await n(async()=>{let{db:e}=await import(`./firebase-kAqc3xND.js`);return{db:e}},[]);return{db:e,...await n(()=>import(`./index.esm-GIJzrPee.js`),[])}},j=(e,t)=>t?.usuario?t.usuario.toLowerCase().replace(/[^a-z0-9]/g,``)+(e.id.startsWith(`wd`)?e.id.replace(`wd`,``):e.id):e.id,M=async e=>{let t=o.user;if(t?.email)try{let{db:n,doc:r,setDoc:i,serverTimestamp:a}=await A(),o=e.creado?new Date(e.creado):a(),s=e.actualizado?new Date(e.actualizado):a();await i(r(n,`notas`,j(e,t)),{id:e.id,usuario:t.usuario||t.email.split(`@`)[0],email:t.email,titulo:String(e.titulo||``),contenido:String(e.contenido||``),contenidoMd:C(e.contenido||``),pin:!!e.pin,creado:o,actualizado:s})}catch(e){console.error(`[notas] guardarNube:`,e)}},N=async e=>{let t=o.user;if(t?.email)try{let{db:n,doc:r,setDoc:i,serverTimestamp:a}=await A(),o=e.actualizado?new Date(e.actualizado):a();await i(r(n,`notas`,j(e,t)),{id:e.id,usuario:t.usuario||t.email.split(`@`)[0],email:t.email,titulo:String(e.titulo||``),contenido:String(e.contenido||``),contenidoMd:C(e.contenido||``),pin:!!e.pin,actualizado:o},{merge:!0})}catch(e){console.error(`[notas] actualizarNube:`,e)}},P=async e=>{let t=o.user;if(t?.email)try{let{db:n,doc:r,deleteDoc:i}=await A();await i(r(n,`notas`,j({id:e},t)))}catch(e){console.error(`[notas] eliminarNube:`,e)}},F=async()=>{let e=o.user;if(!e?.email)return null;try{let{db:t,collection:n,getDocs:r,query:i,where:a}=await A();return(await r(i(n(t,`notas`),a(`email`,`==`,e.email)))).docs.map(e=>{let t=e.data();return{id:t.id||e.id,titulo:t.titulo||``,contenido:t.contenido||(t.contenidoMd?w(t.contenidoMd):``),contenidoMd:t.contenidoMd||``,pin:!!t.pin,creado:t.creado?.toMillis?.()||t.creado||Date.now(),actualizado:t.actualizado?.toMillis?.()||t.actualizado||Date.now(),synced:!0}})}catch(e){return console.error(`[notas] cargarNube:`,e),null}},I=(e,t)=>{let n=y(e.contenido),r=n.length>50?n.substring(0,50)+`...`:n||`Sin contenido...`,i=e.id===t?`active`:``,a=e.titulo||`Documento sin título`;return`
    <div class="wd_doc_item ${i}${e.pin?` wd_pinned`:``}" data-id="${e.id}">
      <div class="wd_doc_head">
        <h4>${a}</h4>
        <div class="wd_doc_acts">
          <button class="wd_act_pin${e.pin?` active`:``}" data-id="${e.id}" ${p(e.pin?`Desanclar`:`Fijar`,void 0,`right`)}><i class="fas fa-thumbtack"></i></button>
          <button class="wd_act_del" data-id="${e.id}" ${p(`Eliminar permanentemente`,void 0,`right`)}><i class="fas fa-trash-can"></i></button>
          <i class="fas ${e.synced?`fa-cloud wd_cloud_ok`:`fa-cloud-arrow-up wd_cloud_pen`}" ${p(e.synced?`En la nube`:`Local (Cambios sin guardar)`,void 0,`right`)}></i>
        </div>
      </div>
      <p>${r}</p>
    </div>`},L=null,R=null;t.navigate=e=>{console.log(`[Zenwii Editor] Ruta interceptada:`,e),e!==`/nota`&&(window.location.href=e)},e(`#winota`).html(k()),(async()=>{let t=O.get(),a=null,s=null,d=[],f=e=>{if(t=t.filter(t=>t.id!==e),d=d.filter(t=>t!==e),localStorage.setItem(`open_tabs`,JSON.stringify(d)),O.set(t),o.user&&P(e),l(`Nota eliminada permanentemente`,`success`),a?.id===e)if(d.length>0){let e=t.find(e=>e.id===d[0]);e&&z(e)}else t.length>0?z(k()[0]):B();else j()};try{let e=localStorage.getItem(`open_tabs`);e&&(d=JSON.parse(e))}catch{}let b=()=>{let n=e(`#wd_tabs_bar`);if(!n.length)return;if(d=d.filter(e=>t.some(t=>t.id===e)),d.length===0&&a&&d.push(a.id),localStorage.setItem(`open_tabs`,JSON.stringify(d)),d.length===0){n.html(``);return}let r=`<button id="wd_btn_tab_search" class="wd_tab_search_btn" ${p(`Buscar nota por título`,void 0,`bottom`)}><i class="fas fa-magnifying-glass"></i></button>`+d.map(e=>{let n=t.find(t=>t.id===e);if(!n)return``;let r=n.id===a?.id?`active`:``,i=n.titulo||`Sin título`;return`
        <div class="wd_tab ${r}" data-id="${n.id}">
          <i class="fa-solid fa-file-lines wd_tab_favicon"></i>
          <span>${i}</span>
          <button class="wd_tab_close" data-id="${n.id}" title="Cerrar pestaña">&times;</button>
        </div>`}).join(``)+`<div class="wd_tab_sep_new"></div><button id="wd_btn_new_tab" class="wd_tab_new_btn" ${p(`Nuevo Documento`,void 0,`bottom`)}><i class="fas fa-plus"></i></button>`;n.html(r)},S=t=>{if(!o.user||!t){e(`#wd_meta, .wd_meta_sep_main`).hide();return}e(`#wd_meta, .wd_meta_sep_main`).css(`display`,`flex`),e(`#wd_meta_rel span`).text(v(t.actualizado||t.creado)),e(`#wd_meta_cre span`).text(_(t.creado)),e(`#wd_meta_upd span`).text(_(t.actualizado))},w=t=>{clearInterval(L),!(!o.user||!t)&&(L=setInterval(()=>{e(`#wd_meta_rel span`).text(v(t.actualizado||t.creado))},6e4))},D=()=>{e(`#wd_sb_list`).html(`
      <div class="wd_skeleton_item">
        <div class="wd_skeleton wd_sk_title"></div>
        <div class="wd_skeleton wd_sk_body"></div>
      </div>
    `.repeat(3))},k=()=>[...t].sort((e,t)=>e.pin&&!t.pin?-1:!e.pin&&t.pin?1:(t.actualizado||0)-(e.actualizado||0)),j=async()=>{let e=k();await g(`#wd_sb_list`,e.length?e.map(e=>I(e,a?.id)).join(``):`<div class="wd_empty">No tienes documentos. Crea uno nuevo.</div>`,80),b()},z=t=>{a=t,e(`#wd_in_tit`).val(t.titulo||``),e(`#wd_editor`).html(t.contenido||``),d.includes(t.id)||d.push(t.id),localStorage.setItem(`open_tabs`,JSON.stringify(d)),j(),S(t),w(t),x(o.user,a)},B=()=>{t=t.filter(e=>!(e.id.startsWith(`ej`)&&(e.titulo===`Documento de Ejemplo`||e.titulo===``)));let n={id:E(),titulo:``,contenido:``,contenidoMd:``,pin:!1,creado:Date.now(),actualizado:Date.now(),synced:!1};t.unshift(n),O.set(t),z(n),setTimeout(()=>{e(`#wd_in_tit`).val(``).focus(),document.execCommand(`fontName`,!1,`'Segoe UI', system-ui`)},50)},V=(n=``)=>{let r=n.trim().toLowerCase(),i=[];i=r?t.filter(e=>{let t=(e.titulo||``).toLowerCase().includes(r),n=y(e.contenido||``).toLowerCase().includes(r);return t||n}):k().slice(0,5);let o=e(`#wd_search_results`);if(i.length===0){o.html(`<div class="wd_search_no_results">No se encontraron notas que coincidan con la búsqueda.</div>`);return}let s=i.map(e=>{let t=a&&a.id===e.id?`active`:``,n=e.pin?`<i class="fas fa-thumbtack wd_search_result_icon pinned"></i>`:`<i class="fa-solid fa-file-lines wd_search_result_icon"></i>`,r=e.titulo||`Sin título`,i=y(e.contenido),o=i.length>80?i.substring(0,80)+`...`:i||`Sin contenido...`,s=v(e.actualizado||e.creado);return`
        <div class="wd_search_result_item ${t}" data-id="${e.id}">
          ${n}
          <div class="wd_search_result_info">
            <h4 class="wd_search_result_title">${r}</h4>
            <p class="wd_search_result_snippet">${o}</p>
            <div class="wd_search_result_meta">
              <span><i class="fas fa-clock"></i> ${s}</span>
            </div>
          </div>
        </div>
      `}).join(``);o.html(s)},H=()=>{!o.user||!a||(clearTimeout(R),R=setTimeout(()=>{if(!a)return;let n=a;if(n.titulo||y(n.contenido).trim().length>0){e(`#wd_sb_list .wd_doc_item[data-id="${n.id}"] .fa-cloud-arrow-up, #wd_sb_list .wd_doc_item[data-id="${n.id}"] .fa-cloud`).removeClass(`fa-cloud wd_cloud_ok fa-cloud-arrow-up wd_cloud_pen`).addClass(`fa-arrows-rotate wd_spin`).attr(`data-witip`,`Sincronizando con la nube...`);let r=e(`#wd_hdr_auth .fa-cloud, #wd_hdr_auth .fa-cloud-arrow-up`);r.length&&r.removeClass(`fa-cloud wd_cloud_ok fa-cloud-arrow-up wd_cloud_pen`).addClass(`fa-arrows-rotate wd_spin`).attr(`data-witip`,`Sincronizando con la nube...`),(n.synced?N(n):M(n)).then(()=>{n.synced=!0,n.actualizado=Date.now(),O.set(t),e(`#wd_sb_list .wd_doc_item[data-id="${n.id}"] .fa-arrows-rotate`).removeClass(`fa-arrows-rotate wd_spin`).addClass(`fa-cloud wd_cloud_ok`).attr(`data-witip`,`Sincronizado en la nube ☁️`);let r=e(`#wd_hdr_auth .fa-arrows-rotate`);r.length&&r.removeClass(`fa-arrows-rotate wd_spin`).addClass(`fa-cloud wd_cloud_ok`).attr(`data-witip`,`Todos los cambios sincronizados`),a&&a.id===n.id&&S(a)}).catch(()=>{e(`#wd_sb_list .wd_doc_item[data-id="${n.id}"] .fa-arrows-rotate`).removeClass(`fa-arrows-rotate wd_spin`).addClass(`fa-cloud-arrow-up wd_cloud_pen`).attr(`data-witip`,`Error de conexión. Guardado en local.`)})}},2500))},U=()=>{if(!a)return;a.titulo=e(`#wd_in_tit`).val().trim(),a.contenido=e(`#wd_editor`).html(),a.contenidoMd=C(a.contenido),a.actualizado=Date.now(),O.set(t),e(`.wd_tab[data-id="${a.id}"] span`).text(a.titulo||`Sin título`);let n=e(`#wd_sb_list .wd_doc_item[data-id="${a.id}"]`);if(n.length){n.find(`h4`).text(a.titulo||`Documento sin título`);let e=y(a.contenido);n.find(`p`).text(e.length>50?e.substring(0,50)+`...`:e||`Sin contenido...`),n.find(`.fa-cloud.wd_cloud_ok`).removeClass(`fa-cloud wd_cloud_ok`).addClass(`fa-cloud-arrow-up wd_cloud_pen`).attr(`data-witip`,`Local (Cambios sin guardar)`)}H()},W=()=>{e(`.wd_btn_tool[data-cmd]`).each(function(){try{e(this).toggleClass(`active`,document.queryCommandState(e(this).data(`cmd`)))}catch{}});try{let t=window.getSelection();if(!t.anchorNode)return;let n=t.anchorNode.nodeType===3?t.anchorNode.parentNode:t.anchorNode;if(e(n).closest(`.wd_editor`).length){let t=window.getComputedStyle(n);if(t.fontSize&&e(`#wd_f_sz`).val(parseInt(t.fontSize)),t.fontFamily){let n=t.fontFamily.split(`,`)[0].replace(/['"]/g,``);e(`#wd_f_fam option`).filter(function(){return e(this).text()===n||e(this).val().includes(n)}).prop(`selected`,!0)}let r=e(n).closest(`p, div, h1, h2, h3, h4, h5, h6, li`);r.length&&r[0].style.lineHeight&&e(`#wd_l_ht`).val(r[0].style.lineHeight)}}catch{}},G=()=>{e(`.wd_wrap`).toggleClass(`wd_focus_active`),e(`.wd_wrap`).hasClass(`wd_focus_active`)?(l(`Modo Concentración Activo 🧘. Presiona Esc para salir.`,`info`),e(`#wd_editor`).focus()):l(`Modo Concentración Desactivado`,`info`)},[K]=(localStorage.wiTema||`Oro|#FFC107`).split(`|`);e(`.wd_ft_themes .tema`).removeClass(`mtha`),e(`.wd_ft_themes .tema[data-ths^="${K}"]`).addClass(`mtha`),e(document).on(`click.wd`,`#wd_btn_toggle_sidebar`,()=>e(`#wd_sidebar`).toggleClass(`closed`)).on(`click.wd`,`#wd_btn_new, #wd_btn_new_tab`,B).on(`click.wd`,`#wd_btn_refresh`,async function(){let n=e(this).find(`i`);if(n.hasClass(`wd_spin`))return;n.addClass(`wd_spin`);let r=await F();r&&(t=r,O.set(t),t.length?z(k()[0]):B(),l(`Sincronizado con la Nube ✓`,`success`)),n.removeClass(`wd_spin`)}).on(`click.wd`,`.wd_doc_item`,function(n){if(e(n.target).closest(`.wd_doc_acts`).length)return;let r=t.find(t=>t.id===e(this).data(`id`));r&&z(r)}).on(`click.wd`,`.wd_btn_del_doc`,function(){a&&f(a.id)}).on(`click.wd`,`.wd_act_del`,function(t){t.stopPropagation(),f(e(this).data(`id`))}).on(`click.wd`,`#wd_btn_tab_search`,()=>{e(`#wd_modal_search_inp`).val(``),V(``),m(`wd_search_modal`)}).on(`input.wd`,`#wd_modal_search_inp`,function(){V(e(this).val())}).on(`keydown.wd`,`#wd_modal_search_inp`,function(t){if(t.key===`Enter`){t.preventDefault();let n=e(`#wd_search_results .wd_search_result_item`).first();n.length&&n.click()}}).on(`click.wd`,`.wd_search_result_item`,function(){let n=e(this).data(`id`),r=t.find(e=>e.id===n);r&&(z(r),h())}).on(`keydown.wd`,`#wd_in_tit`,function(t){t.key===`Enter`&&(t.preventDefault(),e(`#wd_editor`).focus())}).on(`click.wd`,`#wd_btn_save`,function(){if(!a)return;U();let n=a,r=n.titulo||y(n.contenido).trim().length>0;if(o.user&&r){e(`#wd_sb_list .wd_doc_item[data-id="${n.id}"] .fa-cloud-arrow-up, #wd_sb_list .wd_doc_item[data-id="${n.id}"] .fa-cloud`).removeClass(`fa-cloud wd_cloud_ok fa-cloud-arrow-up wd_cloud_pen`).addClass(`fa-arrows-rotate wd_spin`).attr(`data-witip`,`Sincronizando con la nube...`);let r=e(`#wd_hdr_auth .fa-cloud, #wd_hdr_auth .fa-cloud-arrow-up`);r.length&&r.removeClass(`fa-cloud wd_cloud_ok fa-cloud-arrow-up wd_cloud_pen`).addClass(`fa-arrows-rotate wd_spin`).attr(`data-witip`,`Sincronizando con la nube...`);let i=e(this),s=i.html();i.html(`<i class="fas fa-circle-check"></i> Guardado`).addClass(`wd_saved_success`),setTimeout(()=>i.html(s).removeClass(`wd_saved_success`),1200),(n.synced?N(n):M(n)).then(()=>{n.synced=!0,n.actualizado=Date.now(),O.set(t),e(`#wd_sb_list .wd_doc_item[data-id="${n.id}"] .fa-arrows-rotate`).removeClass(`fa-arrows-rotate wd_spin`).addClass(`fa-cloud wd_cloud_ok`).attr(`data-witip`,`Sincronizado en la nube ☁️`),a&&a.id===n.id&&(S(a),x(o.user,a))}).catch(t=>{console.error(`Error al guardar en la nube (background):`,t),e(`#wd_sb_list .wd_doc_item[data-id="${n.id}"] .fa-arrows-rotate`).removeClass(`fa-arrows-rotate wd_spin`).addClass(`fa-cloud-arrow-up wd_cloud_pen`).attr(`data-witip`,`Error de conexión. Cambios locales guardados.`),a&&a.id===n.id&&x(o.user,a)})}else if(o.user&&!r)l(`Agrega un título o contenido primero`,`warning`);else{let t=e(this),n=t.html();t.html(`<i class="fas fa-circle-check"></i> Guardado local`).addClass(`wd_saved_success`),setTimeout(()=>t.html(n).removeClass(`wd_saved_success`),1200),l(`Guardado en local ✓`,`success`)}}).on(`click.wd`,`.wd_act_pin`,function(n){n.stopPropagation();let r=e(this).data(`id`),i=t.find(e=>e.id===r);i&&(i.pin=!i.pin,O.set(t),j(),o.user&&i.synced&&N(i))}).on(`click.wd`,`.wd_tab`,function(n){if(e(n.target).closest(`.wd_tab_close`).length)return;let r=e(this).data(`id`),i=t.find(e=>e.id===r);i&&i.id!==a?.id&&z(i)}).on(`click.wd`,`.wd_tab_close`,function(t){t.stopPropagation(),f(e(this).data(`id`))}).on(`click.wd`,`#wd_btn_focus, #wd_btn_exit_focus`,G).on(`click.wd`,`.wd_ft_themes .tema`,function(){let t=e(this).data(`ths`);if(!t)return;let[n,r]=t.split(`|`);document.documentElement.dataset.theme=n;let i=document.querySelector(`meta[name="theme-color"]`);i||(i=document.createElement(`meta`),i.name=`theme-color`,document.head.appendChild(i)),i.content=r,localStorage.wiTema=t,e(`.wd_ft_themes .tema`).removeClass(`mtha`),e(this).addClass(`mtha`);let a=o.user;a?.usuario&&A().then(({db:e,doc:n,setDoc:r,serverTimestamp:i})=>{r(n(e,`smiles`,a.usuario),{tema:t,actualizado:i()},{merge:!0}),u(`wiSmile`,{...a,tema:t},7)}).catch(console.error)}).on(`input.wd`,`#wd_editor`,()=>{W(),U()}).on(`input.wd`,`#wd_in_tit`,U).on(`mouseup.wd keyup.wd`,`#wd_editor`,function(){W();let e=window.getSelection();e.rangeCount>0&&(s=e.getRangeAt(0))}).on(`click.wd`,`.wd_btn_tool[data-cmd]`,function(t){t.preventDefault(),document.execCommand(e(this).data(`cmd`),!1,null),W(),e(`#wd_editor`).focus()}).on(`change.wd`,`#wd_f_fam`,function(){if(s){let e=window.getSelection();e.removeAllRanges(),e.addRange(s)}document.execCommand(`styleWithCSS`,!1,!0),document.execCommand(`fontName`,!1,e(this).val()),e(`#wd_editor`).focus().trigger(`input`)}).on(`keydown.wd`,`#wd_f_sz`,function(t){if(t.key!==`Enter`)return;t.preventDefault();let n=Math.max(8,Math.min(100,parseInt(e(this).val())||16));if(e(this).val(n),s){let e=window.getSelection();e.removeAllRanges(),e.addRange(s)}document.execCommand(`styleWithCSS`,!1,!0),document.execCommand(`fontSize`,!1,`7`),e(`.wd_editor font[size="7"], .wd_editor span[style*="xxx-large"]`).removeAttr(`size`).css(`font-size`,n+`px`),e(`#wd_editor`).focus().trigger(`input`)}).on(`change.wd`,`#wd_l_ht`,function(){if(s){let e=window.getSelection();e.removeAllRanges(),e.addRange(s)}let t=window.getSelection();if(t.rangeCount){let n=t.getRangeAt(0).commonAncestorContainer,r=n.nodeType===3?n.parentNode:n,i=e(r).hasClass(`wd_editor`)?e(r).children().filter(function(){return t.containsNode(this,!0)}):e(r).closest(`p, div, h1, h2, h3, h4, h5, h6, li`);!i.length&&e(r).hasClass(`wd_editor`)&&(i=e(r)),i.css(`line-height`,e(this).val())}e(`#wd_editor`).focus().trigger(`input`)}).on(`input.wd`,`#wd_c_txt`,function(){document.execCommand(`foreColor`,!1,e(this).val()),e(`#wd_editor`).focus()}).on(`input.wd`,`#wd_c_bg`,function(){document.execCommand(`hiliteColor`,!1,e(this).val()),e(`#wd_editor`).focus()}).on(`click.wd`,`.bt_auth`,async function(){let{abrirLogin:t}=await n(async()=>{let{abrirLogin:e}=await import(`./login-DyVePxSX.js`);return{abrirLogin:e}},__vite__mapDeps([0]));t(e(this).hasClass(`registrar`)?`registrar`:`login`)}).on(`click.wd`,`.bt_salir`,async()=>{let{salir:e}=await n(async()=>{let{salir:e}=await import(`./login-DyVePxSX.js`);return{salir:e}},__vite__mapDeps([0]));e([`wiTema`,`wiSmart`,`open_tabs`])}),e(window).on(`keydown.wd`,function(t){t.key===`Escape`&&e(`.wd_wrap`).hasClass(`wd_focus_active`)&&G()}),i([`.wd_header`,`.wd_sidebar`,`.wd_tabs_bar`,`.wd_ribbon`,`.wd_page`,`.wd_footer`],50),t.length?z(k()[0]):B(),o.on(async n=>{x(n,a),e(`#wd_btn_refresh`).toggle(!!n),n?(e(`#wd_saludo`).text(`${c()}${n.nombre||n.usuario}`),D(),t=await F()||[],O.set(t),d=d.filter(e=>t.some(t=>t.id===e)),localStorage.setItem(`open_tabs`,JSON.stringify(d)),t.length?z(k()[0]):B()):(e(`#wd_saludo`).text(`Mis Archivos`),localStorage.removeItem(T),t=O.get(),d=d.filter(e=>t.some(t=>t.id===e)),localStorage.setItem(`open_tabs`,JSON.stringify(d)),t.length?z(k()[0]):B())}),console.log(`📝 ${r} v10 · Notas Offline-First con Pestañas OK`)})(),s({css:[`https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap`,`https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap`,`https://fonts.googleapis.com/css2?family=Rubik:wght@300..900&display=swap`]});