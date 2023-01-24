<script setup>
import SidebarMainMenu from '@/components/organisms/Sidebar/SidebarMainMenu.vue'
import SidebarUserMenu from '@/components/organisms/Sidebar/SidebarUserMenu.vue'

import {
  ShopIcon,
  ArrowDownIcon,
  ArrowSwapHorizontalIcon
} from '@/assets/icons'
</script>

<template>
  <aside class="Sidebar relative text-white">
    <!-- Collapse Sidebar -->
    <div class="Collapse">
      <ArrowSwapHorizontalIcon
        class="ArrowSwapHorizontal-Icon h-6 w-6 stroke-[1.5px] text-[#101623]"
      />
    </div>

    <!-- Main -->
    <div class="Wrapper h-screen overflow-y-scroll px-4 py-6">
      <!-- Logo -->
      <img
        class="Logo relative mb-12 h-6 w-auto"
        src="/sidebar-makna-logo.png"
        alt="Makna.ai White Logo"
      />

      <!-- Store & Menus -->
      <button
        class="Store-Menus mb-10 flex w-full items-center justify-between rounded-xl bg-white/10 p-3 transition-colors duration-500 ease-in-out hover:bg-white/25"
      >
        <!-- Icon & Text -->
        <div class="Icon-Text flex items-center gap-3">
          <!-- Icon -->
          <div
            class="Icon flex h-10 w-10 items-center justify-center rounded-full bg-[#6DC7FF]"
          >
            <ShopIcon class="Shop-Icon h-6 w-6 stroke-[1.5px] text-[#101623]" />
          </div>

          <!-- Text -->
          <div class="Text space-y-1 text-white">
            <h3 class="Heading text-base font-semibold leading-5">Uno Music</h3>
            <p class="Balance text-netral-400 text-left text-xs">Rp 497.800</p>
          </div>
        </div>

        <!-- Icon: Arrow Down -->
        <ArrowDownIcon
          class="ArrowDown-Icon h-5 w-5 stroke-[1.5px] text-white"
        />
      </button>

      <!-- Main Menu -->
      <div class="mb-6">
        <SidebarMainMenu />
      </div>

      <!-- User Management -->
      <div class="mb-6">
        <SidebarUserMenu />
      </div>
    </div>
  </aside>
</template>

<style scoped lang="postcss">
.Collapse {
  @apply absolute top-4 -right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-[#E8EBF1] bg-white shadow-sm;
}
</style>
