<template>
  <div class="overflow-auto">
    <div style="max-width: 320px" class="mx-5">
      <h3 class="text-muted mt-2">Вся информация о нас</h3>
      <hr />
      <nav style="min-width: 350px">
        <NuxtLink to="/about/clients" class="h4">Наши клиенты</NuxtLink>
        <hr />
        <NuxtLink to="/about/partners" class="h4">Наши партнёры</NuxtLink>
        <hr />
        <NuxtLink to="/about/faq" class="h4">Вопрос/Ответ</NuxtLink>
        <hr />
        <NuxtLink to="/about/contacts" class="h4">Контакты</NuxtLink>
        <hr />
        <NuxtLink to="/about/documents" class="h4">Документы</NuxtLink>
        <hr />
      </nav>
    </div>
    <NuxtChild />
  </div>
</template>

<script>
export default {
  layout: 'about',
}
</script>
