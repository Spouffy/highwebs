/* <!--  Spouffy's personal javascript library  --!> */

const getElm = (t) => {
    if (typeof t === 'object'){
        return t;
    } else if (document.getElementById(t)) {
        return document.getElementById(t)
    } else if (document.getElementsByClassName(t)){
        return document.getElementsByClassName(t)
    }
}

const crtElm = (e, p) => {
    var p = getElm(p)
    var arr = []
    if(p[0]){
        for(i=0;i < p.length; i++){
            var n = document.createElement(e)
            arr[i] = n
            p[i].append(n)
        }
        return arr;
    }
    var n = document.createElement(e)
    p.append(n)
    return n; 
}

const hide = (t) => {
    getElm(t).style.display = 'none'
}


const show = (t, s) => {
    if(s) { getElm(t).style.display = s }
    getElm(t).style.display = 'block'
}

const load = (t, path, obj) => {
    var s = get(path)
    var t = getElm(t)
    if(obj){
        obj.forEach(e => {
            s = s.replace(`{#${e[0]}#}`, e[1])
        });
        t.innerHTML += s
    } else {
        t.innerHTML += s
    }
}

const get = (p) => {
    var http = new XMLHttpRequest()
    http.open("GET", p, false)
    http.send(null)
    return http.response
}


const on = (e, t, f) => {
    var t = getElm(t)
    if (t[0]){
        for (let i = 0; i < t.length; i++) {
            t[i].addEventListener(e,f)
        }
        return;
    }
    t.addEventListener(e,f)
}