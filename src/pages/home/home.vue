<template>
    <div>
        <h1>App</h1>
        <div>
            <a href="./login">Please click me, and let take you into the login page!!!</a>
        </div>
        <span>Before computed: {{ message }} </span>
        <br>
        <span>Afer computed: {{ computedMessage() }} </span>
        <a href="/sfdfsda" >linque</a>
    </div>
</template>
<script>
    export default {
        data() {
                return {
                    message: 'Hello World!'
                }
            },
            computed: {
                reversedMessage: function() {
                    return this.message.split('').reverse().join('')
                }
            },
            methods: {
                computedMessage: function() {
                    return this.message.split('').reverse().join('')
                }
            }
    }
</script>