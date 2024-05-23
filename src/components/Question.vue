<template>
  <div class="">
    <div v-for="comment in comments" :key="comment" class="mt-10">
        <p class="font-bold">{{ comment.question }}</p>
        <div class="flex gap-3 mt-2">
            <i class="icon ion-md-contact text-4xl"></i>
            <p class="mt-2"><span class="text-xs pr-1 text-gray-500 font-medium">by</span> {{ comment.name }}</p>
        </div>
        <div class="bg-green-50 p-5 rounded-xl mt-2 shadow-md">
            <p>Hi {{ comment.name }}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure asperiores, placeat commodi natus sunt iusto repellendus,</p>
            <div class="flex gap-3 mt-2">
                <div>
                    <i class="icon ion-md-contact text-4xl"></i>
                </div>
                <div>
                    <p class="font-bold">Tamilselvan</p>
                    <p class="text-xs text-gray-500">Lorem ipsum dolor</p>
                </div>
                <div class="ml-48 mt-2">
                    <i class="icon ion-md-thumbs-up border-2 border-green-500 text-green-500 text-xl px-3 py-[6px] rounded-full"></i>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Question',
    data() {
        return {
            comments: [
                { question: 'How do you achieve sharp focus?', name: 'Williamson' },
                { question: 'Do you really have to edit all your photo?', name: 'Jhon Wick' },
                { question: 'What edit software do you use?', name: 'Will Smith' },
            ]
        }
    },
}
</script>