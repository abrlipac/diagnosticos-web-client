<script>
  let user = {
    name: 'Abraham',
    profile: 'img/user.png',
    isAuth: false,
    role: 'admin',
  }

  const opcionesPaciente = [
    {
      Diagnósticos: [
        { 'Generar diagnóstico': '/diagnosticos/nuevo' },
        { 'Editar síntomas de diagnóstico': '/diagnosticos/editar' },
        { 'Visualizar diagnósticos': '/diagnosticos' },
      ],
    },
    {
      Reportes: [{ 'Ver reporte de salud': '/reportes/paciente' }],
    },
  ]

  const opcionesAdmin = [
    {
      Diagnósticos: [{ 'Visualizar diagnósticos': '/diagnosticos' }],
    },
    {
      Pacientes: [{ 'Visualizar pacientes': '/pacientes' }],
    },
    {
      Reportes: [{ 'Ver reporte de salud general': '/reportes/general' }],
    },
  ]

  let opciones =
    user.role === 'paciente'
      ? opcionesPaciente
      : user.role === 'admin'
      ? opcionesAdmin
      : []
</script>

<nav class="navbar navbar-expand-lg border-bottom">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="/img/logo1.png" class="logo" alt="Logo de Clínica La Luz" />
      Diagnósticos
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>
    <div
      class="collapse navbar-collapse justify-content-between"
      id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        {#if user.isAuth}
          {#each opciones as opcion}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href={'#'}
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                {Object.keys(opcion)}
              </a>
              <ul class="dropdown-menu">
                {#each Object.values(opcion)[0] as subOpcion}
                  <li>
                    <a class="dropdown-item" href={Object.values(subOpcion)[0]}>
                      {Object.keys(subOpcion)}
                    </a>
                  </li>
                {/each}
              </ul>
            </li>
          {/each}
        {/if}
      </ul>

      {#if user.isAuth}
        <ul class="list-unstyled ms-auto mb-2 mb-lg-0">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href={'#'}
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false">
              <img src={user.profile} class="logo" alt="foto de usuario" />
              <b>Bienvenido</b>
              {user.name}
              <span class="caret" />
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                <a class="dropdown-item" href="/cuenta/perfil">
                  Perfil de usuario
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="/cuenta/2fa">Agregar 2FA</a>
              </li>
              <li>
                <a class="dropdown-item" href="/cuenta/logout">Cerrar sesión</a>
              </li>
            </ul>
          </li>
        </ul>
      {:else}
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item mx-1">
            <a class="nav-link text-primary" href="/login">Iniciar sesión</a>
          </li>
          <li class="nav-item mx-1">
            <a class="nav-link text-secondary" href="/signup">Registrarse</a>
          </li>
        </ul>
      {/if}
    </div>
  </div>
</nav>

<style>
  .logo {
    height: 1.4rem;
  }
</style>
