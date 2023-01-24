<script setup>
import { ref } from 'vue'
import { RouterView, RouterLink } from 'vue-router'

import {
  ArrowDownIcon,
  Home2Icon,
  GraphIcon,
  MessageTextIcon,
  Messages3Icon,
  DeviceMessageIcon,
  TagRightIcon,
  NotificationIcon,
  Setting2Icon
} from '@/assets/icons'

const sideMenuMainRef = ref(true)

function toggleSideMenuMain() {
  sideMenuMainRef.value = !sideMenuMainRef.value
}
</script>

<template>
  <!-- Menus: Button -->
  <button
    @click="toggleSideMenuMain"
    class="Menus-Main Menus-Button mb-3 flex items-center gap-2.5"
  >
    <!-- Icon: Arrow Down -->
    <ArrowDownIcon
      class="ArrowDown-Icon h-3.5 w-3.5 stroke-[1.5px] text-white"
      :class="!sideMenuMainRef && '-rotate-90 transform'"
    />

    <!-- Text -->
    <span class="Text text-sm font-semibold"> Main Menu </span>
  </button>

  <!-- Menus: Items -->
  <div
    v-if="sideMenuMainRef"
    class="Menus-Main Menus-Items flex flex-col gap-2 pl-2"
  >
    <RouterView>
      <RouterLink
        class="Button flex items-center gap-4 rounded-full py-2.5 px-4 transition-colors duration-500 ease-in-out"
        to="/"
      >
        <!-- Icon -->
        <Home2Icon class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400" />

        <!-- Text -->
        <span class="Text text-sm font-semibold text-netral-400">
          Dashboard
        </span>
      </RouterLink>

      <RouterLink
        class="Button relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/"
      >
        <!-- Icon -->
        <GraphIcon class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400" />

        <!-- Text -->
        <span class="Text text-sm font-semibold text-netral-400">
          Reports
        </span>

        <ArrowDownIcon
          class="ArrowDown-Icon -trannetral-y-1/2 absolute top-1/2 right-4 h-5 w-5 stroke-[1.5px] text-white"
        />
      </RouterLink>

      <RouterLink
        class="Button relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/conversations"
      >
        <!-- Icon -->
        <MessageTextIcon
          class="Home-2-Icon text-primary-900 h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <span class="Text text-sm font-semibold text-netral-400">
          Conversations
        </span>
      </RouterLink>

      <RouterLink
        class="Button relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/broadcast-templates"
      >
        <!-- Icon -->
        <Messages3Icon
          class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <span class="Text text-sm font-semibold text-netral-400">
          Broadcast Templates
        </span>
      </RouterLink>

      <RouterLink
        class="Button relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/"
      >
        <!-- Icon -->
        <DeviceMessageIcon
          class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <span class="Text text-sm font-semibold text-netral-400">
          Quick Replies
        </span>
      </RouterLink>

      <RouterLink
        class="Button relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/"
      >
        <!-- Icon -->
        <TagRightIcon
          class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <span class="Text text-sm font-semibold text-netral-400"> Labels </span>
      </RouterLink>

      <RouterLink
        class="Button relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/notifications"
      >
        <!-- Icon -->
        <NotificationIcon
          class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <span class="Text text-sm font-semibold text-netral-400">
          Notification
        </span>
      </RouterLink>

      <RouterLink
        class="Button relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        to="/"
      >
        <!-- Icon -->
        <Setting2Icon
          class="Home-2-Icon h-5 w-5 stroke-[1.5px] text-netral-400"
        />

        <!-- Text -->
        <span class="Text text-sm font-semibold text-netral-400">
          Settings
        </span>
      </RouterLink>
    </RouterView>
  </div>
</template>

<style lang="postcss">
.router-link-active.router-link-exact-active.Button {
  @apply bg-accent-surface/10;
}

.router-link-active.router-link-exact-active.Button svg {
  @apply fill-accent-surface/25;
}

.router-link-active.router-link-exact-active.Button span {
  @apply text-accent-surface;
}
</style>
