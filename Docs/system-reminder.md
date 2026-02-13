# Rediseno UX/UI del Portafolio para atraer empresas

## Diagnostico rapido del diseno actual

- Tienes una identidad clara tipo "ops console" que te diferencia de portfolios genericos.
- El sistema visual es consistente (tokens, capas y ritmo tipografico).
- Hay repeticion estructural entre secciones (panel + header + cards), lo que baja memorabilidad.
- Predomina texto tecnico y falta evidencia visual inmediata (capturas, flujos, resultados).
- El CTA de contratacion no tiene suficiente peso visual en el primer pantallazo.

## Objetivo de rediseno (solo diseno)

Lograr que un reclutador entienda en menos de 10 segundos:

1. Quien eres
2. Que impacto generas
3. Donde ver evidencia
4. Como contactarte rapido

## Direccion de interfaz (interface-design)

### Domain

- Entrega de software
- Entrevistas tecnicas
- Evidencia de impacto
- Decisiones de arquitectura
- Confiabilidad en produccion
- Colaboracion de equipo

### Color world

- Azul pizarra (sistemas)
- Cian senal (estado)
- Verde menta (salud)
- Coral alerta (prioridad)
- Grafito profundo (infra)
- Aluminio suave (estructura)

### Signature

"Project Pulse" como panel vivo de evidencia: estado + decisiones + metricas + impacto real.

### Defaults a reemplazar

- Grid de cards genericas -> cards con thumbnail y outcome.
- Todo oscuro y homogeneo -> bandas de contraste narrativo.
- Contacto al final sin protagonismo -> bloque de contratacion con CTA primario.

## Wireframe textual por secciones

## 1) Hero / Top Fold

- Headline orientado a resultado (no solo rol).
- Subheadline breve con propuesta de valor.
- 2 CTAs visibles: "Ver casos" y "Contactar".
- Mini proof strip (3 metricas de impacto).
- Foto + disponibilidad + ubicacion horaria.

## 2) Proof Strip (evidencia rapida)

- 3 tarjetas compactas:
  - Proyecto
  - Stack
  - Resultado cuantificable
- Cada tarjeta con color de estado (up/stable/progress).

## 3) Proyectos destacados

- Tarjetas con preview visual (mockup/screenshot).
- Estructura fija por tarjeta:
  - Problema
  - Solucion
  - Impacto
- Etiquetas tecnicas secundarias (no protagonistas).

## 4) Case Studies

- Maximo 2 casos largos.
- Layout editorial:
  - Contexto
  - Restricciones
  - Decisiones clave
  - Tradeoffs
  - Resultado final
- Incluir timeline simplificada de release.

## 5) Stack y practicas

- Cambiar lista plana por bloques de capacidad:
  - Frontend delivery
  - Backend/API design
  - Data and persistence
  - DevOps and quality
- Cada bloque con una frase de criterio tecnico.

## 6) Contacto / Contratacion

- Seccion final protagonista.
- Mensaje directo de disponibilidad.
- Boton primario fuerte (agendar/correo).
- Botones secundarios (GitHub, LinkedIn, CV).

## Checklist visual de implementacion

- Mantener sistema de tokens actual; reducir gradientes repetidos.
- Introducir alternancia de fondos por seccion para ritmo visual.
- Subir contraste de jerarquia en el fold (titulo/subtitulo/CTA).
- Incluir thumbnails reales de proyectos en cards.
- Limitar texto por bloque (regla: escaneable en 5-8 segundos).
- Homologar estados hover/focus en todos los interactivos.
- Convertir contacto en CTA comercial, no solo bloque informativo.

## Resultado esperado

Un portfolio que conserve tu identidad tecnica, pero con mayor claridad comercial, evidencia visual inmediata y mejor conversion para procesos de seleccion.

## Iteracion solicitada (feedback visual)

### Problemas detectados

- Las cards de proyectos se perciben pesadas y poco agradables.
- El bloque de resumen principal aparece en todas las secciones y rompe el foco de navegacion.
- Las interacciones se sienten planas en hover/focus/seleccion.
- Se requiere soporte de modo oscuro con control explicito de tema.

### Ajustes aplicados

- Refinar cards con mejor jerarquia visual, separacion de capas y estados de foco mas claros.
- Mostrar el hero/resumen solo en `Overview` para evitar repeticion en `Projects`, `Case Studies`, `Capabilities` y `Contact`.
- Mejorar microinteracciones: hover mas suave, lift controlado, y foco visible en elementos interactivos.
- Implementar selector de tema (`Dark` / `Light`) persistido en `localStorage`.
- Migrar paleta a tokens dinamicos con variables CSS para que ambos temas mantengan consistencia.
- Reemplazar la seccion de casos de uso por un bloque de interes empresarial: `Hiring Fit Snapshot`.

### Nuevo enfoque de seccion (interes para empresas)

- Senales rapidas: ownership, ejecucion y comunicacion tecnica.
- Paneles de decision: lo que recibe el equipo, colaboracion, habitos de calidad y plan de primeros 30 dias.
- Objetivo: que reclutadores y lideres evalen fit de trabajo real, no solo storytelling de proyecto.

## Iteracion adicional solicitada

- Agregar un tercer modo de tema: `System` (respeta preferencia del sistema operativo).
- Mantener tambien los modos manuales `Dark` y `Light`.
- Persistir preferencia de tema en `localStorage`.
- Elevar calidad visual de cards de proyectos (estructura, hover, foco y botones de accion).
- Mejorar patron cromatico del modo claro para hacerlo menos lavado y mas profesional.

### Resultado de implementacion

- Tema con tres estados: `Dark -> Light -> System` con ciclo desde el boton superior.
- En modo `System`, el tema se actualiza automaticamente al cambiar `prefers-color-scheme`.
- Cards con mejor jerarquia visual: contenedor mas estable, header mejor definido, acciones consistentes.
- Modo claro recalibrado con contrastes suaves, texto mas legible y sombras discretas.

### Criterios de validacion

- Navegacion por secciones sin contenido repetido fuera de contexto.
- Mejor legibilidad y contraste en ambos temas.
- Estados de hover y focus claramente perceptibles en tarjetas y acciones.
- Persistencia de idioma y tema entre sesiones.
