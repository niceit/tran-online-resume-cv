<template>
    <div>
        <div class="global-loader" v-if="this.$store.state.application.showPageLoader">
            <div class="global-loader-bg"></div>
            <div class="global-loader-content"></div>
        </div>
        <div id="page">
            <div id="content">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'App',
    components: { },
    methods: () => {

    }
})

</script>

<style>
@import "assets/css/bootstrap.min.css";
@import "assets/css/rtl/bootstrap.min.css";
@import "assets/css/main.css";
@import "assets/css/responsive.css";

.global-loader {
    position: fixed;
    height: 100%;
    width: 100%;
    z-index: 99999;
}

.overlay-loader {
    position: absolute;
    height: 100%;
    width: 100%;
    z-index: 9999;
    top: 0;
}

.global-loader-bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: #ffffff;
    opacity: 0.8;
    -moz-opacity: 0.8;
    z-index: 1;
}

.global-loader-content {
    position: relative;
    z-index: 2;
    top: 50%;
}

.global-loader-content .spinner {
    position: absolute;
    left: 50%;
}

.overlay-loader .global-loader-content {
    top: 10%
}

</style>
