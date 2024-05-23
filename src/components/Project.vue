<template>
  <div class="mt-5">
    <p class="pl-2 font-medium">Student Project</p>
    <div>
        <div v-for="project in projects" :key="project" class="mt-5">
            <img class="w-full h-56 rounded-xl opacity-75" :src="project.img" :title="project.title">
            <div class="flex justify-between px-7 -mt-16 z-20 relative text-white">
                <div>
                    <p class="font-bold">{{ project.title }}</p>
                    <div class="flex gap-3">
                        <i class="icon ion-md-contact text-3xl"></i>
                        <p class="mt-1.5">{{ project.name }}</p>
                    </div>                    
                </div>
                <div class="flex gap-2 mt-6 bg-[rgba(134,133,133,0.8)] mb-3 px-3 py-1 rounded-full">
                    <i class="icon ion-md-heart text-white text-lg"></i>
                    <p>{{ project.likes }}</p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Project',
    data() {
        return {
            projects: [
                { img: '../../public/img/approach.jpg', title: 'Blog of Photography Approach', name: 'Williamson', likes: 437 },
                { img: '../../public/img/field.jpg', title: 'Lesson from the field', name: 'Jhon Wick', likes: 309 },
                { img: '../../public/img/apple.jpg', title: 'An Apple a Day', name: 'Will Smith', likes: 475 },
            ]
        }
    },
}
</script>