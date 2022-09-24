<script>
  import { user } from '../store.js'
  import { goto } from '$app/navigation'
  import { onMount } from 'svelte'

  onMount(() => {
    if (!user.isAuth) {
      goto('/login')
    }
  })
</script>

<div class="d-flex align-items-center justify-content-center h-75">
  <div class="text-center">
    Bienvenido, puedes empezar eligiendo una opción del menú
  </div>
</div>
