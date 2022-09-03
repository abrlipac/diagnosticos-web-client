<script>
  import axios from 'axios'

  let user = {
    username: '',
    password: '',
  }

  function iniciarSesion() {
    var config = {
      method: 'post',
      url: 'http://localhost:10003/identity/auth',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        
      },
      }
      data: JSON.stringify(user),
    }

    axios
      .post(config)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }
</script>

<h1 class="text-center mt-4">Iniciar sesión</h1>
<h4 class="text-center">Ingrese sus datos para ingresar al sistema</h4>
<hr class="col-md-4 mx-auto" />

<div class="row justify-content-center">
  <div class="col-md-4">
    <form on:submit|preventDefault={iniciarSesion}>
      <div class="text-danger" />

      <div class="form-floating mb-3">
        <input
          bind:value={user.username}
          class="form-control"
          id="username"
          placeholder="name@example.com" />
        <label for="username" class="form-label">Usuario</label>
        <span class="text-danger" />
      </div>

      <div class="form-floating mb-3">
        <input
          bind:value={user.password}
          id="password"
          class="form-control"
          type="password"
          placeholder="***" />
        <label for="password" class="form-label">Contraseña</label>
        <span class="text-danger" />
      </div>

      <input
        class="btn btn-primary w-100 mb-2"
        type="submit"
        name="submit"
        value="Iniciar sesión" />

      <div class="text-center">
        <a href="/signup" class="btn btn-outline-secondary w-100">
          Registrarse
        </a>
      </div>
    </form>
  </div>
</div>
