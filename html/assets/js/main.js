(() => {
    const SLIDE_INTERVAL_MS = 4200;
    const HERO_PALETTES = [
        { tone1: "#103f87", tone2: "#1c5fd1", tone3: "#0e1631" },
        { tone1: "#11477f", tone2: "#2b66c9", tone3: "#101b3b" },
        { tone1: "#15557b", tone2: "#2261b0", tone3: "#0f1936" },
        { tone1: "#2a4b7b", tone2: "#356ec0", tone3: "#101b3a" },
    ];

    const SERVICE_KEYS = ["banos", "duchas", "movilidad", "lavamanos"];
    const carouselIndexes = {};
    const REPUESTO_BRAND_FACTS = [
        "La línea WAVE de ARMAL destaca por cabina robusta y piso antideslizante para operación intensiva.",
        "ARMAL usa paneles de alta resistencia y módulos diseñados para recambio de partes en campo.",
        "ARMAL maneja configuraciones de sanitario, recirculación y handwash según el modelo de cabina.",
    ];

    const modalData = {
        banos: {
            title: "Baños Portátiles",
            description: "Línea WAVE para obra y eventos con cabina robusta, ventilación integrada y tanque de alta capacidad.",
            features: [
                "Tanque de 60 gal / 227 litros en la línea clásica WAVE",
                "Piso antideslizante para uso intensivo",
                "Paneles resistentes con fácil limpieza",
                "Herrajes y accesorios de recambio rápido",
            ],
        },
        duchas: {
            title: "Duchas Portátiles",
            description: "Cabinas de ducha para operaciones temporales con interior práctico y base anti-slip.",
            features: [
                "Bandeja antideslizante",
                "Paneles de fácil mantenimiento",
                "Conexión para agua y salida",
                "Diseño para alto flujo",
            ],
        },
        movilidad: {
            title: "Capacidad Reducida",
            description: "Cabina AXS accesible con puerta amplia, barras de apoyo y mayor espacio de maniobra.",
            features: [
                "Puerta de acceso amplia",
                "Pasamanos metálicos",
                "Indicador rojo/verde de ocupado",
                "Configuración apta para silla de ruedas",
            ],
        },
        lavamanos: {
            title: "Lavamanos Portátiles",
            description: "Modelos internos y externos con funcionamiento por pedal para higiene sin contacto.",
            features: [
                "WAVE H2O Internal Handwash",
                "Mariner External Handwash",
                "Bomba de pie de operación simple",
                "Repuestos de mangueras, empaques y grifos",
            ],
        },
        repuestos: {
            title: "Repuestos ARMAL",
            description: "Catálogo visual completo ARMAL con piezas organizadas por Puerta/Cierre, Tanque/Sanitario/Descarga, Accesorios y Estructura.",
            features: [
                "47 piezas catalogadas con nombre",
                "Subgrupo Puerta y Cierre",
                "Subgrupo Soportes, pines y tornillería",
                "Subgrupos Tanque/Sanitario/Descarga, Accesorios Interiores y Estructura de cabina",
            ],
        },
    };

    const modalImages = {
        banos: [
            "assets/img/armal-wave-restroom.jpg",
            "assets/img/armal-wave-tank-open.jpg",
            "assets/img/armal-wave-western-mains-open.jpg",
        ],
        duchas: [
            "assets/img/armal-wave-shower.jpg",
            "assets/img/armal-wave-shower-open.jpg",
            "assets/img/Ducha 4.webp",
        ],
        movilidad: [
            "assets/img/armal-axs-cover.jpg",
            "assets/img/armal-axs-portable.jpg",
            "assets/img/Armal Movilidad reducida abierto.webp",
        ],
        lavamanos: [
            "assets/img/armal-h2o-handwash.jpg",
            "assets/img/armal-mariner-handwash.jpg",
        ],
        repuestos: [
            "assets/img/catalogo-puerta-cierre/01-manija-roja-puerta.jpg",
            "assets/img/catalogo-puerta-cierre/02-placa-puerta-pasta.jpg",
            "assets/img/catalogo-puerta-cierre/03-tornillo-placa-puerta-ext.jpg",
            "assets/img/catalogo-puerta-cierre/04-tapa-base-puerta-derecha.jpg",
            "assets/img/catalogo-puerta-cierre/05-tapa-base-puerta-izquierda.jpg",
            "assets/img/catalogo-puerta-cierre/06-tapa-interna-puerta.jpg",
            "assets/img/catalogo-puerta-cierre/07-tornillo-tapa-puerta.jpg",
            "assets/img/catalogo-puerta-cierre/08-arco-puerta.jpg",
            "assets/img/catalogo-puerta-cierre/09-tapa-interna-marco-puerta.jpg",
            "assets/img/catalogo-puerta-cierre/10-cerrojo-puerta-cantonera.jpg",
            "assets/img/catalogo-puerta-cierre/11-indicador-rojo-verde.jpg",
            "assets/img/catalogo-puerta-cierre/12-kit-en-pasta-para-puerta.jpg",
            "assets/img/catalogo-puerta-cierre/13-soporte-puerta-u-metalico.jpg",
            "assets/img/catalogo-puerta-cierre/14-pin-puerta-superior.jpg",
            "assets/img/catalogo-puerta-cierre/15-pin-puerta-central.jpg",
            "assets/img/catalogo-puerta-cierre/16-pin-puerta-inferior.jpg",
            "assets/img/catalogo-puerta-cierre/46-puerta-completa-armal.jpeg",
            "assets/img/catalogo-puerta-cierre/47-marco-de-puerta-armal.jpeg",
            "assets/img/catalogo-sistema-descarga-recirculacion/17-lengueta.jpg",
            "assets/img/catalogo-sistema-descarga-recirculacion/18-kit-filtro.jpg",
            "assets/img/catalogo-sistema-descarga-recirculacion/19-flushing-aspersor.jpg",
            "assets/img/catalogo-sistema-descarga-recirculacion/20-set-tornillos-para-tanque.jpg",
            "assets/img/catalogo-tanque-sanitario/21-orinal.jpg",
            "assets/img/catalogo-tanque-sanitario/22-tubo-orinal-en-pasta.jpg",
            "assets/img/catalogo-tanque-sanitario/23-tapa-bizcocho.jpg",
            "assets/img/catalogo-tanque-sanitario/24-asiento-sanitario.jpg",
            "assets/img/catalogo-tanque-sanitario/25-tubo-metalico-wasas.jpg",
            "assets/img/catalogo-accesorios-interiores/26-perchero.jpg",
            "assets/img/catalogo-accesorios-interiores/27-papelera.jpg",
            "assets/img/catalogo-accesorios-interiores/28-tubo-porta-papel-en-pasta.jpg",
            "assets/img/catalogo-accesorios-interiores/29-caja-de-remaches.jpg",
            "assets/img/catalogo-estructura-cabina/48-paredes-cabina-armal.jpeg",
            "assets/img/catalogo-estructura-cabina/31-base-estructural-cabina-armal.png",
            "assets/img/catalogo-estructura-cabina/32-barra-plastica-reforzada-armal.png",
            "assets/img/catalogo-puerta-cierre/33-kit-bisagras-puerta-armal.png",
            "assets/img/catalogo-sistema-descarga-recirculacion/34-conector-rosca-espiga-armal.png",
            "assets/img/catalogo-sistema-descarga-recirculacion/35-union-espiga-roscada-armal.png",
            "assets/img/catalogo-sistema-descarga-recirculacion/36-tapa-circular-frontal-armal.png",
            "assets/img/catalogo-sistema-descarga-recirculacion/37-tapa-circular-posterior-armal.png",
            "assets/img/catalogo-puerta-cierre/38-llave-servicio-hexagonal-armal.png",
            "assets/img/catalogo-puerta-cierre/39-bloque-contrapeso-metalico-armal.png",
            "assets/img/catalogo-estructura-cabina/40-rejilla-circular-ventilacion-armal.png",
            "assets/img/catalogo-tanque-sanitario/41-embudo-orinal-conico-armal.png",
            "assets/img/catalogo-tanque-sanitario/42-tapa-del-tanque-armal.jpeg",
            "assets/img/catalogo-sistema-descarga-recirculacion/43-kit-bomba-sanitaria-armal.jpeg",
            "assets/img/catalogo-tanque-sanitario/44-tanque-sanitario-armal.jpeg",
            "assets/img/catalogo-estructura-cabina/45-techo-cabina-armal.jpeg",
            "assets/img/catalogo-tanque-sanitario/23-tapa-bizcocho.jpg",
            "assets/img/catalogo-puerta-cierre/04-tapa-base-puerta-derecha.jpg",
            "assets/img/armal-wave-restroom.jpg",
            "assets/img/catalogo-puerta-cierre/47-marco-de-puerta-armal.jpeg",
        ],
    };

    const REPUESTOS = [
        {
            id: "01-manija-roja-puerta",
            name: "MANIJA ROJA PUERTA",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/01-manija-roja-puerta.jpg",
            summary: "Pieza de accion para apertura y cierre de puerta.",
            spec: "Ítem 01 del catálogo.",
            details: ["Uso en módulo puerta", "Repuesto de reemplazo directo", "Color rojo de alta visibilidad"],
        },
        {
            id: "02-placa-puerta-pasta",
            name: "PLACA PUERTA (PASTA)",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/02-placa-puerta-pasta.jpg",
            summary: "Placa base para ensamble del sistema de puerta.",
            spec: "Ítem 02 del catálogo.",
            details: ["Material en pasta", "Soporte de fijación", "Compatible con kit de puerta"],
        },
        {
            id: "03-tornillo-placa-puerta-ext",
            name: "TORNILLO PLACA PUERTA EXT (INCLUYE TUERCA)",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/03-tornillo-placa-puerta-ext.jpg",
            summary: "Tornillo de fijación de placa externa.",
            spec: "Ítem 03 del catálogo.",
            details: ["Incluye tuerca", "Fijación segura", "Para módulo de puerta"],
        },
        {
            id: "04-tapa-base-puerta-derecha",
            name: "TAPA BASE PUERTA DERECHA",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/04-tapa-base-puerta-derecha.jpg",
            summary: "Cobertura lateral derecha de base de puerta.",
            spec: "Ítem 04 del catálogo.",
            details: ["Lado derecho", "Protección de ensamble", "Recambio por desgaste"],
        },
        {
            id: "05-tapa-base-puerta-izquierda",
            name: "TAPA BASE PUERTA IZQUIERDA",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/05-tapa-base-puerta-izquierda.jpg",
            summary: "Cobertura lateral izquierda de base de puerta.",
            spec: "Ítem 05 del catálogo.",
            details: ["Lado izquierdo", "Protección de ensamble", "Recambio por desgaste"],
        },
        {
            id: "06-tapa-interna-puerta",
            name: "TAPA INTERNA PUERTA",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/06-tapa-interna-puerta.jpg",
            summary: "Tapa interior de terminación del sistema de puerta.",
            spec: "Ítem 06 del catálogo.",
            details: ["Acabado interno", "Protege fijaciones", "Ajuste directo"],
        },
        {
            id: "07-tornillo-tapa-puerta",
            name: "TORNILLO TAPA PUERTA (JUEGO POR 2 UNIDADES)",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/07-tornillo-tapa-puerta.jpg",
            summary: "Juego de tornillos para tapa de puerta.",
            spec: "Ítem 07 del catálogo.",
            details: ["Juego por 2 unidades", "Ajuste de tapa", "Cambio rápido"],
        },
        {
            id: "08-arco-puerta",
            name: "ARCO PUERTA",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/08-arco-puerta.jpg",
            summary: "Arco de soporte del mecanismo de puerta.",
            spec: "Ítem 08 del catálogo.",
            details: ["Pieza curva de sujecion", "Soporte estructural", "Uso en ensamble"],
        },
        {
            id: "09-tapa-interna-marco-puerta",
            name: "TAPA INTERNA MARCO PUERTA (JUEGO POR 2 UNIDADES)",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/09-tapa-interna-marco-puerta.jpg",
            summary: "Cubierta interna del marco de puerta.",
            spec: "Ítem 09 del catálogo.",
            details: ["Juego por 2 unidades", "Terminado limpio", "Proteccion del marco"],
        },
        {
            id: "10-cerrojo-puerta-cantonera",
            name: "CERROJO PUERTA O CANTONERA (CONTIENE 2 PIEZAS)",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/10-cerrojo-puerta-cantonera.jpg",
            summary: "Sistema de cierre tipo cerrojo/cantonera.",
            spec: "Ítem 10 del catálogo.",
            details: ["Contiene 2 piezas", "Bloqueo de puerta", "Recambio de seguridad"],
        },
        {
            id: "11-indicador-rojo-verde",
            name: "INDICADOR ROJO-VERDE",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/11-indicador-rojo-verde.jpg",
            summary: "Indicador de estado ocupado/libre.",
            spec: "Ítem 11 del catálogo.",
            details: ["Visual rápido", "Mejora flujo de usuarios", "Compatible con puerta"],
        },
        {
            id: "12-kit-en-pasta-para-puerta",
            name: "KIT EN PASTA PARA PUERTA (INCLUYE 7 PIEZAS + KIT REMACHES)",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/12-kit-en-pasta-para-puerta.jpg",
            summary: "Kit completo de piezas para sistema de puerta.",
            spec: "Ítem 12 del catálogo.",
            details: ["Incluye 7 piezas", "Incluye kit remaches", "Reposición integral"],
        },
        {
            id: "13-soporte-puerta-u-metalico",
            name: "SOPORTE PUERTA U METALICO",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/13-soporte-puerta-u-metalico.jpg",
            summary: "Soporte en U metálico para ensamble de puerta.",
            spec: "Ítem 13 del catálogo.",
            details: ["Refuerzo estructural", "Pieza metalica", "Uso en anclaje"],
        },
        {
            id: "14-pin-puerta-superior",
            name: "PIN PUERTA SUPERIOR",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/14-pin-puerta-superior.jpg",
            summary: "Pin de giro superior para puerta.",
            spec: "Ítem 14 del catálogo.",
            details: ["Ubicación superior", "Permite giro de puerta", "Recambio puntual"],
        },
        {
            id: "15-pin-puerta-central",
            name: "PIN PUERTA CENTRAL",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/15-pin-puerta-central.jpg",
            summary: "Pin central de soporte para puerta.",
            spec: "Ítem 15 del catálogo.",
            details: ["Alineación del sistema", "Estabilidad de puerta", "Repuesto metálico"],
        },
        {
            id: "16-pin-puerta-inferior",
            name: "PIN PUERTA INFERIOR",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/16-pin-puerta-inferior.jpg",
            summary: "Pin de giro inferior para puerta.",
            spec: "Ítem 16 del catálogo.",
            details: ["Ubicación inferior", "Soporta movimiento", "Repuesto de alta precisión"],
        },
        {
            id: "17-lengueta",
            name: "LENGUETA",
            category: "sistema-descarga-recirculacion",
            categoryLabel: "SISTEMA DESCARGA / RECIRCULACIÓN",
            image: "assets/img/catalogo-sistema-descarga-recirculacion/17-lengueta.jpg",
            summary: "Componente de acción del sistema de descarga.",
            spec: "Ítem 01 de Tanque/Sanitario/Descarga.",
            details: ["Línea sistema de descarga", "Repuesto de recambio directo", "Uso en mantenimiento preventivo"],
        },
        {
            id: "18-kit-filtro",
            name: "KIT FILTRO (CONTIENE 3 PIEZAS)",
            category: "sistema-descarga-recirculacion",
            categoryLabel: "SISTEMA DESCARGA / RECIRCULACIÓN",
            image: "assets/img/catalogo-sistema-descarga-recirculacion/18-kit-filtro.jpg",
            summary: "Kit de filtrado para circuito de recirculación.",
            spec: "Ítem 02 de Tanque/Sanitario/Descarga.",
            details: ["Contiene 3 piezas", "Filtrado del sistema", "Ayuda a reducir obstrucciones"],
        },
        {
            id: "19-flushing-aspersor",
            name: "FLUSHING O ASPERSOR",
            category: "sistema-descarga-recirculacion",
            categoryLabel: "SISTEMA DESCARGA / RECIRCULACIÓN",
            image: "assets/img/catalogo-sistema-descarga-recirculacion/19-flushing-aspersor.jpg",
            summary: "Elemento de salida para acción de descarga.",
            spec: "Ítem 03 de Tanque/Sanitario/Descarga.",
            details: ["Compatible con sistema flush", "Pieza de alta rotación", "Recambio rápido"],
        },
        {
            id: "20-set-tornillos-para-tanque",
            name: "SET TORNILLOS PARA TANQUE (JUEGO POR 5 UNIDADES)",
            category: "sistema-descarga-recirculacion",
            categoryLabel: "SISTEMA DESCARGA / RECIRCULACIÓN",
            image: "assets/img/catalogo-sistema-descarga-recirculacion/20-set-tornillos-para-tanque.jpg",
            summary: "Juego de tornillos para fijación de tanque.",
            spec: "Ítem 04 de Tanque/Sanitario/Descarga.",
            details: ["Juego por 5 unidades", "Fijación estructural", "Repuesto metálico"],
        },
        {
            id: "21-orinal",
            name: "ORINAL",
            category: "tanque-sanitario",
            categoryLabel: "TANQUE / SANITARIO",
            image: "assets/img/catalogo-tanque-sanitario/21-orinal.jpg",
            summary: "Orinal para módulo sanitario.",
            spec: "Ítem 05 de Tanque/Sanitario/Descarga.",
            details: ["Reposición sanitaria", "Fácil limpieza", "Compatible con línea ARMAL"],
        },
        {
            id: "22-tubo-orinal-en-pasta",
            name: "TUBO ORINAL EN PASTA",
            category: "tanque-sanitario",
            categoryLabel: "TANQUE / SANITARIO",
            image: "assets/img/catalogo-tanque-sanitario/22-tubo-orinal-en-pasta.jpg",
            summary: "Tubo de conexión para orinal.",
            spec: "Ítem 06 de Tanque/Sanitario/Descarga.",
            details: ["Material en pasta", "Conexión de flujo", "Recambio por desgaste"],
        },
        {
            id: "23-tapa-bizcocho",
            name: "TAPA + BIZCOCHO (CONTIENE 2 PIEZAS)",
            category: "tanque-sanitario",
            categoryLabel: "TANQUE / SANITARIO",
            image: "assets/img/catalogo-tanque-sanitario/23-tapa-bizcocho.jpg",
            summary: "Conjunto de tapa y bizcocho para tanque sanitario.",
            spec: "Ítem 07 de Tanque/Sanitario/Descarga.",
            details: ["Contiene 2 piezas", "Ajuste directo", "Recambio completo"],
        },
        {
            id: "24-asiento-sanitario",
            name: "ASIENTO SANITARIO",
            category: "tanque-sanitario",
            categoryLabel: "TANQUE / SANITARIO",
            image: "assets/img/catalogo-tanque-sanitario/24-asiento-sanitario.jpg",
            summary: "Asiento para unidad sanitaria portátil.",
            spec: "Ítem 08 de Tanque/Sanitario/Descarga.",
            details: ["Pieza principal de uso", "Recambio higiénico", "Compatibilidad ARMAL"],
        },
        {
            id: "25-tubo-metalico-wasas",
            name: "TUBO METÁLICO + WASAS (2) PARA ASIENTO SANITARIO (CONTIENE 3 PIEZAS)",
            category: "tanque-sanitario",
            categoryLabel: "TANQUE / SANITARIO",
            image: "assets/img/catalogo-tanque-sanitario/25-tubo-metalico-wasas.jpg",
            summary: "Kit de sujeción metálica para asiento sanitario.",
            spec: "Ítem 09 de Tanque/Sanitario/Descarga.",
            details: ["Contiene 3 piezas", "Incluye 2 wasas", "Ensamble de asiento"],
        },
        {
            id: "26-perchero",
            name: "PERCHERO",
            category: "accesorios-interiores",
            categoryLabel: "ACCESORIOS INTERIORES",
            image: "assets/img/catalogo-accesorios-interiores/26-perchero.jpg",
            summary: "Perchero interior para ropa o elementos livianos.",
            spec: "Ítem 01 de Accesorios Interiores.",
            details: ["Uso interior", "Mejora comodidad", "Fijación sencilla"],
        },
        {
            id: "27-papelera",
            name: "PAPELERA",
            category: "accesorios-interiores",
            categoryLabel: "ACCESORIOS INTERIORES",
            image: "assets/img/catalogo-accesorios-interiores/27-papelera.jpg",
            summary: "Papelera interior de apoyo sanitario.",
            spec: "Ítem 02 de Accesorios Interiores.",
            details: ["Accesorio interno", "Mejora orden e higiene", "Repuesto de recambio"],
        },
        {
            id: "28-tubo-porta-papel-en-pasta",
            name: "TUBO PORTA PAPEL EN PASTA",
            category: "accesorios-interiores",
            categoryLabel: "ACCESORIOS INTERIORES",
            image: "assets/img/catalogo-accesorios-interiores/28-tubo-porta-papel-en-pasta.jpg",
            summary: "Tubo soporte para papel higiénico.",
            spec: "Ítem 03 de Accesorios Interiores.",
            details: ["Material en pasta", "Compatible con papelera/porta papel", "Recambio rápido"],
        },
        {
            id: "29-caja-de-remaches",
            name: "CAJA DE REMACHES (CAJA X 117 UND ALA ANCHA / TIPO TRÉBOL)",
            category: "accesorios-interiores",
            categoryLabel: "ACCESORIOS INTERIORES",
            image: "assets/img/catalogo-accesorios-interiores/29-caja-de-remaches.jpg",
            summary: "Caja de remaches para fijaciones internas y externas.",
            spec: "Ítem 04 de Accesorios Interiores.",
            details: ["Caja x 117 unidades", "Ala ancha tipo trébol", "Repuesto para mantenimiento"],
        },
        {
            id: "31-base-estructural-cabina-armal",
            name: "BASE ESTRUCTURAL DE CABINA ARMAL",
            category: "estructura-cabina",
            categoryLabel: "ESTRUCTURA DE CABINA",
            image: "assets/img/catalogo-estructura-cabina/31-base-estructural-cabina-armal.png",
            summary: "Estructura base para ensamblaje de cabina portátil.",
            spec: "Referencia organizada en Estructura de cabina.",
            details: ["Pieza estructural principal", "Refuerzo del conjunto de cabina", "Repuesto para mantenimiento mayor"],
        },
        {
            id: "32-barra-plastica-reforzada-armal",
            name: "BARRA PLÁSTICA REFORZADA",
            category: "estructura-cabina",
            categoryLabel: "ESTRUCTURA DE CABINA",
            image: "assets/img/catalogo-estructura-cabina/32-barra-plastica-reforzada-armal.png",
            summary: "Barra larga de polímero técnico para soporte interior y refuerzo de ensamble.",
            spec: "Referencia organizada en Estructura de cabina.",
            details: ["Elemento estructural de apoyo interno", "Perfil nervado para rigidez", "Recambio útil en mantenimientos correctivos"],
        },
        {
            id: "33-kit-bisagras-puerta-armal",
            name: "KIT DE BISAGRAS Y PINES DE PUERTA",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/33-kit-bisagras-puerta-armal.png",
            summary: "Conjunto de bisagras, pines y fijaciones para reposición de puerta en cabina portátil.",
            spec: "Referencia organizada en Puerta y repuestos.",
            details: ["Incluye componentes de giro superior/inferior", "Incluye fijaciones para instalación", "Aplicación en mantenimiento de módulo puerta"],
        },
        {
            id: "34-conector-rosca-espiga-armal",
            name: "CONECTOR ROSCA-ESPIGA",
            category: "sistema-descarga-recirculacion",
            categoryLabel: "SISTEMA DESCARGA / RECIRCULACIÓN",
            image: "assets/img/catalogo-sistema-descarga-recirculacion/34-conector-rosca-espiga-armal.png",
            summary: "Adaptadores para líneas de recirculación/descarga con conexión por rosca y espiga.",
            spec: "Referencia organizada en Sistema de descarga.",
            details: ["Compatibles con mangueras sanitarias", "Permiten acople rápido para servicio", "Usados en circuito de flujo del sistema"],
        },
        {
            id: "35-union-espiga-roscada-armal",
            name: "UNIÓN ESPIGA ROSCADA",
            category: "sistema-descarga-recirculacion",
            categoryLabel: "SISTEMA DESCARGA / RECIRCULACIÓN",
            image: "assets/img/catalogo-sistema-descarga-recirculacion/35-union-espiga-roscada-armal.png",
            summary: "Unión roscada para acople de mangueras o conexiones del sistema sanitario.",
            spec: "Referencia organizada en Sistema de descarga.",
            details: ["Cuerpo con rosca y espiga", "Apoya conexiones de recirculación", "Recambio útil en mantenimiento de flujo"],
        },
        {
            id: "36-tapa-circular-frontal-armal",
            name: "TAPA CIRCULAR DE SISTEMA - FRENTE",
            category: "sistema-descarga-recirculacion",
            categoryLabel: "SISTEMA DESCARGA / RECIRCULACIÓN",
            image: "assets/img/catalogo-sistema-descarga-recirculacion/36-tapa-circular-frontal-armal.png",
            summary: "Componente circular de cierre/protección mostrado en vista frontal.",
            spec: "Referencia organizada en Sistema de descarga.",
            details: ["Incluye perforaciones de fijación", "Protege el punto de montaje", "Útil para reemplazo por desgaste o fisura"],
        },
        {
            id: "37-tapa-circular-posterior-armal",
            name: "TAPA CIRCULAR DE SISTEMA - REVERSO",
            category: "sistema-descarga-recirculacion",
            categoryLabel: "SISTEMA DESCARGA / RECIRCULACIÓN",
            image: "assets/img/catalogo-sistema-descarga-recirculacion/37-tapa-circular-posterior-armal.png",
            summary: "Vista posterior de tapa circular con nervio de asiento para montaje.",
            spec: "Referencia organizada en Sistema de descarga.",
            details: ["Vista posterior del componente", "Nervio de asiento para apoyo", "Recambio complementario del sistema"],
        },
        {
            id: "38-llave-servicio-hexagonal-armal",
            name: "LLAVE DE SERVICIO HEXAGONAL",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/38-llave-servicio-hexagonal-armal.png",
            summary: "Llave de operación para ajuste/apertura de componentes con vástago hexagonal.",
            spec: "Referencia organizada en Puerta y repuestos.",
            details: ["Empuñadura ergonómica", "Vástago metálico hexagonal", "Uso en mantenimiento de módulos sanitarios"],
        },
        {
            id: "39-bloque-contrapeso-metalico-armal",
            name: "BLOQUE METÁLICO ROSCADO",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/39-bloque-contrapeso-metalico-armal.png",
            summary: "Bloque metálico con rosca interna para anclaje, fijación o estabilización de conjunto.",
            spec: "Referencia organizada en Puerta y repuestos.",
            details: ["Cuerpo macizo", "Rosca central", "Aplicación en fijaciones estructurales"],
        },
        {
            id: "40-rejilla-circular-ventilacion-armal",
            name: "REJILLA CIRCULAR DE VENTILACIÓN",
            category: "estructura-cabina",
            categoryLabel: "ESTRUCTURA DE CABINA",
            image: "assets/img/catalogo-estructura-cabina/40-rejilla-circular-ventilacion-armal.png",
            summary: "Rejilla circular con perforaciones de fijación para ventilación y protección.",
            spec: "Referencia organizada en Estructura de cabina.",
            details: ["Diseño ranurado para flujo de aire", "Fijación por tornillería", "Apoyo en control de ventilación interna"],
        },
        {
            id: "41-embudo-orinal-conico-armal",
            name: "ORINAL CÓNICO INTERNO",
            category: "tanque-sanitario",
            categoryLabel: "TANQUE / SANITARIO",
            image: "assets/img/catalogo-tanque-sanitario/41-embudo-orinal-conico-armal.png",
            summary: "Pieza cónica para captación y conducción en módulo sanitario interno.",
            spec: "Referencia organizada en Tanque/Sanitario.",
            details: ["Diseño de cuerpo cónico", "Ala superior de soporte", "Compatibilidad sujeta a modelo de cabina ARMAL"],
        },
        {
            id: "42-tapa-del-tanque-armal",
            name: "TAPA DEL TANQUE",
            category: "tanque-sanitario",
            categoryLabel: "TANQUE / SANITARIO",
            image: "assets/img/catalogo-tanque-sanitario/42-tapa-del-tanque-armal.jpeg",
            summary: "Tapa superior y cierre del tanque para mantenimiento preventivo o correctivo.",
            spec: "Referencia organizada en Tanque/Sanitario.",
            details: ["Cubre el punto superior del conjunto", "Apoya el sellado y la protección del sistema", "Recambio para desgaste, fisura o impacto"],
        },
        {
            id: "43-kit-bomba-sanitaria-armal",
            name: "KIT DE BOMBA SANITARIA",
            category: "sistema-descarga-recirculacion",
            categoryLabel: "SISTEMA DESCARGA / RECIRCULACIÓN",
            image: "assets/img/catalogo-sistema-descarga-recirculacion/43-kit-bomba-sanitaria-armal.jpeg",
            summary: "Conjunto de bomba y accesorios para mantenimiento del sistema sanitario.",
            spec: "Referencia organizada en Sistema de descarga.",
            details: ["Incluye cuerpo de bomba, manija y juntas", "Útil para intervención de mantenimiento", "Ideal para recambio técnico del sistema"],
        },
        {
            id: "44-tanque-sanitario-armal",
            name: "TANQUE SANITARIO",
            category: "tanque-sanitario",
            categoryLabel: "TANQUE / SANITARIO",
            image: "assets/img/catalogo-tanque-sanitario/44-tanque-sanitario-armal.jpeg",
            summary: "Depósito sanitario para reposición de módulo de residuos o contención.",
            spec: "Referencia organizada en Tanque/Sanitario.",
            details: ["Cuerpo principal del sistema", "Recambio para módulos de alto uso", "Integración con tapa y accesorios de cierre"],
        },
        {
            id: "45-techo-cabina-armal",
            name: "TECHO DE CABINA",
            category: "estructura-cabina",
            categoryLabel: "ESTRUCTURA DE CABINA",
            image: "assets/img/catalogo-estructura-cabina/45-techo-cabina-armal.jpeg",
            summary: "Panel superior de cabina para cubrir, proteger y terminar la estructura.",
            spec: "Referencia organizada en Estructura de cabina.",
            details: ["Pieza superior de cobertura", "Recambio para mantenimiento de estructura", "Instalación junto a paneles y marco"],
        },
        {
            id: "46-puerta-completa-armal",
            name: "PUERTA COMPLETA",
            category: "estructura-cabina",
            categoryLabel: "ESTRUCTURA DE CABINA",
            extraFilters: ["puerta-repuestos"],
            image: "assets/img/catalogo-puerta-cierre/46-puerta-completa-armal.jpeg",
            summary: "Puerta completa de cabina para reemplazo del módulo de acceso.",
            spec: "Referencia organizada en Estructura de cabina.",
            details: ["Puerta completa para cabina", "Incluye cuerpo principal del acceso", "Recambio para mantenimiento o reposición de puerta"],
        },
        {
            id: "47-marco-de-puerta-armal",
            name: "MARCO DE PUERTA",
            category: "estructura-cabina",
            categoryLabel: "ESTRUCTURA DE CABINA",
            extraFilters: ["puerta-repuestos"],
            image: "assets/img/catalogo-puerta-cierre/47-marco-de-puerta-armal.jpeg",
            summary: "Marco completo de puerta para recuperación del módulo de acceso.",
            spec: "Referencia organizada en Estructura de cabina.",
            details: ["Marco completo del acceso", "Apoya alineación del cierre", "Recambio para prolongar vida útil de cabina"],
        },
    ];

    const REPUESTOS_FILTER_GROUPS = {
        "puerta-repuestos": ["puerta-cierre", "soportes-pines-tornilleria"],
        "sistema-descarga-recirculacion": ["sistema-descarga-recirculacion", "tanque-sanitario"],
    };

    const REPUESTOS_FILTER_LABELS = {
        "puerta-repuestos": "Puerta y repuestos",
        "sistema-descarga-recirculacion": "Sistema",
        "accesorios-interiores": "Accesorios",
        "estructura-cabina": "Estructura",
    };

    const REPUESTOS_CATEGORY_ORDER = [
        "puerta-cierre",
        "soportes-pines-tornilleria",
        "sistema-descarga-recirculacion",
        "tanque-sanitario",
        "accesorios-interiores",
        "estructura-cabina",
    ];

    let slideIndex = -1;
    let currentModalService = null;
    let currentModalImageIndex = 0;
    let modalInterval = null;
    let currentRepuestoItem = null;
    let currentRepuestoImageIndex = 0;
    let repuestoActiveTrigger = null;
    let activeTrigger = null;
    let activeCatalogTrigger = null;
    let currentCatalogoVisualIndex = 0;
    let revealObserver = null;

    const CATALOGO_VISUAL_PAGES = [
        {
            src: "assets/img/catalogo-pages/catalogo-page-01.png",
            alt: "Catálogo anterior ARMAL de repuestos - Página 1",
            title: "Página 1",
        },
        {
            src: "assets/img/catalogo-pages/catalogo-page-02.png",
            alt: "Catálogo anterior ARMAL de repuestos - Página 2",
            title: "Página 2",
        },
        {
            src: "assets/img/catalogo-pages/catalogo-page-03.png",
            alt: "Catálogo anterior ARMAL de repuestos - Página 3",
            title: "Página 3",
        },
        {
            src: "assets/img/catalogo-pages/catalogo-page-04.png",
            alt: "Catálogo anterior ARMAL de repuestos - Página 4",
            title: "Página 4",
        },
        {
            src: "assets/img/catalogo-pages/catalogo-page-05.png",
            alt: "Catálogo anterior ARMAL de repuestos - Página 5",
            title: "Página 5",
        },
        {
            src: "assets/img/catalogo-pages/catalogo-page-06.png",
            alt: "Catálogo anterior ARMAL de repuestos - Página 6",
            title: "Página 6",
        },
    ];

    const hero = document.querySelector(".hero");
    const slides = Array.from(document.querySelectorAll(".slide"));
    const heroModelBadge = document.getElementById("heroModelBadge");
    const serviceModal = document.getElementById("serviceModal");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalFeatures = document.getElementById("modalFeatures");
    const modalImage = document.getElementById("modalImage");
    const closeModalBtn = document.getElementById("closeModalBtn");
    const prevModalBtn = document.getElementById("prevModalBtn");
    const nextModalBtn = document.getElementById("nextModalBtn");
    const repuestoModal = document.getElementById("repuestoModal");
    const closeRepuestoModalBtn = document.getElementById("closeRepuestoModalBtn");
    const repuestoModalImage = document.getElementById("repuestoModalImage");
    const prevRepuestoImageBtn = document.getElementById("prevRepuestoImageBtn");
    const nextRepuestoImageBtn = document.getElementById("nextRepuestoImageBtn");
    const repuestoAngleIndicator = document.getElementById("repuestoAngleIndicator");
    const repuestoModalTag = document.getElementById("repuestoModalTag");
    const repuestoModalTitle = document.getElementById("repuestoModalTitle");
    const repuestoModalSummary = document.getElementById("repuestoModalSummary");
    const repuestoModalSpec = document.getElementById("repuestoModalSpec");
    const repuestoModalDetails = document.getElementById("repuestoModalDetails");
    const repuestoModalBrandFacts = document.getElementById("repuestoModalBrandFacts");
    const repuestoModalWhatsappLink = document.getElementById("repuestoModalWhatsappLink");
    const logo = document.getElementById("logoArmal");
    const repuestosGrid = document.getElementById("repuestosGrid");
    const repuestosCount = document.getElementById("repuestosCount");
    const openCatalogoVisualBtn = document.getElementById("openCatalogoVisualBtn");
    const catalogoVisualLink = document.querySelector(".catalogo-pdf-link");
    const catalogoVisualCard = document.getElementById("catalogoVisualCard");
    const catalogoVisualModal = document.getElementById("catalogoVisualModal");
    const closeCatalogoVisualBtn = document.getElementById("closeCatalogoVisualBtn");
    const catalogoVisualImage = document.getElementById("catalogoVisualImage");
    const prevCatalogoVisualBtn = document.getElementById("prevCatalogoVisualBtn");
    const nextCatalogoVisualBtn = document.getElementById("nextCatalogoVisualBtn");
    const catalogoVisualThumbsContainer = document.getElementById("catalogoVisualThumbs");
    let catalogoVisualThumbs = [];

    function showSlides() {
        if (!slides.length || !hero) return;

        slides.forEach((slide) => {
            slide.style.display = "none";
        });

        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].style.display = "block";

        const activeLabel = slides[slideIndex]?.dataset?.modelLabel;
        if (heroModelBadge && activeLabel) {
            heroModelBadge.textContent = activeLabel;
        }

        const activePalette = HERO_PALETTES[slideIndex] || HERO_PALETTES[0];
        hero.style.setProperty("--hero-tone-1", activePalette.tone1);
        hero.style.setProperty("--hero-tone-2", activePalette.tone2);
        hero.style.setProperty("--hero-tone-3", activePalette.tone3);

        window.setTimeout(showSlides, SLIDE_INTERVAL_MS);
    }

    function rotateCarousel(service) {
        const images = Array.from(document.querySelectorAll(`.carousel-${service}`));
        if (!images.length) return;

        images.forEach((image) => {
            image.style.display = "none";
        });

        const nextIndex = ((carouselIndexes[service] ?? -1) + 1) % images.length;
        carouselIndexes[service] = nextIndex;
        images[nextIndex].style.display = "block";
        window.setTimeout(() => rotateCarousel(service), SLIDE_INTERVAL_MS);
    }

    function initServiceCarousels() {
        SERVICE_KEYS.forEach((service) => {
            carouselIndexes[service] = -1;
            rotateCarousel(service);
        });
    }

    function updateModalImage() {
        if (!currentModalService || !modalImage) return;

        const images = modalImages[currentModalService] || [];
        if (!images.length) return;

        const candidate = images[currentModalImageIndex];
        modalImage.onerror = () => {
            modalImage.onerror = null;
            modalImage.src = "assets/img/armal-wave-restroom.jpg";
        };
        modalImage.src = candidate;
    }

    function nextModalImage() {
        const images = modalImages[currentModalService] || [];
        if (!images.length) return;
        currentModalImageIndex = (currentModalImageIndex + 1) % images.length;
        updateModalImage();
    }

    function prevModalImage() {
        const images = modalImages[currentModalService] || [];
        if (!images.length) return;
        currentModalImageIndex = (currentModalImageIndex - 1 + images.length) % images.length;
        updateModalImage();
    }

    function openModal(service, trigger = null) {
        const data = modalData[service];
        if (!data || !serviceModal || !modalTitle || !modalDescription || !modalFeatures) return;

        activeTrigger = trigger;
        currentModalService = service;
        currentModalImageIndex = Math.max(0, carouselIndexes[service] ?? 0);

        modalTitle.textContent = data.title;
        modalDescription.textContent = data.description;

        const featureItems = data.features.map((feature) => {
            const item = document.createElement("li");
            item.textContent = feature;
            return item;
        });
        modalFeatures.replaceChildren(...featureItems);

        updateModalImage();

        if (modalInterval) {
            window.clearInterval(modalInterval);
        }

        if (service !== "repuestos") {
            modalInterval = window.setInterval(nextModalImage, SLIDE_INTERVAL_MS);
        }

        serviceModal.style.display = "block";
        document.body.style.overflow = "hidden";
        closeModalBtn?.focus();
    }

    function closeModal() {
        if (modalInterval) {
            window.clearInterval(modalInterval);
            modalInterval = null;
        }

        if (serviceModal) {
            serviceModal.style.display = "none";
        }
        document.body.style.overflow = "auto";

        if (activeTrigger && typeof activeTrigger.focus === "function") {
            activeTrigger.focus();
        }
    }

    function getRepuestoImages(item) {
        if (!item) return [];
        if (Array.isArray(item.gallery) && item.gallery.length) return item.gallery;
        if (typeof item.image === "string" && item.image.length) return [item.image];
        return [];
    }

    function updateRepuestoImageNavState() {
        const gallery = getRepuestoImages(currentRepuestoItem);
        const hasMultiple = gallery.length > 1;
        if (prevRepuestoImageBtn) prevRepuestoImageBtn.disabled = !hasMultiple;
        if (nextRepuestoImageBtn) nextRepuestoImageBtn.disabled = !hasMultiple;
        if (repuestoAngleIndicator) {
            repuestoAngleIndicator.textContent = gallery.length
                ? `Vista ${currentRepuestoImageIndex + 1} de ${gallery.length}`
                : "Vista 0 de 0";
        }
    }

    function updateRepuestoModalImage() {
        const gallery = getRepuestoImages(currentRepuestoItem);
        if (!gallery.length || !repuestoModalImage) return;
        const safeIndex = ((currentRepuestoImageIndex % gallery.length) + gallery.length) % gallery.length;
        currentRepuestoImageIndex = safeIndex;
        repuestoModalImage.src = gallery[safeIndex];
        repuestoModalImage.alt = currentRepuestoItem?.name || "Imagen ampliada de repuesto";
        updateRepuestoImageNavState();
    }

    function nextRepuestoImage() {
        const gallery = getRepuestoImages(currentRepuestoItem);
        if (gallery.length < 2) return;
        currentRepuestoImageIndex = (currentRepuestoImageIndex + 1) % gallery.length;
        updateRepuestoModalImage();
    }

    function prevRepuestoImage() {
        const gallery = getRepuestoImages(currentRepuestoItem);
        if (gallery.length < 2) return;
        currentRepuestoImageIndex = (currentRepuestoImageIndex - 1 + gallery.length) % gallery.length;
        updateRepuestoModalImage();
    }

    function openRepuestoModal(item, trigger = null) {
        if (!item || !repuestoModal || !repuestoModalTag || !repuestoModalTitle || !repuestoModalSummary || !repuestoModalSpec || !repuestoModalDetails || !repuestoModalBrandFacts || !repuestoModalWhatsappLink) return;

        currentRepuestoItem = item;
        currentRepuestoImageIndex = 0;
        repuestoActiveTrigger = trigger;

        repuestoModalTag.textContent = item.categoryLabel || "Repuesto ARMAL";
        repuestoModalTitle.textContent = item.name || "Repuesto";
        repuestoModalSummary.textContent = item.summary || "Repuesto original para mantenimiento.";
        repuestoModalSpec.textContent = item.displaySpec || item.spec || "Ficha técnica disponible por solicitud.";

        const itemDetails = Array.isArray(item.details) ? item.details : [];
        const detailNodes = itemDetails.map((detail) => {
            const li = document.createElement("li");
            li.textContent = detail;
            return li;
        });
        repuestoModalDetails.replaceChildren(...detailNodes);

        const brandNodes = REPUESTO_BRAND_FACTS.map((fact) => {
            const li = document.createElement("li");
            li.textContent = fact;
            return li;
        });
        repuestoModalBrandFacts.replaceChildren(...brandNodes);

        const whatsappMsg = encodeURIComponent(`Hola, quiero más información del repuesto "${item.name}" para baños portátiles Armal.`);
        repuestoModalWhatsappLink.href = `https://wa.me/573162463825?text=${whatsappMsg}`;

        updateRepuestoModalImage();

        repuestoModal.style.display = "block";
        document.body.style.overflow = "hidden";
        closeRepuestoModalBtn?.focus();
    }

    function closeRepuestoModal() {
        if (!repuestoModal) return;
        repuestoModal.style.display = "none";
        document.body.style.overflow = "auto";
        if (repuestoActiveTrigger && typeof repuestoActiveTrigger.focus === "function") {
            repuestoActiveTrigger.focus();
        }
    }

    function renderCatalogoVisualThumbs() {
        if (!catalogoVisualThumbsContainer) return;

        const thumbsMarkup = CATALOGO_VISUAL_PAGES.map((page, index) => `
            <button class="catalogo-thumb${index === 0 ? " is-active" : ""}" type="button" data-index="${index}">
                <img src="${page.src}" alt="Miniatura ${page.title}" loading="lazy">
                <span>${page.title}</span>
            </button>
        `).join("");

        catalogoVisualThumbsContainer.innerHTML = thumbsMarkup;
        catalogoVisualThumbs = Array.from(catalogoVisualThumbsContainer.querySelectorAll(".catalogo-thumb"));
    }

    function updateCatalogoVisual(index = 0) {
        if (!catalogoVisualImage || !CATALOGO_VISUAL_PAGES.length) return;
        const normalizedIndex = (index + CATALOGO_VISUAL_PAGES.length) % CATALOGO_VISUAL_PAGES.length;
        currentCatalogoVisualIndex = normalizedIndex;

        const page = CATALOGO_VISUAL_PAGES[normalizedIndex];
        catalogoVisualImage.src = page.src;
        catalogoVisualImage.alt = page.alt;

        catalogoVisualThumbs.forEach((thumb) => {
            const thumbIndex = Number(thumb.dataset.index);
            thumb.classList.toggle("is-active", thumbIndex === normalizedIndex);
        });
    }

    function openCatalogoVisualModal(trigger = null) {
        if (!catalogoVisualModal) return;
        activeCatalogTrigger = trigger;
        updateCatalogoVisual(currentCatalogoVisualIndex);
        catalogoVisualModal.style.display = "block";
        document.body.style.overflow = "hidden";
        closeCatalogoVisualBtn?.focus();
    }

    function closeCatalogoVisualModal() {
        if (!catalogoVisualModal) return;
        catalogoVisualModal.style.display = "none";
        document.body.style.overflow = "auto";
        if (activeCatalogTrigger && typeof activeCatalogTrigger.focus === "function") {
            activeCatalogTrigger.focus();
        }
    }

    function nextCatalogoVisualPage() {
        updateCatalogoVisual(currentCatalogoVisualIndex + 1);
    }

    function prevCatalogoVisualPage() {
        updateCatalogoVisual(currentCatalogoVisualIndex - 1);
    }

    function bindServiceTriggers() {
        const cards = Array.from(document.querySelectorAll(".service-card[data-service]"));
        cards.forEach((card) => {
            const service = card.dataset.service;
            if (!service) return;

            card.addEventListener("click", () => openModal(service, card));
            card.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openModal(service, card);
                }
            });
        });

        const footerLinks = Array.from(document.querySelectorAll(".js-open-service[data-service]"));
        footerLinks.forEach((link) => {
            const service = link.dataset.service;
            if (!service) return;

            link.addEventListener("click", (event) => {
                event.preventDefault();
                openModal(service, link);
            });
        });
    }

    function bindModalEvents() {
        closeModalBtn?.addEventListener("click", closeModal);
        prevModalBtn?.addEventListener("click", prevModalImage);
        nextModalBtn?.addEventListener("click", nextModalImage);

        serviceModal?.addEventListener("click", (event) => {
            if (event.target === serviceModal) {
                closeModal();
            }
        });

        modalImage?.addEventListener("click", nextModalImage);

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && serviceModal?.style.display === "block") {
                closeModal();
            }
        });
    }

    function bindRepuestoModalEvents() {
        closeRepuestoModalBtn?.addEventListener("click", closeRepuestoModal);
        prevRepuestoImageBtn?.addEventListener("click", prevRepuestoImage);
        nextRepuestoImageBtn?.addEventListener("click", nextRepuestoImage);

        repuestoModalImage?.addEventListener("click", nextRepuestoImage);

        repuestoModal?.addEventListener("click", (event) => {
            if (event.target === repuestoModal) {
                closeRepuestoModal();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && repuestoModal?.style.display === "block") {
                closeRepuestoModal();
            }
            if (event.key === "ArrowRight" && repuestoModal?.style.display === "block") {
                nextRepuestoImage();
            }
            if (event.key === "ArrowLeft" && repuestoModal?.style.display === "block") {
                prevRepuestoImage();
            }
        });
    }

    function bindCatalogoVisualEvents() {
        renderCatalogoVisualThumbs();

        catalogoVisualCard?.addEventListener("click", () => openCatalogoVisualModal(catalogoVisualCard));
        catalogoVisualCard?.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                openCatalogoVisualModal(catalogoVisualCard);
            }
        });

        openCatalogoVisualBtn?.addEventListener("click", (event) => {
            event.stopPropagation();
            openCatalogoVisualModal(openCatalogoVisualBtn);
        });
        catalogoVisualLink?.addEventListener("click", (event) => {
            event.stopPropagation();
        });
        closeCatalogoVisualBtn?.addEventListener("click", closeCatalogoVisualModal);
        prevCatalogoVisualBtn?.addEventListener("click", prevCatalogoVisualPage);
        nextCatalogoVisualBtn?.addEventListener("click", nextCatalogoVisualPage);

        catalogoVisualThumbs.forEach((thumb) => {
            thumb.addEventListener("click", () => {
                const index = Number(thumb.dataset.index);
                if (Number.isNaN(index)) return;
                updateCatalogoVisual(index);
            });
        });

        catalogoVisualModal?.addEventListener("click", (event) => {
            if (event.target === catalogoVisualModal) {
                closeCatalogoVisualModal();
            }
        });

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape" && catalogoVisualModal?.style.display === "block") {
                closeCatalogoVisualModal();
            }
            if (event.key === "ArrowRight" && catalogoVisualModal?.style.display === "block") {
                nextCatalogoVisualPage();
            }
            if (event.key === "ArrowLeft" && catalogoVisualModal?.style.display === "block") {
                prevCatalogoVisualPage();
            }
        });
    }

    function bindLogo3DEffect() {
        if (!logo) return;

        logo.addEventListener("mousemove", (event) => {
            const rect = logo.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = -(y - centerY) / 9;
            const rotateY = (x - centerX) / 9;
            logo.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
        });

        logo.addEventListener("mouseleave", () => {
            logo.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
        });
    }

    function initLazyImages() {
        const lazyImages = Array.from(document.querySelectorAll("img[loading='lazy']"));

        lazyImages.forEach((image) => {
            const markLoaded = () => image.classList.add("loaded");
            if (image.complete) {
                markLoaded();
                return;
            }
            image.addEventListener("load", markLoaded);
            image.addEventListener("error", markLoaded);
        });
    }

    function applyRevealAnimations(elements = []) {
        if (!elements.length) return;

        elements.forEach((element, index) => {
            element.classList.add("reveal-up");
            element.style.setProperty("--reveal-delay", `${Math.min(index * 70, 360)}ms`);

            if (revealObserver) {
                revealObserver.observe(element);
            } else {
                element.classList.add("is-visible");
            }
        });
    }

    function initRevealAnimations() {
        const revealTargets = Array.from(document.querySelectorAll(
            ".hero-copy, .hero-actions, .hero-signal, .hero-proof, .hero-kpi, .services-title, .services-subtitle, .service-card, .repuestos-title, .repuestos-subtitle, .catalogo-pdf-card, .repuestos-toolbar, .content-head, .why-spotlight, .why-list-item, .highlight-card, .trust-pill, .location, .footer-content"
        ));

        if (typeof IntersectionObserver !== "function") {
            applyRevealAnimations(revealTargets);
            return;
        }

        revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.14, rootMargin: "0px 0px -8% 0px" });

        applyRevealAnimations(revealTargets);
    }

    function bindCardTilt() {
        const cardBodies = Array.from(document.querySelectorAll(".service-card-inner"));
        if (!cardBodies.length) return;

        cardBodies.forEach((card) => {
            card.addEventListener("mousemove", (event) => {
                const rect = card.getBoundingClientRect();
                const offsetX = event.clientX - rect.left;
                const offsetY = event.clientY - rect.top;
                const rotateY = ((offsetX / rect.width) - 0.5) * 5.5;
                const rotateX = ((offsetY / rect.height) - 0.5) * -5.5;
                card.style.transform = `translateY(-7px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`;
            });

            card.addEventListener("mouseleave", () => {
                card.style.removeProperty("transform");
            });
        });
    }

    function sortRepuestosByCategory(items = []) {
        return [...items].sort((itemA, itemB) => {
            const orderA = REPUESTOS_CATEGORY_ORDER.indexOf(itemA.category);
            const orderB = REPUESTOS_CATEGORY_ORDER.indexOf(itemB.category);
            const normalizedOrderA = orderA === -1 ? REPUESTOS_CATEGORY_ORDER.length : orderA;
            const normalizedOrderB = orderB === -1 ? REPUESTOS_CATEGORY_ORDER.length : orderB;

            if (normalizedOrderA !== normalizedOrderB) {
                return normalizedOrderA - normalizedOrderB;
            }

            return REPUESTOS.indexOf(itemA) - REPUESTOS.indexOf(itemB);
        });
    }

    function getRepuestoDisplaySpec(index, filter) {
        const itemNumber = String(index + 1).padStart(2, "0");
        if (filter === "all") {
            return `Ítem ${itemNumber} del catálogo.`;
        }

        const filterLabel = REPUESTOS_FILTER_LABELS[filter] || "esta sección";
        return `Ítem ${itemNumber} de ${filterLabel}.`;
    }

    function itemMatchesRepuestoFilter(item, filter, groupedCategories) {
        if (Array.isArray(item.extraFilters) && item.extraFilters.includes(filter)) {
            return true;
        }

        return groupedCategories
            ? groupedCategories.includes(item.category)
            : item.category === filter;
    }

    function renderRepuestos(filter = "all") {
        if (!repuestosGrid || !repuestosCount) return;

        const groupedCategories = REPUESTOS_FILTER_GROUPS[filter];
        let visibleItems = REPUESTOS;
        if (filter !== "all") {
            visibleItems = REPUESTOS.filter((item) => itemMatchesRepuestoFilter(item, filter, groupedCategories));
        }

        visibleItems = sortRepuestosByCategory(visibleItems);
        repuestosGrid.innerHTML = "";

        visibleItems.forEach((item, index) => {
            const viewItem = { ...item, displaySpec: getRepuestoDisplaySpec(index, filter) };
            const previewImage = getRepuestoImages(viewItem)[0] || viewItem.image;
            const card = document.createElement("article");
            card.className = "repuesto-card";
            card.setAttribute("role", "button");
            card.setAttribute("tabindex", "0");
            card.setAttribute("aria-label", `Abrir ficha de ${viewItem.name}`);
            card.innerHTML = `
                <div class="repuesto-media">
                    <img src="${previewImage}" alt="${viewItem.name}" loading="lazy">
                </div>
                <div class="repuesto-body">
                    <span class="repuesto-tag">${viewItem.categoryLabel}</span>
                    <h3>${viewItem.name}</h3>
                    <p>${viewItem.summary}</p>
                    <p class="repuesto-spec">${viewItem.displaySpec}</p>
                    <button class="repuesto-toggle" type="button">Abrir ficha técnica</button>
                </div>
            `;

            const toggleBtn = card.querySelector(".repuesto-toggle");
            toggleBtn?.addEventListener("click", (event) => {
                event.stopPropagation();
                openRepuestoModal(viewItem, toggleBtn);
            });

            card.addEventListener("click", () => {
                openRepuestoModal(viewItem, card);
            });

            card.addEventListener("keydown", (event) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openRepuestoModal(viewItem, card);
                }
            });

            repuestosGrid.appendChild(card);
        });

        repuestosCount.textContent = `Mostrando ${visibleItems.length} repuestos`;
        initLazyImages();
        applyRevealAnimations(Array.from(repuestosGrid.querySelectorAll(".repuesto-card")));
    }

    function initRepuestosFilters() {
        const buttons = Array.from(document.querySelectorAll(".repuestos-filter-btn"));
        if (!buttons.length) return;

        buttons.forEach((button) => {
            button.addEventListener("click", () => {
                buttons.forEach((candidate) => candidate.classList.remove("is-active"));
                button.classList.add("is-active");
                renderRepuestos(button.dataset.filter || "all");
            });
        });

        renderRepuestos("all");
    }

    function initSidebarNav() {
        const sidebar = document.getElementById("sidebarNav");
        if (!sidebar) return;

        const sidebarLinks = Array.from(sidebar.querySelectorAll(".sidebar-link"));
        const sectionIds = sidebarLinks.map((link) => link.dataset.section);
        const sections = sectionIds.map((id) => document.getElementById(id)).filter(Boolean);

        let ticking = false;

        function updateSidebar() {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            if (scrollY > 180) {
                sidebar.classList.add("visible");
            } else {
                sidebar.classList.remove("visible");
            }

            let activeId = sectionIds[0];
            for (let i = sections.length - 1; i >= 0; i -= 1) {
                const rect = sections[i].getBoundingClientRect();
                if (rect.top <= windowHeight * 0.42) {
                    activeId = sectionIds[i];
                    break;
                }
            }

            sidebarLinks.forEach((link) => {
                link.classList.toggle("active", link.dataset.section === activeId);
            });

            ticking = false;
        }

        window.addEventListener("scroll", () => {
            if (!ticking) {
                window.requestAnimationFrame(updateSidebar);
                ticking = true;
            }
        }, { passive: true });

        sidebarLinks.forEach((link) => {
            link.addEventListener("click", (event) => {
                event.preventDefault();
                const targetId = link.getAttribute("href")?.replace("#", "");
                const target = targetId ? document.getElementById(targetId) : null;
                if (target) {
                    const headerHeight = document.querySelector(".header")?.offsetHeight || 0;
                    const targetTop = target.getBoundingClientRect().top + window.scrollY - headerHeight - 8;
                    window.scrollTo({ top: targetTop, behavior: "smooth" });
                }
            });
        });

        updateSidebar();
    }

    function init() {
        showSlides();
        initServiceCarousels();
        bindServiceTriggers();
        bindModalEvents();
        bindRepuestoModalEvents();
        bindCatalogoVisualEvents();
        bindLogo3DEffect();
        initRevealAnimations();
        bindCardTilt();
        initLazyImages();
        initRepuestosFilters();
        initSidebarNav();
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
