const video = {
    id: 1,
    name: 'Pokemon Johto',
    metadata: { date: '14/03/2022', hour: '10:22', country: 'MX' },
    author: 'montoyitag',
    mediaInfo: { format: 'mp4', quality: 'media' },
    ranking: {
        likes: 0,
        comments: ['buen video', 'mal video'],
        isPlatinum: {
            exists: true,
            date: '',
            suscriptores: 200,
            address: {
                street: '',
                no: '',
                countryData: {
                    country: '',
                    state: ''
                },
                receiver: {
                    name: {
                        name: 'fedelobo',
                        app: '',
                        apm: '',
                    }
                }
            }
        },
        isGolden: false,
        views: 0
    },
    category: {
        name: 'Publico en general',
        type: {
            genre: 'anime',
        }
    }
};

// if (video.ranking.isPlatinum.exists) { // mal manejo de propiedades
// if (video && video.ranking && video.ranking.isPlatinum && video.ranking.isPlatinum.exists) { // good
if (video?.ranking?.isPlatinum?.exists) { // better
    console.log('el video tiene placa platinum');
} else {
    console.log('es un video comun');
}
// video.ranking.comments[1]