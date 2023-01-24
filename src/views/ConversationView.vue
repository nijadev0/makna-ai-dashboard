<script setup>
import { ref } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

import Layout from '@/components/templates/Layout.vue'
import ChatItem from '@/components/moleculs/conversations/ChatItem.vue'

import {
  SearchNormalIcon,
  FilterIcon,
  CloseCircleIcon,
  InfoCircleIcon,
  Bag2Icon,
  LinkIcon,
  SendIcon,
  CloseXIcon,
  TagRightIcon,
  ArrowDownIcon,
  EmojiHappyIcon
} from '@/assets/icons'

/**
 * Empty/Loaded Chat
 */
const chatRef = ref(false)

function openChat() {
  chatRef.value = true
}

/**
 * Show/Hide Contact Details
 */
const contactDetailRef = ref(false)

function openDetail() {
  contactDetailRef.value = true
}

function closeDetail() {
  contactDetailRef.value = false
}
</script>

<template>
  <Layout title="Conversations">
    <div
      class="Conversation flex h-[85vh] w-full items-start overflow-hidden rounded-3xl bg-white p-4"
    >
      <!-- Grid: Left -->
      <section
        class="Conversation_Grid-Left h-[85vh] w-96 overflow-hidden border-r border-netral-300"
      >
        <div class="Actions mb-4 flex items-center justify-between gap-2 pr-4">
          <div class="Search relative">
            <!-- Icon -->
            <SearchNormalIcon
              class="absolute top-1/2 left-4 z-10 h-6 w-6 -translate-y-1/2 stroke-[1.5px] text-netral-800"
            />
            <!-- Input -->
            <input
              type="text"
              placeholder="Search here..."
              class="Input relative z-0 w-full rounded-full bg-[#F4F5F6] py-2.5 pr-4 pl-14 text-base leading-5 outline-none placeholder:text-[#6F757A]"
            />
          </div>

          <div
            class="Filter flex h-full min-h-[40px] w-full max-w-[40px] items-center justify-center rounded-full bg-[#F4F5F6]"
          >
            <FilterIcon class="h-6 w-6 stroke-[1.5px] text-netral-800" />
          </div>
        </div>

        <div
          class="Tab-List flex justify-between border-b border-netral-300 pr-4 pb-6"
        >
          <button
            class="Tab flex items-center gap-2 rounded-xl bg-[#FF3366]/10 px-2.5 py-3 text-sm font-semibold leading-none text-[#FF3366] transition-colors duration-500 ease-in-out hover:bg-[#FF3366]/25"
          >
            <span>Open</span>
            <span>9</span>
          </button>

          <button
            class="Tab flex items-center gap-2 rounded-xl bg-transparent px-2.5 py-3 text-sm font-semibold leading-none transition-colors duration-500 ease-in-out hover:bg-netral-300/50"
          >
            <span>Handling</span>
            <span>9</span>
          </button>

          <button
            class="Tab flex items-center gap-2 rounded-xl bg-transparent px-2.5 py-3 text-sm font-semibold leading-none transition-colors duration-500 ease-in-out hover:bg-netral-300/50"
          >
            <span>Resolved</span>
            <span>12</span>
          </button>
        </div>

        <div
          id="Chat-List"
          class="Chat-List relative mt-6 h-full overflow-y-auto"
        >
          <div @click="openChat" class="flex flex-col items-start gap-6 pr-4">
            <ChatItem
              v-for="item in [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
              ]"
            />
          </div>
        </div>
      </section>

      <!-- Grid: Right -->
      <section
        class="Conversation_Grid-Right grid h-full w-full grid-cols-7 overflow-hidden"
      >
        <div
          class="Chat-Content relative h-full w-full pl-4"
          :class="contactDetailRef ? 'col-span-5 pr-4' : 'col-span-7'"
        >
          <!-- Chat: Empty -->
          <div
            v-if="!chatRef"
            class="Empty-Chat flex h-full w-full flex-col items-center justify-center rounded-2xl bg-netral-200"
          >
            <EmojiHappyIcon
              class="EmojiHappy-Icon mb-4 h-20 w-20 stroke-[#3B4453] stroke-[1.5px]"
            />

            <h5 class="text-base leading-5 text-[#101623]">
              Select chat to start messaging
            </h5>
          </div>

          <!-- Chat: Opened -->
          <div v-if="chatRef" class="h-full">
            <!-- User Profile -->
            <section
              class="User relative flex w-full items-center justify-between"
            >
              <div class="flex items-center gap-3">
                <img
                  class="Photo h-10 w-10 object-cover"
                  src="/topbar-user-photo.png"
                  alt="Topbar User Photo"
                />

                <!-- Text -->
                <div class="Text-Content space-y-2">
                  <h5
                    class="Name text-left text-sm font-semibold tracking-[0.01rem] text-[#101623]"
                  >
                    #122212
                  </h5>
                  <p
                    class="text-[13px] leading-5 tracking-[0.01rem] text-[#3B4453]"
                  >
                    Supriyadi, 628812345678
                  </p>
                </div>
              </div>

              <div class="Actions flex gap-4 text-[#292D32]">
                <CloseCircleIcon class="h-6 w-6 stroke-[1.5px]" />

                <button @click="openDetail">
                  <InfoCircleIcon class="h-6 w-6 stroke-[1.5px]" />
                </button>
              </div>
            </section>

            <!-- Chat: Incoming -->
            <section
              class="Chat-Text-Wrap my-4 flex h-[40rem] w-full flex-col gap-6 overflow-y-auto rounded-2xl bg-[#F4F5F6] p-4"
            >
              <div
                class="Chat-Content-Item Incoming flex w-80 items-start gap-4"
              >
                <img
                  class="Avatar h-10 w-10 rounded-full object-cover"
                  src="/topbar-user-photo.png"
                />

                <div class="Wrap flex flex-col items-start gap-1.5">
                  <div
                    class="Background w-fit rounded-[10px] rounded-tl-none bg-white px-4 py-3"
                  >
                    <p class="Text text-sm leading-5">Hello, how are you?</p>
                  </div>
                  <span
                    class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
                  >
                    23 Nov 2022 08:00
                  </span>
                </div>
              </div>

              <!-- Chat: Sender -->
              <div class="Sender-Wrapper flex w-full items-end justify-end">
                <div
                  class="Chat-Content-Item Sender flex w-80 items-start justify-end gap-4"
                >
                  <div class="Wrap flex flex-col items-end gap-1.5">
                    <div
                      class="Background w-fit rounded-[10px] rounded-tr-none bg-accent-surface/25 px-4 py-3"
                    >
                      <p class="Text text-sm leading-5">
                        Hello, Supriyadi! welcome to the Zeal Music’s WhatsApp!
                        Let me know what can I help you
                      </p>
                    </div>
                    <span
                      class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
                    >
                      23 Nov 2022 08:00
                    </span>
                  </div>

                  <img
                    class="Avatar h-10 w-10 rounded-full object-cover"
                    src="/topbar-user-photo.png"
                  />
                </div>
              </div>

              <!-- Chat: Incoming -->
              <div
                class="Chat-Content-Item Incoming flex w-80 items-start gap-4"
              >
                <img
                  class="Avatar h-10 w-10 rounded-full object-cover"
                  src="/topbar-user-photo.png"
                />

                <div class="Wrap flex flex-col items-start gap-1.5">
                  <div
                    class="Background w-fit rounded-[10px] rounded-tl-none bg-white px-4 py-3"
                  >
                    <p class="Text text-sm leading-5">
                      Nothing, I just want to talk with you hehe...
                    </p>
                  </div>
                  <span
                    class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
                  >
                    23 Nov 2022 08:00
                  </span>
                </div>
              </div>

              <!-- Chat: Sender -->
              <div class="Sender-Wrapper flex w-full items-end justify-end">
                <div
                  class="Chat-Content-Item Sender flex w-80 items-start justify-end gap-4"
                >
                  <div class="Wrap flex flex-col items-end gap-1.5">
                    <div
                      class="Background w-fit rounded-[10px] rounded-tr-none bg-accent-surface/25 px-4 py-3"
                    >
                      <p class="Text text-sm leading-5">
                        Oh... ok. What do you want to talk about?
                      </p>
                    </div>
                    <span
                      class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
                    >
                      23 Nov 2022 08:00
                    </span>
                  </div>

                  <img
                    class="Avatar h-10 w-10 rounded-full object-cover"
                    src="/topbar-user-photo.png"
                  />
                </div>
              </div>

              <!-- Chat: Incoming -->
              <div
                class="Chat-Content-Item Incoming flex w-80 items-start gap-4"
              >
                <img
                  class="Avatar h-10 w-10 rounded-full object-cover"
                  src="/topbar-user-photo.png"
                />

                <div class="Wrap flex flex-col items-start gap-1.5">
                  <div
                    class="Background w-fit rounded-[10px] rounded-tl-none bg-white px-4 py-3"
                  >
                    <p class="Text text-sm leading-5">
                      I just bought a musical book sometime ago, but I lost it.
                      What should I do? Should I to buy again at Zeal Music, or
                      just try to find it?
                    </p>
                  </div>
                  <span
                    class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
                  >
                    23 Nov 2022 08:00
                  </span>
                </div>
              </div>

              <!-- Chat: Sender -->
              <div class="Sender-Wrapper flex w-full items-end justify-end">
                <div
                  class="Chat-Content-Item Sender flex w-80 items-start justify-end gap-4"
                >
                  <div class="Wrap flex flex-col items-end gap-1.5">
                    <div
                      class="Background w-fit rounded-[10px] rounded-tr-none bg-accent-surface/25 px-4 py-3"
                    >
                      <p class="Text text-sm leading-5">
                        Hahahaha. How so? I think it’s better if you find it
                        first. If you couldn’t find it, better if you ask police
                        to help you.
                      </p>
                    </div>
                    <span
                      class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
                    >
                      23 Nov 2022 08:00
                    </span>
                  </div>

                  <img
                    class="Avatar h-10 w-10 rounded-full object-cover"
                    src="/topbar-user-photo.png"
                  />
                </div>
              </div>
            </section>

            <!-- Actions -->
            <section
              class="Actions sticky bottom-0 flex w-full items-center gap-4 px-4"
            >
              <!-- Attach -->
              <div class="Attach flex gap-3 text-[#3B4453]">
                <Bag2Icon class="h-6 w-6 stroke-[1.5px]" />
                <LinkIcon class="h-6 w-6 stroke-[1.5px]" />
              </div>

              <!-- Send -->
              <form class="Send flex w-full gap-2">
                <input
                  class="Input w-full rounded-full bg-[#F4F5F6] px-4 py-2 text-sm leading-6 outline-none"
                  type="text"
                  placeholder="Type a message"
                />
                <button
                  type="submit"
                  class="Button flex h-10 w-full max-w-[40px] items-center justify-center rounded-full bg-[#192954]"
                >
                  <SendIcon class="h-6 w-6 stroke-[1.5px] text-white" />
                </button>
              </form>
            </section>
          </div>
        </div>

        <div
          class="Contact-Detail flex h-full w-full flex-col items-center overflow-y-auto border-l border-netral-300 pl-4"
          :class="contactDetailRef ? 'col-span-2' : 'hidden'"
        >
          <!-- Contact Detail -->
          <div
            class="Detail mb-10 flex w-full items-center justify-between text-[#212329]"
          >
            <h3 class="text-base font-semibold leading-5">Contact Details</h3>

            <button @click="closeDetail">
              <CloseXIcon class="CloseX-Icon h-6 w-6 stroke-[1.5px]" />
            </button>
          </div>

          <!-- User Profile -->
          <div
            class="Profile mb-6 flex w-full flex-col items-center justify-center"
          >
            <img
              class="Photo mb-4 h-24 w-24 rounded-full object-cover"
              src="/topbar-user-photo.png"
              alt="Topbar User Photo"
            />
            <h5 class="Name mb-1 text-xl font-semibold leading-7">Supriyadi</h5>
            <p class="Number leading-7 text-[#3B4453]">+628812345678</p>
          </div>

          <!-- Label -->
          <div
            class="Label-Wrap mb-10 flex w-56 flex-row flex-wrap justify-center gap-2"
          >
            <div
              class="Label flex w-fit items-center gap-2 rounded-full border border-netral-300 py-1.5 px-3"
            >
              <TagRightIcon
                class="CloseX-Icon h-4 w-4 fill-[#FF5630] stroke-none"
              />
              <span
                class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
              >
                pengiriman
              </span>
            </div>

            <div
              class="Label flex w-fit items-center gap-2 rounded-full border border-netral-300 py-1.5 px-3"
            >
              <TagRightIcon
                class="CloseX-Icon h-4 w-4 fill-[#2BBE92] stroke-none"
              />
              <span
                class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
              >
                order
              </span>
            </div>

            <div
              class="Label flex w-fit items-center gap-2 rounded-full border border-netral-300 py-1.5 px-3"
            >
              <TagRightIcon
                class="CloseX-Icon h-4 w-4 fill-[#1D9F22] stroke-none"
              />
              <span
                class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
              >
                face-care
              </span>
            </div>

            <div
              class="Label flex w-fit items-center gap-2 rounded-full border border-netral-300 py-1.5 px-3"
            >
              <TagRightIcon
                class="CloseX-Icon h-4 w-4 fill-[#14A3AC] stroke-none"
              />
              <span
                class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
              >
                Demo
              </span>
            </div>

            <div
              class="Label flex w-fit items-center gap-2 rounded-full border border-netral-300 py-1.5 px-3"
            >
              <TagRightIcon
                class="CloseX-Icon h-4 w-4 fill-[#B847CA] stroke-none"
              />
              <span
                class="text-xs font-medium lowercase leading-4 text-[#3B4453]"
              >
                Delivery
              </span>
            </div>
          </div>

          <!-- Accordion -->
          <div class="Accordion-Wrap w-full space-y-2">
            <Disclosure
              as="div"
              v-slot="{ open }"
              class="Accordion w-full rounded-2xl bg-netral-200 p-4 text-[#212329]"
            >
              <DisclosureButton
                class="Heading flex w-full items-center justify-between"
              >
                <h5 class="text-sm font-semibold leading-6">
                  Personal Informations
                </h5>

                <ArrowDownIcon
                  class="h-4 w-4 stroke-[1.5px]"
                  :class="open && 'rotate-180 transform'"
                />
              </DisclosureButton>

              <DisclosurePanel
                class="Panel flex w-full items-center justify-between pt-4 text-[13px] font-medium leading-6"
              >
                <h5 class="text-netral-900">Email</h5>
                <p class="text-netral-800">justan.example@gmail.com</p>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure
              as="div"
              v-slot="{ open }"
              class="Accordion w-full rounded-2xl bg-netral-200 p-4 text-[#212329]"
            >
              <DisclosureButton
                class="Heading flex w-full items-center justify-between"
              >
                <h5 class="text-sm font-semibold leading-6">Platform Used</h5>

                <ArrowDownIcon
                  class="h-4 w-4 stroke-[1.5px]"
                  :class="open && 'rotate-180 transform'"
                />
              </DisclosureButton>

              <DisclosurePanel
                class="Panel flex w-full items-center justify-between pt-4 text-[13px] font-medium leading-6"
              >
                <h5 class="text-netral-900">Email</h5>
                <p class="text-netral-800">justan.example@gmail.com</p>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure
              as="div"
              v-slot="{ open }"
              class="Accordion w-full rounded-2xl bg-netral-200 p-4 text-[#212329]"
            >
              <DisclosureButton
                class="Heading flex w-full items-center justify-between"
              >
                <h5 class="text-sm font-semibold leading-6">
                  Conversation Actions
                </h5>

                <ArrowDownIcon
                  class="h-4 w-4 stroke-[1.5px]"
                  :class="open && 'rotate-180 transform'"
                />
              </DisclosureButton>

              <DisclosurePanel
                class="Panel flex w-full items-center justify-between pt-4 text-[13px] font-medium leading-6"
              >
                <h5 class="text-netral-900">Email</h5>
                <p class="text-netral-800">justan.example@gmail.com</p>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure
              as="div"
              v-slot="{ open }"
              class="Accordion w-full rounded-2xl bg-netral-200 p-4 text-[#212329]"
            >
              <DisclosureButton
                class="Heading flex w-full items-center justify-between"
              >
                <h5 class="text-sm font-semibold leading-6">Transactions</h5>

                <ArrowDownIcon
                  class="h-4 w-4 stroke-[1.5px]"
                  :class="open && 'rotate-180 transform'"
                />
              </DisclosureButton>

              <DisclosurePanel
                class="Panel flex w-full items-center justify-between pt-4 text-[13px] font-medium leading-6"
              >
                <h5 class="text-netral-900">Email</h5>
                <p class="text-netral-800">justan.example@gmail.com</p>
              </DisclosurePanel>
            </Disclosure>

            <Disclosure
              as="div"
              v-slot="{ open }"
              class="Accordion w-full rounded-2xl bg-netral-200 p-4 text-[#212329]"
            >
              <DisclosureButton
                class="Heading flex w-full items-center justify-between"
              >
                <h5 class="text-sm font-semibold leading-6">
                  Previous Conversations
                </h5>

                <ArrowDownIcon
                  class="h-4 w-4 stroke-[1.5px]"
                  :class="open && 'rotate-180 transform'"
                />
              </DisclosureButton>

              <DisclosurePanel
                class="Panel flex w-full items-center justify-between pt-4 text-[13px] font-medium leading-6"
              >
                <h5 class="text-netral-900">Email</h5>
                <p class="text-netral-800">justan.example@gmail.com</p>
              </DisclosurePanel>
            </Disclosure>
          </div>
        </div>
      </section>
    </div>
  </Layout>
</template>
