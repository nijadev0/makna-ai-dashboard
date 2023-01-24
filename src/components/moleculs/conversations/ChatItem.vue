<template>
  <button
    class="Chat relative flex w-full items-center justify-between border-b border-transparent"
  >
    <img
      class="Photo h-10 w-10 object-cover"
      src="/topbar-user-photo.png"
      alt="Topbar User Photo"
    />

    <!-- Text -->
    <div class="Text-Content ml-3 w-full space-y-2">
      <!-- Top -->
      <div class="Top flex items-center justify-between">
        <h5
          class="Name text-sm font-semibold tracking-[0.01rem] text-[#101623]"
        >
          #122212
        </h5>
        <p class="Date text-[13px] font-medium text-[#A0A8B0]">12 days ago</p>
      </div>

      <div class="Bottom flex items-center justify-between">
        <p
          class="w-[186px] text-[13px] leading-5 tracking-[0.01rem] text-[#3B4453]"
        >
          {{
            'Does payment on Uno Music could uses a home credit or something like that? Paypal for example?'.substring(
              0,
              54
            ) + '...'
          }}
        </p>

        <div
          class="flex h-6 w-6 items-center justify-center rounded-full bg-[#8DC9EE] text-xs font-medium text-[#101623]"
        >
          4
        </div>
      </div>
    </div>
  </button>
</template>
