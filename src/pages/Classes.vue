<template>
  <div class="bg-gray-200 pb-5 px-7">
    <div class="flex justify-between pt-5">
        <i class="icon ion-ios-arrow-back text-2xl" @click="goBack"></i>
        <i class="icon ion-md-bookmark text-3xl text-green-500"></i>
    </div>
    <div class="mt-5">
        <div class="flex justify-around text-gray-500 font-medium">
            <p class="cursor-pointer hover:duration-300 hover:border-b-[3px] hover:border-green-500 hover:pb-1" @click="selectors( 'lesson' )" :class="{ 'border-b-[3px] border-b-green-500 pb-1' : selected === 'lesson'}">Lesson</p>
            <p class="cursor-pointer hover:duration-300 hover:border-b-[3px] hover:border-green-500 hover:pb-1" @click="selectors( 'project' )" :class="{ 'border-b-[3px] border-b-green-500 pb-1' : selected === 'project'}">Project</p>
            <p class="cursor-pointer hover:duration-300 hover:border-b-[3px] hover:border-green-500 hover:pb-1" @click="selectors( 'question' )" :class="{ 'border-b-[3px] border-b-green-500 pb-1' : selected === 'question'}">Question</p>
        </div>
        <Lesson v-if="selected == 'lesson'"></Lesson>
        <project v-if="selected == 'project'"></project>
        <Question v-if="selected == 'question'"></Question>
    </div>
  </div>
</template>

<script>
import Lesson from '@/components/Lesson.vue';
import Project from '@/components/Project.vue';
import Question from '@/components/Question.vue';
import { mixins } from '@/utils/mixins';

export default {
  components: { Lesson, Project, Question },
  name: 'Classes',
  mixins: [ mixins ],
  data() {
    return {
        selected: 'lesson'
    }
  },
  
  methods: {
    selectors(select) {
      if (this.selected == select) return;
      this.selected = select;
    }
  },
}
</script>

<style>

</style>