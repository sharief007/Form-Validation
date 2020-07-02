 <template>
   <div id="app">
      <editor
            api-key="5wfooxle8d6q5dtdskswj57oaqicvgujn72yi60fui25tkwv"
            :init= "options"
            :menubar="false"
            v-model="content"
        />
        <p>{{content}}</p>
   </div>
 </template>

 <script>
 import Editor from '@tinymce/tinymce-vue'

 export default {
   name: 'app',
   components: {
     'editor': Editor
   },
   data() {
       return {
           options: {
                height: '100vh',
                menubar: false,
                skin: 'bootstrap',
                plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
                ],
                toolbar:
                'undo redo | formatselect | bold italic backcolor | \
                alignleft aligncenter alignright alignjustify | \
                bullist numlist outdent indent | link image media | removeformat | help'
            },
            content: ''
       }
   }
 }
 </script>
