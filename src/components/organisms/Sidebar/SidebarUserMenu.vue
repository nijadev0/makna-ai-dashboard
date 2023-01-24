<script setup>
import { ref } from 'vue'

import {
  ArrowDownIcon,
  UserSquareIcon,
  ProfileIcon,
  Profile2Icon,
  AirdropIcon,
  HeadphoneIcon
} from '@/assets/icons'

const sideMenuUserRef = ref(true)

function toggleSideMenuUser() {
  sideMenuUserRef.value = !sideMenuUserRef.value
}
</script>

<template>
  <!-- User Management Menu -->
  <div class="mb-6">
    <!-- Menus: Button -->
    <button
      @click="toggleSideMenuUser"
      class="Menus-UserManagement Menus-Button mb-3 flex items-center gap-2.5"
    >
      <!-- Icon: Arrow Down -->
      <ArrowDownIcon
        class="ArrowDown-Icon h-3.5 w-3.5 stroke-[1.5px] text-white"
        :class="!sideMenuUserRef && '-rotate-90 transform'"
      />

      <!-- Text -->
      <span class="Text text-sm font-semibold"> User Management </span>
    </button>

    <!-- Menus: User Main -->
    <div
      v-if="sideMenuUserRef"
      class="Menus-Users Menus-Items flex flex-col gap-2 pl-2"
    >
      <a
        class="Button flex items-center gap-4 rounded-full py-2.5 px-4 transition-colors duration-500 ease-in-out"
        href="/account-settings"
      >
        <!-- Icon -->
        <UserSquareIcon
          class="Home-2-Icon text-netral-400 h-5 w-5 stroke-[1.5px]"
        />

        <!-- Text -->
        <span class="Text text-netral-400 text-sm font-semibold"> Users </span>
      </a>

      <a
        class="Button relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        href="/account-settings"
      >
        <!-- Icon -->
        <Profile2Icon
          class="Home-2-Icon text-netral-400 h-5 w-5 stroke-[1.5px]"
        />

        <!-- Text -->
        <span class="Text text-netral-400 text-sm font-semibold"> Groups </span>
      </a>

      <a
        class="Button relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        href="/account-settings"
      >
        <!-- Icon -->
        <ProfileIcon
          class="Home-2-Icon text-netral-400 h-5 w-5 stroke-[1.5px]"
        />

        <!-- Text -->
        <span class="Text text-netral-400 text-sm font-semibold"> Users </span>
      </a>

      <a
        class="Button relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        href="/account-settings"
      >
        <!-- Icon -->
        <AirdropIcon
          class="Home-2-Icon text-netral-400 h-5 w-5 stroke-[1.5px]"
        />

        <!-- Text -->
        <span class="Text text-netral-400 text-sm font-semibold">
          Channels
        </span>
      </a>

      <a
        class="Button relative flex items-center gap-4 rounded-full py-3 px-4 transition-colors duration-500 ease-in-out"
        href="/account-settings"
      >
        <!-- Icon -->
        <HeadphoneIcon
          class="Home-2-Icon text-netral-400 h-5 w-5 stroke-[1.5px]"
        />

        <!-- Text -->
        <span class="Text text-netral-400 text-sm font-semibold"> Agents </span>
      </a>
    </div>
  </div>
</template>
