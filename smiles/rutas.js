import $ from 'jquery';
import { app, titulo, descri, keywii, linkweb } from './wii.js';
import { Notificacion, wiPath, wiFade } from './widev.js';
import * as inicioMod from './todos/inicio.js';

// ── NAV COMUN — rutas compartidas entre todos los roles ────────────────────────
const COMUN = [
  { href: '/nota', page: 'nota', ico: 'fa-sticky-note', txt: 'Notas Pro' },
  { href: '/beneficios', page: 'beneficios', ico: 'fa-gift', txt: 'Beneficios' },
  { href: '/precios', page: 'precios', ico: 'fa-tags', txt: 'Precios' },
  { href: '/acerca', page: 'acerca', ico: 'fa-circle-info', txt: 'Acerca' },
];

// ── NAV — Config visual por rol (nvleft = izquierda, nvright = derecha) ────────
export const NAV = {
  todos: {
    nvleft:  [
      { href: '/', page: 'inicio', ico: 'fa-house', txt: 'Bienvenido' },
       ...COMUN],
    nvright: [
      { isBtn: true, cls: 'bt_auth registrar', ico: 'fa-user-plus', txt: 'Registrar' },
      { isBtn: true, cls: 'bt_auth login',     ico: 'fa-sign-in-alt', txt: 'Login'  },
    ],
  },
  smile: {
    nvleft: [
      { href: '/smile', page: 'smile', ico: 'fa-smile', txt: 'Smile' },
      ...COMUN,
    ],
    nvright: [
      { isPerfil: true }, { isSalir: true },
    ],
  },
  editor: {
    nvleft: [
      { href: '/nuevo', page: 'nuevo', ico: 'fa-plus-circle', txt: 'Crear Post' },
      ...COMUN,
    ],
    nvright: [
      { isPerfil: true }, { isSalir: true },
    ],
  },
  gestor: {
    nvleft: [
      { href: '/gestor',     page: 'gestor',     ico: 'fa-chart-pie',       txt: 'Dashboard'    },
      ...COMUN,
    ],
    nvright: [
      { isPerfil: true }, { isSalir: true },
    ],
  },
  admin: {
    nvleft: [
      { href: '/admin',    page: 'admin',    ico: 'fa-globe', txt: 'Plataforma' },
      { href: '/usuarios', page: 'usuarios', ico: 'fa-users', txt: 'Usuarios'   },
      { href: '/sistema',  page: 'sistema',  ico: 'fa-cogs',  txt: 'Sistema'    },
    ],
    nvright: [
      { href: '/nuevo',    page: 'nuevo',    ico: 'fa-plus',        txt: 'Post' },
      { isPerfil: true }, { isSalir: true },
    ],
  },
  verificar: {
    nvleft:  [],
    nvright: [],
  },
};

// ── RUTAS — Fuente única de verdad - roles: null = público · ['rol',...] = protegido · area = carpeta del módulo ───────────────────────────────────────────────
export const RUTAS = [
  // ── Core público ───────────────────────────────────────────────
  { path: '/inicio',   area: 'todos/' },
  { path: '/login',    area: 'todos/' },
  { path: '/emojis',   area: 'todos/' },
  { path: '/beneficios',   area: 'todos/' },
  { path: '/precios',   area: 'todos/' },
  { path: '/registrado',   area: 'todos/' },
  
  // ── Submódulos públicos ───────────────────────────────────────────────
  { path: '/blog',     area: 'todos/blog/' },
  { path: '/post',     area: 'todos/blog/'    }, 
  { path: '/chatwil',  area: 'todos/chatwil/' },

  // ── Acerca / Legales / Info ───────────────────────────────────────────────
  { path: '/acerca',     area: 'todos/acerca/' },
  { path: '/descubre',   area: 'todos/acerca/' },
  { path: '/terminos',   area: 'todos/acerca/' },
  { path: '/cookies',    area: 'todos/acerca/' },
  { path: '/privacidad', area: 'todos/acerca/' },
  { path: '/feedback',   area: 'todos/acerca/' },
  { path: '/contacto',   area: 'todos/acerca/' },

  // ── Autenticadas (smile) ───────────────────────────────────────────────
  { path: '/smile',    area: 'smile/', roles: ['smile','editor','gestor','admin'] },
  { path: '/perfil',   area: 'smile/', roles: ['smile','editor','gestor','admin'] },
  { path: '/nuevo',    area: 'todos/blog/', roles: ['smile','editor','gestor','admin'] },

  // ── Autenticadas (roles superiores) ───────────────────────────────────────────────
  { path: '/gestor',   area: 'gestor/',  roles: ['gestor','admin'] },
  { path: '/admin',    area: 'admin/',   roles: ['admin']          },
  { path: '/usuarios', area: 'admin/',   roles: ['admin']          },
  { path: '/sistema',  area: 'admin/',   roles: ['admin']          },
  { path: '/verificar',area: 'verificar/',roles: ['admin']          },
];

// ── GLOB — Vite mapea todos los módulos en build time ───────────────────────────────────────────────
const MODS = import.meta.glob([
  './{todos,smile,gestor,admin,verificar}/**/*.js',
  '!./todos/inicio.js',
  '!./todos/chatwil/head/**/*.js',
  '!./todos/chatwil/memoria.js',
  '!./todos/chatwil/brain.js',
  '!./todos/blog/devblog.js',
  '!./todos/blog/wiad.js',
  '!./smile/zsmile.js'
]);
const rutasMod = (area, page) => MODS[`./${area}${page}.js`];

// ── MOTOR ──────────────────────────────────────────────────────────────────────
class WiRutas {
  constructor() {
    this.rutas     = {};               // funciones lazy originales — nunca se sobreescriben
    this.cache     = { '/inicio': inicioMod }; // inicio eagerly bundled, cero red
    this.modActual = null;
    this.cargand   = false;
    this.HOME      = 'inicio';
    this.main      = '#wimain';
    this.pathActual = null;
    this.isFirstLoad = true;
  }

