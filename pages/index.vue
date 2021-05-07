/*
SPDX-FileCopyrightText: 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
SPDX-License-Identifier: MIT-0
*/

<template>
  <div class="container">
    <div>
      <Logo />

      <h1 class="title">Welcome to <strong>SaaS</strong> Land</h1>
      <div class="links">
        <a href="/blogs" class="button--green"> Blog </a>
        <a href="/videos" class="button--grey"> Videos </a>
        <a href="/learn" class="button--grey"> Learn </a>
        <a href="/patterns" class="button--grey"> Patterns </a>
        <a href="/about" class="button--green"> About </a>
      </div>

      <Footer />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
