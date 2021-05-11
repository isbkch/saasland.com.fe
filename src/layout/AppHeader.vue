<template>
  <header class="header-global">
    <base-nav class="navbar-main" transparent type="" effect="light" expand>
      <router-link slot="brand" class="navbar-brand mr-lg-5" to="/">
        <h3><strong>SaaS-</strong>Land</h3>
      </router-link>

      <div class="row" slot="content-header" slot-scope="{ closeMenu }">
        <div class="col-6 collapse-brand">
          <a
            href="/"
          >
            <h4><strong>SaaS-</strong>Land</h4>
          </a>
        </div>
        <div class="col-6 collapse-close">
          <close-button @click="closeMenu"></close-button>
        </div>
      </div>

      <ul class="navbar-nav navbar-nav-hover align-items-lg-center">
        <li class="nav-item">
          <a
            slot="title"
            href="/#/blog/"
            class="nav-link"
          >
            <span class="nav-link-inner--text">Blog</span>
          </a>
        </li>

        <li class="nav-item">
          <a
            slot="title"
            href="/#/videos/"
            class="nav-link"
          >
            <span class="nav-link-inner--text">Videos</span>
          </a>
        </li>

        <li class="nav-item">
          <a
            slot="title"
            href="/#/learn/"
            class="nav-link"
          >
            <span class="nav-link-inner--text">Learn</span>
          </a>
        </li>

        <li class="nav-item">
          <a
            slot="title"
            href="/#/patterns/"
            class="nav-link"
          >
            <span class="nav-link-inner--text">Patterns</span>
          </a>
        </li>

        <li class="nav-item">
          <a
            slot="title"
            href="/#/about/"
            class="nav-link"
          >
            <span class="nav-link-inner--text">About</span>
          </a>
        </li>
      </ul>
      <ul class="navbar-nav align-items-lg-center ml-lg-auto">
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://twitter.com/#"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Follow us on Twitter"
          >
            <i class="fa fa-twitter-square"></i>
            <span class="nav-link-inner--text d-lg-none">Twitter</span>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link nav-link-icon"
            href="https://github.com/#"
            target="_blank"
            rel="noopener"
            data-toggle="tooltip"
            title="Github repo"
          >
            <i class="fa fa-github"></i>
            <span class="nav-link-inner--text d-lg-none">Github</span>
          </a>
        </li>
      </ul>
    </base-nav>
  </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";

export default {
  components: {
    BaseNav
  },
};
</script>

<style>

h3 {
  color: white !important;
}

</style>
