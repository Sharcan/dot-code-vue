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
        <div class="editor" id="editor" @click="onIdeClick"></div>

        <div class="button-container">
            <button class="btn" @click="executeCode">Run</button>
        </div>

        <div class="output">{{ output }}</div>
    </div>
</template>

<script>
    import * as monaco from 'monaco-editor';
    import $ from 'jquery';
    import * as MonacoCollabExt from "@convergencelabs/monaco-collab-ext";

    export default {
        name: 'Editor',
        components: {},
        data() {
            return {
                language: 'php',
                editor: null,
                output: null,
                socketId: null,
                localCursor: null,
                remoteCursor: [],
                timeout: null
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
            },

            sharedCursorIde() {
              this.remoteCursorManager = new MonacoCollabExt.RemoteCursorManager({
                editor: this.editor,
                tooltips: true,
                tooltipDuration: 4
              });
            },

            remoteCursorCreation(user) {
              clearTimeout(this.timeout);
              console.log('remoteCursoCreation:', user)
              const newCursor = this.remoteCursorManager.addCursor(user.socketId,
                 '#' + Math.floor(Math.random()*16777215).toString(16), user.pseudo
              )
              this.remoteCursor.push({socketId:user.socketId, cursor: newCursor});

              newCursor.setPosition({column:1, lineNumber: 1});
              this.timeout = setTimeout(() => {
                newCursor.hide();
              }, 4000)
              console.log('remoteCursorList', this.remoteCursor)
            },

            onIdeClick() {
              this.$socket.client.emit('localCursorChange',
                  {socketId: this.socketId, position: this.editor.getPosition()}
              );
            },

            onIdeAction() {
              this.editor.onKeyUp(() => {
                this.$socket.client.emit('localCursorChange',
                    {socketId: this.socketId, position: this.editor.getPosition()}
                );
              })
            }
        },
        mounted() {
          this.editor = monaco.editor.create(document.getElementById("editor"), {
            value: "<?php \n\nfunction hello() {\n\techo 'Hello world !';\n} \nhello();",
            language: "php",
            theme: 'vs-dark'
          });

          this.sharedCursorIde();
          this.onIdeAction();
          this.$socket.client.emit('monacoPage');

        },

        sockets: {
            newUserLocal: function(values) {
                console.log('values: ', values);
                values.otherUsers.forEach(user => {
                  console.log('otherUsers:', user)
                  this.remoteCursorCreation({socketId: user, pseudo: 'test'});
                });
                this.socketId = values.socketId;
                const pseudo = prompt('Pseudo :');
                this.$socket.client.emit('newUserRemote', {socketId: values.socketId, pseudo: pseudo});
            },

            newUserRemote: function(user) {
                console.log('user: ', user);
                this.remoteCursorCreation(user);
            },

            remoteCursorChange: function(values) {
                clearTimeout(this.timeout)
                console.log(values, this.remoteCursor);
                const remoteCursor = this.remoteCursor.find((remoteCursor) => values.socketId === remoteCursor.socketId);
                remoteCursor.cursor.show();
                remoteCursor.cursor.setPosition(values.position);
                this.timeout = setTimeout(() => {
                  remoteCursor.cursor.hide();
                }, 4000)
            },

            disconnected: function (socketId) {
              console.log('disconnected : ', socketId);
              const remoteCursor = this.remoteCursor.find((remoteCursor) => socketId === remoteCursor.socketId);
              remoteCursor.cursor.dispose();
              const remoteCursorIndex = this.remoteCursor.findIndex((remoteCursor) => socketId === remoteCursor.socketId);
              console.log(remoteCursorIndex);
              this.remoteCursor.splice(remoteCursorIndex, 1);
            }
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
