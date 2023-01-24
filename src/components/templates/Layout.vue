<script setup>
import Sidebar from '@/components/organisms/Sidebar/Sidebar.vue'
import NotificationBingIcon from '@/assets/icons/NotificationBingIcon.vue'

const { title } = defineProps(['title'])
</script>

<template>
  <!-- Layout -->
  <div class="Layout relative">
    <!-- Header -->
    <header
      class="Header fixed top-0 left-0 z-50 h-full w-64 bg-primary-main 2xl:w-72"
    >
      <Sidebar />
    </header>

    <!-- Content -->
    <main class="Content relative z-0 ml-64 min-h-screen px-8 py-6 2xl:ml-72">
      <!-- Topbar -->
      <nav class="Topbar mb-8 flex items-center justify-between">
        <!-- Heading -->
        <h3 class="text-2xl font-bold leading-9">{{ title }}</h3>

        <div class="Right relative flex items-center gap-6">
          <div class="New-Notif relative">
            <div
              class="Tick absolute top-0 right-0.5 h-2 w-2 rounded-full bg-[#FF3366]"
            />
            <NotificationBingIcon
              class="h-6 w-6 stroke-[1.5px] text-[#444444]"
            />
          </div>

          <img
            class="Avatar h-10 w-10 rounded-full object-cover"
            src="/topbar-user-photo.png"
            alt="Topbar User Photo"
          />
        </div>
      </nav>

      <section class="Hello relative rounded-3xl">
        <slot />
      </section>
    </main>
  </div>
</template>
