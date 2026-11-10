# Uso en n8n

Este directorio contiene la version del skill preparada para **n8n**.

## Archivos

| Archivo | Uso |
| :--- | :--- |
| `system-prompt.md` | Texto para el campo **System Message** del nodo AI Agent |
| `case-schema.json` | Esquema de salida estructurada para clasificar casos |

## Instalacion en 6 pasos

1. Abre tu workflow en n8n.
2. Agrega el nodo **AI Agent** (o **Basic LLM Chain**).
3. Conecta el modelo (OpenAI, Anthropic, Gemini, etc.).
4. Pega el contenido de `system-prompt.md` en el campo **System Message**.
5. Reemplaza las variables `{{ $json.* }}` por los nombres reales de los campos que llegan de tu nodo anterior (Webhook, Gmail, Telegram, Form, etc.).
6. Activa **Memory** si el agente debe recordar la conversacion.

## Variables usadas

```text
{{ $json.cliente }}
{{ $json.tipo_cliente }}
{{ $json.categoria }}
{{ $json.tipo_caso }}
{{ $json.prioridad }}
{{ $json.caso_id }}
```

Ajusta cada ruta al nombre real del campo en tu JSON de entrada.

## Salida estructurada (opcional pero recomendada)

En el nodo se puede activar **Structured Output Parser** y pegar `case-schema.json`.
Esto garantiza que el agente devuelva siempre:

```json
{
  "caso_id": "C-001",
  "categoria": "Facturacion",
  "tipo_caso": "Queja",
  "prioridad": "Alta",
  "nivel_cliente": 2,
  "orden_sugerido": 1,
  "respuesta_cliente": "texto listo para enviar"
}
```

Asi el siguiente nodo (Gmail, Sheets, CRM, Slack) puede consumir los campos sin parsear texto.

## Skills como herramientas (avanzado)

Para separar las 4 habilidades en herramientas independientes:

1. Crea 4 workflows hijos con **Execute Workflow Trigger**.
2. En cada uno implementa una tarea: clasificar, responder, escalar, campana.
3. En el AI Agent, agrega el nodo **Tool** -> *Call n8n Workflow Tool* por cada uno.
4. Describe cada herramienta en ingles claro: `"Classify and order a customer case"`.

## Limites importantes en n8n

- n8n **no lee archivos del repositorio** en ejecucion: el prompt debe estar pegado en el nodo o traido con un nodo HTTP Request / GitHub.
- El frontmatter YAML (`--- name: ... ---`) **debe eliminarse**: n8n lo enviaria literal al modelo y consume tokens.
- El System Message no admite tablas markdown complejas en algunos modelos: la version de este archivo ya usa texto simple y listas.
