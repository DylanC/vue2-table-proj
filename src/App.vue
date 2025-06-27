<template>
  <div id="app">
    <div>
      <fade-transition>
          <router-view />
      </fade-transition>
    </div>
</div>
</template>

<script>
export default {
  name: 'App'
}
</script>
