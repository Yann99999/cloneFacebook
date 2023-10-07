const Form = () => {
  return (
    <div className="md:396px md:place-self-end">
        <div class="p-4 md:border md:shadow-xl rounded-md bg-white">
            <form action="" class="flex flex-col">
              <input type="text" placeholder="Email ou telefone" class="flex-1 mb-2 md:mb-3 p-3 rounded md:rounded-md border border-gray-400 bg-gray-200 md:bg-white text-sm md:text-base placeholder-gray-600 md:placeholder-gray-500"/>
              <input type="password" placeholder="Senha" class="flex-1 mb-3 p-3 rounded md:rounded-md border border-gray-400 bg-gray-200 md:bg-white text-sm md:text-base placeholder-gray-600 md:placeholder-gray-500"/>
              <input type="submit" value="Entrar" class="flex-1 mb-3 py-2 px-3 rounded-md bg-main-blue hover:bg-main-blue-hover font-semibold text-white text-xl"/>
            </form>
            <div class="flex flex-col divide-y divide-gray-400 text-center mt-2 md:mt-0">
              <div class="pb-4 order-2 md:order-1">
                <a href="" class="text-blue-600 hover:underline">Esqueceu a senha?</a>
              </div>
              <div class="pb-6 pt-8 order-1 md:order-2">
                <a href="#" class="py-3 px-4 bg-main-green hover:bg-main-green-hover text-white text-md md:text-lg font-bold rounded">Criar nova conta</a>
              </div>
            </div>
          </div>
          <div class="hidden md:block text-sm mt-5 text-center">
            <p><a href="#" class="font-bold">Criar uma Página</a> para uma celebridade, banda ou empresa.</p>
          </div>

    </div>
  )
}

export default Form