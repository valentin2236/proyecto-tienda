export const productos = [
  {
    id: "ryzen-5-5600x",
    nombre: "Ryzen 5 5600X",
    descripcion: "Procesador 6 núcleos y 12 hilos, ideal para gaming.",
    precio: 120000,
    stock: 5,
    garantia: "6 Meses",
    imagenes:  [
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/16GB DDR4 3200MHz.jpg",
      "../assets/img/PRODUCTOS/SSD 1TB NVMe.jpg"
    ],
    categoria: "procesador",
    especificaciones: {
      Núcleos: "6",
      Hilos: "12",
      Frecuencia: "3.7 GHz",
      Socket: "AM4",
    },
  },
  {
    id: "rtx-3060",
    nombre: "RTX 3060",
    descripcion: "Excelente rendimiento en 1080p y 1440p.",
    precio: 320000,
    stock: 3,
    garantia: "3 Meses",
    imagen: "../assets/img/PRODUCTOS/RTX 3060.jpg",
    imagenes:  [
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg"
    ],
    categoria: "gpu",
    especificaciones: {
      Memoria: "12GB GDDR6",
      Núcleos: "3584 CUDA",
      Consumo: "170W",
      Salidas: "HDMI, DisplayPort",
    },
  },
  {
    id: "16gb-ddr4-3200mhz",
    nombre: "16GB DDR4 3200MHz",
    descripcion: "Memoria RAM rápida con disipador.",
    precio: 45000,
    stock: "0",
    garantia: "6 Meses",
    imagen: "../assets/img/PRODUCTOS/16GB DDR4 3200MHz.jpg",
    imagenes:  [
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg"
    ],
    categoria: "ram",
    especificaciones: {
      Capacidad: "16GB",
      Velocidad: "3200MHz",
      Tipo: "DDR4",
      Disipador: "Sí",
    },
  },
  {
    id: "ssd-1tb-nvme",
    nombre: "SSD 1TB NVMe",
    descripcion: "Carga rápida de juegos y sistema operativo.",
    precio: 65000,
    stock: 8,
    garantia: "6 Meses",
    imagen: "../assets/img/PRODUCTOS/SSD 1TB NVMe.jpg",
    imagenes:  [
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg"
    ],
    categoria: "almacenamiento",
    especificaciones: {
      Capacidad: "1TB",
      Tipo: "NVMe",
      Lectura: "3500 MB/s",
      Escritura: "3000 MB/s",
    },
  },
  {
    id: "msi-b550m-pro",
    nombre: "Motherboard B550M PRO",
    descripcion: "Compatibilidad con procesadores Ryzen y PCIe 4.0.",
    precio: 90000,
    stock: 10,
    garantia: "6 Meses",
    imagen: "../assets/img/PRODUCTOS/MSI B550M PRO.jpg",
    imagenes:  [
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg"
    ],
    categoria: "motherboard",
    especificaciones: {
      Socket: "AM4",
      Chipset: "B550",
      Formato: "Micro ATX",
      RAM: "Hasta 128GB DDR4",
    },
  },
  {
    id: "fuente-650w-80plus",
    nombre: "Fuente 650W 80 Plus Bronze",
    descripcion: "Eficiencia energética y estabilidad para tu PC.",
    precio: 42000,
    stock: 8,
    garantia: "12 Meses",
    imagen: "../assets/img/PRODUCTOS/Fuente 650W 80 Plus.jpg",
    imagenes:  [
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg"
    ],
    categoria: "fuente",
    especificaciones: {
      Potencia: "750W",
      Certificación: "80 Plus Bronze",
      Modular: "No",
      Ventilador: "120mm",
    },
  },
  {
    id: "gabinete-gamer-rgb",
    nombre: "Gabinete Gamer RGB",
    descripcion: "Diseño con panel lateral de vidrio y ventiladores RGB.",
    precio: 60000,
    stock: 3,
    garantia: "12 Meses",
    imagen: "../assets/img/PRODUCTOS/Gabinete Gamer RGB.jpg",
    imagenes:  [
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg"
    ],
    categoria: "gabinete",
    especificaciones: {
      RGB: "Sí",
      Panel: "Vidrio templado",
      Ventiladores: "3 incluidos",
      Formato: "ATX",
    },
  },
  {
    id: "cooler-master-hyper-212",
    nombre: "Cooler Master Hyper 212",
    descripcion: "Disipador de aire con excelente relación calidad/precio.",
    precio: 25000,
    stock: 15,
    garantia: "3 Meses",
    imagen: "../assets/img/PRODUCTOS/Cooler Master Hyper 212.jpg",
    imagenes:  [
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg"
    ],
    categoria: "cooler",
    especificaciones: {
      Tipo: "Aire",
      Altura: "159mm",
      Ventilador: "120mm",
      Compatibilidad: "Intel/AMD",
    },
  },
  {
    id: "monitor-24”-144hz",
    nombre: "Monitor 24” 144Hz",
    descripcion: "Ideal para juegos competitivos.",
    precio: 150000,
    stock: 6,
    garantia: "12 Meses",
    imagen: "../assets/img/PRODUCTOS/Monitor 24” 144Hz.jpg",
    imagenes:  [
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg"
    ],
    categoria: "monitor",
    especificaciones: {
      Tamaño: "24 pulgadas",
      Frecuencia: "144Hz",
      Resolución: "1920x1080",
      Panel: "IPS",
    },
  },
  {
    id: "teclado-mecanico-rgb",
    nombre: "Teclado Mecánico RGB",
    descripcion: "Switches rojos, diseño compacto.",
    precio: 35000,
    stock: 7,
    garantia: "6 Meses",
    imagen: "../assets/img/PRODUCTOS/Teclado Mecánico RGB.jpg",
    imagenes:  [
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg"
    ],
    categoria: "periferico",
    especificaciones: {
      Tipo: "Mecánico",
      Switch: "Rojo",
      RGB: "Sí",
      Layout: "Tenkeyless",
    },
  },
  {
    id: "mouse-gamer-7200-dpi",
    nombre: "Mouse Gamer 7200 DPI",
    descripcion: "Ligero, preciso, y con RGB",
    precio: 18000,
    stock: 20,
    garantia: "3 Meses",
    imagen: "../assets/img/PRODUCTOS/Mouse Gamer 7200 DPI.jpg",
    imagenes:  [
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg"
    ],
    categoria: "periferico",
    especificaciones: {
      DPI: "7200",
      Sensor: "Óptico",
      Botones: "6",
      RGB: "Sí",
    },
  },
  {
    id: "headset-con-microfono",
    nombre: "Headset con micrófono",
    descripcion: "Sonido envolvente y cancelación de ruido.",
    precio: 25000,
    stock: 5,
    garantia: "3 Meses",
    imagen: "../assets/img/PRODUCTOS/Headset con micrófono.jpg",
    imagenes:  [
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg",
      "../assets/img/PRODUCTOS/Ryzen5_5600x.jpg"
    ],
    categoria: "periferico",
    especificaciones: {
      Sonido: "7.1 Surround",
      Micrófono: "Integrado",
      Conectividad: "USB",
      Cancelación: "Sí",
    },
  },
];
  