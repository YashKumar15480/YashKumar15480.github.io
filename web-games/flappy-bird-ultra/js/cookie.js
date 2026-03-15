function setCookie(name, value, days) {

    let d = new Date()
    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000))

    let expires = "expires=" + d.toUTCString()

    document.cookie = name + "=" + value + ";" + expires + ";path=/"

}


function getCookie(name) {

    let cname = name + "="

    let decodedCookie = decodeURIComponent(document.cookie)

    let ca = decodedCookie.split(';')

    for (let i = 0; i < ca.length; i++) {

        let c = ca[i].trim()

        if (c.indexOf(cname) === 0) {
            return c.substring(cname.length, c.length)
        }

    }

    return ""

}