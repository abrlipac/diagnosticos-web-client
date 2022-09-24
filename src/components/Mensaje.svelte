<script>
    let mensaje = {
        esPregunta: false,
        contenido: '',
        opciones: [],
        opcionElegida: '',
    }

    function elegirOpcion() {
        mensaje.opcionElegida = opcion;

    }
</script>

<div class="container mb-3 d-flex flex-row {!mensaje.esPregunta ? "justify-content-end" : ""}">
    {#if mensaje.esPregunta}
    <div class="chatbot__boticon rounded-circle pr-2">
        <img src="../../img/bot.svg" class="w-100 h-100" alt="logo bot" />
    </div>
    {/if}
    <div>
        <div class="chatbot__message btn text-wrap">
            {mensaje.contenido}
        </div>
        {#if mensaje.opciones != null}
            <div class="chatbot__options d-flex pt-1">
                {#each mensaje.opciones as opcion}
                    <button class="btn btn-outline-secondary" on:click={elegirOpcion}>
                        {opcion}
                    </button>
                {/each}
            </div>
        {/if}
    </div>
</div>