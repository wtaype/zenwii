/**
 * Zenwii Markdown and HTML Translator - Web Pro Component
 * --------------------------------------------------------
 * Componente de alta fidelidad y velocidad (sin dependencias) para la conversión 
 * bidireccional limpia entre HTML enriquecido (editor web) y Markdown (Firestore y Android).
 */

/**
 * Convierte código HTML del editor contenteditable a Markdown limpio.
 * @param {string} html Código HTML enriquecido.
 * @returns {string} Texto en formato Markdown.
 */
export function htmlToMarkdown(html = "") {
  if (!html) return "";
  let md = html;
  
  // 1. Normalización de saltos de carro
  md = md.replace(/\r/g, "");
  
  // 2. Traducir Encabezados (H1 - H6)
  md = md.replace(/<h1[^>]*>(.*?)<\/h1>/gi, "# $1\n\n");
  md = md.replace(/<h2[^>]*>(.*?)<\/h2>/gi, "## $1\n\n");
  md = md.replace(/<h3[^>]*>(.*?)<\/h3>/gi, "### $1\n\n");
  md = md.replace(/<h4[^>]*>(.*?)<\/h4>/gi, "#### $1\n\n");
  md = md.replace(/<h5[^>]*>(.*?)<\/h5>/gi, "##### $1\n\n");
  md = md.replace(/<h6[^>]*>(.*?)<\/h6>/gi, "###### $1\n\n");
  
  // 3. Traducir Enlaces/Hipervínculos (<a href="url">Texto</a> a [Texto](url))
  md = md.replace(/<a\s+(?:[^>]*?\s+)?href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)");
  
  // 4. Traducir Estilos de Texto (Negrita, Cursiva, Subrayado, Tachado)
  md = md.replace(/<(strong|b)[^>]*>(.*?)<\/ \1>/gi, "**$2**"); // Corrección de cierre con espacio si existe
  md = md.replace(/<(strong|b)[^>]*>(.*?)<\/\1>/gi, "**$2**");
  md = md.replace(/<(em|i)[^>]*>(.*?)<\/\1>/gi, "*$2*");
  md = md.replace(/<(ins|u)[^>]*>(.*?)<\/\1>/gi, "__$2__");
  md = md.replace(/<(strike|del|s)[^>]*>(.*?)<\/\1>/gi, "~~$2~~");
  
  // 5. Traducir Elementos de Lista (Desordenadas y Ordenadas)
  // Reemplazar elementos li a Markdown temporal con viñetas
  md = md.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, "- $1\n");
  
  // En listas ordenadas, resolvemos la numeración incremental en base a sus elementos
  md = md.replace(/<ol[^>]*>([\s\S]*?)<\/ol>/gi, (match, p1) => {
    let index = 1;
    return p1.replace(/^\s*-\s+(.*?)\n/gm, () => `${index++}. $1\n`);
  });
  
  // Quitar los contenedores de listas sobrantes
  md = md.replace(/<ul[^>]*>/gi, "").replace(/<\/ul>/gi, "\n");
  md = md.replace(/<ol[^>]*>/gi, "").replace(/<\/ol>/gi, "\n");
  
  // 6. Traducir Párrafos y Saltos de Línea
  md = md.replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n");
  md = md.replace(/<br\s*\/?>/gi, "\n");
  
  // 7. Eliminar cualquier otra etiqueta HTML residual para evitar fugas de tags
  md = md.replace(/<[^>]+>/g, "");
  
  // 8. Decodificar entidades HTML comunes para un Markdown limpio
  md = md
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  
  // Limpieza final de espaciados múltiples y saltos excedentes
  md = md.replace(/\n{3,}/g, "\n\n");
  return md.trim();
}

/**
 * Convierte texto Markdown guardado en la base de datos a HTML semántico para el editor.
 * @param {string} md Texto formateado en Markdown.
 * @returns {string} Código HTML estructurado.
 */
export function markdownToHtml(md = "") {
  if (!md) return "";
  let html = md;
  
  // 1. Escapar caracteres HTML básicos para seguridad
  html = html
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
  
  // 2. Traducir Encabezados (del más largo al más corto para evitar colisiones)
  html = html.replace(/^###### (.*?)$/gm, "<h6>$1</h6>");
  html = html.replace(/^##### (.*?)$/gm, "<h5>$1</h5>");
  html = html.replace(/^#### (.*?)$/gm, "<h4>$1</h4>");
  html = html.replace(/^### (.*?)$/gm, "<h3>$1</h3>");
  html = html.replace(/^## (.*?)$/gm, "<h2>$1</h2>");
  html = html.replace(/^# (.*?)$/gm, "<h1>$1</h1>");
  
  // 3. Traducir Enlaces/Hipervínculos ([Texto](url) a <a href="url" target="_blank">Texto</a>)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');
  
  // 4. Traducir Estilos de Formato Enriquecidos
  html = html.replace(/\*\*(.*?)\*\*/g, "<b>$1</b>");
  html = html.replace(/\*(.*?)\*/g, "<i>$1</i>");
  html = html.replace(/__(.*?)__/g, "<u>$1</u>");
  html = html.replace(/~~(.*?)~~/g, "<strike>$1</strike>");
  
  // 5. Traducir Listas Desordenadas
  // Identifica los elementos con viñeta "- " y los envuelve en li
  html = html.replace(/^\s*-\s+(.*?)$/gm, "<li>$1</li>");
  // Agrupa múltiples li desordenados adyacentes dentro de un bloque ul
  html = html.replace(/((?:<li>.*?<\/li>\s*)+)/g, (match) => {
    // Si no contiene tags numéricos específicos, es una lista desordenada estándar
    return `<ul>${match.trim()}</ul>`;
  });
  
  // 6. Traducir Listas Ordenadas
  // Identifica los elementos numerados "1. " y los envuelve en li
  html = html.replace(/^\s*\d+\.\s+(.*?)$/gm, "<li class=\"ordered-item\">$1</li>");
  // Agrupa múltiples li ordenados adyacentes dentro de un bloque ol
  html = html.replace(/((?:<li class="ordered-item">.*?<\/li>\s*)+)/g, (match) => {
    const cleanLi = match.replace(/class="ordered-item"/g, "").trim();
    return `<ol>${cleanLi}</ol>`;
  });
  
  // 7. Normalizar Saltos de Línea a <br>
  html = html.replace(/\n/g, "<br>");
  
  // 8. Corregir saltos de línea sobrantes insertados por las regex dentro de listas
  html = html.replace(/<\/li><br><li>/g, "</li><li>");
  html = html.replace(/<ul><br>/g, "<ul>");
  html = html.replace(/<\/ul><br>/g, "</ul>");
  html = html.replace(/<ol><br>/g, "<ol>");
  html = html.replace(/<\/ol><br>/g, "</ol>");
  html = html.replace(/<li><br>/g, "<li>");
  html = html.replace(/<br><\/li>/g, "</li>");
  
  return html.trim();
}
