<template>
    <footer class="container">
        <div class="row text-center">
            <div class="col-6">
                <h1 class="text-white ms-4">Social</h1>
                <ul>
                    <li v-for="(social, index) in socials" :key="index" class="text-white">
                       <a href="#">{{ social }}</a> 
                    </li>
                </ul>
            </div>
            <div class="col-6">
                <h1 class="text-white ms-4">Contattaci</h1>
                <ul>
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
        name:"FooterComponents",
        data(){
            return{
                socials:[
                    "Facebook",
                    "Twitter",
                    "Instagram",
                    "Youtube",
                ],
                conatti:[
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
ul{
    list-style-type: none;
    a{
        text-decoration: none;
        color: white;
        &:hover{
            text-decoration: underline;
        }
    }
}
</style>