<template>
  <div class="nav-bar">
    <router-link to="/">Home</router-link>
  </div>
  <router-view />
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

a {
  color: #1e7ec8;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}

.nav-bar {
  background-color: rgb(240, 240, 240);
  overflow: hidden;
}
.nav-bar a {
  float: left;
  color: black;
  text-align: center;
  padding: 15px;
  text-decoration: none;
}
.nav-bar a:hover {
  background-color: #ddd;
}
.nav-bar a.router-link-exact-active {
  background-color: rgb(210, 210, 210);
  cursor: default;
}

.text-center {
  text-align: center;
}
</style>
