(() => {
    const SLIDE_INTERVAL_MS = 4200;
    const HERO_PALETTES = [
        { tone1: "#160f0d", tone2: "#6f2814", tone3: "#100d0c" },
        { tone1: "#1b110e", tone2: "#8a3014", tone3: "#130e0c" },
        { tone1: "#21130f", tone2: "#a43a15", tone3: "#160f0d" },
        { tone1: "#170f0d", tone2: "#5e2516", tone3: "#0f0c0b" },
    ];
    const CATALOG_GALLERY_PAGES = Array.from({ length: 6 }, (_, index) => ({
        src: `assets/img/catalogo-visual/catalogo-armal-${String(index + 1).padStart(2, "0")}.webp`,
        alt: `Catálogo ARMAL, página ${index + 1}`,
    }));
    const CATALOG_HOTSPOTS = [
        [],
        [
            { number: "1", targetId: "31-base-estructural-cabina-armal", label: "BASE", x: 79.0, y: 91.6 },
            { number: "2", targetId: "47-marco-de-puerta-armal", label: "MARCO PUERTA", x: 67.3, y: 80.9 },
            { number: "2b", targetId: "46-puerta-completa-armal", label: "PUERTA", x: 63.3, y: 92.2 },
            { number: "3", targetId: "52-panel-lateral-armal", label: "PANEL LATERAL", x: 98.3, y: 20.7 },
            { number: "3", targetId: "52-panel-lateral-armal", label: "PANEL LATERAL", x: 95.5, y: 91.4 },
            { number: "4", targetId: "45-techo-cabina-armal", label: "TECHO", x: 69.9, y: 4.4 },
            { number: "5a", targetId: "23-tapa-bizcocho", label: "TAPA + BIZCOCHO", x: 57.8, y: 14.6 },
            { number: "5b", targetId: "23-tapa-bizcocho", label: "TAPA + BIZCOCHO", x: 61.9, y: 15.3 },
            { number: "6", targetId: "53-lavamanos-interno-armal", label: "LAVAMANOS INTERNO", x: 84.0, y: 91.6 },
            { number: "7", targetId: "29-caja-de-remaches", label: "REMACHES CAJA X 117 UNDS TIPO ALA", x: 58.1, y: 7.1 },
            { number: "7", targetId: "29-caja-de-remaches", label: "REMACHES CAJA X 117 UNDS TIPO ALA", x: 89.7, y: 6.3 },
            { number: "7", targetId: "29-caja-de-remaches", label: "REMACHES CAJA X 117 UNDS TIPO ALA", x: 89.3, y: 91.7 },
            { number: "8", targetId: "27-papelera", label: "SOPORTE PAPEL HIGIENICO (PAPELERA)", x: 94.4, y: 9.8 },
            { number: "9", targetId: "28-tubo-porta-papel-en-pasta", label: "BARRA PARA EL SOPORTE DEL PAPEL HIGIENICO", x: 96.3, y: 14.9 },
            { number: "10", targetId: "04-tapa-base-puerta-derecha", label: "TAPA BASE NEGRO DERECHO", x: 74.6, y: 91.5 },
            { number: "11", targetId: "05-tapa-base-puerta-izquierda", label: "TAPA BASE NEGRO IZQUIERDO", x: 68.3, y: 91.9 },
            { number: "12", targetId: "21-orinal", label: "ORINAL", x: 57.0, y: 24.0 },
            { number: "13", targetId: "22-tubo-orinal-en-pasta", label: "TUBO PARA ORINAL", x: 56.7, y: 31.6 },
        ],
        [
            { number: "1", targetId: "47-marco-de-puerta-armal", label: "MARCO PUERTA", x: 98.4, y: 13.8 },
            { number: "2", targetId: "46-puerta-completa-armal", label: "PUERTA", x: 67.3, y: 57.5 },
            { number: "3", targetId: "08-arco-puerta", label: "ARCO PUERTA", x: 77.7, y: 13.9 },
            { number: "4", targetId: "14-pin-puerta-superior", label: "PASADOR PUERTA SUPERIOR METALICO", x: 90.8, y: 4.0 },
            { number: "5", targetId: "16-pin-puerta-inferior", label: "PASADOR PUERTA INFERIOR METALICO", x: 84.4, y: 63.5 },
            { number: "6", targetId: "54-abrazadera-c-resorte", label: "ABRAZADERA EN C PARA RESORTE", x: 60.4, y: 4.3 },
            { number: "6", targetId: "54-abrazadera-c-resorte", label: "ABRAZADERA EN C PARA RESORTE", x: 62.5, y: 31.9 },
            { number: "6", targetId: "54-abrazadera-c-resorte", label: "ABRAZADERA EN C PARA RESORTE", x: 83.6, y: 2.6 },
            { number: "7", targetId: "55-pasador-puerta-central", label: "PASADOR PUERTA CENTRAL", x: 69.2, y: 4.1 },
            { number: "8", targetId: "51-resorte-armal", label: "RESORTE", x: 58.4, y: 27.7 },
            { number: "9", targetId: "56-montura-u-resorte", label: "MONTURA EN U PARA RESORTE (REQUIERE 2)", x: 59.5, y: 13.5 },
            { number: "9", targetId: "56-montura-u-resorte", label: "MONTURA EN U PARA RESORTE (REQUIERE 2)", x: 69.0, y: 30.5 },
            { number: "10", targetId: "57-perno-cubierta-resorte", label: "PERNO DE LA CUBIERTA DEL RESORTE (REQUIERE 4)", x: 65.2, y: 28.6 },
            { number: "11", targetId: "58-tuerca-cubierta-resorte", label: "TUERCA DE LA CUBIERTA DEL RESORTE (REQUIERE 4)", x: 71.7, y: 12.3 },
            { number: "12", targetId: "07-tornillo-tapa-puerta", label: "TORNILLO DEL CUADRANTE DE LA PUERTA (REQUIERE 2)", x: 67.3, y: 66.5 },
            { number: "13", targetId: "03-tornillo-placa-puerta-ext", label: "TUERCA PARA MANIJA DE LA PUERTA", x: 81.0, y: 78.1 },
            { number: "14", targetId: "01-manija-roja-puerta", label: "MANIJA PUERTA ROJA", x: 78.0, y: 86.2 },
            { number: "15", targetId: "02-placa-puerta-pasta", label: "PLACA CUADRANTE INTERNO PUERTA", x: 72.3, y: 96.2 },
            { number: "16", targetId: "11-indicador-rojo-verde", label: "INDICADOR ROJO-VERDE", x: 58.8, y: 82.3 },
            { number: "17", targetId: "59-perno-manija-roja", label: "PERNO PARA LA MANIJA ROJA", x: 58.1, y: 95.5 },
            { number: "18", targetId: "60-placa-frontal-negra", label: "PLACA FRONTAL NEGRA EN PASTA", x: 63.3, y: 97.1 },
            { number: "19", targetId: "61-tapa-orificio-marco", label: "TAPA DEL ORIFICIO DEL MARCO INTERNO (REQUIERE 2)", x: 91.3, y: 22.2 },
            { number: "20", targetId: "10-cerrojo-puerta-cantonera", label: "KIT DE CIERRE DE LA PUERTA (CHAPA) 2 PIEZAS", x: 88.1, y: 77.9 },
            { number: "22", targetId: "50-porta-candado-armal", label: "PORTA CANDADO METALICO (REQUIERE 2)", x: 89.3, y: 37.2 },
            { number: "22", targetId: "50-porta-candado-armal", label: "PORTA CANDADO METALICO (REQUIERE 2)", x: 68.4, y: 96.1 },
            { number: "25", targetId: "13-soporte-puerta-u-metalico", label: "SOPORTE PARA PUERTA NUEVO / KIT PAR DE PASADORES EN PASTA PARA LA PUERTA", x: 78.8, y: 4.1 },
        ],
        [
            { number: "1", targetId: "20-set-tornillos-para-tanque", label: "TORNILLO PARA TANQUE REQUIERE 5 UNIDADES", x: 64.1, y: 96.4 },
            { number: "2", targetId: "29-caja-de-remaches", label: "REMACHES CAJA X 117 UNDS TIPO ALA", x: 55.7, y: 66.2 },
            { number: "2", targetId: "29-caja-de-remaches", label: "REMACHES CAJA X 117 UNDS TIPO ALA", x: 93.8, y: 62.4 },
            { number: "3", targetId: "70-tubo-orinal", label: "TUBO ORINAL", x: 54.5, y: 58.6 },
            { number: "4", targetId: "21-orinal", label: "ORINAL", x: 53.7, y: 34.8 },
            { number: "5", targetId: "49-tubo-de-ventilacion-armal", label: "TUBO DE VENTILACION", x: 62.3, y: 20.4 },
            { number: "6a", targetId: "69-bizcocho-tapa-inodoro", label: "BIZCOCHO Y TAPA INODORO", x: 83.9, y: 43.4 },
            { number: "6b", targetId: "69-bizcocho-tapa-inodoro", label: "BIZCOCHO Y TAPA INODORO", x: 81.9, y: 37.7 },
            { number: "7", targetId: "64-barra-asiento-inodoro", label: "BARRA PARA ASIENTO DE INODORO", x: 92.6, y: 44.0 },
            { number: "8", targetId: "65-abrazadera-asiento-inodoro", label: "ABRAZADERA EN C PARA BARRA ASIENTO DE INODORO", x: 92.6, y: 53.7 },
            { number: "9", targetId: "48-tapa-del-tanque-armal", label: "TAPA TANQUE", x: 93.7, y: 71.6 },
            { number: "10", targetId: "44-tanque-sanitario-armal", label: "TANQUE", x: 90.9, y: 87.4 },
        ],
        [
            { number: "1", targetId: "42-tapa-del-tanque-armal", label: "BOMBA DE PIE", x: 66.9, y: 94.4 },
            { number: "2", targetId: "18-kit-filtro", label: "KIT DE FILTROS POR 3 PIEZAS", x: 96.4, y: 92.0 },
            { number: "3", targetId: "19-flushing-aspersor", label: "BOQUILLA O ASPERSOR", x: 92.4, y: 43.7 },
            { number: "4", targetId: "24-asiento-sanitario", label: "ASIENTO PARA INODORO", x: 55.3, y: 9.0 },
            { number: "5", targetId: "17-lengueta", label: "LENGÜETA", x: 53.3, y: 31.4 },
            { number: "6", targetId: "39-bloque-contrapeso-metalico-armal", label: "CONTRAPESO", x: 48.4, y: 33.2 },
        ],
        [
            { number: "1", targetId: "66-lavamanos-armal", label: "LAVAMANOS", x: 94.6, y: 12.0 },
            { number: "2", targetId: "67-tapa-tanque-limpieza", label: "TAPA DEL TANQUE DE LIMPIEZA", x: 65.6, y: 16.7 },
            { number: "3", targetId: "42-tapa-del-tanque-armal", label: "BOMBA DE PIE", x: 65.8, y: 95.2 },
            { number: "4", targetId: "41-embudo-orinal-conico-armal", label: "LLAVE LAVAMANOS", x: 81.1, y: 4.3 },
            { number: "5", targetId: "68-remaches-caja-117-lavamanos", label: "REMACHES POR CAJA 117 UND", x: 70.2, y: 4.8 },
            { number: "6", targetId: "40-rejilla-circular-ventilacion-armal", label: "REJILLA LAVAMANOS", x: 88.0, y: 4.0 },
            { number: "7", targetId: "38-llave-servicio-hexagonal-armal", label: "LLAVE DE LA TAPA", x: 60.5, y: 11.9 },
        ],
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
            "assets/img/catalogo-accesorios-interiores/29-remaches-nuevos.webp",
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
            "assets/img/catalogo-tanque-sanitario/44-tanque-sanitario-nuevo.webp",
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
            image: "assets/img/catalogo-accesorios-interiores/29-remaches-nuevos.webp",
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
            name: "LLAVE DE LA TAPA",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/38-llave-servicio-hexagonal-armal.png",
            summary: "Llave ARMAL para apertura y ajuste de la tapa.",
            spec: "Referencia organizada en Puerta y repuestos.",
            details: ["Empuñadura ergonómica", "Vástago metálico hexagonal", "Uso en mantenimiento de módulos sanitarios"],
        },
        {
            id: "39-bloque-contrapeso-metalico-armal",
            name: "CONTRAPESO",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/39-bloque-contrapeso-metalico-clean.png",
            summary: "Contrapeso metálico para el mecanismo de la lengüeta.",
            spec: "Referencia organizada en Puerta y repuestos.",
            details: ["Cuerpo macizo", "Rosca central", "Aplicación en fijaciones estructurales"],
        },
        {
            id: "40-rejilla-circular-ventilacion-armal",
            name: "REJILLA CIRCULAR DE VENTILACIÓN",
            category: "estructura-cabina",
            categoryLabel: "ESTRUCTURA DE CABINA",
            image: "assets/img/catalogo-estructura-cabina/40-rejilla-circular-ventilacion-armal.png",
            summary: "Rejilla circular para ventilación y protección de la cabina.",
            spec: "Referencia organizada en Estructura de cabina.",
            details: ["Diseño circular ranurado", "Fijación por tornillería", "Apoya la ventilación de cabina"],
        },
        {
            id: "41-embudo-orinal-conico-armal",
            name: "ORINAL CÓNICO INTERNO",
            category: "tanque-sanitario",
            categoryLabel: "TANQUE / SANITARIO",
            image: "assets/img/catalogo-tanque-sanitario/41-embudo-orinal-conico-armal.png",
            summary: "Pieza cónica para captación y conducción en el módulo sanitario.",
            spec: "Referencia organizada en Tanque/Sanitario.",
            details: ["Cuerpo plástico de alta resistencia", "Montaje interior", "Compatibilidad sujeta al modelo ARMAL"],
        },
        {
            id: "42-tapa-del-tanque-armal",
            name: "BOMBA DE PIE",
            category: "sistema-descarga-recirculacion",
            categoryLabel: "SISTEMA DESCARGA / RECIRCULACIÓN",
            image: "assets/img/catalogo-tanque-sanitario/42-tapa-del-tanque-armal.jpeg",
            summary: "Bomba accionada con el pie para impulsar el sistema sanitario ARMAL.",
            spec: "Referencia organizada en Sistema de descarga.",
            details: ["Accionamiento con el pie", "Dos conexiones para circulación", "Imagen exacta del componente"],
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
            image: "assets/img/catalogo-tanque-sanitario/44-tanque-sanitario-clean.png",
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
        {
            id: "48-tapa-del-tanque-armal",
            name: "TAPA DEL TANQUE",
            category: "tanque-sanitario",
            categoryLabel: "TANQUE / SANITARIO",
            image: "assets/img/official-armal/wave-one-piece-tank.jpg",
            summary: "Tapa superior del tanque para cierre y protección del conjunto sanitario.",
            spec: "Referencia organizada en Tanque/Sanitario.",
            details: ["Cubre el punto superior del tanque", "Ayuda a proteger el sistema interno", "Recambio para desgaste o fisura"],
        },
        {
            id: "49-tubo-de-ventilacion-armal",
            name: "TUBO DE VENTILACIÓN",
            category: "estructura-cabina",
            categoryLabel: "ESTRUCTURA DE CABINA",
            image: "assets/img/official-armal/wave-tubo-ventilacion-clean.png",
            summary: "Elemento de ventilación para apoyo del flujo de aire en cabina portátil.",
            spec: "Referencia organizada en Estructura de cabina.",
            details: ["Apoya la circulación de aire", "Repuesto para sistema de ventilación", "Imagen de referencia disponible en catálogo"],
        },
        {
            id: "50-porta-candado-armal",
            name: "PORTA CANDADO",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/50-porta-candado-armal.webp",
            summary: "Soporte de seguridad para candado en el sistema de puerta.",
            spec: "Referencia organizada en Puerta y repuestos.",
            details: ["Apoya cierre de seguridad", "Uso en módulo de puerta", "Recambio para mantenimiento de acceso"],
        },
        {
            id: "51-resorte-armal",
            name: "RESORTE",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/33-kit-bisagras-puerta-armal.png",
            summary: "Resorte de apoyo para mecanismos de puerta o retorno de componentes.",
            spec: "Referencia organizada en Puerta y repuestos.",
            details: ["Componente de apoyo mecánico", "Uso según configuración de puerta", "Imagen de referencia del conjunto de herrajes"],
        },
    ];

    REPUESTOS.push(
        {
            id: "52-panel-lateral-armal",
            name: "PANEL LATERAL",
            category: "estructura-cabina",
            categoryLabel: "ESTRUCTURA DE CABINA",
            image: "assets/img/official-armal/wave-panel-lateral-isolated.jpg",
            summary: "Panel lateral de reposición para la estructura de la cabina.",
            spec: "N.º parte 3 del catálogo.",
            details: ["Pared lateral ARMAL aislada", "Panel de HDPE con ventilación moldeada", "Imagen obtenida de la vista oficial ARMAL"],
        },
        {
            id: "53-lavamanos-interno-armal",
            name: "LAVAMANOS INTERNO",
            category: "accesorios-interiores",
            categoryLabel: "ACCESORIOS INTERIORES",
            image: "assets/img/armal-h2o-handwash.jpg",
            summary: "Lavamanos interno para cabina sanitaria ARMAL.",
            spec: "N.º parte 6 del catálogo.",
            details: ["Imagen oficial ARMAL de referencia", "Instalación interior"],
        },
        {
            id: "54-abrazadera-c-resorte",
            name: "ABRAZADERA EN C PARA RESORTE",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/33-kit-bisagras-puerta-armal.png",
            summary: "Abrazadera en C para fijación del conjunto de resorte.",
            spec: "N.º parte 6 del catálogo de puerta.",
            details: ["Componente del conjunto de resorte", "Imagen de referencia del kit ARMAL"],
        },
        {
            id: "55-pasador-puerta-central",
            name: "PASADOR PUERTA CENTRAL",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/15-pin-puerta-central.jpg",
            summary: "Pasador central para el conjunto de puerta.",
            spec: "N.º parte 7 del catálogo de puerta.",
            details: ["Pasador metálico", "Aplicación en el módulo de puerta"],
        },
        {
            id: "56-montura-u-resorte",
            name: "MONTURA EN U PARA RESORTE (REQUIERE 2)",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/13-soporte-puerta-u-metalico.jpg",
            summary: "Montura en U para sostener el resorte de la puerta.",
            spec: "N.º parte 9 del catálogo de puerta.",
            details: ["Requiere dos unidades", "Soporte metálico"],
        },
        {
            id: "57-perno-cubierta-resorte",
            name: "PERNO DE LA CUBIERTA DEL RESORTE (REQUIERE 4)",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/07-tornillo-tapa-puerta.jpg",
            summary: "Perno para fijar la cubierta del resorte.",
            spec: "N.º parte 10 del catálogo de puerta.",
            details: ["Requiere cuatro unidades", "Imagen de fijación de referencia"],
        },
        {
            id: "58-tuerca-cubierta-resorte",
            name: "TUERCA DE LA CUBIERTA DEL RESORTE (REQUIERE 4)",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/03-tornillo-placa-puerta-ext.jpg",
            summary: "Tuerca para fijar la cubierta del resorte.",
            spec: "N.º parte 11 del catálogo de puerta.",
            details: ["Requiere cuatro unidades", "Imagen de fijación de referencia"],
        },
        {
            id: "59-perno-manija-roja",
            name: "PERNO PARA LA MANIJA ROJA",
            category: "soportes-pines-tornilleria",
            categoryLabel: "SOPORTES, PINES Y TORNILLERIA",
            image: "assets/img/catalogo-puerta-cierre/03-tornillo-placa-puerta-ext.jpg",
            summary: "Perno de fijación para la manija roja.",
            spec: "N.º parte 17 del catálogo de puerta.",
            details: ["Fijación de manija", "Imagen de perno de referencia"],
        },
        {
            id: "60-placa-frontal-negra",
            name: "PLACA FRONTAL NEGRA EN PASTA",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/02-placa-puerta-pasta.jpg",
            summary: "Placa frontal negra en pasta para el conjunto de puerta.",
            spec: "N.º parte 18 del catálogo de puerta.",
            details: ["Pieza frontal", "Material en pasta"],
        },
        {
            id: "61-tapa-orificio-marco",
            name: "TAPA DEL ORIFICIO DEL MARCO INTERNO (REQUIERE 2)",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/09-tapa-interna-marco-puerta.jpg",
            summary: "Tapa para cubrir el orificio del marco interno.",
            spec: "N.º parte 19 del catálogo de puerta.",
            details: ["Requiere dos unidades", "Protección del marco interno"],
        },
        {
            id: "62-kit-cerradura-puerta",
            name: "KIT DE CERRADURA PARA PUERTA (13-14-16-17-18)",
            category: "puerta-cierre",
            categoryLabel: "PUERTA Y CIERRE",
            image: "assets/img/catalogo-puerta-cierre/12-kit-en-pasta-para-puerta.jpg",
            summary: "Kit de cerradura compuesto por las referencias indicadas.",
            spec: "N.º parte 23 del catálogo de puerta.",
            details: ["Incluye referencias 13, 14, 16, 17 y 18", "Kit para mantenimiento de cierre"],
        },
        {
            id: "64-barra-asiento-inodoro",
            name: "BARRA PARA ASIENTO DE INODORO",
            category: "tanque-sanitario",
            categoryLabel: "TANQUE / SANITARIO",
            image: "assets/img/catalogo-tanque-sanitario/25-tubo-metalico-wasas.jpg",
            summary: "Barra metálica de soporte para el asiento de inodoro.",
            spec: "N.º parte 7 del catálogo sanitario.",
            details: ["Soporte para asiento", "Componente metálico"],
        },
        {
            id: "65-abrazadera-asiento-inodoro",
            name: "ABRAZADERA EN C PARA BARRA ASIENTO DE INODORO",
            category: "tanque-sanitario",
            categoryLabel: "TANQUE / SANITARIO",
            image: "assets/img/catalogo-tanque-sanitario/25-tubo-metalico-wasas.jpg",
            summary: "Abrazadera en C para fijar la barra del asiento.",
            spec: "N.º parte 8 del catálogo sanitario.",
            details: ["Fijación de barra", "Imagen del conjunto de referencia"],
        },
        {
            id: "66-lavamanos-armal",
            name: "LAVAMANOS",
            category: "accesorios-interiores",
            categoryLabel: "ACCESORIOS INTERIORES",
            image: "assets/img/armal-h2o-handwash.jpg",
            summary: "Lavamanos portátil ARMAL.",
            spec: "N.º parte 1 del catálogo de lavamanos.",
            details: ["Imagen oficial ARMAL", "Unidad portátil de lavado"],
        },
        {
            id: "67-tapa-tanque-limpieza",
            name: "TAPA DEL TANQUE DE LIMPIEZA",
            category: "accesorios-interiores",
            categoryLabel: "ACCESORIOS INTERIORES",
            image: "assets/img/armal-h2o-handwash-detail.jpg",
            summary: "Tapa del tanque de limpieza del lavamanos.",
            spec: "N.º parte 2 del catálogo de lavamanos.",
            details: ["Imagen oficial ARMAL de referencia", "Cierre del tanque de limpieza"],
        },
        {
            id: "68-remaches-caja-117-lavamanos",
            name: "REMACHES POR CAJA 117 UND",
            category: "accesorios-interiores",
            categoryLabel: "ACCESORIOS INTERIORES",
            image: "assets/img/catalogo-accesorios-interiores/29-remaches-nuevos.webp",
            summary: "Remaches suministrados por caja de 117 unidades.",
            spec: "N.º parte 5 del catálogo de lavamanos.",
            details: ["Caja de 117 unidades", "Imagen limpia sobre fondo blanco"],
        },
        {
            id: "69-bizcocho-tapa-inodoro",
            name: "BIZCOCHO Y TAPA INODORO",
            category: "tanque-sanitario",
            categoryLabel: "TANQUE / SANITARIO",
            image: "assets/img/catalogo-tanque-sanitario/23-tapa-bizcocho.jpg",
            summary: "Conjunto de bizcocho y tapa para inodoro.",
            spec: "N.º parte 6A y 6B del catálogo sanitario.",
            details: ["Conjunto de asiento y tapa", "Repuesto sanitario"],
        },
        {
            id: "70-tubo-orinal",
            name: "TUBO ORINAL",
            category: "tanque-sanitario",
            categoryLabel: "TANQUE / SANITARIO",
            image: "assets/img/catalogo-tanque-sanitario/22-tubo-orinal-en-pasta.jpg",
            summary: "Tubo para conexión del orinal.",
            spec: "N.º parte 3 del catálogo sanitario.",
            details: ["Conexión para orinal", "Repuesto sanitario"],
        },
    );

    const CATALOG_CARD_DEFINITIONS = [
        ["catalog-base", "BASE", "31-base-estructural-cabina-armal"],
        ["catalog-marco-puerta", "MARCO PUERTA", "47-marco-de-puerta-armal"],
        ["catalog-puerta", "PUERTA", "46-puerta-completa-armal"],
        ["catalog-lavamanos-interno", "LAVAMANOS INTERNO", "53-lavamanos-interno-armal", "assets/img/armal-h2o-handwash.jpg"],
        ["catalog-techo", "TECHO", "45-techo-cabina-armal"],
        ["catalog-tapa-bizcocho", "TAPA + BIZCOCHO", "23-tapa-bizcocho"],
        ["catalog-remaches-117-ala", "REMACHES CAJA X 117 UNDS TIPO ALA", "29-caja-de-remaches"],
        ["catalog-soporte-papel", "SOPORTE PAPEL HIGIENICO (PAPELERA)", "27-papelera"],
        ["catalog-barra-papel", "BARRA PARA EL SOPORTE DEL PAPEL HIGIENICO", "28-tubo-porta-papel-en-pasta"],
        ["catalog-tapa-base-derecho", "TAPA BASE NEGRO DERECHO", "04-tapa-base-puerta-derecha"],
        ["catalog-tapa-base-izquierdo", "TAPA BASE NEGRO IZQUIERDO", "05-tapa-base-puerta-izquierda"],
        ["catalog-tubo-para-orinal", "TUBO PARA ORINAL", "22-tubo-orinal-en-pasta"],
        ["catalog-pasador-superior", "PASADOR PUERTA SUPERIOR METALICO", "14-pin-puerta-superior"],
        ["catalog-pasador-inferior", "PASADOR PUERTA INFERIOR METALICO", "16-pin-puerta-inferior"],
        ["catalog-tornillo-cuadrante", "TORNILLO DEL CUADRANTE DE LA PUERTA (REQUIERE 2)", "07-tornillo-tapa-puerta"],
        ["catalog-tuerca-manija", "TUERCA PARA MANIJA DE LA PUERTA", "03-tornillo-placa-puerta-ext"],
        ["catalog-manija-roja", "MANIJA PUERTA ROJA", "01-manija-roja-puerta"],
        ["catalog-placa-cuadrante", "PLACA CUADRANTE INTERNO PUERTA", "02-placa-puerta-pasta"],
        ["catalog-kit-cierre", "KIT DE CIERRE DE LA PUERTA (CHAPA) 2 PIEZAS", "10-cerrojo-puerta-cantonera", "assets/img/official-armal/door-closure.jpg"],
        ["catalog-porta-candado", "PORTA CANDADO METALICO (REQUIERE 2)", "50-porta-candado-armal", "assets/img/official-armal/padlock-hooks.jpg"],
        ["catalog-soporte-puerta-nuevo", "SOPORTE PARA PUERTA NUEVO / KIT PAR DE PASADORES EN PASTA PARA LA PUERTA", "12-kit-en-pasta-para-puerta"],
        ["catalog-tornillo-tanque", "TORNILLO PARA TANQUE REQUIERE 5 UNIDADES", "20-set-tornillos-para-tanque"],
        ["catalog-tubo-ventilacion", "TUBO DE VENTILACION", "49-tubo-de-ventilacion-armal", "assets/img/official-armal/wave-tubo-ventilacion-clean.png"],
        ["catalog-tapa-tanque", "TAPA TANQUE", "48-tapa-del-tanque-armal", "assets/img/official-armal/wave-one-piece-tank.jpg"],
        ["catalog-tanque", "TANQUE", "44-tanque-sanitario-armal", "assets/img/catalogo-tanque-sanitario/44-tanque-sanitario-clean.png"],
        ["catalog-kit-filtros", "KIT DE FILTROS POR 3 PIEZAS", "18-kit-filtro"],
        ["catalog-boquilla-aspersor", "BOQUILLA O ASPERSOR", "19-flushing-aspersor"],
        ["catalog-asiento-inodoro", "ASIENTO PARA INODORO", "24-asiento-sanitario"],
        ["catalog-lengueta", "LENGÜETA", "17-lengueta"],
        ["catalog-contrapeso", "CONTRAPESO", "39-bloque-contrapeso-metalico-armal", "assets/img/catalogo-puerta-cierre/39-bloque-contrapeso-metalico-clean.png"],
        ["catalog-llave-lavamanos", "LLAVE LAVAMANOS", "66-lavamanos-armal", "assets/img/official-armal/wave-h2o-internal-handwash-details.jpg"],
        ["catalog-rejilla-lavamanos", "REJILLA LAVAMANOS", "66-lavamanos-armal", "assets/img/official-armal/wave-h2o-internal-handwash-details.jpg"],
    ];

    const CATALOG_CARD_TARGETS = {};
    CATALOG_CARD_DEFINITIONS.forEach(([id, name, sourceId, image]) => {
        const source = REPUESTOS.find((item) => item.id === sourceId);
        if (!source) return;
        CATALOG_CARD_TARGETS[name] = id;
        REPUESTOS.push({
            ...source,
            id,
            name,
            image: image || source.image,
            gallery: image ? [image] : source.gallery,
            summary: `${name}. Referencia identificada con el nombre original del catálogo ARMAL.`,
            spec: "Nombre conservado exactamente como aparece en el catálogo ARMAL.",
            details: ["Ficha independiente del catálogo", "No reemplaza ni cambia el nombre de otra pieza", "Imagen ARMAL o imagen exacta disponible del componente"],
        });
    });

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
    const REPUESTOS_PER_PAGE = 12;

    let slideIndex = -1;
    let currentModalService = null;
    let currentModalImageIndex = 0;
    let modalInterval = null;
    let currentRepuestoItem = null;
    let currentRepuestoImageIndex = 0;
    let repuestoActiveTrigger = null;
    let activeTrigger = null;
    let revealObserver = null;
    let currentCatalogGalleryIndex = 0;
    let currentRepuestoFilter = "all";
    let currentRepuestoPage = 1;
    let catalogTouchStartX = null;
    let heroSlideTimer = null;

    const hero = document.querySelector(".hero");
    const slides = Array.from(document.querySelectorAll(".slide"));
    const heroModelBadge = document.getElementById("heroModelBadge");
    const heroCarousel = document.getElementById("heroCarousel");
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
    const catalogGalleryStage = document.getElementById("catalogGalleryStage");
    const catalogGalleryImage = document.getElementById("catalogGalleryImage");
    const catalogGalleryCounter = document.getElementById("catalogGalleryCounter");
    const catalogGalleryPrev = document.getElementById("catalogGalleryPrev");
    const catalogGalleryNext = document.getElementById("catalogGalleryNext");
    const catalogGalleryToggle = document.getElementById("catalogGalleryToggle");
    const catalogGalleryContent = document.getElementById("catalogGalleryContent");
    const catalogHotspots = document.getElementById("catalogHotspots");
    const catalogGalleryThumbs = Array.from(document.querySelectorAll("[data-catalog-page]"));

    function renderHeroSlide(index) {
        if (!slides.length || !hero) return;

        slides.forEach((slide) => {
            slide.style.display = "none";
        });

        slideIndex = (index + slides.length) % slides.length;
        slides[slideIndex].style.display = "block";

        const activeLabel = slides[slideIndex]?.dataset?.modelLabel;
        if (heroModelBadge && activeLabel) {
            heroModelBadge.textContent = activeLabel;
        }

        const activePalette = HERO_PALETTES[slideIndex] || HERO_PALETTES[0];
        hero.style.setProperty("--hero-tone-1", activePalette.tone1);
        hero.style.setProperty("--hero-tone-2", activePalette.tone2);
        hero.style.setProperty("--hero-tone-3", activePalette.tone3);

    }

    function scheduleHeroSlide() {
        window.clearTimeout(heroSlideTimer);
        heroSlideTimer = window.setTimeout(() => {
            renderHeroSlide(slideIndex + 1);
            scheduleHeroSlide();
        }, SLIDE_INTERVAL_MS);
    }

    function showSlides() {
        renderHeroSlide(slideIndex + 1);
        scheduleHeroSlide();
    }

    function bindHeroCarouselEvents() {
        heroCarousel?.addEventListener("mouseenter", () => window.clearTimeout(heroSlideTimer));
        heroCarousel?.addEventListener("mouseleave", scheduleHeroSlide);
    }

    function bindHeroScrollEffect() {
        if (!hero) return;

        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let ticking = false;

        function resetHeroEffect() {
            hero.style.setProperty("--hero-title-y", "0px");
            hero.style.setProperty("--hero-title-scale", "1");
            hero.style.setProperty("--hero-intro-opacity", "1");
            hero.style.setProperty("--hero-visual-y", "0px");
            hero.style.setProperty("--hero-visual-scale", "1");
            hero.style.setProperty("--hero-panel-opacity", "1");
            hero.style.setProperty("--hero-panel-y", "0px");
            hero.style.setProperty("--hero-sheen-opacity", "1");
            hero.style.setProperty("--hero-opening-opacity", "1");
            hero.style.setProperty("--hero-opening-y", "0px");
        }

        function updateHeroEffect() {
            ticking = false;

            if (reduceMotion || window.innerWidth <= 860) {
                resetHeroEffect();
                return;
            }

            const rect = hero.getBoundingClientRect();
            const scrollable = Math.max(1, rect.height - window.innerHeight);
            const rawProgress = Math.min(1, Math.max(0, -rect.top / scrollable));
            const easedProgress = rawProgress * rawProgress * (3 - 2 * rawProgress);
            const panelProgress = Math.min(1, rawProgress * 1.35);
            const openingProgress = Math.min(1, Math.max(0, -rect.top / (window.innerHeight * 0.72)));

            hero.style.setProperty("--hero-title-y", `${Math.round(openingProgress * -54)}px`);
            hero.style.setProperty("--hero-title-scale", String(1 + openingProgress * 0.07));
            hero.style.setProperty("--hero-intro-opacity", String(Math.max(0.12, 1 - openingProgress * 0.88)));
            hero.style.setProperty("--hero-visual-y", `${Math.round(easedProgress * -42)}px`);
            hero.style.setProperty("--hero-visual-scale", String(1 + easedProgress * 0.018));
            hero.style.setProperty("--hero-panel-opacity", "1");
            hero.style.setProperty("--hero-panel-y", "0px");
            hero.style.setProperty("--hero-sheen-opacity", String(Math.max(0.62, 1 - openingProgress * 0.34)));
            hero.style.setProperty("--hero-opening-opacity", String(Math.max(0.06, 1 - openingProgress * 0.94)));
            hero.style.setProperty("--hero-opening-y", `${Math.round(openingProgress * -58)}px`);
        }

        function requestHeroUpdate() {
            if (ticking) return;
            ticking = true;
            window.requestAnimationFrame(updateHeroEffect);
        }

        window.addEventListener("scroll", requestHeroUpdate, { passive: true });
        window.addEventListener("resize", requestHeroUpdate);
        updateHeroEffect();
    }

    function setActiveRepuestoFilter(filter = "all") {
        document.querySelectorAll(".repuestos-filter-btn").forEach((button) => {
            button.classList.toggle("is-active", (button.dataset.filter || "all") === filter);
        });
    }

    function highlightRepuestoCard(targetId) {
        const card = targetId ? document.querySelector(`[data-repuesto-id="${targetId}"]`) : null;
        if (!card) return;

        card.scrollIntoView({ behavior: "auto", block: "center" });
        card.classList.remove("is-target-highlight");
        window.setTimeout(() => {
            card.classList.add("is-target-highlight");
        }, 80);
        window.setTimeout(() => {
            card.classList.remove("is-target-highlight");
        }, 2600);
    }

    function goToCatalogRepuesto(targetId, catalogName) {
        if (!targetId) return;
        const item = REPUESTOS.find((candidate) => candidate.id === targetId);
        if (!item) return;
        const allFilterActive = document.querySelector('.repuestos-filter-btn[data-filter="all"]')?.classList.contains("is-active");
        setActiveRepuestoFilter("all");
        if (!allFilterActive) {
            renderRepuestos("all");
        }
        openRepuestoModal({ ...item, name: catalogName || item.name });
    }

    function renderCatalogHotspots() {
        if (!catalogHotspots) return;

        const hotspots = CATALOG_HOTSPOTS[currentCatalogGalleryIndex] || [];
        catalogHotspots.innerHTML = "";
        const renderedNumbers = new Set();

        hotspots.forEach((hotspot) => {
            if (renderedNumbers.has(hotspot.number)) return;
            renderedNumbers.add(hotspot.number);

            const button = document.createElement("button");
            button.className = "catalog-hotspot";
            button.type = "button";
            button.style.left = `${hotspot.x}%`;
            button.style.top = `${hotspot.y}%`;
            button.setAttribute("aria-label", `Ver repuesto ${hotspot.number}: ${hotspot.label}`);
            button.addEventListener("click", () => goToCatalogRepuesto(CATALOG_CARD_TARGETS[hotspot.label] || hotspot.targetId, hotspot.label));
            catalogHotspots.appendChild(button);
        });
    }

    function showCatalogGalleryPage(index) {
        if (!catalogGalleryImage || !catalogGalleryCounter || !CATALOG_GALLERY_PAGES.length) return;

        currentCatalogGalleryIndex = (index + CATALOG_GALLERY_PAGES.length) % CATALOG_GALLERY_PAGES.length;
        const page = CATALOG_GALLERY_PAGES[currentCatalogGalleryIndex];
        catalogGalleryImage.src = page.src;
        catalogGalleryImage.alt = page.alt;
        catalogGalleryCounter.textContent = `Página ${currentCatalogGalleryIndex + 1} de ${CATALOG_GALLERY_PAGES.length}`;

        catalogGalleryThumbs.forEach((thumb, thumbIndex) => {
            const isActive = thumbIndex === currentCatalogGalleryIndex;
            thumb.classList.toggle("is-active", isActive);
            thumb.setAttribute("aria-current", isActive ? "true" : "false");
        });

        renderCatalogHotspots();
    }

    function bindCatalogGalleryEvents() {
        catalogGalleryPrev?.addEventListener("click", () => showCatalogGalleryPage(currentCatalogGalleryIndex - 1));
        catalogGalleryNext?.addEventListener("click", () => showCatalogGalleryPage(currentCatalogGalleryIndex + 1));

        catalogGalleryThumbs.forEach((thumb) => {
            thumb.addEventListener("click", () => {
                showCatalogGalleryPage(Number(thumb.dataset.catalogPage || 0));
            });
        });

        catalogGalleryToggle?.addEventListener("click", () => {
            if (!catalogGalleryContent) return;
            const isCollapsed = catalogGalleryContent.classList.toggle("is-collapsed");
            catalogGalleryToggle.setAttribute("aria-expanded", String(!isCollapsed));
            const label = catalogGalleryToggle.querySelector(".catalog-gallery-toggle-label");
            const icon = catalogGalleryToggle.querySelector(".catalog-gallery-toggle-icon");
            if (label) label.textContent = isCollapsed ? "Ver catálogo" : "Cerrar catálogo";
            if (icon) icon.textContent = isCollapsed ? "+" : "−";
        });

        catalogGalleryStage?.addEventListener("touchstart", (event) => {
            catalogTouchStartX = event.changedTouches[0]?.clientX ?? null;
        }, { passive: true });

        catalogGalleryStage?.addEventListener("touchend", (event) => {
            if (catalogTouchStartX === null) return;
            const touchEndX = event.changedTouches[0]?.clientX ?? catalogTouchStartX;
            const distance = touchEndX - catalogTouchStartX;
            catalogTouchStartX = null;
            if (Math.abs(distance) < 45) return;
            showCatalogGalleryPage(currentCatalogGalleryIndex + (distance < 0 ? 1 : -1));
        }, { passive: true });
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
        const nav = prevRepuestoImageBtn?.closest(".repuesto-modal-nav");
        if (nav) {
            nav.hidden = !hasMultiple;
            nav.style.display = hasMultiple ? "" : "none";
        }
        if (repuestoAngleIndicator) {
            repuestoAngleIndicator.hidden = !hasMultiple;
            repuestoAngleIndicator.style.display = hasMultiple ? "" : "none";
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
            ".hero-copy, .hero-actions, .hero-signal, .hero-proof, .hero-kpi, .services-title, .services-subtitle, .service-card, .catalog-gallery-head, .catalog-gallery, .repuestos-title, .repuestos-subtitle, .repuestos-toolbar, .content-head, .why-spotlight, .why-list-item, .highlight-card, .trust-pill, .location, .footer-content"
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

    function renderRepuestosPagination(totalItems) {
        const pagination = document.getElementById("repuestosPagination");
        if (!pagination) return;

        const totalPages = Math.max(1, Math.ceil(totalItems / REPUESTOS_PER_PAGE));
        pagination.innerHTML = "";
        pagination.hidden = totalPages <= 1;

        for (let page = 1; page <= totalPages; page += 1) {
            const button = document.createElement("button");
            button.className = "repuestos-page-btn";
            button.type = "button";
            button.textContent = String(page);
            button.classList.toggle("is-active", page === currentRepuestoPage);
            button.setAttribute("aria-label", `Ver página ${page} de repuestos`);
            if (page === currentRepuestoPage) {
                button.setAttribute("aria-current", "page");
            }
            button.addEventListener("click", () => {
                renderRepuestos(currentRepuestoFilter, page);
                document.getElementById("seccion-repuestos")?.scrollIntoView({ behavior: "smooth", block: "start" });
            });
            pagination.appendChild(button);
        }
    }

    function renderRepuestos(filter = "all", page = 1) {
        if (!repuestosGrid || !repuestosCount) return;

        currentRepuestoFilter = filter;
        const groupedCategories = REPUESTOS_FILTER_GROUPS[filter];
        let visibleItems = REPUESTOS;
        if (filter !== "all") {
            visibleItems = REPUESTOS.filter((item) => itemMatchesRepuestoFilter(item, filter, groupedCategories));
        }

        visibleItems = sortRepuestosByCategory(visibleItems);
        const totalItems = visibleItems.length;
        const totalPages = Math.max(1, Math.ceil(totalItems / REPUESTOS_PER_PAGE));
        currentRepuestoPage = Math.min(Math.max(1, page), totalPages);
        const pageStart = (currentRepuestoPage - 1) * REPUESTOS_PER_PAGE;
        const pageItems = visibleItems.slice(pageStart, pageStart + REPUESTOS_PER_PAGE);
        repuestosGrid.innerHTML = "";

        pageItems.forEach((item, index) => {
            const viewItem = { ...item, displaySpec: getRepuestoDisplaySpec(pageStart + index, filter) };
            const previewImage = getRepuestoImages(viewItem)[0] || viewItem.image;
            const card = document.createElement("article");
            card.className = "repuesto-card";
            card.id = `repuesto-${viewItem.id}`;
            card.dataset.repuestoId = viewItem.id;
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

        const visibleStart = totalItems ? pageStart + 1 : 0;
        const visibleEnd = Math.min(pageStart + pageItems.length, totalItems);
        repuestosCount.textContent = `Mostrando ${visibleStart}-${visibleEnd} de ${totalItems} repuestos`;
        renderRepuestosPagination(totalItems);
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
                renderRepuestos(button.dataset.filter || "all", 1);
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
        bindHeroCarouselEvents();
        bindHeroScrollEffect();
        bindCatalogGalleryEvents();
        showCatalogGalleryPage(0);
        initServiceCarousels();
        bindServiceTriggers();
        bindModalEvents();
        bindRepuestoModalEvents();
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
