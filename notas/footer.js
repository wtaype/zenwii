import { wiTip } from './widev.js';
import { version } from './wii.js';

export const renderFooter = () => `
  <footer class="wd_footer">
    <div class="wd_ft_left">
      <button id="wd_btn_focus" class="wd_ft_btn" ${wiTip('Concentración total sin distracciones')}><i class="fas fa-expand"></i> <span>Modo Concentración</span></button>
    </div>
    <div class="wd_ft_center">
      <div class="wd_ft_themes">
        <span class="wd_ft_theme_lbl">Tema:</span>
        <div class="tema" data-ths="Cielo|#0EBEFF" ${wiTip('Cielo', undefined, 'info')}></div>
        <div class="tema" data-ths="Dulce|#FF5C69" ${wiTip('Dulce', undefined, 'error')}></div>
        <div class="tema" data-ths="Paz|#29C72E" ${wiTip('Paz', undefined, 'success')}></div>
        <div class="tema mtha" data-ths="Oro|#FFC107" ${wiTip('Oro', undefined, 'warning')}></div>
        <div class="tema" data-ths="Mora|#7000FF" ${wiTip('Mora', undefined, 'mco')}></div>
        <div class="tema" data-ths="Futuro|#21273B" ${wiTip('Futuro', undefined, 'info')}></div>
      </div>
    </div>
    <div class="wd_ft_right">
      <span class="wd_ft_ver"><a href="/" target="_blank">Zenwii ${version}· Hecho con ❤️ </a> </span>
    </div>
  </footer>
`;
