<script>
  import Mensaje from './Mensaje.svelte'
  import { onMount } from 'svelte'

  let iter = -1
  let preguntasCount = 1
  let noHayMasPreguntas = false
  let datoIngresado = ''

  const preguntasRespuestas = []
  const mensajes = []
  const respuestas = []

  onMount(async () => {})

  function agregarRespuesta(event) {
    respuestas.push('')
    alert(respuestas)
  }
  function enterSubmit() {}
</script>

<div
  class="chatbot m-auto h-100 rounded overflow-hidden d-flex flex-column mt-3">
  <div class="chatbot__header p-3 text-white">
    <h2 class="h3 text-white m-0">Chatbot</h2>
  </div>
  <div class="chatbot__messages py-2 flex-grow-1" style="overflow-y: scroll">
    <Mensaje
      on:message={agregarRespuesta}
      mensaje={{ contenido: 'Bienvenido!', esPregunta: true }} />
    {#each mensajes as mensaje}
      {#if mensaje.opciones.length > 0}
        <Mensaje {mensaje} alElegirOpcion="ElegirOpcionHandler" />
      {:else}
        <Mensaje {mensaje} />
      {/if}
      {#if noHayMasPreguntas}
        <Mensaje
          mensaje={{
            contenido: 'Muchas gracias por responder!',
            esPregunta: true,
          }} />
      {/if}
    {/each}
  </div>
  <div class="chatbot__footer d-flex flex-row p-2 align-items-center">
    <input
      class="form-control"
      placeholder="Ingrese un dato"
      bind:value={datoIngresado}
      on:keydown={enterSubmit} />
    <button
      class="chatbot__send btn btn-outline-secondary rounded-circle ms-2 d-flex align-items-center"
      on:click={clickSubmit}>
      <img src="img/send.png" class="w-100" alt="logo de enviar" />
    </button>
  </div>
</div>

{#if noHayMasPreguntas}
  <input
    type="button"
    class="btn btn-primary w-25 mx-auto"
    value="Ver resultados"
    on:click={guardarDiagnostico} />
{/if}
