<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderTemplate from './components/AppHeader.vue'
import FooterTemplate from './components/AppFooter.vue'

</script>

<template>
  <div>
    <header id="header" class="header fixed-top" data-scrollto-offset="0">
      <HeaderTemplate />
    </header>

    <!-- <div class="container">
      <main id="main">
        <RouterView></RouterView>
      </main>
    </div> -->
    <RouterView></RouterView>
    <footer id="footer" class="footer">
      <FooterTemplate />
    </footer>
  </div>
  <!-- <header>


    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView /> -->
</template>

<script>
export default {

setup() {
  const recaptchaScript = document.createElement("script");
  recaptchaScript.setAttribute(
    "src",
    "https://www.google.com/recaptcha/api.js"
  );
  document.head.appendChild(recaptchaScript);
} }

</script>

