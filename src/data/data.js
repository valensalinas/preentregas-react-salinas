const productos = [
    {
        id: 'artcid-00001',
        name: 'Remera High Runner',
        price: 15000,
        img: '/img/productos/remera-high-runner.jpg',
        description: 'Remera de entrenamiento.',
        stock: 10,
        categoria: 'remeras'
    },
    {
        id: 'artcid-00002',
        name: 'Remera Hummel',
        price: 17000,
        img: '/img/productos/remera-handball.jpg',
        description: 'Remera de entrenamiento.',
        stock: 10,
        categoria: 'remeras'
    },
    {
        id: 'artcid-00003',
        name: 'Medias Hummel',
        price: 6000,
        img: '/img/productos/media-hummel-blanca.webp',
        description: 'Medias Pack x3 Blancas',
        stock: 10,
        categoria: 'medias'
    },
    {
        id: 'artcid-00013',
        name: 'Medias Hummel',
        price: 6000,
        img: '/img/productos/media-hummel-negra.webp',
        description: 'Medias Pack x3 Negras',
        stock: 10,
        categoria: 'medias'
    },
    {
        id: 'artcid-00004',
        name: 'Camperón CIDECO High Runner',
        price: 50000,
        img: '/img/productos/camperon.jpg',
        description: 'Camperón de abrigo con los colores de CIDECO.',
        stock: 10,
        categoria: 'camperas'
    },
    {
        id: 'artcid-00005',
        name: 'Pantalón CIDECO High Runner',
        price: 30000,
        img: '/img/productos/pantalon-cideco.jpg',
        description: 'Pantalón de conjunto azul oscuro.',
        stock: 10,
        categoria: 'pantalones'
    },
    {
        id: 'artcid-00006',
        name: 'Campera CIDECO High Runner',
        price: 25000,
        img: '/img/productos/campera-roja.jpg',
        description: 'Campera de conjunto roja.',
        stock: 10,
        categoria: 'camperas'
    },
    {
        id: 'artcid-00007',
        name: 'Short High Runner de Juego',
        price: 16000,
        img: '/img/productos/short-high-runner.webp',
        description: 'Short de juego largo negro para caballeros, con escudo de High Runner.',
        stock: 10,
        categoria: 'pantalones'
    },
    {
        id: 'artcid-00008',
        name: 'Short High Runner de Juego',
        price: 16000,
        img: '/img/productos/short-high-runner.webp',
        description: 'Short de juego negro corto para damas, con escudo de High Runner.',
        stock: 10,
        categoria: 'pantalones'
    },
    {
        id: 'artcid-00009',
        name: 'Media de compresión Hummel',
        price: 8000,
        img: '/img/productos/media-de-compresion-negra.webp',
        description: 'Media de compresión x2 de color negro.',
        categoria: 'medias'
    },
    {
        id: 'artcid-00010',
        name: 'Media de compresión Hummel',
        price: 8000,
        img: '/img/productos/media-de-compresion-blanca.webp',
        description: 'Media de compresión x2 de color blanco.',
        stock: 10,
        categoria: 'medias'
    },
]

const obtenerProductos = () => {
    return new Promise((resolve, reject) => {

        //Simulación de retraso de red
        
        setTimeout(() => {
            resolve(productos)
        }, 2000);
    });
};

export default obtenerProductos