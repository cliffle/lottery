<template>
  <div class="welcome-container">
    <h1 class="text-center">Welcome to NorthLotto</h1>
    <h3 class="text-center">Check the Latest Lotto Results</h3>
    <router-link class="text-center" to="/eurojackpot">EuroJackpot</router-link>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.welcome-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
</style>
