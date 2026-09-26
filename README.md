# Calculadora de Potencia de Aparatos a Gas (GLP)

Herramienta web interactiva para obtener la potencia real (kW) de un aparato a gas propano o butano a partir de su consumo volumétrico, la presión del gas en el contador y el Poder Calorífico Superior (P.C.S.), aplicando el factor de conversión oficial m³ → kg de la **Resolución de 9 de junio de 2003**.

## Demo en vivo

**https://whoissif.github.io/calculadora-potencia-glp/**

El sitio se sirve directamente desde la rama `main` con GitHub Pages: sin compilación, sin dependencias y sin paso de despliegue.

## Características

- **Consumo volumétrico** en L/min o m³/h.
- **Presión del contador** en gr/cm² o mbar, con atajos a las presiones más habituales (37, 150, 400, 800 gr/cm²).
- **Zona geográfica** (A, B, C o personalizada) con la altitud y temperatura media de cada zona.
- **P.C.S. real de Repsol España** para propano y butano comercial, con un solo clic (ver fuentes abajo). También admite MJ/kg o kcal/kg y cualquier otro valor de factura.
- **Densidad D** de las opciones avanzadas, que se autocompleta según el gas elegido y admite valores propios.
- **Factor de conversión manual**, por si quieres partir del valor que aparece en tu factura en lugar del calculado.
- **Comparación automática** del factor de conversión calculado contra la tabla oficial de la Resolución de 2003 (solo válida para propano).
- **Desglose completo del cálculo**, paso a paso, con todas las fórmulas y valores intermedios.
- **Modo claro/oscuro** automático según las preferencias del sistema.
- **HTML, CSS y JavaScript sin dependencias**: sin frameworks, sin compilación, sin servidor.

## Metodología y fuentes

| Parámetro | Fuente |
|-----------|--------|
| Factor de conversión FC = D × (P1/Pn) × (Tn/T1) | Resolución de 9 de junio de 2003, de la Dirección General de Política Energética y Minas |
| Tabla de factores de conversión (propano) | Resolución de 9 de junio de 2003, valores estándar por zona y presión |
| P.C.S. propano comercial: 11.900 kcal/kg (13,840 kWh/kg) | Repsol Butano, S.A. — Ficha de Datos de Seguridad «Propano Comercial», Rev. 3.1 (13/10/2016) |
| P.C.S. butano comercial: mín. 11.800 kcal/kg (13,723 kWh/kg) | Repsol Butano, S.A. — Ficha de Datos de Seguridad «Butano Comercial», Rev. 2.1 (17/01/2013) |
| Densidad butano ≈ 2,593 kg/Nm³ | Calculada a partir de la masa molecular (58,12 g/mol ÷ 22,414 L/mol), ya que la tabla oficial solo cubre propano |

El P.C.S. real puede variar ligeramente según el lote y la composición exacta de la mezcla; el campo de P.C.S. admite cualquier valor si tu suministrador indica otro dato en factura.

## Estructura del proyecto

```
calculadora-potencia-glp/
└── index.html   # Interfaz, estilos y lógica de cálculo, todo en un único archivo
```

### Ejecutar en local

Basta con abrir `index.html` en el navegador.

## Publicación

El proyecto está publicado como sitio estático en GitHub Pages, sirviendo la raíz de la rama `main`:

| | |
|---|---|
| Sitio | https://whoissif.github.io/calculadora-potencia-glp/ |
| Repositorio | https://github.com/whoissif/calculadora-potencia-glp |
| Configuración | **Settings → Pages** · *Source*: `Deploy from a branch` · *Branch*: `main` · carpeta `/ (root)` |

Para publicar cambios basta con subirlos a `main`; GitHub Pages vuelve a construir el sitio en uno o dos minutos:

```bash
git add .
git commit -m "descripción del cambio"
git push
```

## Aviso

Esta herramienta es una **ayuda al cálculo** orientativa. Los resultados deben ser validados por un técnico competente antes de dimensionar la instalación definitiva. La normativa aplicable puede actualizarse; comprueba siempre la versión vigente y el dato de P.C.S. de tu propio suministrador.

## Licencia

MIT — uso libre, sin garantías.
