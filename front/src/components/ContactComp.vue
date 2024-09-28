<template>
    <div id="gg">
        <h1 @click="aa">fdf</h1>
    </div>
</template>
<script>
export default {
    name:"AboutComp",
    methods:{
        aa()
        {
            console.log(this.$store.state.cnt)

            this.$store.state.cnt++;
            console.log(this.$store.state.cnt)
        }
    }
}
</script>