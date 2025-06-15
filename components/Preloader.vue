<template>
    <div v-if="loading" id="preloader">
        <div id="loop" class="center"></div>
        <div id="bike-wrapper" class="center">
            <div id="bike" class="centerBike"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return { loading: true };
    },
    mounted() {
        const images = document.querySelectorAll("img");
        let loadedCount = 0;
        const totalImages = images.length;

        if (totalImages === 0) {
            this.loading = false;
        } else {
            const checkLoad = () => {
                loadedCount++;
                if (loadedCount === totalImages) {
                    this.loading = false;
                }
            };

            images.forEach((img) => {
                img.onload = checkLoad;
                img.onerror = checkLoad;
                if (img.complete) {
                    checkLoad();
                }
            });
        }
    },
};
</script>

<style scoped>
#preloader {
    background-color: #214080;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 9999;
    overflow: hidden;
}

.center {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
}

.centerBike {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: 26px;
    margin-left: -12px;
}

#loop {
    height: 100px;
    width: 100px;
    border: theme('colors.secondary') solid 4px;
    /* Replace with your theme secondary color if needed */
    border-radius: 200px;
}

#loop::before {
    background: linear-gradient(to left,
            rgba(187, 95, 39, 0) 0%,
            theme('colors.secondary') 30%,
            /* Replace with theme secondary color */
            theme('colors.secondary') 70%,
            rgba(187, 95, 39, 0) 100%);
    content: "";
    display: block;
    height: 4px;
    left: -100px;
    position: relative;
    top: 95px;
    width: 300px;
}

#bike-wrapper {
    height: 108px;
    width: 108px;
    animation: drive 3s linear infinite;
}

#bike {
    height: 24px;
    width: 25px;
    background-image: url("https://s3-us-west-2.amazonaws.com/s.cdpn.io/133687/motorbike.png");
}

@keyframes drive {
    0% {
        margin-left: -364px;
        opacity: 0;
    }

    33.33% {
        transform: rotate(0deg);
        margin-left: -50px;
        opacity: 1;
    }

    66.66% {
        transform: rotate(-360deg);
        margin-left: -50px;
        opacity: 1;
    }

    100% {
        margin-left: 264px;
        transform: rotate(-360deg);
        opacity: 0;
    }
}
</style>