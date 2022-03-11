class Multimedia {
    constructor(url) {
        let _url = url
        this.getUrl = () => {
            return _url
        }
        this.setUrl = (nuevaUrl) => {
            _url = nuevaUrl
        }
    }
    get url() {
        return this.getUrl()
    }
    set url(nuevaUrl) {
        this.setUrl(nuevaUrl)
    }
    setInicio() {
        alert('Este método es para realizar un cambio en la URL del video')
    }
}

class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url)
        let _id = document.querySelector(`#${id}`)
        this.getId = () => {
            return _id
        }
        this.setId = (nuevoId) => {
            _id = document.querySelector(`#${nuevoId}`)
        }
    }
    get id() {
        return this.getId()
    }
    set id(nuevoId) {
        this.setId(nuevoId)
    }
    playMultimedia() {
        this.id.src = this.url
    }
    setInicio(tiempoDeInicio) {
        this.id.setAttribute("src", this.id.src + `?start=${tiempoDeInicio}`)
    }
}

// Por sugerencia del Profesor Claudio se cumple con el requerimiento 3.2 aplicando la funcionalidad IIFE de esta manera
; const reproductorMultimedia = (() => {
    const musicaParaReproducir = new Reproductor("https://www.youtube.com/embed/_mRFtRXLiyg", "musica")
    const peliculasParaReproducir = new Reproductor("https://www.youtube.com/embed/YoHD9XEInc0", "peliculas")
    const seriesParaReproducir = new Reproductor("https://www.youtube.com/embed/EeCX8Y0a278", "series")
    // En el pundo 4 se pide instanciar enviando url y id como parametros. Tambien se podria utilizar por ejemplo musicaParaReproducir.url y musicaParaReproducir.id para enviarlos usando los get y set
    return {
        comenzarPrograma: () => {
            musicaParaReproducir.playMultimedia()
            musicaParaReproducir.setInicio(40)

            peliculasParaReproducir.playMultimedia()
            peliculasParaReproducir.setInicio(59)
            
            seriesParaReproducir.playMultimedia()
            seriesParaReproducir.setInicio(110)
        }
    }
})()

reproductorMultimedia.comenzarPrograma()