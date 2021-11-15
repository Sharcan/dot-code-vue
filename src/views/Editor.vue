<template>
    <div class="editor">
        <div class="control-panel">
            Select language: 
            <select name="languages" id="languages" v-model="language">
                <option value="php">PHP</option>
                <option value="python">Python</option>
                <option value="javascript">Node JS</option>
            </select>
        </div>
        <div class="editor" id="editor"></div>

        <div class="button-container">
            <button class="btn" @click="executeCode">Run</button>
        </div>

        <div class="output">{{ output }}</div>
    </div>
</template>

<script>
    import * as monaco from 'monaco-editor'
    import $ from 'jquery'

    export default {
        name: 'Editor',
        data() {
            return {
                language: 'php',
                editor: null,
                output: null
            }
        },
        watch: {
            language(newVal) {
                monaco.editor.setModelLanguage(this.editor.getModel(), newVal);
            }
        },
        methods: {
            executeCode() {
                $.ajax({
                    url: 'http://localhost:3000/editor',
                    method: 'POST',
                    data: {
                        language: this.language,
                        code: monaco.editor.getModels()[0].getValue()
                    },
                    success: (res) => {
                        this.output = res;
                    }
                })
            }
        },
        mounted() {
            this.editor = monaco.editor.create(document.getElementById("editor"), {
                value: "<?php \n\nfunction hello() {\n\techo 'Hello world !';\n} \nhello();",
                language: "php",
                theme: 'vs-dark'
            });
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .control-panel {
        background: lightgray;
        text-align: right;
        padding: 4px;
        font-family: sans-serif;
    }

    .languages {
        background-color: white;
        border: 1px solid gray;
    }

    #editor {
        height: 400px;
    }

    .button-container {
        text-align: right;
        padding: 4px;
    }

    .btn {
        background-color: #696769;
        color: white;
        padding: 8px;
        border: 0;
        cursor: pointer;
    }

    .output {
        padding: 4px;
        border: 2px solid gray;
        min-height: 100px;
        width: 99%;
        resize: none;
    }
</style>
