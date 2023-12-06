// import './assets/main.css'
//import './assets/styles.scss';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import LoadScript from 'vue-plugin-load-script';


const app = createApp(App)
app.use(LoadScript);
app.use(createPinia())
app.use(router)


// // local files
// // you have to put your scripts into the public folder. 
// // that way webpack simply copy these files as it is.
// app.loadScripts('./public/js/jquery.min.js');

// app.loadScript("/js/jquery-migrate-3.0.1.min.js"),
// app.loadScript("/js/popper.min.js"),
// app.loadScript("/js/bootstrap.min.js"),
// app.loadScript("/js/jquery.easing.1.3.js"),
// app.loadScript("/js/jquery.waypoints.min.js"),
// app.loadScript("/js/jquery.stellar.min.js"),
// app.loadScript("/js/owl.carousel.min.js"),
// app.loadScript("/js/jquery.magnific-popup.min.js"),
// app.loadScript("/js/aos.js"),
// app.loadScript("/js/jquery.animateNumber.min.js"),
// app.loadScript("/js/bootstrap-datepicker.js"),
// app.loadScript("/js/jquery.timepicker.min.js"),
// app.loadScript("/js/scrollax.min.js"),
// app.loadScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"),
// app.loadScript("/js/google-map.js"),
// app.loadScript("/js/vmain.js")

// cdn
// app.loadScript("https://maps.googleapis.com/maps/api/js")



app.mount('#app')
