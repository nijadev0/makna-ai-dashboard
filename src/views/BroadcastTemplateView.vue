<script setup>
import Layout from '../components/templates/Layout.vue'

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'

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
  <Layout title="Broadcast Templates">
    <div class="Broadcast-Templates rounded-2xl bg-white p-4">
      <TabGroup>
        <div class="Heading mb-6 flex w-full items-center justify-between">
          <h5 class="text-lg font-semibold leading-7">Your Channel</h5>
          <TabList class="Actions flex items-center gap-3">
            <Tab as="template" v-slot="{ selected }">
              <button
                class="Button flex h-10 w-10 items-center justify-center rounded-lg outline-none ring-1 ring-inset"
                :class="
                  selected
                    ? 'bg-netral-200 ring-transparent'
                    : 'bg-transparent ring-netral-300'
                "
              >
                <Element3Icon
                  class="h-5 w-5 stroke-netral-800 stroke-[1.5px]"
                />
              </button>
            </Tab>

            <Tab as="template" v-slot="{ selected }">
              <button
                class="Button flex h-10 w-10 items-center justify-center rounded-lg outline-none ring-1 ring-inset"
                :class="
                  selected
                    ? 'bg-netral-200 ring-transparent'
                    : 'bg-transparent ring-netral-300'
                "
              >
                <MenuIcon class="h-5 w-5 stroke-netral-800 stroke-[1.5px]" />
              </button>
            </Tab>

            <button
              class="Button flex items-center justify-center gap-2 rounded-lg bg-transparent bg-primary-main py-2.5 px-3 text-white"
            >
              <AddIcon class="h-5 w-5 stroke-white stroke-2" />

              <span class="text-sm font-semibold leading-5">
                Create New Channel
              </span>
            </button>
          </TabList>
        </div>

        <TabPanels>
          <!-- List Type: Card -->
          <TabPanel>
            <div class="Card-Wrapper grid grid-cols-3 gap-4">
              <div
                @click="$router.push('/broadcast-templates/templates')"
                class="Card flex cursor-pointer flex-col items-center rounded-xl border border-netral-300 p-7 shadow-primary transition-colors duration-500 ease-in-out hover:bg-netral-200/50"
              >
                <WhatsappIcon
                  class="mb-4 h-16 w-16 stroke-netral-900 stroke-[1.5px]"
                />

                <h3 class="Heading mb-1.5 text-lg font-semibold leading-6">
                  Marketing Admin
                </h3>

                <p class="Platform mb-4 text-netral-600">Whatsapp</p>

                <div class="Divider mb-4 h-px w-72 bg-netral-300" />

                <p class="Text-Number mb-4 font-medium leading-6">
                  +62 8123 4567 890
                </p>

                <div
                  class="Copy flex justify-center gap-3 rounded-lg bg-netral-200 px-4 py-2"
                >
                  <CopyIcon class="h-5 w-5 stroke-[1.5px] text-netral-900" />

                  <span class="text-sm leading-5 text-netral-700">
                    web.api.makna.io/api=17381292197
                  </span>
                </div>
              </div>

              <div
                @click="$router.push('/broadcast-templates/templates')"
                class="Card flex cursor-pointer flex-col items-center rounded-xl border border-netral-300 p-7 shadow-primary transition-colors duration-500 ease-in-out hover:bg-netral-200/50"
              >
                <TelegramIcon
                  class="mb-4 h-16 w-16 stroke-netral-900 stroke-[1.5px]"
                />

                <h3 class="Heading mb-1.5 text-lg font-semibold leading-6">
                  Marketing Telegram
                </h3>
                <p class="Platform mb-4 text-netral-600">Telegram</p>
                <div class="Divider mb-4 h-px w-72 bg-netral-300" />
                <p class="Text-Number mb-4 font-medium leading-6">
                  @Admin_Makna
                </p>

                <div
                  class="Copy flex justify-center gap-3 rounded-lg bg-netral-200 px-4 py-2"
                >
                  <CopyIcon class="h-5 w-5 stroke-[1.5px] text-netral-900" />
                  <span class="text-sm leading-5 text-netral-700">
                    web.api.makna.io/api=17381292197
                  </span>
                </div>
              </div>

              <div
                @click="$router.push('/broadcast-templates/templates')"
                class="Card flex cursor-pointer flex-col items-center rounded-xl border border-netral-300 p-7 shadow-primary transition-colors duration-500 ease-in-out hover:bg-netral-200/50"
              >
                <InstagramIcon
                  class="mb-4 h-16 w-16 stroke-netral-900 stroke-[1.5px]"
                />

                <h3 class="Heading mb-1.5 text-lg font-semibold leading-6">
                  Instagram Promosi
                </h3>
                <p class="Platform mb-4 text-netral-600">Instagram</p>
                <div class="Divider mb-4 h-px w-72 bg-netral-300" />
                <p class="Text-Number mb-4 font-medium leading-6">@makna_jos</p>

                <div
                  class="Copy flex justify-center gap-3 rounded-lg bg-netral-200 px-4 py-2"
                >
                  <CopyIcon class="h-5 w-5 stroke-[1.5px] text-netral-900" />
                  <span class="text-sm leading-5 text-netral-700">
                    web.api.makna.io/api=17381292197
                  </span>
                </div>
              </div>
            </div>
          </TabPanel>

          <!-- List Type: Table -->
          <TabPanel>
            <div class="Table-Wrapper w-full">
              <section
                class="Table-Header flex w-full items-center justify-between rounded-xl bg-netral-200 p-4 text-netral-600"
              >
                <h5 class="Table-Head w-36 text-sm font-medium leading-6">
                  Channel Type
                </h5>

                <h5 class="Table-Head w-32 text-sm font-medium leading-6">
                  Channel Name
                </h5>

                <h5 class="Table-Head w-40 text-sm font-medium leading-6">
                  Channel Code
                </h5>

                <h5 class="Table-Head w-72 text-sm font-medium leading-6">
                  URL Webhook
                </h5>

                <h5 class="Table-Head w-11 text-sm font-medium leading-6">
                  Action
                </h5>
              </section>

              <section class="Table-Body px-4">
                <!-- Table Data -->
                <div
                  class="Table-Data flex items-center justify-between border-b border-netral-300 py-6 last:border-transparent"
                >
                  <div class="Table-Content flex w-36 items-center gap-2">
                    <WhatsappIcon
                      class="Whatsapp-Icon h-5 w-5 stroke-netral-700 stroke-[1.5px]"
                    />
                    <span class="Text text-sm leading-6 text-netral-900">
                      Whatsapp
                    </span>
                  </div>

                  <p class="Table-Content w-32">test_wa</p>

                  <p class="Table-Content w-40">+62 8123 4567 890</p>

                  <div
                    class="Table-Content flex w-72 justify-center gap-3 rounded-lg bg-netral-200 px-4 py-2"
                  >
                    <CopyIcon class="h-5 w-5 stroke-[1.5px] text-netral-900" />

                    <span class="text-sm leading-5 text-netral-700">
                      web.api.makna.io/api=17381292197
                    </span>
                  </div>

                  <div class="Table-Content w-11">
                    <button
                      class="Button flex h-9 w-9 items-center justify-center rounded-lg border border-netral-300"
                    >
                      <TrashIcon
                        class="h-5 w-5 stroke-error-main stroke-[1.5px]"
                      />
                    </button>
                  </div>
                </div>

                <!-- Table Data -->
                <div
                  class="Table-Data flex items-center justify-between border-b border-netral-300 py-6 last:border-transparent"
                >
                  <div class="Table-Content flex w-36 items-center gap-2">
                    <TelegramIcon
                      class="Whatsapp-Icon h-5 w-5 stroke-netral-700 stroke-[1.5px]"
                    />
                    <span class="Text text-sm leading-6 text-netral-900">
                      Telegram
                    </span>
                  </div>

                  <p class="Table-Content w-32">test_tele</p>

                  <p class="Table-Content w-40">@admin_makna</p>

                  <div
                    class="Table-Content flex w-72 justify-center gap-3 rounded-lg bg-netral-200 px-4 py-2"
                  >
                    <CopyIcon class="h-5 w-5 stroke-[1.5px] text-netral-900" />

                    <span class="text-sm leading-5 text-netral-700">
                      web.api.makna.io/api=17381292197
                    </span>
                  </div>

                  <div class="Table-Content w-11">
                    <button
                      class="Button flex h-9 w-9 items-center justify-center rounded-lg border border-netral-300"
                    >
                      <TrashIcon
                        class="h-5 w-5 stroke-error-main stroke-[1.5px]"
                      />
                    </button>
                  </div>
                </div>

                <!-- Table Data -->
                <div
                  class="Table-Data flex items-center justify-between border-b border-netral-300 py-6 last:border-transparent"
                >
                  <div class="Table-Content flex w-36 items-center gap-2">
                    <InstagramIcon
                      class="Whatsapp-Icon h-5 w-5 stroke-netral-700 stroke-[1.5px]"
                    />
                    <span class="Text text-sm leading-6 text-netral-900">
                      Instagram
                    </span>
                  </div>

                  <p class="Table-Content w-32">test_instagram</p>

                  <p class="Table-Content w-40">@makna_jos</p>

                  <div
                    class="Table-Content flex w-72 justify-center gap-3 rounded-lg bg-netral-200 px-4 py-2"
                  >
                    <CopyIcon class="h-5 w-5 stroke-[1.5px] text-netral-900" />

                    <span class="text-sm leading-5 text-netral-700">
                      web.api.makna.io/api=17381292197
                    </span>
                  </div>

                  <div class="Table-Content w-11">
                    <button
                      class="Button flex h-9 w-9 items-center justify-center rounded-lg border border-netral-300"
                    >
                      <TrashIcon
                        class="h-5 w-5 stroke-error-main stroke-[1.5px]"
                      />
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  </Layout>
</template>
