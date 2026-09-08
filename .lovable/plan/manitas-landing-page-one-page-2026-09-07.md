# MANITAS — Landing page one-page

Landing única, moderna y responsive para MANITAS ("Tu casa en las mejores manos"), con navegación por anclas y scroll suave.

## Decisiones tomadas (al no concretarse)

- El SVG subido ("Icono de mantenimiento", 768x768) se usa **sin modificar** como marca visual: en el header junto al wordmark "MANITAS", en el footer y como elemento gráfico del hero. Si más adelante subes el logo completo, lo sustituyo en un solo sitio.
- Personaje e imágenes: genero fotografías e ilustraciones propias (limpieza, fontanería, electricidad, cerrajería, cuidado de personas) con estética luminosa y natural, coherentes con el azul de marca. Son provisionales hasta que envíes material oficial.
- Capturas de la app: no las tengo, así que la sección de la app muestra mockups de móvil con una interfaz sencilla de Manitas creada como ilustración, no capturas reales.
- Contacto: no invento email ni teléfono. Muestro solo un bloque de contacto con horario de respuesta y el formulario; cuando me des los datos reales los añado.
- Formulario: validación en el cliente y mensaje de éxito, sin backend. Si quieres recibir los mensajes de verdad, lo conecto después.

## Estructura de la página

```text
Header sticky (logo + Inicio/Servicios/Cómo funciona/Opiniones/Contacto + Descargar app)
#inicio        Hero: slogan, propuesta de valor, CTA, "próximamente en Google Play / App Store", ilustración
               Barra de confianza (4 beneficios con iconos minimalistas)
#servicios     5 tarjetas: Limpieza, Fontanería, Electricidad, Cerrajería, Cuidado de personas
#como-funciona 4 pasos 01→04 (horizontal en desktop, vertical en móvil)
               Sección app: texto izquierda + mockups derecha
#opiniones     3 testimonios (Intuitiva / Rápida / Confiable) con iniciales como avatar
               CTA final sobre fondo azul oscuro/marca
#contacto      2 columnas: info + formulario (Nombre, Email, Mensaje)
Footer         Marca + Servicios / Manitas / Legal + © 2026 Manitas App S.L.
```

## Diseño

- Paleta exacta indicada: azul #1D4ED8, azul oscuro #172554, blanco, fondo #F8FAFC, texto #0F172A / #475569, bordes #E2E8F0. Azul reservado para CTAs, iconos y dos secciones de acento; el resto respira en blanco y gris claro.
- Tipografía Manrope (cargada por link en el head), escala 52–64px H1 / 38–46px H2 / 24–30px H3, cuerpo 16–18px.
- Contenido a máximo 1280px, padding vertical 80–120px desktop y 56–80px móvil.
- Tarjetas: fondo blanco, borde sutil, radio suave, sombra ligera y elevación al hover con transición 200–300ms.
- Animaciones discretas: fade-up al entrar en viewport, hover de elevación, transiciones suaves. Nada de parallax ni movimiento continuo.
- Móvil con experiencia propia: header compacto con menú desplegable, hero vertical centrado, una columna en servicios y formulario, pasos verticales, testimonios apilados. Sin overflow horizontal.
- Accesibilidad: contraste correcto, estados focus visibles, labels asociados, alt descriptivo, navegación por teclado en el menú móvil.

## Notas técnicas

- Página en `src/routes/index.tsx` (sustituye el placeholder), con secciones en componentes bajo `src/components/landing/`.
- Tokens de color, radios y tipografía en `src/styles.css` (`@theme inline`); sin colores fijos en los componentes.
- `scroll-behavior: smooth` y `scroll-margin-top` en cada sección para que el header sticky no tape los títulos.
- SVG subido incorporado como asset del proyecto vía puntero de assets, sin reescalar ni alterar el trazado.
- SEO: title "Manitas | Servicios para tu hogar", meta description indicada, og/twitter en la ruta, un único H1, H2 por sección, H3 en tarjetas.
- Imágenes generadas en formato optimizado, con carga diferida salvo el hero.
