<template>
    <div class="hi">COMMING SOON</div>
</template>
<script>
import { Loading } from '../lib/Loading';

export default {
    mounted() {
        this.startLoading();
    },
    methods: {
        startLoading() {
            let _loading = (window[Symbol.for('_loading')] = new Loading());
            setTimeout(() => {
                _loading.destroy().then(() => {
                    document.querySelector('.hi').style.display = 'block';
                });
            }, 3000);
        }
    }
};
</script>
<style>
.hi {
    font-size: 40px;
    display: none;
    font-family: monospace, Consolas;
    font-weight: 400;
    overflow: hidden;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    height: 1em;
    line-height: 1em;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.5);
}
.ld-words {
    font-family: monospace, Consolas;
    font-weight: 400;
    overflow: hidden;
    text-align: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    color: #fff;
    font-size: 30px;
    height: 1em;
    line-height: 1em;
    text-shadow: 0 0 10px rgba(0, 0, 0, 0.5), 0 0 5px rgba(0, 0, 0, 0.5);
}

.ld-words span {
    width: 1em;
    display: inline-block;
    -webkit-transform: translateX(100%) scale(0.75);
    transform: translateX(100%) scale(0.75);
    -webkit-transition: -webkit-transform 300ms;
    transition: -webkit-transform 300ms;
    transition: transform 300ms;
    transition: transform 300ms, -webkit-transform 300ms;
}

.ld-words .done {
    color: #000;
    -webkit-transform: translateX(0) scale(1);
    transform: translateX(0) scale(1);
}
</style>
