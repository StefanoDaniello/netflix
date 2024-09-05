<template>
    <footer class="bg-black">
        <div class="container pt-3">
            <div class="row text-center">
                <ul class="col-6">
                    <h1 class="text-white ">Social</h1>
                    <li v-for="(social, index) in socials" :key="index" class="text-white">
                        <a href="#">{{ social }}</a>
                    </li>
                </ul>
                <ul class="col-6">
                    <h1 class="text-white ">Contattaci</h1>
                    <li v-for="(conatt, index) in conatti" :key="index" class="text-white">
                        <a href="#">{{ conatt }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: "FooterComponents",
    data() {
        return {
            socials: [
                "Facebook",
                "Twitter",
                "Instagram",
                "Youtube",
            ],
            conatti: [
                "Contattaci",
                "FAQ",
                "Privacy",
                "Cookies",
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
ul {
    list-style-type: none;

    a {
        text-decoration: none;
        color: white;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>