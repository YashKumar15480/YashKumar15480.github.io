function setCookie(name, value, days) {

    let d = new Date()

    d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000))

    let expires = "expires=" + d.toUTCString()

    document.cookie = name + "=" + value + ";" + expires + ";path=/"

}

function getCookie(name) {

    let cname = name + "="

    let ca = document.cookie.split(';')

    for (let c of ca) {

        c = c.trim()

        if (c.indexOf(cname) == 0)
            return c.substring(cname.length, c.length)

    }

    return ""

}