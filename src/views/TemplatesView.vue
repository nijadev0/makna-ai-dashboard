<script setup>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

import Layout from '../components/templates/Layout.vue'

import {
  AddIcon,
  MenuIcon,
  CopyIcon,
  TrashIcon,
  WhatsappIcon,
  Element3Icon,
  TelegramIcon,
  InstagramIcon
} from '../assets/icons'
</script>

<template>
  <Layout title="Templates">
    <div class="Broadcast-Templates rounded-2xl bg-white p-4">
      <div class="Heading mb-6 flex w-full items-center justify-between">
        <h5 class="text-lg font-semibold leading-7">Your Channel</h5>

        <button
          class="Button flex items-center justify-center gap-2 rounded-lg bg-transparent bg-primary-main py-2.5 px-3 text-white"
        >
          <AddIcon class="h-5 w-5 stroke-white stroke-2" />

          <span class="text-sm font-semibold leading-5">
            Create New Channel
          </span>
        </button>
      </div>

      <!-- List Type: Table -->
      <div class="Table-Wrapper w-full">
        <section
          class="Table-Header flex w-full items-center justify-between rounded-xl bg-netral-200 p-4 text-netral-600"
        >
          <h5 class="Table-Head w-28 text-sm font-medium leading-6">
            Template Name
          </h5>

          <h5 class="Table-Head w-24 text-sm font-medium leading-6">
            Category
          </h5>

          <h5 class="Table-Head w-60 text-sm font-medium leading-6">Preview</h5>

          <h5 class="Table-Head w-20 text-sm font-medium leading-6">
            Language
          </h5>

          <h5 class="Table-Head w-24 text-sm font-medium leading-6">Status</h5>

          <h5 class="Table-Head w-11 text-sm font-medium leading-6">Action</h5>
        </section>

        <section class="Table-Body px-4">
          <!-- Table Data -->
          <div
            v-for="item in [1, 2, 3, 4, 5]"
            class="Table-Data flex items-center justify-between border-b border-netral-300 py-6 last:border-transparent"
          >
            <p class="Table-Content w-28 text-sm leading-6">test_template</p>

            <p class="Table-Content w-24 text-sm leading-6">Alert Update</p>

            <p class="Table-Content w-60 text-sm leading-6">
              Hai, selamat datang di akun res...
            </p>

            <div class="Table-Content w-20">
              <div
                class="flex w-fit items-center justify-center gap-2 rounded-lg bg-netral-200 py-1 px-2.5"
              >
                <img
                  class="Fleg h-5 w-5 object-cover"
                  src="/indonesia-flag-logo.png"
                  alt="Indonesia Flag"
                />
                <span class="text-sm leading-6"> ID </span>
              </div>
            </div>

            <div class="Table-Content w-24">
              <div
                class="Badge w-fit rounded-full bg-success-surface py-1.5 px-3 font-semibold text-success-main"
              >
                <span class="text-center text-[13px] leading-5">
                  Approved
                </span>
              </div>
            </div>

            <div class="Table-Content w-11">
              <button
                class="Button flex h-9 w-9 items-center justify-center rounded-lg border border-netral-300"
              >
                <TrashIcon class="h-5 w-5 stroke-error-main stroke-[1.5px]" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
</template>
