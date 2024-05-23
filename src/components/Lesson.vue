<template>
  <div>
    <div class="flex justify-center mt-5">
        <img class="rounded-xl" src="../../public/img/photography.jpg" title="Photography" height="400" width="400">
    </div>
    <div class="bg-gray-200 shadow-md py-3 mx-10 relative z-20 rounded-xl -mt-8">
        <div class="flex justify-center bg-green-500 text-white mx-3 gap-5 py-2 rounded-xl">
            <p class="text-xl">Play Lesson</p>
            <i class="icon ion-md-play text-xl mt-0.5"></i>
        </div>
    </div>
    <div class="mt-10">
        <div>
            <p class="text-lg font-medium">Photography : Capture and <br> Share Your Life</p>
        </div>
        <div class="flex gap-5 mt-3">
            <div class="flex gap-2">
                <div class="flex gap-[2px]">
                    <p class="text-xs pt-2 font-bold text-green-600">|</p>
                    <p class="text-sm pt-1 font-bold">|</p>
                    <p class="pt-[1px] font-bold">|</p>
                 </div>
                <p class="sm mt-[5px]">Beginner</p>
            </div>
            <div class="flex gap-2">
                <i class="icon ion-ios-people text-2xl text-green-500"></i>
                <p class="sm mt-[5px]">1.5k Subscripers</p>
            </div>
            <div class="flex gap-2">
                <i class="icon ion-md-star text-2xl text-green-500"></i>
                <p class="sm mt-[5px]">4.5</p>
            </div>
        </div>
    </div>
    <div class="mt-5">
        <p class="text-sm text-gray-500 font-medium">Account by</p>
        <div class="flex gap-8 mt-5">
            <div>
                <i class="icon ion-md-contact text-5xl"></i>
            </div>
            <div>
                <p class="font-bold">Tamilselvan</p>
                <p class="text-sm text-gray-500 font-medium">Lorem ipsum dolor sit</p>
            </div>
            <div>
                <p class="text-sm bg-green-200 py-1 px-3 font-bold text-green-600 ml-20">view profile</p>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Lesson'
}
</script>