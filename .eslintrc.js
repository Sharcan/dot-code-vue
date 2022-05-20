module.exports = {
    extends: [
        // 'eslint:recommended',
        'plugin:vue/vue3-essential',
        'plugin:vue/vue3-strongly-recommended',
        'plugin:vue/vue3-recommended',
    ],
    rules: {
        'vue/html-indent': ['warn', 'tab'],
        'vue/multi-word-component-names': 'off',
        'vue/require-default-prop': 'off',
        'vue/no-reserved-component-names': 'off', // TODO
        'vue/no-deprecated-v-on-native-modifier': 'off', // TODO
        'vue/no-template-shadow': 'off' // TODO
    }
}