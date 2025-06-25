<!-- components/ChatbaseBot.vue -->
<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (!window.chatbase || window.chatbase("getState") !== "initialized") {
    window.chatbase = (...args) => {
      if (!window.chatbase.q) window.chatbase.q = []
      window.chatbase.q.push(args)
    }
    window.chatbase = new Proxy(window.chatbase, {
      get(target, prop) {
        if (prop === "q") return target.q
        return (...args) => target(prop, ...args)
      },
    })
    const script = document.createElement("script")
    script.src = "https://www.chatbase.co/embed.min.js"
    script.id = "crn23unhmrogik67gcv5lrs6l2gw9sfx" // ✅ Use your real Chatbase Bot ID here
    script.setAttribute("chatbotId", "crn23unhmrogik67gcv5lrs6l2gw9sfx") // ✅ Important: specify chatbotId too
    script.setAttribute("domain", "www.chatbase.co")
    document.body.appendChild(script)
  }
})
</script>