  register(path, fn) { this.rutas[path] = fn; }
  inicio() { return Promise.resolve(inicioMod); }

  registerAll(getRol) {
    const pub = {}, priv = {};

    RUTAS.forEach(({ path, area, roles = null, mod }) => {
      if (path === '/inicio') {
        pub[path] = () => this.inicio();
        return;
      }
      const page = mod ?? path.split('/').pop();
      const imp  = rutasMod(area, page);
      if (!imp) { console.warn(`[ruta] no encontrado: ${area}${page}.js`); return; }
      roles === null ? (pub[path] = imp) : (priv[path] ??= []).push({ roles, imp });
    });

    const noAuth = () => Promise.resolve({
      render: () => '',
      init:   () => setTimeout(() => this.navigate('/login'), 0),
    });

    new Set([...Object.keys(pub), ...Object.keys(priv)]).forEach(path => {
      const pubImp   = pub[path];
      const privList = priv[path] || [];
      const resolve  = () => { const rol = getRol?.() || null; return privList.find(e => e.roles.includes(rol)); };

      if (!privList.length)  return this.register(path, pubImp);
      if (!pubImp)           return this.register(path, () => { const e = resolve(); return e ? e.imp() : noAuth(); });
      this.register(path, () => { const e = resolve(); return e ? e.imp() : pubImp(); });
    });
  }

  // ── PREFETCH: descarga el módulo al hacer hover, sin bloquear nada ───────────
  async prefetch(ruta) {
    const norm = wiPath.limpiar(ruta) === '/' ? `/${this.HOME}` : wiPath.limpiar(ruta);
    if (this.cache[norm] || !this.rutas[norm]) return;   // ya listo o no existe
    try {
      this.cache[norm] = await this.rutas[norm]();
      console.log(`⚡ Listo ${norm.replace('/', '')}`);
    } catch { console.warn('[ruta] prefetch falló:', norm); }
  }

  // ── NAVIGATE: si ya está en cache, carga instantánea ─────────────────────────
  async navigate(ruta, historial = true) {
    if (this.cargand) return;
    this.cargand = true;
    const norm = wiPath.limpiar(ruta) === '/' ? `/${this.HOME}` : wiPath.limpiar(ruta);

    // ── GUARD ADMIN ───────────────────────────────────────────────────────────
    if (['/admin','/usuarios','/sistema'].includes(norm)) {
      const { getls } = await import('./widev.js');
      const wi = getls('wiSmile'), go = r => (this.cargand = false, this.navigate(r, true));
      const dest = !wi || wi.rol !== 'admin' ? '/' : wi.estado !== 'activo' ? '/registrado' : !sessionStorage.getItem('vault_unlocked') ? '/verificar' : null;
      if (dest) return go(dest);
    }

    try {
      this.modActual?.cleanup?.();
      const slug = !this.rutas[norm] ? norm.slice(1) : null;
      const cargar  = slug ? rutasMod('todos/blog/', 'post') : (this.rutas[norm] ?? rutasMod('todos/', '404'));
      const mod = this.cache[norm] ?? await cargar();
      if (!slug) this.cache[norm] = mod;

      const [html] = await Promise.all([mod.render(slug)]);
      
      document.body.classList.remove('is-public-profile');
      this.marcarNav(norm);
      window.dispatchEvent(new CustomEvent('winavigate', { detail: { norm } }));

      // Hydration: Solo preservar contenido prerenderizado si la ruta ES la del inicio
      // (el index.html genérico solo tiene prerender del inicio; en otras rutas siempre inyectar)
      const esHydration = this.isFirstLoad
        && $(this.main).children().length > 0
        && !window.__WIREADY__
        && norm === `/${this.HOME}`;
      if (esHydration) {
        this.isFirstLoad = false;
      } else {
        await wiFade(this.main, html);
      }
      this.isFirstLoad = false;

      window.scrollTo(0, 0);


      mod.init?.(slug);

      if (historial) wiPath.poner(norm === `/${this.HOME}` ? '/' : norm, document.title);
      this.pathActual = norm;
      this.modActual = mod;
    } catch (err) {
      if (err instanceof TypeError && err.message.includes('Failed to fetch')) return location.reload();
      Notificacion('Error en la ruta');
      console.error('[ruta] navigate:', err);
    } finally {
      this.cargand = false;
    }
  }

  marcarNav(norm) {
    const pag = norm.slice(1) || this.HOME;
    $('.nv_item').removeClass('active');
    $(`.nv_item[data-page="${pag}"]`).addClass('active');
  }

  init() {
    this.marcarNav(wiPath.actual === '/' ? `/${this.HOME}` : wiPath.limpiar(wiPath.actual));

    $(document)
      .on('click', '.nv_item', e => {
        const p = $(e.currentTarget).data('page');
        p !== 'nota' && (e.preventDefault(), this.navigate(p === this.HOME ? '/' : `/${p}`));
      })
      .on('mouseenter touchstart', '.nv_item[data-page]', e => {
        const p = $(e.currentTarget).data('page');
        p !== 'nota' && this.prefetch(p === this.HOME ? '/' : `/${p}`);
      });

    window.addEventListener('popstate', (e) => {
      const ruta = e.state?.ruta || wiPath.actual;
      const norm = wiPath.limpiar(ruta) === '/' ? `/${this.HOME}` : wiPath.limpiar(ruta);
      if (norm === this.pathActual) return;
      this.navigate(ruta, false);
    });
    this.navigate(wiPath.actual, false);
  }
}

export const rutas = new WiRutas();
