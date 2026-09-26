# Calculadora de Potencia de Aparatos a Gas

Herramienta web interactiva para obtener la potencia real (kW) de un aparato a gas propano, butano o gas natural a partir de su consumo volumétrico, la presión de suministro y el Poder Calorífico Superior (P.C.S.) real de tu gas.

- **Propano y butano**: factor de conversión m³ → kg oficial de la **Resolución de 9 de junio de 2003**.
- **Gas natural**: factor de conversión kWh/m³ oficial de **Enagás**, por municipio.

## Demo en vivo

**https://whoissif.github.io/calculadora-potencia-glp/**

El sitio se sirve directamente desde la rama `main` con GitHub Pages: sin compilación, sin dependencias y sin paso de despliegue.

## Características

- **Tres tipos de gas**: propano, butano y gas natural, con un selector que adapta todo el formulario y el cálculo a cada uno.
- **Consumo volumétrico** en L/min o m³/h.
- **Propano/butano**: presión del contador en gr/cm² o mbar (atajos a 37, 150, 400, 800 gr/cm²), zona geográfica (A, B, C o personalizada) y densidad D, que se autocompletan según el gas elegido.
- **Gas natural**: municipio (Madrid, Barcelona, Valencia, Sevilla o manual) y presión de suministro (20, 22, 50, 55, 100, 150 mbar), que autocompletan el P.C.S. mensual y el factor de corrección reales publicados por Enagás.
- **P.C.S. real de Repsol España** para propano y butano comercial, con un solo clic (ver fuentes abajo). También admite MJ/kg, kcal/kg o cualquier otro valor de factura.
- **P.C.S. y factor de corrección reales de Enagás** para gas natural, por municipio (ver fuentes abajo).
- **Factor de conversión manual**, por si quieres partir del valor que aparece en tu factura en lugar del calculado, en cualquiera de los tres gases.
- **Comparación automática** del factor de conversión calculado contra la tabla oficial de la Resolución de 2003 (solo válida para propano).
- **Desglose completo del cálculo**, paso a paso, con todas las fórmulas y valores intermedios, adaptado a cada tipo de gas.
- **Modo claro/oscuro** automático según las preferencias del sistema.
- **HTML, CSS y JavaScript sin dependencias**: sin frameworks, sin compilación, sin servidor.

## Metodología y fuentes

### Propano y butano

| Parámetro | Fuente |
|-----------|--------|
| Factor de conversión FC = D × (P1/Pn) × (Tn/T1) | Resolución de 9 de junio de 2003, de la Dirección General de Política Energética y Minas |
| Tabla de factores de conversión (propano) | Resolución de 9 de junio de 2003, valores estándar por zona y presión |
| P.C.S. propano comercial: 11.900 kcal/kg (13,840 kWh/kg) | Repsol Butano, S.A. — Ficha de Datos de Seguridad «Propano Comercial», Rev. 3.1 (13/10/2016) |
| P.C.S. butano comercial: mín. 11.800 kcal/kg (13,723 kWh/kg) | Repsol Butano, S.A. — Ficha de Datos de Seguridad «Butano Comercial», Rev. 2.1 (17/01/2013) |
| Densidad butano ≈ 2,593 kg/Nm³ | Calculada a partir de la masa molecular (58,12 g/mol ÷ 22,414 L/mol), ya que la tabla oficial solo cubre propano |

El P.C.S. real puede variar ligeramente según el lote y la composición exacta de la mezcla; el campo de P.C.S. admite cualquier valor si tu suministrador indica otro dato en factura.

### Gas natural

| Parámetro | Fuente |
|-----------|--------|
| Potencia (kW) = Caudal (m³/h) × Factor de corrección × P.C.S. mensual (kWh/m³(n)) | Enagás, [Calidad de gas por municipio](https://www.enagas.es/es/gestion-tecnica-sistema/energy-data/informacion-comercial/factor-conversion-facturacion/calidad-gas-municipio/), según Resolución de 15 de febrero de 2019 |
| P.C.S. mensual y factor de corrección para Madrid, Barcelona, Valencia y Sevilla | Enagás, P.C.S. mensual acumulado a 25/09/2026, presiones estándar 20/22/50/55/100/150 mbar |

El P.C.S. y el factor de corrección del gas natural cambian a diario y varían según la zona exacta de distribución dentro de cada municipio (por eso Madrid capital tiene varias zonas, como «Madrid 2 - Gas Natural Distribución»): los valores incluidos son una referencia reciente, no el dato del día. Para el valor exacto de tu suministro, consúltalo en el enlace de Enagás o en tu factura, e introdúcelo en los campos de «Municipio: Otro / manual».

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
