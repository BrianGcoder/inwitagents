# inwitagents

**Repositorio de investigación, prompts y evidencias del proyecto.**
Documento de presentación y defensa.

---

## 1. Descripción general

`inwitagents` es un repositorio colaborativo que reúne, en **orden cronológico de desarrollo**, todos los prompts utilizados para construir el proyecto, junto con los resultados obtenidos, las decisiones técnicas y las evidencias de cada etapa.

El objetivo es doble:

1. **Trazabilidad:** que cualquier persona pueda reconstruir el proyecto paso a paso siguiendo los prompts registrados.
2. **Defensa:** servir como documento de presentación que justifique el proceso, la metodología y los resultados.

---

## 2. Metodología de trabajo

El desarrollo se organiza en **tres fases obligatorias y secuenciales**. Cada fase solo puede iniciarse cuando la anterior está validada y documentada.

| Fase | Etapa | Estado |
| :--- | :--- | :--- |
| **Fase 1** | Creación de la interfaz | ⏳ En proceso |
| **Fase 2** | Creación de los modelos | ⏳ Pendiente |
| **Fase 3** | Animación de los modelos | ⏳ Pendiente |

**Regla de oro:** ningún prompt se registra sin indicar fase, fecha, autor y resultado obtenido.

---

## 3. Estructura del repositorio

```
inwitagents/
├── README.md            # Este documento (presentación y defensa)
├── SKILL.md             # Habilidades del agente (paso a paso de creación)
├── prompts              # Índice y registro cronológico de prompts
└── inwitagents/         # Archivos y evidencias de trabajo
```

---

## FASE 1 — Creación de la interfaz

**Objetivo:** definir la estructura visual, el layout, los componentes y la experiencia de usuario antes de generar cualquier modelo.

### 1.1 Alcance
- Definición de la estructura de pantalla (layout, secciones, jerarquía).
- Estilo visual: paleta, tipografía, espaciados.
- Componentes: botones, paneles, controles de navegación.
- Estados: carga, vacío, error, interactivo.

### 1.2 Prompts de esta fase

> Registrar aquí cada prompt con el formato: `[F1-001] fecha — autor — prompt — resultado`.

| ID | Prompt | Resultado | Autor | Fecha |
| :--- | :--- | :--- | :--- | :--- |
| F1-001 | _pendiente_ | | | |
| F1-002 | _pendiente_ | | | |

### 1.3 Evidencias
- Capturas de la interfaz: `inwitagents/fase1/`
- Documento de decisiones de diseño: `inwitagents/fase1/decisiones.md`

### 1.4 Criterio de cierre
✅ Interfaz aprobada por el equipo y con evidencias adjuntas.

---

## FASE 2 — Creación de los modelos

**Objetivo:** construir los modelos 3D (o representaciones del activo) que habitarán la interfaz definida en la Fase 1.

### 2.1 Alcance
- Definición de requisitos de los modelos (forma, escala, topología, materiales).
- Proceso de modelado: bloqueo de volumen, detalle, retopología.
- Materiales y texturizado.
- Optimización: conteo de polígonos, UVs, nomenclatura.

### 2.2 Prompts de esta fase

| ID | Prompt | Resultado | Autor | Fecha |
| :--- | :--- | :--- | :--- | :--- |
| F2-001 | _pendiente_ | | | |
| F2-002 | _pendiente_ | | | |

### 2.3 Evidencias
- Renders y capturas del proceso: `inwitagents/fase2/`
- Ficheros fuente de los modelos y especificaciones técnicas.

### 2.4 Criterio de cierre
✅ Modelos validados: geometría correcta, materiales aplicados y nombres normalizados.

---

## FASE 3 — Animación de los modelos

**Objetivo:** dotar de movimiento a los modelos de la Fase 2 e integrarlos en la interfaz de la Fase 1.

### 3.1 Alcance
- Configuración del esqueleto / rig.
- Animaciones: idle, ciclos, transiciones, acciones puntuales.
- Curvas de animación, tiempos y easing.
- Integración y reproducción dentro de la interfaz.
- Pruebas de rendimiento.

### 3.2 Prompts de esta fase

| ID | Prompt | Resultado | Autor | Fecha |
| :--- | :--- | :--- | :--- | :--- |
| F3-001 | _pendiente_ | | | |
| F3-002 | _pendiente_ | | | |

