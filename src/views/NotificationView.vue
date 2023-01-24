<script setup>
import { ref } from 'vue'

import {
  Listbox,
  ListboxButton,
  ListboxOptions,
  ListboxOption
} from '@headlessui/vue'

import Layout from '@/components/templates/Layout.vue'

import {
  TickIcon,
  ArrowDownIcon,
  DocumentUploadIcon,
  QuestionMarkCircleIcon
} from '@/assets/icons'

const senderType = [
  { id: 1, name: 'Whatsapp', unavailable: false },
  { id: 2, name: 'Telegram', unavailable: false }
]
const selectedSender = ref(senderType[0])

const recipientType = [
  { id: 1, name: 'CSV Database', unavailable: false },
  { id: 2, name: 'EXC File', unavailable: false }
]

const selectedRecipient = ref(recipientType[0])

const templateType = [
  { id: 1, name: 'template_name', unavailable: false },
  { id: 2, name: 'template_notif', unavailable: false }
]

const selectedTemplate = ref(templateType[0])

const activeStepRef = ref(0)

function nextStepRef() {
  activeStepRef.value = activeStepRef.value + 1
}
</script>

<template>
  <Layout title="Notifications">
    <div class="Notification grid grid-cols-7 gap-4">
      <div
        class="Notification-Left col-span-4 flex items-start rounded-3xl bg-white p-4"
      >
        <!-- Step-Heading -->
        <div class="Step space-y-3 pr-4">
          <div
            class="w-28 rounded-xl border p-3"
            :class="
              activeStepRef === 0
                ? 'border-[#6DC7FF] bg-[#6DC7FF] bg-opacity-[0.08]'
                : 'border-transparent'
            "
          >
            <div
              class="mb-3 flex h-7 w-7 items-center justify-center rounded-full"
              :class="
                activeStepRef === 0
                  ? 'bg-[#6DC7FF] text-white'
                  : 'bg-netral-300 text-netral-900'
              "
            >
              <TickIcon
                v-if="activeStepRef > 0"
                class="h-5 w-5 stroke-netral-600 stroke-2"
              />
              <span v-if="activeStepRef <= 0" class="font-medium leading-5">
                1
              </span>
            </div>

            <span
              class="mb-0.5 text-xs font-bold uppercase leading-5 text-netral-500"
            >
              STEP 1
            </span>
            <h5 class="text-sm font-medium leading-5">Channel & Recipients</h5>
          </div>

          <div
            class="w-28 rounded-xl border p-3"
            :class="
              activeStepRef === 1
                ? 'border-[#6DC7FF] bg-[#6DC7FF] bg-opacity-[0.08]'
                : 'border-transparent'
            "
          >
            <div
              class="mb-3 flex h-7 w-7 items-center justify-center rounded-full"
              :class="
                activeStepRef === 1
                  ? 'bg-[#6DC7FF] text-white'
                  : 'bg-netral-300 text-netral-900'
              "
            >
              <TickIcon
                v-if="activeStepRef > 1"
                class="h-5 w-5 stroke-netral-600 stroke-2"
              />
              <span v-if="activeStepRef <= 1" class="font-medium leading-5">
                2
              </span>
            </div>

            <span
              class="mb-0.5 text-xs font-bold uppercase leading-5 text-netral-500"
            >
              STEP 2
            </span>

            <h5 class="text-sm font-medium leading-5">Message</h5>
          </div>

          <div
            class="w-28 rounded-xl border p-3"
            :class="
              activeStepRef === 2
                ? 'border-[#6DC7FF] bg-[#6DC7FF] bg-opacity-[0.08]'
                : 'border-transparent'
            "
          >
            <div
              class="mb-3 flex h-7 w-7 items-center justify-center rounded-full"
              :class="
                activeStepRef === 2
                  ? 'bg-[#6DC7FF] text-white'
                  : 'bg-netral-300 text-netral-900'
              "
            >
              <TickIcon
                v-if="activeStepRef > 2"
                class="h-5 w-5 stroke-netral-600 stroke-2"
              />
              <span v-if="activeStepRef <= 2" class="font-medium leading-5">
                3
              </span>
            </div>

            <span
              class="mb-0.5 text-xs font-bold uppercase leading-5 text-netral-500"
            >
              STEP 3
            </span>
            <h5 class="text-sm font-medium leading-5">Send Time</h5>
          </div>

          <div
            class="w-28 rounded-xl border p-3"
            :class="
              activeStepRef === 3
                ? 'border-[#6DC7FF] bg-[#6DC7FF] bg-opacity-[0.08]'
                : 'border-transparent'
            "
          >
            <div
              class="mb-3 flex h-7 w-7 items-center justify-center rounded-full"
              :class="
                activeStepRef === 3
                  ? 'bg-[#6DC7FF] text-white'
                  : 'bg-netral-300 text-netral-900'
              "
            >
              <TickIcon
                v-if="activeStepRef > 3"
                class="h-5 w-5 stroke-netral-600 stroke-2"
              />
              <span v-if="activeStepRef <= 3" class="font-medium leading-5">
                4
              </span>
            </div>

            <span
              class="mb-0.5 text-xs font-bold uppercase leading-5 text-netral-500"
            >
              STEP 4
            </span>
            <h5 class="text-sm font-medium leading-5">Confirmation</h5>
          </div>
        </div>

        <!-- Divider -->
        <div class="Divider h-full w-px bg-netral-300"></div>

        <!-- Step-Content: 1 -->
        <div
          v-if="activeStepRef == 0"
          class="Step-Content w-full space-y-8 px-4"
        >
          <!-- Sender -->
          <div class="Sender-Type relative z-20">
            <div class="Heading mb-3 space-y-0.5">
              <h3 class="Heading-H3 mb-0.5 text-base font-semibold leading-6">
                Recipient Type
              </h3>
              <p class="Text text-sm leading-5 text-[#515966]">
                Choose what source of recipients to broadcast.
              </p>
            </div>

            <Listbox v-model="selectedSender" as="div" class="Select relative">
              <ListboxButton
                class="Select-Option flex w-full items-center justify-between rounded-lg border border-netral-300 px-4 py-3"
                style="box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05)"
              >
                <span class="text-sm leading-5">
                  {{ selectedSender.name }}
                </span>
                <ArrowDownIcon class="ArrowDown-Icon h-5 w-5 stroke-[1.5px]" />
              </ListboxButton>
              <ListboxOptions
                class="Select-List absolute top-full z-10 w-full rounded-xl border border-netral-300 bg-white py-4"
                style="box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05)"
              >
                <ListboxOption
                  class="cursor-pointer bg-white py-2 px-4 text-sm leading-5 hover:bg-netral-200"
                  v-for="platform in senderType"
                  :key="platform.id"
                  :value="platform"
                  :disabled="platform.unavailable"
                >
                  {{ platform.name }}
                </ListboxOption>
              </ListboxOptions>
            </Listbox>
          </div>

          <!-- Recipient Type -->
          <div class="Recipient-Type relative z-10">
            <div class="Heading mb-3 space-y-0.5">
              <h3 class="Heading-H3 mb-0.5 text-base font-semibold leading-6">
                Recipient Type
              </h3>
              <p class="Text text-sm leading-5 text-[#515966]">
                Choose what source of recipients to broadcast.
              </p>
            </div>

            <Listbox
              v-model="selectedRecipient"
              as="div"
              class="Select relative"
            >
              <ListboxButton
                class="Select-Option flex w-full items-center justify-between rounded-lg border border-netral-300 px-4 py-3"
                style="box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05)"
              >
                <span class="text-sm leading-5">
                  {{ selectedRecipient.name }}
                </span>
                <ArrowDownIcon class="ArrowDown-Icon h-5 w-5 stroke-[1.5px]" />
              </ListboxButton>
              <ListboxOptions
                class="Select-List absolute top-full w-full rounded-xl border border-netral-300 bg-white py-4"
                style="box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05)"
              >
                <ListboxOption
                  class="cursor-pointer py-2 px-4 text-sm leading-5 hover:bg-netral-200"
                  v-for="fileType in recipientType"
                  :key="fileType.id"
                  :value="fileType"
                  :disabled="fileType.unavailable"
                >
                  {{ fileType.name }}
                </ListboxOption>
              </ListboxOptions>
            </Listbox>
          </div>

          <!-- Recipient Type -->
          <div class="Recipient-Type relative z-0">
            <div class="Heading mb-3 space-y-0.5">
              <h3 class="Heading-H3 mb-0.5 text-base font-semibold leading-6">
                Upload Document
              </h3>
              <p class="Text text-sm leading-5 text-[#515966]">
                Choose source of label which you want to send.
              </p>
            </div>

            <div
              class="Upload-File relative flex h-40 flex-col items-center justify-center gap-2 rounded-lg border border-netral-300"
            >
              <DocumentUploadIcon
                class="DocumentUpload-Icon h-6 w-6 stroke-netral-900"
              />
              <span class="text-sm leading-5 text-netral-800">
                example-csv.csv
              </span>

              <input
                type="file"
                class="Input absolute top-0 left-0 h-40 w-full cursor-pointer opacity-0"
              />
            </div>
          </div>

          <div class="flex w-full justify-end">
            <button
              @click="nextStepRef"
              class="rounded-lg bg-primary-main py-[13px] px-4 text-sm font-semibold leading-5 text-white"
            >
              Continue
            </button>
          </div>
        </div>

        <!-- Step-Content: 2 -->
        <div
          v-if="activeStepRef == 1"
          class="Step-Content w-full space-y-8 px-4"
        >
          <!-- Sender -->
          <div class="Sender-Type relative z-20">
            <div class="Heading mb-3 space-y-0.5">
              <h3 class="Heading-H3 mb-0.5 text-base font-semibold leading-6">
                Batch Name
              </h3>
              <p class="Text text-sm leading-5 text-[#515966]">
                Input broadcast batch name to help you recognize broadcast
                segmentation.
              </p>
            </div>

            <input
              type="text"
              placeholder="Batch"
              style="box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05)"
              class="Select-Option flex w-full items-center justify-between rounded-lg border border-netral-300 px-4 py-3"
            />
          </div>

          <!-- Recipient Type -->
          <div class="Recipient-Type relative z-10">
            <div class="Heading mb-3 space-y-0.5">
              <h3 class="Heading-H3 mb-0.5 text-base font-semibold leading-6">
                Template Type
              </h3>
              <p class="Text text-sm leading-5 text-[#515966]">
                Select template you want to use.
              </p>
            </div>

            <Listbox
              v-model="selectedTemplate"
              as="div"
              class="Select relative"
            >
              <ListboxButton
                class="Select-Option flex w-full items-center justify-between rounded-lg border border-netral-300 px-4 py-3"
                style="box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05)"
              >
                <span class="text-sm leading-5">
                  {{ selectedTemplate.name }}
                </span>
                <ArrowDownIcon class="ArrowDown-Icon h-5 w-5 stroke-[1.5px]" />
              </ListboxButton>
              <ListboxOptions
                class="Select-List absolute top-full w-full rounded-xl border border-netral-300 bg-white py-4"
                style="box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05)"
              >
                <ListboxOption
                  class="cursor-pointer py-2 px-4 text-sm leading-5 hover:bg-netral-200"
                  v-for="template in templateType"
                  :key="template.id"
                  :value="template"
                  :disabled="template.unavailable"
                >
                  {{ template.name }}
                </ListboxOption>
              </ListboxOptions>
            </Listbox>
          </div>

          <!-- Recipient Type -->
          <div class="Recipient-Type relative z-0">
            <div class="Heading mb-3 space-y-0.5">
              <h3 class="Heading-H3 mb-0.5 text-base font-semibold leading-6">
                Mandatory CSV Column
              </h3>
              <p class="Text text-sm leading-5 text-[#515966]">
                These are mandatory column you need on your csv.
              </p>
            </div>

            <div class="relative">
              <input
                type="text"
                placeholder="Phone"
                style="box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.05)"
                class="Select-Option flex w-full items-center justify-between rounded-lg border border-netral-300 px-4 py-3"
              />
              <QuestionMarkCircleIcon
                class="absolute top-1/2 right-3.5 h-6 w-6 -translate-y-1/2 stroke-netral-800 stroke-[1.5px]"
              />
            </div>
          </div>

          <div class="flex w-full justify-end">
            <button
              @click="nextStepRef"
              class="rounded-lg bg-primary-main py-[13px] px-4 text-sm font-semibold leading-5 text-white"
            >
              Continue
            </button>
          </div>
        </div>

        <!-- Step-Content: 3 -->
        <div
          v-if="activeStepRef == 2"
          class="Step-Content w-full space-y-8 px-4"
        >
          <!-- Sender -->
          <div class="Sender-Type relative z-20">
            <div class="Heading mb-3 space-y-0.5">
              <h3 class="Heading-H3 mb-0.5 text-base font-semibold leading-6">
                Send or Schedule
              </h3>
              <p class="Text text-sm leading-5 text-[#515966]">
                Choose when you want to send broadcast message.
              </p>
            </div>

            <button
              class="rounded-lg border border-netral-300 bg-white py-[13px] px-4 text-sm font-medium leading-5 text-netral-900"
            >
              Now
            </button>
          </div>

          <div class="flex w-full justify-end">
            <button
              @click="nextStepRef"
              class="rounded-lg bg-primary-main py-[13px] px-4 text-sm font-semibold leading-5 text-white"
            >
              Continue
            </button>
          </div>
        </div>

        <!-- Step-Content: 4 -->
        <div
          v-if="activeStepRef == 3"
          class="Step-Content w-full space-y-8 px-4"
        >
          <!-- Sender -->
          <div class="Sender-Type relative z-20">
            <div class="Heading mb-5 space-y-0.5">
              <h3 class="Heading-H3 mb-0.5 text-base font-semibold leading-6">
                Confirmation
              </h3>
              <p class="Text text-sm leading-5 text-[#515966]">
                This is the last step. Maybe some checking would help before you
                continue. If there's any change, feel free to back to change it.
              </p>
            </div>
          </div>

          <div
            class="Confirmation-Detail min-h-[358px] rounded-lg border border-netral-300 p-3.5"
          >
            <div
              class="flex items-center justify-between border-b border-netral-300 py-4 first:pt-0 last:border-none last:pb-0"
            >
              <h5 class="text-sm leading-5 text-netral-800">Channel</h5>
              <p class="text-sm font-medium leading-5 text-netral-900">
                WhatsApp
              </p>
            </div>

            <div
              class="flex items-center justify-between border-b border-netral-300 py-4 first:pt-0 last:border-none last:pb-0"
            >
              <h5 class="text-sm leading-5 text-netral-800">Template Name</h5>
              <p class="text-sm font-medium leading-5 text-netral-900">
                test_template
              </p>
            </div>

            <div
              class="flex items-center justify-between border-b border-netral-300 py-4 first:pt-0 last:border-none last:pb-0"
            >
              <h5 class="text-sm leading-5 text-netral-800">Recipient</h5>
              <p class="text-sm font-medium leading-5 text-netral-900">0</p>
            </div>

            <div
              class="flex items-center justify-between border-b border-netral-300 py-4 first:pt-0 last:border-none last:pb-0"
            >
              <h5 class="text-sm leading-5 text-netral-800">Send Time</h5>
              <p class="text-sm font-medium leading-5 text-netral-900">Now</p>
            </div>

            <div
              class="flex items-center justify-between border-b border-netral-300 py-4 first:pt-0 last:border-none last:pb-0"
            >
              <h5 class="text-sm leading-5 text-netral-800">Balance</h5>
              <p class="text-sm font-medium leading-5 text-netral-900">
                Rp. 495,050
              </p>
            </div>

            <div
              class="flex items-center justify-between border-b border-netral-300 py-4 first:pt-0 last:border-none last:pb-0"
            >
              <h5 class="text-sm leading-5 text-netral-800">
                Free WhatsApp Quota
              </h5>
              <p class="text-sm font-medium leading-5 text-netral-900">
                0 conversation(s)
              </p>
            </div>

            <div
              class="flex items-center justify-between border-b border-netral-300 py-4 first:pt-0 last:border-none last:pb-0"
            >
              <h5 class="text-sm leading-5 text-netral-800">Estimated Cost</h5>
              <p class="text-sm font-medium leading-5 text-netral-900">Rp. 0</p>
            </div>
          </div>

          <div class="flex w-full justify-end">
            <button
              @click="nextStepRef"
              class="rounded-lg bg-primary-main py-[13px] px-4 text-sm font-semibold leading-5 text-white"
            >
              Finish
            </button>
          </div>
        </div>
      </div>

      <div class="Notification-Right col-span-3 rounded-3xl bg-white p-4">
        <h3 class="Heading-H3 mb-4 text-base font-semibold leading-6">
          Preview
        </h3>

        <div class="relative h-[560px] w-full rounded-lg">
          <!-- Chat Preview -->
          <div class="Chat-Preview relative z-10 flex gap-4 p-4">
            <img
              class="Photo h-10 w-10 object-cover"
              src="/topbar-user-photo.png"
              alt="User Photo"
            />

            <div
              class="Text w-72 rounded-lg bg-white px-4 py-3 text-sm leading-5"
            >
              <p>Hai,</p>
              <br />
              <p>Selamat datang di akun resmi WhatsApp resmi Zeal Music.</p>
            </div>
          </div>

          <!-- Background -->
          <img
            class="absolute inset-0 z-0 h-full w-full rounded-lg object-cover"
            src="/whatsapp-background.png"
            alt="Whatsapp Background"
          />
        </div>
      </div>
    </div>
  </Layout>
</template>
