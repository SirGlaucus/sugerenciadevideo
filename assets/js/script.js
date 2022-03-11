const reproductorMultimedia = (() => {
    
})

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

const musicaParaReproducir = new Reproductor("https://www.youtube.com/embed/_mRFtRXLiyg", "musica")
// musicaParaReproducir.url = "https://www.youtube.com/embed/_mRFtRXLiyg"
// musicaParaReproducir.id = "musica"
musicaParaReproducir.playMultimedia()
musicaParaReproducir.setInicio(40)

const peliculasParaReproducir = new Reproductor("https://www.youtube.com/embed/YoHD9XEInc0", "peliculas")
// peliculasParaReproducir.url = "https://www.youtube.com/embed/YoHD9XEInc0"
// peliculasParaReproducir.id = "peliculas"
peliculasParaReproducir.playMultimedia()
peliculasParaReproducir.setInicio(59)

const seriesParaReproducir = new Reproductor("https://www.youtube.com/embed/EeCX8Y0a278", "series")
// seriesParaReproducir.url = "https://www.youtube.com/embed/EeCX8Y0a278"
// seriesParaReproducir.id = "series"
seriesParaReproducir.playMultimedia()
seriesParaReproducir.setInicio(110)