### 3.3 Evidencias
- Videos/GIF de las animaciones: `inwitagents/fase3/`
- Ficheros de animación y notas de integración.

### 3.4 Criterio de cierre
✅ Animaciones reproducidas correctamente dentro de la interfaz y documentadas.

---

## 4. Registro de colaboradores y contribuciones

Todo colaborador debe:
1. Añadir su prompt en la tabla de la fase correspondiente.
2. Incluir sus evidencias en la carpeta de la fase.
3. Registrarse en la tabla siguiente.

| Colaborador | Rol | Fases en las que participa | Contribución |
| :--- | :--- | :--- | :--- |
| BrianGcoder | Autor / mantenedor | F1, F2, F3 | Estructura y coordinación |
| _pendiente_ | | | |

---

## 5. Puntos clave para la defensa

- **Orden justificado:** primero la interfaz (dónde), luego los modelos (qué), después la animación (cómo se mueve). Cambiar el orden implicaría rediseñar trabajo ya validado.
- **Trazabilidad:** cada resultado es reproducible a partir de un prompt registrado.
- **Evidencias:** cada fase cuenta con pruebas visuales y documentales.
- **Metodología iterativa:** validación al cierre de cada fase antes de avanzar.

---

## 6. Cómo crear un SKILL.md (paso a paso)

Un **SKILL.md** es el documento que define qué sabe hacer un agente y cómo debe comportarse. Su creación sigue este procedimiento:

**Paso 1 — Definir el rol**
Describir en una frase quién es el agente y para qué existe. Ejemplo: *"IA de soporte al cliente que clasifica casos, automatiza respuestas y crea campañas."*

**Paso 2 — Redactar la cabecera (frontmatter)**
Debe incluir tres datos mínimos:

```yaml
---
name: customer-service-agent
description: Qué hace el agente y cuándo debe usarse.
version: 1.0.0
---
```

**Paso 3 — Enumerar las habilidades**
Listar cada habilidad como una sección numerada (`## Habilidad 1 — ...`). Una habilidad debe describir: qué hace, cuándo se aplica y qué produce.

**Paso 4 — Definir reglas y criterios**
Para cada habilidad establecer:
- Criterios de clasificación (categorías, tipos, prioridades).
- Regla de ordenamiento (jerarquía del cliente → orden alfabético).
- Tiempos de respuesta objetivo.
- Casos en los que **no** debe actuar y debe escalar.

**Paso 5 — Añadir plantillas y ejemplos**
Incluir respuestas base reutilizables (acuse, en proceso, resuelto, escalado) y ejemplos de mensajes promocionales por formato y segmento. Las plantillas usan variables entre llaves, por ejemplo `{nombre}`, `{ID}`, `{plazo}`.

**Paso 6 — Documentar el flujo de trabajo**
Representar el proceso completo de forma visual y lineal:

```
Entrada → Clasificar → Ordenar → ¿Automatizar? → Responder / Escalar → Registrar cierre
```

**Paso 7 — Establecer reglas generales del agente**
Concretar: tono, idioma, confidencialidad, prohibición de inventar datos, trazabilidad con ID, formato de salida y criterios de derivación.

**Paso 8 — Definir las salidas esperadas**
Indicar exactamente qué entrega el agente: tablas ordenadas, respuestas listas para enviar, mensajes promocionales, registros de caso.

**Paso 9 — Versionar y validar**
Guardar el archivo como `SKILL.md` en la raíz del repositorio, indicar la versión y validarlo con el equipo antes de usarlo.

**Paso 10 — Registrar y mantener**
Cada cambio de habilidad se anota en el historial de versiones y se refleja en este README.

> 📄 Implementación de referencia en este repositorio: [`SKILL.md`](./SKILL.md) — incluye servicio al cliente, ordenamiento jerárquico y alfabético, automatización de respuestas y campañas de marketing.

---

## 7. Estado actual

| Elemento | Estado |
| :--- | :--- |
| Repositorio creado | ✅ |
| Estructura de documentación | ✅ |
| Fase 1 — Interfaz | ⏳ |
| Fase 2 — Modelos | ⏳ |
| Fase 3 — Animación | ⏳ |

---

## 8. Enlaces

- **Repositorio:** https://github.com/BrianGcoder/inwitagents
- **Habilidades del agente:** [`SKILL.md`](./SKILL.md)
- **Índice de prompts:** [`prompts`](./prompts)

---

_Documento vivo: se actualiza a medida que avanza el proyecto._
