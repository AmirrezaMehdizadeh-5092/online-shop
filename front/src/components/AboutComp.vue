<template>
    <div id="aaa">
        <h1>{{a1a}}</h1>
    </div>
</template>
<script>
export default {
    name:"AboutComp",

    computed:{
        a1a()
        {
            return this.$store.state.cnt
        }
    }
}
</script>