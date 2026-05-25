import{n as e}from"./vendor-BuoCFfzO.js";import{t}from"./wii-DQBqtwtl.js";import{c as n,d as r,l as i,m as a,r as o}from"./widev-BX5_JJ6V.js";import{n as s}from"./index-ChQt8nr5.js";import{d as c,f as l,i as u,s as d}from"./firebase-BuEyh8Mq.js";import{n as f}from"./firebase-CKBWl3dx.js";var p=()=>{let e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,`0`)}`},m=async e=>{try{let t=`empleadosPuntos_${e}`,n=i(t);if(n)return console.log(`🏆 Ranking del mes ${e} recuperado de caché local.`),n;console.log(`🔄 Calculando ranking en vivo desde Firestore para el mes ${e}...`);let a=(await u(d(l(f,`smiles`),c(`participa`,`==`,`si`)))).docs.map(e=>{let t=e.data();return{usuario:t.usuario||e.id,nombre:t.nombre||t.usuario||e.id,descripcion:t.descripcion||`Colaborador`,imagen:t.imagen||``,totalPuntos:0,totalVentas:0}}),o=await u(l(f,`registrosdb`)),[s,p]=e.split(`-`).map(Number);return o.docs.forEach(e=>{let t=e.data(),n=t.fechaTour,r,i;if(typeof n==`string`)[r,i]=n.split(`-`).map(Number);else if(n?.toDate){let e=n.toDate();r=e.getFullYear(),i=e.getMonth()+1}else return;if(r===s&&i===p){let e=a.find(e=>e.usuario===t.vendedor);e&&(e.totalPuntos+=parseInt(t.puntos)||0,e.totalVentas+=parseInt(t.qventa)||1)}}),a.sort((e,t)=>t.totalPuntos===e.totalPuntos?t.totalVentas===e.totalVentas?e.nombre.localeCompare(t.nombre):t.totalVentas-e.totalVentas:t.totalPuntos-e.totalPuntos),r(t,a,5),a}catch(e){return console.error(`Error en obtenerRankingMes (zsmile):`,e),[]}},h=p(),g=()=>`
    <div class="smw_dash">
      <header class="smw_hero wi_fadeUp">
        <div class="smw_hero_glow"></div>
        <div class="smw_hero_content">
          <div class="smw_hero_left">
            <div class="smw_avatar_wrap">
              <div class="smw_avatar" id="smwAvatar">?</div>
              <div class="smw_avatar_ring"></div>
            </div>
            <div class="smw_welcome">
              <h1 id="smwSaludo">Cargando...</h1>
              <p id="smwRole"><i class="fas fa-car-side"></i> Colaborador — Reto del Mes</p>
            </div>
          </div>
          <div class="smw_month_selector_container">
            <select id="smwMonthSelector" class="smw_select" style="min-width: 160px; backdrop-filter: blur(10px); background: var(--bg5);">
              ${x()}
            </select>
          </div>
        </div>
      </header>

      <section class="smw_kpi_band wi_fadeUp" id="smwKpis" style="animation-delay: 0.1s">
        <div class="smw_kpi_item">
          <span class="smw_kpi_val" id="kpiTours" style="color: var(--Cielo)"><span class="smw_sk_kpi"></span></span>
          <span class="smw_kpi_lbl">Tours este mes</span>
        </div>
        <div class="smw_kpi_sep"></div>
        <div class="smw_kpi_item">
          <span class="smw_kpi_val" id="kpiPuntos" style="color: var(--Oro)"><span class="smw_sk_kpi"></span></span>
          <span class="smw_kpi_lbl">Mis puntos</span>
        </div>
        <div class="smw_kpi_sep"></div>
        <div class="smw_kpi_item">
          <span class="smw_kpi_val" id="kpiPos" style="color: var(--Mora)"><span class="smw_sk_kpi"></span></span>
          <span class="smw_kpi_lbl">Posición</span>
        </div>
      </section>

      <nav class="smw_quick_nav wi_fadeUp" style="animation-delay: 0.2s">
        ${[{page:`registrar`,ico:`fa-plus-circle`,col:`#FF5C69`,tit:`Registrar Venta`,sub:`Nueva venta de tour`},{page:`ranking`,ico:`fa-trophy`,col:`#FFDA34`,tit:`Ver Ranking`,sub:`Puntos del mes`},{page:`historial`,ico:`fa-clipboard-list`,col:`#0EBEFF`,tit:`Historial`,sub:`Mis ventas registradas`},{page:`tours`,ico:`fa-route`,col:`#29C72E`,tit:`Catálogo Tours`,sub:`Lista de tours and precios`},{page:`avisar`,ico:`fa-bell`,col:`#7000FF`,tit:`Anuncios`,sub:`Noticias del equipo`}].map((e,t)=>`
          <a href="/${e.page}" class="smw_qcard nv_item" data-page="${e.page}" style="--qc:${e.col}; animation-delay: ${t*.05}s">
            <div class="smw_qcard_ico" style="--qc: ${e.col}"><i class="fas ${e.ico}"></i></div>
            <div class="smw_qcard_txt">
              <strong>${e.tit}</strong>
              <span>${e.sub}</span>
            </div>
            <i class="fas fa-arrow-right smw_qcard_arr"></i>
          </a>
        `).join(``)}
      </nav>
    </div>
  `,_=async()=>{let r=a.user;if(!r)return setTimeout(()=>s.navigate(`/login`),100);let i=n(r.nombre||r.usuario||``),c=`${(r.nombre||`?`)[0]}${(r.apellidos||``)[0]||``}`.toUpperCase();e(`#smwAvatar`).text(c),e(`#smwSaludo`).html(`${o()} <strong>${i}</strong>`),r.descripcion?e(`#smwRole`).html(`<i class="fas fa-user-tag"></i> ${r.descripcion}`):e(`#smwRole`).html(`<i class="fas fa-car-side"></i> Colaborador — Reto del Mes`),e(`#smwMonthSelector`).val(h),y(r.usuario,h),e(document).off(`change.smile_dash`).on(`change.smile_dash`,`#smwMonthSelector`,function(){h=e(this).val(),y(r.usuario,h)}),e(`.wi_fadeUp`).addClass(`visible wi_visible`),console.log(`🏜️ ${t} Smile Dashboard cargado`),window.__WIREADY__=!0},v=()=>{e(document).off(`change.smile_dash`)};async function y(t,n){try{e(`#kpiTours`).html(`<span class="smw_sk_kpi"></span>`),e(`#kpiPuntos`).html(`<span class="smw_sk_kpi"></span>`),e(`#kpiPos`).html(`<span class="smw_sk_kpi"></span>`);let a=`kpiSmile_${t}_${n}`,o=i(a);if(o)return b(o);let[s,c]=n.split(`-`).map(Number),d=await u(l(f,`registrosdb`)),p=0,h=0;d.docs.forEach(e=>{let n=e.data();if(n.vendedor!==t)return;let r=n.fechaTour,i,a;if(typeof r==`string`)[i,a]=r.split(`-`).map(Number);else if(r?.toDate){let e=r.toDate();i=e.getFullYear(),a=e.getMonth()+1}else return;i===s&&a===c&&(p+=parseInt(n.qventa)||1,h+=parseInt(n.puntos)||0)});let g=(await m(n)).findIndex(e=>e.usuario===t),_=g===-1?`—`:`#${g+1}`,v={tours:p,puntos:h,posicion:_};r(a,v,5),b(v)}catch(e){console.warn(`KPI error:`,e),b({tours:`?`,puntos:`?`,posicion:`?`})}}function b({tours:t,puntos:n,posicion:r}){e(`#kpiTours`).text(t),e(`#kpiPuntos`).text(n),e(`#kpiPos`).text(r)}function x(){let t=new Date,n=t.getFullYear(),r=t.getMonth(),i=[`Enero`,`Febrero`,`Marzo`,`Abril`,`Mayo`,`Junio`,`Julio`,`Agosto`,`Septiembre`,`Octubre`,`Noviembre`,`Diciembre`];return e.map(Array(7),(e,t)=>{let a=t-3,o=r+a,s=n+Math.floor(o/12),c=(o%12+12)%12;return`<option value="${`${s}-${String(c+1).padStart(2,`0`)}`}"${a===0?` selected`:``}>${i[c]} ${s}</option>`}).join(``)}export{v as cleanup,_ as init,g as render};