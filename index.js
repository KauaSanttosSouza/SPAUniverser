import { Router } from "./router.js"

const router = new Router

router.add("/ico", "/home.html")
router.add("/home", "/home.html")
router.add("/universe", "/universe.html")
router.add("/explorer", "/explorer.html")
router.add("/button", "/universe.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()



